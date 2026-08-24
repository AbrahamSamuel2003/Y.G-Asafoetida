import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Mail, MessageSquare, Phone, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { answerQuestion, quickQuestions, SUPPORT } from "@/data/faq";

type Msg = {
  id: number;
  from: "bot" | "user";
  text: string;
  /** Rendered when the bot could not match a rule. */
  escalate?: boolean;
  followUps?: string[];
};

const INTRO: Msg = {
  id: 0,
  from: "bot",
  text:
    "Vanakkam! I'm the Y.G helper — a basic FAQ bot built only for quick clarity, not a real agent. Ask about products, delivery, offers, cancellations or refunds.",
  followUps: quickQuestions,
};

/** Rule-based FAQ assistant. No network, no model — keyword matching only. */
export function FaqBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([INTRO]);
  const [input, setInput] = useState("");
  const listRef = useRef<HTMLDivElement | null>(null);
  const nextId = useRef(1);

  useEffect(() => {
    if (!open) return;
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const ask = (text: string) => {
    const question = text.trim();
    if (!question) return;
    const reply = answerQuestion(question);
    setMessages((prev) => [
      ...prev,
      { id: nextId.current++, from: "user", text: question },
      {
        id: nextId.current++,
        from: "bot",
        text: reply.text,
        escalate: !reply.matched,
        followUps: reply.followUps,
      },
    ]);
    setInput("");
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={open ? "Close the FAQ helper" : "Open the FAQ helper"}
        style={{ bottom: "calc(1rem + var(--fab-offset, 0px))" }}
        className="fixed right-3 z-40 flex h-11 w-11 sm:h-12 sm:w-auto items-center justify-center sm:justify-start gap-2 rounded-full bg-primary p-0 sm:px-4 text-sm font-medium text-primary-foreground shadow-lift transition-transform hover:scale-105 sm:right-6"
      >
        {open ? <X className="h-5 w-5" /> : <MessageSquare className="h-5 w-5" />}
        <span className="hidden sm:inline">{open ? "Close" : "FAQ helper"}</span>
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Y.G FAQ helper"
          style={{ bottom: "calc(5rem + var(--fab-offset, 0px))" }}
          className="fixed inset-x-3 z-40 flex max-h-[70vh] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-lift sm:inset-x-auto sm:right-6 sm:w-96"
        >

          <header className="border-b border-border bg-primary/5 px-4 py-3">
            <p className="font-display text-base font-semibold">Y.G FAQ helper</p>
            <p className="text-xs text-muted-foreground">
              Rule-based answers only · built for quick clarity
            </p>
          </header>

          <div ref={listRef} className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
            {messages.map((m) => (
              <div key={m.id}>
                {m.from === "user" ? (
                  <p className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-sm bg-primary px-3 py-2 text-sm text-primary-foreground">
                    {m.text}
                  </p>
                ) : (
                  <div className="max-w-[92%] text-sm leading-relaxed text-foreground">
                    <p>{m.text}</p>
                    {m.escalate && (
                      <div className="mt-3 rounded-xl border border-border bg-primary/5 p-3">
                        <p className="text-xs font-medium">
                          Please contact our support team — they can help properly:
                        </p>
                        <ul className="mt-2 space-y-1.5 text-xs text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <Phone className="h-3.5 w-3.5 text-primary" />
                            <a className="underline-offset-2 hover:underline" href={SUPPORT.phoneHref}>
                              {SUPPORT.phone}
                            </a>
                            <span>· {SUPPORT.hours}</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <MessageSquare className="h-3.5 w-3.5 text-primary" />
                            <a
                              className="underline-offset-2 hover:underline"
                              href={SUPPORT.whatsappHref}
                              target="_blank"
                              rel="noreferrer"
                            >
                              WhatsApp {SUPPORT.whatsapp}
                            </a>
                          </li>
                          <li className="flex items-center gap-2">
                            <Mail className="h-3.5 w-3.5 text-primary" />
                            <a className="underline-offset-2 hover:underline" href={SUPPORT.emailHref}>
                              {SUPPORT.email}
                            </a>
                          </li>
                        </ul>
                        <Button asChild size="sm" className="mt-3" onClick={() => setOpen(false)}>
                          <Link to="/contact">Open the support page</Link>
                        </Button>
                      </div>
                    )}
                    {m.followUps && m.followUps.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {m.followUps.map((f) => (
                          <button
                            key={f}
                            type="button"
                            onClick={() => ask(f)}
                            className="min-h-8 rounded-full border border-border px-3 text-xs transition-colors hover:border-primary hover:text-primary"
                          >
                            {f}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          <form
            className="flex items-center gap-2 border-t border-border p-3"
            onSubmit={(e) => {
              e.preventDefault();
              ask(input);
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question here"
              aria-label="Ask the FAQ helper a question"
              className="min-h-10 flex-1 rounded-full border border-input bg-background px-4 text-sm outline-none focus-visible:border-primary"
            />
            <Button type="submit" size="icon" className="h-10 w-10 shrink-0 rounded-full" aria-label="Send">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      )}
    </>
  );
}
