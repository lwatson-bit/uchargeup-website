import { createRoot } from "react-dom/client";
// Self-hosted fonts (one variable woff2 each): headings in Montserrat, body
// and UI in Geist. These replaced the Google Fonts link that was never applied.
import "@fontsource-variable/montserrat";
import "@fontsource-variable/geist";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
