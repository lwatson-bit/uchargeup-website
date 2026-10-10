import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/** Header, the #main landmark the skip link targets, and the footer. */
export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
