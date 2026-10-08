import { useCallback, useEffect, useRef, useState } from "react";
import {
  EDIT_NODES,
  FLOW,
  SUMMARY_FIELDS,
  WELCOME_CHIPS,
  getNode,
  type Category,
  type Chip,
  type Field,
  type FlowNode,
  type InputSpec,
} from "./flows";
import {
  askAssistant,
  postHandoff,
  type AssistantAction,
  type AssistantTurn,
  type TranscriptLine,
} from "./api";
import { localeOf, tr, type Lang } from "./i18n";

export type Mood = "idle" | "listening" | "thinking" | "talking" | "celebrate";

export interface ChatMessage {
  id: string;
  role: "bot" | "user";
  text: string;
  at: number;
  /** Rendered as the summary card instead of a bubble. */
  summary?: boolean;
  links?: FlowNode["links"];
  error?: boolean;
}

interface Persisted {
  messages: ChatMessage[];
  nodeId: string;
  collected: Partial<Record<Field, string>>;
  category: Category;
  issue: string;
  reference: string;
  aiHistory: AssistantTurn[];
  extraChips: Chip[];
  started: number;
  returnTo: string | null;
}

const STORAGE_KEY = "ucu-chat-v1";
const MAX_AI_TURNS = 12;
const MAX_TRANSCRIPT_LINES = 120;
const MAX_LINE_CHARS = 2000;

let counter = 0;
const newId = () => `${Date.now().toString(36)}-${(counter++).toString(36)}`;

/** Local calendar date as YYYY-MM-DD (never UTC: evenings in Detroit matter). */
export function isoDate(offsetDays: number): string {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

function fill(text: string, collected: Partial<Record<Field, string>>, reference: string) {
  const firstName = (collected.name || "").trim().split(/\s+/)[0] || "there";
  return text.replace(/\{firstName\}/g, firstName).replace(/\{reference\}/g, reference);
}

/** A node that only speaks and moves on; never a place to sit. */
function isTransit(node: FlowNode) {
  return !!node.next && !node.input && !(node.chips && node.chips.length) && node.kind !== "send";
}

function load(): Persisted | null {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const saved = JSON.parse(raw) as Partial<Persisted>;
    if (!Array.isArray(saved.messages) || !saved.nodeId || !FLOW[saved.nodeId]) return null;
    if (!saved.category || !(saved.category in SUMMARY_FIELDS)) return null;
    if (!saved.collected || typeof saved.collected !== "object") return null;
    let nodeId = saved.nodeId;
    // Never resume mid-send; fall back to the summary it came from.
    if (getNode(nodeId).kind === "send") nodeId = nodeId.replace("_send", "_summary");
    return {
      messages: saved.messages,
      nodeId,
      collected: saved.collected,
      category: saved.category,
      issue: saved.issue || "",
      reference: saved.reference || "",
      aiHistory: Array.isArray(saved.aiHistory) ? saved.aiHistory : [],
      extraChips: Array.isArray(saved.extraChips) ? saved.extraChips : [],
      started: typeof saved.started === "number" ? saved.started : Date.now(),
      returnTo: typeof saved.returnTo === "string" ? saved.returnTo : null,
    };
  } catch {
    return null;
  }
}

function save(state: Persisted) {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // private mode or full storage: the chat just won't survive navigation
  }
}

/** Roughly how long Juice "types" before a bubble appears. */
function typingDelay(text: string) {
  return Math.min(350 + text.length * 9, 1100);
}

/** apiRequest throws Error("<status>: <body>"); pull a 4xx message out of it. */
function serverMessage(error: unknown): { status: number; message: string | null } {
  const raw = error instanceof Error ? error.message : "";
  const sep = raw.indexOf(":");
  const status = Number(raw.slice(0, sep));
  if (status >= 400 && status < 500) {
    try {
      const parsed = JSON.parse(raw.slice(sep + 1).trim());
      if (typeof parsed?.message === "string") return { status, message: parsed.message };
    } catch {
      // not JSON
    }
  }
  return { status: Number.isFinite(status) ? status : 0, message: null };
}

