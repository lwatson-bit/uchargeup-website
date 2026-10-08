import { useEffect, useMemo, useRef, useState, type FormEvent, type KeyboardEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Mail, RotateCcw, Send, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { getAppStoreUrl } from "@/utils/appDownload";
import ChatMascot from "./ChatMascot";
import { isoDate, useChat, type ChatMessage, type Mood } from "./useChat";
import { FIELD_LABELS, SUMMARY_FIELDS, type Field } from "./flows";
import { detectLang, localeOf, saveLang, tr, type Lang } from "./i18n";

const NUDGE_KEY = "ucu-chat-nudged";
const NUDGE_DELAY_MS = 20000;

const CHIP_CLASS =
  "rounded-full border border-[#317AA4]/40 bg-white px-3.5 py-1.5 text-sm font-medium text-[#1f5f84] shadow-sm transition-colors hover:bg-[#317AA4] hover:text-white";

function formatValue(field: Field, value: string, lang: Lang) {
  if (field === "rentalDate" && /^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return new Date(value + "T12:00:00").toLocaleDateString(localeOf(lang), {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  }
  if (field === "cardLast4") return `•••• ${value}`;
  if (field === "venueType") return tr(lang, value);
  return value;
}

function markSeen() {
  try {
    sessionStorage.setItem(NUDGE_KEY, "1");
  } catch {
    // ignore
  }
}

export default function ChatWidget() {
  const [lang, setLang] = useState<Lang>(() => detectLang());
  const chat = useChat(lang);
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [nudge, setNudge] = useState(false);
  const [draft, setDraft] = useState("");
  const [focused, setFocused] = useState(false);
  const [talking, setTalking] = useState(false);

  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement | HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const lastBotId = useRef<string | null>(null);
  const startFlowRef = useRef(chat.startFlow);
  startFlowRef.current = chat.startFlow;

  const t = (text: string) => tr(lang, text);
  const toggleLang = () => {
    const next: Lang = lang === "en" ? "es" : "en";
    setLang(next);
    saveLang(next);
  };

  const close = () => {
    setOpen(false);
    window.setTimeout(() => launcherRef.current?.focus(), 50);
  };

  // Open from anywhere on the site: openChat("partner") etc. Registered once.
  useEffect(() => {
    const onOpen = (e: Event) => {
      const flow = (e as CustomEvent<{ flow?: "support" | "partner" }>).detail?.flow;
      setOpen(true);
      setNudge(false);
      markSeen();
      if (flow) startFlowRef.current(flow);
    };
    window.addEventListener("ucu-chat:open", onOpen);
    return () => window.removeEventListener("ucu-chat:open", onOpen);
  }, []);

  // One gentle nudge per tab if the visitor hasn't opened the chat.
  useEffect(() => {
    if (open) {
      markSeen();
      return;
    }
    let seen = false;
    try {
      seen = sessionStorage.getItem(NUDGE_KEY) === "1";
    } catch {
      // ignore
    }
    if (seen) return;
    const id = window.setTimeout(() => {
      setNudge(true);
      markSeen();
    }, NUDGE_DELAY_MS);
    return () => window.clearTimeout(id);
  }, [open]);

  // The nudge bubble stays, but Juice stops jumping after a few seconds.
  const [nudgeDance, setNudgeDance] = useState(false);
  useEffect(() => {
    if (!nudge) {
      setNudgeDance(false);
      return;
    }
    setNudgeDance(true);
    const id = window.setTimeout(() => setNudgeDance(false), 5000);
    return () => window.clearTimeout(id);
  }, [nudge]);

  // Escape closes; focus moves into the panel when it opens.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    const id = window.setTimeout(() => (inputRef.current ?? panelRef.current)?.focus(), 250);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.clearTimeout(id);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  // Keep the newest message in view.
  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: reduceMotion ? "auto" : "smooth" });
  }, [chat.messages, chat.botTyping, chat.chips, chat.input, open, reduceMotion]);

  // Juice "talks" for a moment whenever a new bot bubble lands.
  const lastBot = useMemo(() => [...chat.messages].reverse().find((m) => m.role === "bot"), [chat.messages]);
  useEffect(() => {
    if (!lastBot || lastBot.id === lastBotId.current) return;
    lastBotId.current = lastBot.id;
    setTalking(true);
    const id = window.setTimeout(() => setTalking(false), 1400);
    return () => window.clearTimeout(id);
  }, [lastBot]);

  const canType = !!chat.input || chat.freeText;

  // Clear the draft and move focus to the question (or the first chip).
  useEffect(() => {
    setDraft("");
    chat.clearInputError();
    if (!open || chat.botTyping) return;
    const id = window.setTimeout(() => {
      if (canType) inputRef.current?.focus();
      else panelRef.current?.querySelector<HTMLButtonElement>("[data-chip]")?.focus();
    }, 60);
    return () => window.clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chat.node.id, chat.input?.field, chat.botTyping, open]);

  const mood: Mood = useMemo(() => {
    if (chat.pending) return "thinking";
    if (chat.celebrating) return "celebrate";
    if (chat.botTyping || talking) return "talking";
    if (focused && draft.trim().length > 0) return "listening";
    return "idle";
  }, [chat.pending, chat.celebrating, chat.botTyping, talking, focused, draft]);

  const submit = (e?: FormEvent) => {
    e?.preventDefault();
    if (chat.input) {
      chat.submitInput(draft);
    } else if (chat.freeText) {
      chat.sendText(draft);
      setDraft("");
    }
  };

  const multiline = chat.input?.kind === "textarea";
  const onKeyDown = (e: KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    // Single-line questions send on Enter; the notes box keeps Enter as a
    // newline (phones have no Shift) and sends with the button.
    if (e.key === "Enter" && !e.shiftKey && !multiline) {
      e.preventDefault();
      submit();
    }
  };

  const placeholder = chat.input
    ? t(chat.input.placeholder || "Type your answer")
    : chat.freeText
      ? t("Ask me anything…")
      : t("Pick an option above");
  const inputName = chat.input ? t(FIELD_LABELS[chat.input.field]) : t("Message Juice");

  const latestSummaryId = useMemo(() => [...chat.messages].reverse().find((m) => m.summary)?.id, [chat.messages]);

  const renderChip = (chip: { label: string; next: string }, onClick: () => void) => (
    <button key={chip.label + chip.next} type="button" onClick={onClick} className={CHIP_CLASS} data-chip>
      {t(chip.label)}
    </button>
  );

  return (
    <>
      {/* Launcher */}
      <div
        className="ucu-chat fixed bottom-4 right-4 z-[60] flex items-end gap-3 pb-[env(safe-area-inset-bottom)] md:bottom-6 md:right-6"
        lang={lang}
      >
        <AnimatePresence>
          {nudge && !open && (
            <motion.div
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.96 }}
              className="relative mb-2 max-w-[220px] rounded-2xl rounded-br-sm bg-white px-4 py-3 text-sm text-gray-800 shadow-lg ring-1 ring-black/5"
              role="status"
            >
              <button
                type="button"
                aria-label={t("Dismiss")}
                onClick={() => setNudge(false)}
                className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white text-gray-500 shadow ring-1 ring-black/5 hover:text-gray-900"
              >
                <X className="h-3.5 w-3.5" />
              </button>
              {t("Need a hand? I'm Juice 🔋")}
            </motion.div>
          )}
        </AnimatePresence>
        <button
          ref={launcherRef}
          type="button"
          onClick={() => {
            if (open) close();
            else setOpen(true);
            setNudge(false);
          }}
          aria-label={open ? t("Close chat with Juice") : t("Chat with Juice, the U Charge Up helper")}
          aria-expanded={open}
          data-testid="chat-launcher"
          className={cn("flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-xl ring-2 ring-[#317AA4]/30", !reduceMotion && "transition-transform hover:scale-105")}
        >
          {open ? <X className="h-7 w-7 text-[#317AA4]" /> : <ChatMascot mood={nudgeDance ? "celebrate" : "idle"} size={48} title="" />}
        </button>
      </div>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={panelRef}
            key="panel"
            role="dialog"
            aria-modal="true"
            aria-label={t("Chat with Juice")}
            lang={lang}
            tabIndex={-1}
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className={cn(
              "ucu-chat fixed z-[60] flex flex-col bg-white shadow-2xl ring-1 ring-black/10 outline-none",
              "inset-0 md:inset-auto md:bottom-24 md:right-6 md:h-[620px] md:max-h-[calc(100vh-7.5rem)] md:w-[390px] md:rounded-2xl",
            )}
            data-testid="chat-panel"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-gray-100 px-4 py-3 md:rounded-t-2xl">
              <ChatMascot mood={mood} size={52} title="" />
              <div className="min-w-0 flex-1">
                <div className="text-base font-semibold leading-tight text-gray-900">Juice</div>
                <div className="truncate text-xs text-gray-600">{t("U Charge Up helper")}</div>
              </div>
              <button
                type="button"
                onClick={toggleLang}
                aria-label={lang === "en" ? "Cambiar a español" : "Switch to English"}
                title={lang === "en" ? "Cambiar a español" : "Switch to English"}
                className="h-8 min-w-[2.5rem] rounded-full px-2 text-xs font-semibold text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                data-testid="chat-lang"
              >
                {lang === "en" ? "ES" : "EN"}
              </button>
              <button
                type="button"
                onClick={chat.restart}
                aria-label={t("Start over")}
                title={t("Start over")}
                className="rounded-full p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={close}
                aria-label={t("Close")}
                className="rounded-full p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Screen readers hear only Juice's newest line, not every chip. */}
            <div className="sr-only" aria-live="polite" aria-atomic="true">
              {chat.botTyping || chat.pending ? t("Juice is typing") : lastBot?.text ?? ""}
            </div>

            {/* Messages */}
            <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto overscroll-contain bg-gray-50 px-4 py-4">
              {chat.messages.map((m) =>
                m.summary ? (
                  <SummaryCard
                    key={m.id}
                    message={m}
                    chat={chat}
                    lang={lang}
                    editable={m.id === latestSummaryId && chat.node.kind === "summary"}
                  />
                ) : (
                  <Bubble key={m.id} message={m} reduceMotion={!!reduceMotion} lang={lang} />
                ),
              )}

              {(chat.botTyping || chat.pending) && (
                <div className="flex items-end gap-2" aria-hidden="true">
                  <div className="rounded-2xl rounded-bl-sm bg-white px-4 py-3 shadow-sm ring-1 ring-black/5">
                    <span className="flex gap-1">
                      <span className="ucu-dot h-2 w-2 rounded-full bg-[#317AA4]" />
                      <span className="ucu-dot h-2 w-2 rounded-full bg-[#317AA4]" />
                      <span className="ucu-dot h-2 w-2 rounded-full bg-[#317AA4]" />
                    </span>
                  </div>
                </div>
              )}

              {/* Quick replies */}
              {chat.chips.length > 0 && !chat.botTyping && !chat.pending && (
                <div className="flex flex-wrap gap-2 pt-1" data-testid="chat-chips">
                  {chat.chips.map((chip) => renderChip(chip, () => chat.chooseChip(chip)))}
                </div>
              )}
              {chat.input?.chips && chat.input.chips.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-1" data-testid="chat-input-chips">
                  {chat.input.chips.map((chip) => renderChip(chip, () => chat.chooseChip(chip)))}
                </div>
              )}
            </div>

            {/* Input */}
            <form onSubmit={submit} className="border-t border-gray-100 bg-white px-3 py-3 md:rounded-b-2xl">
              {chat.inputError && (
                <p className="mb-2 px-1 text-xs text-red-600" role="alert">
                  {chat.inputError}
                </p>
              )}
              <div className="flex items-end gap-2">
                {chat.input?.kind === "date" ? (
                  <input
                    ref={inputRef as React.RefObject<HTMLInputElement>}
                    type="date"
                    max={isoDate(0)}
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    aria-label={t("Rental date")}
                    className="h-10 flex-1 rounded-lg border border-gray-200 px-3 text-sm"
                  />
                ) : (
                  <textarea
                    ref={inputRef as React.RefObject<HTMLTextAreaElement>}
                    rows={1}
                    value={draft}
                    disabled={!canType}
                    onChange={(e) => setDraft(e.target.value)}
                    onKeyDown={onKeyDown}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    placeholder={placeholder}
                    enterKeyHint={multiline ? "enter" : "send"}
                    inputMode={chat.input?.kind === "last4" ? "numeric" : chat.input?.kind === "email" ? "email" : "text"}
                    autoComplete={chat.input?.kind === "email" ? "email" : chat.input?.field === "name" ? "name" : "off"}
                    maxLength={multiline ? 2000 : chat.input ? 200 : 600}
                    aria-label={inputName}
                    className="max-h-28 min-h-[40px] flex-1 resize-none rounded-lg border border-gray-200 px-3 py-2 text-sm leading-5 disabled:bg-gray-50 disabled:text-gray-500"
                    data-testid="chat-input"
                  />
                )}
                {chat.input?.optional && (
                  <button
                    type="button"
                    onClick={chat.skipInput}
                    className="h-10 rounded-lg px-3 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  >
                    {t(chat.input.skipLabel || "Skip")}
                  </button>
                )}
                <button
                  type="submit"
                  disabled={!canType || draft.trim().length === 0}
                  aria-label={t("Send")}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#317AA4] text-white transition-colors hover:bg-[#28678b] disabled:bg-gray-200 disabled:text-gray-500"
                  data-testid="chat-send"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
              <p className="mt-2 flex items-center gap-1 px-1 text-xs text-gray-600">
                <Mail className="h-3 w-3" />
                {t("Prefer email?")}{" "}
                <a href="mailto:support@uchargeup.com" className="underline hover:text-gray-900">
                  support@uchargeup.com
                </a>
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Bubble({ message, reduceMotion, lang }: { message: ChatMessage; reduceMotion: boolean; lang: Lang }) {
  const isBot = message.role === "bot";
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.18 }}
      className={cn("flex", isBot ? "justify-start" : "justify-end")}
    >
      <div
        className={cn(
          "max-w-[85%] whitespace-pre-line rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-sm",
          isBot
            ? "rounded-bl-sm bg-white text-gray-800 ring-1 ring-black/5"
            : "rounded-br-sm bg-[#317AA4] text-white",
          message.error && "ring-red-200 bg-red-50 text-red-800",
        )}
        data-testid={isBot ? "chat-bot-message" : "chat-user-message"}
      >
        {message.text}
        {message.links && message.links.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {message.links.map((l) => {
              const href = l.href === "__app" ? getAppStoreUrl() : l.href;
              return (
                <a
                  key={l.href}
                  href={href}
                  target={l.external ? "_blank" : undefined}
                  rel={l.external ? "noopener noreferrer" : undefined}
                  className="rounded-full bg-[#317AA4]/10 px-3 py-1.5 text-xs font-semibold text-[#1f5f84] hover:bg-[#317AA4]/20"
                >
                  {tr(lang, l.label)}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </motion.div>
  );
}

function SummaryCard({
  message,
  chat,
  lang,
  editable,
}: {
  message: ChatMessage;
  chat: ReturnType<typeof useChat>;
  lang: Lang;
  editable: boolean;
}) {
  const fields = SUMMARY_FIELDS[chat.category];
  const t = (text: string) => tr(lang, text);
  return (
    <div className="flex justify-start">
      <div className="w-full max-w-[92%] rounded-2xl rounded-bl-sm bg-white p-4 text-sm shadow-sm ring-1 ring-black/5" data-testid="chat-summary">
        <p className="mb-3 text-gray-800">{message.text}</p>
        <dl className="divide-y divide-gray-100">
          {chat.issue && (
            <div className="flex items-start justify-between gap-3 py-1.5">
              <dt className="w-28 shrink-0 text-xs font-medium uppercase tracking-wide text-gray-600">{t("About")}</dt>
              <dd className="flex-1 text-gray-800">{t(chat.issue)}</dd>
            </div>
          )}
          {fields.map((field) => {
            const value = chat.collected[field];
            if (!value) return null;
            return (
              <div key={field} className="flex items-start justify-between gap-3 py-1.5">
                <dt className="w-28 shrink-0 text-xs font-medium uppercase tracking-wide text-gray-600">
                  {t(FIELD_LABELS[field])}
                </dt>
                <dd className="flex-1 break-words text-gray-800">{formatValue(field, value, lang)}</dd>
                {editable && (
                  <button
                    type="button"
                    onClick={() => chat.editField(field)}
                    className="-my-1 min-h-[32px] rounded px-2 text-xs font-semibold text-[#1f5f84] hover:bg-[#317AA4]/10"
                    aria-label={`${t("Edit")} ${t(FIELD_LABELS[field])}`}
                  >
                    {t("Edit")}
                  </button>
                )}
              </div>
            );
          })}
        </dl>
      </div>
    </div>
  );
}