export function useChat(lang: Lang) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [nodeId, setNodeId] = useState("welcome");
  const [collected, setCollected] = useState<Partial<Record<Field, string>>>({});
  const [category, setCategory] = useState<Category>("other");
  const [issue, setIssue] = useState("");
  const [reference, setReference] = useState("");
  const [aiHistory, setAiHistory] = useState<AssistantTurn[]>([]);
  /** Chips the assistant suggested after a typed answer. */
  const [extraChips, setExtraChips] = useState<Chip[]>([]);
  const [botTyping, setBotTyping] = useState(false);
  const [pending, setPending] = useState(false);
  const [celebrating, setCelebrating] = useState(false);
  const [inputError, setInputError] = useState<string | null>(null);
  const [started, setStarted] = useState(() => Date.now());
  /** Summary node to return to after an Edit, persisted with the chat. */
  const [returnTo, setReturnTo] = useState<string | null>(null);

  const timers = useRef<number[]>([]);
  const hydrated = useRef(false);
  /** Bumped on restart so in-flight requests from the old chat are ignored. */
  const generation = useRef(0);
  const returnToRef = useRef<string | null>(null);
  returnToRef.current = returnTo;

  // Latest values for use inside timeouts without stale closures.
  const latest = useRef({ collected, reference, category, issue, lang });
  latest.current = { collected, reference, category, issue, lang };
  const t = (text: string) => tr(latest.current.lang, text);

  const clearTimers = () => {
    timers.current.forEach((id) => window.clearTimeout(id));
    timers.current = [];
  };

  const later = (ms: number, fn: () => void) => {
    const id = window.setTimeout(fn, ms);
    timers.current.push(id);
    return id;
  };

  const pushBot = useCallback((text: string, extra: Partial<ChatMessage> = {}) => {
    setMessages((m) => [...m, { id: newId(), role: "bot", text, at: Date.now(), ...extra }]);
  }, []);

  const pushUser = useCallback((text: string) => {
    setMessages((m) => [...m, { id: newId(), role: "user", text, at: Date.now() }]);
  }, []);

  /**
   * Speak a node's bubbles one at a time, then land on it (or chain on to
   * `next` when the node only speaks). `skipped` means the previous node was
   * passed over because Juice already knew the answer, so the softer altSay
   * wording is used.
   */
  const enterNode = useCallback(
    (id: string, overrides?: { collected?: Partial<Record<Field, string>> }, skipped = false) => {
      const node = getNode(id);
      const col = overrides?.collected ?? latest.current.collected;
      const editing = returnToRef.current !== null;

      if (!editing && node.skipIf && col[node.skipIf] && node.next) {
        enterNode(node.next, overrides, true);
        return;
      }
      if (!editing && node.category) setCategory(node.category);
      if (!editing && node.issue) setIssue(node.issue);
      setExtraChips([]);
      setInputError(null);

      if (node.kind === "send") {
        setNodeId(id);
        return; // the send effect takes over
      }

      const lines = skipped && node.altSay ? node.altSay : node.say;
      const bubbles = lines.map((s) => fill(t(s), col, latest.current.reference));
      if (bubbles.length === 0) {
        setNodeId(id);
        if (node.next && !node.input) enterNode(node.next, overrides);
        return;
      }

      setBotTyping(true);
      let elapsed = 0;
      bubbles.forEach((text, i) => {
        elapsed += typingDelay(text);
        const isLast = i === bubbles.length - 1;
        later(elapsed, () => {
          pushBot(text, {
            links: isLast ? node.links : undefined,
            summary: isLast && node.kind === "summary" ? true : undefined,
          });
          if (isLast) {
            setBotTyping(false);
            setNodeId(id);
            if (node.kind === "happy" || node.kind === "sent") {
              setCelebrating(true);
              later(2600, () => setCelebrating(false));
            }
            if (node.next && !node.input) later(250, () => enterNode(node.next!, overrides));
          } else {
            setBotTyping(true);
          }
        });
      });
    },
    [pushBot],
  );

  // First mount: resume a conversation from this tab, or say hello.
  useEffect(() => {
    if (hydrated.current) return;
    hydrated.current = true;
    const saved = load();
    if (saved) {
      setMessages(saved.messages);
      setNodeId(saved.nodeId);
      setCollected(saved.collected);
      setCategory(saved.category);
      setIssue(saved.issue);
      setReference(saved.reference);
      setAiHistory(saved.aiHistory);
      setExtraChips(saved.extraChips);
      setStarted(saved.started);
      setReturnTo(saved.returnTo);
      latest.current = {
        ...latest.current,
        collected: saved.collected,
        reference: saved.reference,
        category: saved.category,
        issue: saved.issue,
      };
      returnToRef.current = saved.returnTo;
      // A reload that landed on a "just speaking" node: carry on to the question.
      const node = getNode(saved.nodeId);
      if (isTransit(node)) later(300, () => enterNode(node.next!, { collected: saved.collected }));
    } else {
      enterNode("welcome");
    }
    return clearTimers;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!hydrated.current || botTyping) return;
    save({ messages, nodeId, collected, category, issue, reference, aiHistory, extraChips, started, returnTo });
  }, [messages, nodeId, collected, category, issue, reference, aiHistory, extraChips, botTyping, started, returnTo]);

  // Send the handoff when we land on a send node.
  useEffect(() => {
    const node = FLOW[nodeId];
    if (!node || node.kind !== "send" || pending) return;
    const gen = generation.current;
    setPending(true);
    const transcript: TranscriptLine[] = messages
      .filter((m) => !m.summary)
      .slice(-MAX_TRANSCRIPT_LINES)
      .map((m) => ({ role: m.role, text: m.text.slice(0, MAX_LINE_CHARS), at: m.at }));
    const fields = { ...collected };
    if (fields.message) fields.message = fields.message.slice(0, MAX_LINE_CHARS);
    postHandoff({
      category,
      issue,
      fields,
      transcript,
      website: "",
      startedAt: started,
      lang: latest.current.lang,
    })
      .then(({ reference: ref }) => {
        if (gen !== generation.current) return;
        setReference(ref);
        latest.current.reference = ref;
        setPending(false);
        enterNode(node.next || "sent");
      })
      .catch((error: unknown) => {
        if (gen !== generation.current) return;
        setPending(false);
        const { status, message } = serverMessage(error);
        const text =
          status === 429
            ? t("Whoa, that's a lot of requests from this connection. Give it a few minutes and try again.")
            : message && latest.current.lang === "en"
              ? message
              : t("Hmm, that didn't go through. You can try again, or email support@uchargeup.com directly and we'll pick it up there.");
        pushBot(text, { error: true });
        setNodeId(nodeId.replace("_send", "_summary"));
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nodeId]);

  const restart = useCallback(() => {
    clearTimers();
    generation.current += 1;
    returnToRef.current = null;
    setReturnTo(null);
    setNodeId("welcome");
    setMessages([]);
    setCollected({});
    setCategory("other");
    setIssue("");
    setReference("");
    setAiHistory([]);
    setExtraChips([]);
    setPending(false);
    setBotTyping(false);
    setCelebrating(false);
    setInputError(null);
    setStarted(Date.now());
    latest.current = { collected: {}, reference: "", category: "other", issue: "", lang };
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    later(150, () => enterNode("welcome"));
  }, [enterNode, lang]);

  const go = useCallback(
    (next: string, nextCollected?: Partial<Record<Field, string>>) => {
      if (next === "__restart") {
        restart();
        return;
      }
      // Coming back from an Edit: show a fresh summary card instead of
      // re-walking the rest of the form.
      if (returnToRef.current) {
        const back = returnToRef.current;
        returnToRef.current = null;
        setReturnTo(null);
        setExtraChips([]);
        setInputError(null);
        setBotTyping(true);
        later(typingDelay("Updated."), () => {
          pushBot(t("Updated. Here's what I'll send:"), { summary: true });
          setBotTyping(false);
          setNodeId(back);
        });
        return;
      }
      enterNode(next, { collected: nextCollected });
    },
    [enterNode, restart, pushBot],
  );

  const chooseChip = useCallback(
    (chip: Chip) => {
      if (botTyping || pending) return;
      // Leading emoji / symbols are decoration; the transcript keeps the words.
      pushUser(t(chip.label).replace(/^[^A-Za-z0-9$¿¡À-ɏ]+\s*/, ""));
      let next = collected;
      if (chip.set) {
        next = { ...collected };
        for (const [k, v] of Object.entries(chip.set)) {
          const key = k as Field;
          next[key] = v === "__today" ? isoDate(0) : v === "__yesterday" ? isoDate(-1) : v;
        }
        setCollected(next);
        latest.current.collected = next;
      }
      if (chip.issue) {
        setIssue(chip.issue);
        latest.current.issue = chip.issue;
      }
      if (chip.category) {
        setCategory(chip.category);
        latest.current.category = chip.category;
      }
      go(chip.next, next);
    },
    [botTyping, pending, collected, pushUser, go],
  );

  const validate = (input: InputSpec, value: string): string | null => {
    const v = value.trim();
    switch (input.kind) {
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? null : t("That doesn't look like an email address. Mind checking it?");
      case "last4":
        if (/^\d{4}$/.test(v)) return null;
        return v.length > 4
          ? t("Just the last four digits, never the full card number.")
          : t("Four digits, please. They're on the front or back of the card.");
      case "date": {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(v)) return t("Pick a date, or tap Today or Yesterday.");
        if (v > isoDate(0)) return t("That's in the future. Which day was the rental?");
        return null;
      }
      case "textarea":
        return v.length <= MAX_LINE_CHARS ? null : t("That's a bit long. Could you trim it to about 2,000 characters?");
      default: {
        const max = input.field === "name" ? 100 : 200;
        if (v.length < 1) return t("Could you fill that in?");
        return v.length <= max ? null : t("That's a bit long for this box. Could you shorten it?");
      }
    }
  };

  const submitInput = useCallback(
    (raw: string) => {
      const node = FLOW[nodeId];
      if (!node?.input || botTyping || pending) return;
      const single = node.input.kind !== "textarea";
      const value = (single ? raw.replace(/\s*\n+\s*/g, " ") : raw).trim();
      const err = validate(node.input, value);
      if (err) {
        setInputError(err);
        return;
      }
      setInputError(null);
      const shown =
        node.input.kind === "date" ? new Date(value + "T12:00:00").toLocaleDateString(localeOf(lang)) : value;
      pushUser(shown);
      const next = { ...collected, [node.input.field]: value };
      setCollected(next);
      latest.current.collected = next;
      go(node.input.next, next);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [nodeId, botTyping, pending, collected, pushUser, go, lang],
  );

  const inputFor = (node: FlowNode): InputSpec | undefined => {
    if (!node.input) return undefined;
    const optional = node.input.optional || !!node.input.optionalWhen?.includes(category);
    return optional === !!node.input.optional ? node.input : { ...node.input, optional };
  };

  const skipInput = useCallback(() => {
    const node = FLOW[nodeId];
    const input = node ? inputFor(node) : undefined;
    if (!input?.optional || botTyping || pending) return;
    pushUser(t(input.skipLabel || "Skip"));
    const next = { ...collected };
    delete next[input.field];
    setCollected(next);
    latest.current.collected = next;
    go(input.next, next);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nodeId, botTyping, pending, collected, pushUser, go, category]);

  const editField = useCallback(
    (field: Field) => {
      const target = EDIT_NODES[category][field];
      if (!target || botTyping || pending) return;
      // Only from the summary itself, and one edit at a time.
      if (returnToRef.current || FLOW[nodeId]?.kind !== "summary") return;
      returnToRef.current = nodeId;
      setReturnTo(nodeId);
      enterNode(target);
    },
    [category, nodeId, botTyping, pending, enterNode],
  );

  /** Chips offered after an assistant answer; the visitor's own words become the issue line. */
  const actionChips = (action: AssistantAction, lastText: string): Chip[] => {
    const issueText = lastText.slice(0, 90);
    const human: Chip = { label: "Talk to a person", next: "o_human", set: { message: lastText }, issue: issueText };
    switch (action) {
      case "transaction":
        return [
          { label: "Report this charge", next: "s_intro", issue: issueText, category: "transaction" },
          ...WELCOME_CHIPS.filter((c) => c.next !== "charge"),
        ];
      case "rental":
        return [{ label: "Rental help", next: "rental" }, ...WELCOME_CHIPS.filter((c) => c.next !== "rental")];
      case "partner":
        return [{ label: "Partner with us", next: "p_intro" }, ...WELCOME_CHIPS.filter((c) => c.next !== "p_intro")];
      default:
        return [human, ...WELCOME_CHIPS];
    }
  };

  /** Free text typed while no question is open: ask the assistant. */
  const sendText = useCallback(
    async (raw: string) => {
      const text = raw.trim().slice(0, 600);
      if (!text || botTyping || pending) return;
      const gen = generation.current;
      pushUser(text);
      // Only the first reply on a node with an aiPrompt carries it; once the
      // assistant has answered, extraChips holds its buttons.
      const prompt = extraChips.length === 0 ? FLOW[nodeId]?.aiPrompt : undefined;
      const content = prompt ? `${prompt}\n${text}` : text;
      const history: AssistantTurn[] = [...aiHistory, { role: "user" as const, content }].slice(-MAX_AI_TURNS);
      setPending(true);
      setExtraChips([]);
      try {
        const res = await askAssistant(history, started, lang);
        if (gen !== generation.current) return;
        setPending(false);
        if (!res.enabled || !res.reply) {
          const next = { ...collected, message: text };
          setCollected(next);
          latest.current.collected = next;
          enterNode("o_human", { collected: next });
          return;
        }
        setAiHistory([...history, { role: "assistant" as const, content: res.reply.slice(0, 1200) }]);
        setBotTyping(true);
        later(typingDelay(res.reply), () => {
          if (gen !== generation.current) return;
          pushBot(res.reply!);
          setBotTyping(false);
          setExtraChips(actionChips(res.action || "none", text));
        });
      } catch {
        if (gen !== generation.current) return;
        setPending(false);
        pushBot(t("I'm having trouble answering right now. Pick one of these and I'll get you to the right place."), {
          error: true,
        });
        setExtraChips(actionChips("human", text));
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [aiHistory, botTyping, pending, collected, pushUser, pushBot, enterNode, started, lang, nodeId, extraChips],
  );

  const node = FLOW[nodeId] ?? FLOW.welcome;
  const chips: Chip[] = extraChips.length ? extraChips : botTyping ? [] : node.chips ?? [];
  const input = botTyping || pending ? undefined : inputFor(node);
  const freeText = !input && (node.freeText || extraChips.length > 0) && !botTyping && !pending;

  return {
    messages,
    node,
    chips,
    input,
    freeText,
    collected,
    category,
    issue,
    reference,
    botTyping,
    pending,
    celebrating,
    inputError,
    clearInputError: () => setInputError(null),
    chooseChip,
    submitInput,
    skipInput,
    sendText,
    editField,
    restart,
    /** Jump straight into a flow (from the Contact page or a partner button). */
    startFlow: (flow: "support" | "partner") => {
      if (flow !== "partner" || nodeId.startsWith("p_")) return;
      clearTimers();
      setBotTyping(false);
      returnToRef.current = null;
      setReturnTo(null);
      enterNode("p_intro");
    },
  };
}
