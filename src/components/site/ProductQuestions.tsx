import { useState, type FormEvent } from "react";
import { MessageCircleQuestion, Clock3 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useProductQuestions } from "@/lib/questions";

const MAX = 240;

/** Ask-a-question block on the product page. Answers come from the Y.G team. */
export function ProductQuestions({ slug }: { slug: string }) {
  const { questions, answeredCount, ask } = useProductQuestions(slug);
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [name, setName] = useState("");
  const [touched, setTouched] = useState(false);
  const [sending, setSending] = useState(false);

  const invalid = question.trim().length < 8;

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (invalid) return;
    setSending(true);
    await new Promise((r) => setTimeout(r, 500));
    ask(question, name);
    setSending(false);
    setQuestion("");
    setName("");
    setTouched(false);
    setOpen(false);
    toast.success("Question sent", {
      description: "We usually answer within one working day, right here on this page.",
    });
  };

  return (
    <section className="border-t border-border py-10" aria-labelledby="questions">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 id="questions" className="font-display text-2xl font-semibold">
          Questions &amp; answers
          <span className="ml-2 align-middle text-sm font-normal text-muted-foreground">
            {answeredCount} answered
          </span>
        </h2>
        <Button variant={open ? "ghost" : "outline"} onClick={() => setOpen((o) => !o)}>
          <MessageCircleQuestion className="mr-2 h-4 w-4" aria-hidden />
          {open ? "Cancel" : "Ask a question"}
        </Button>
      </div>

      {open ? (
        <form onSubmit={submit} className="surface-card mt-6 space-y-4 p-5" noValidate>
          <div className="space-y-2">
            <Label htmlFor="q-text">Your question</Label>
            <Textarea
              id="q-text"
              rows={3}
              maxLength={MAX}
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onBlur={() => setTouched(true)}
              aria-invalid={touched && invalid}
              placeholder="Type your question about this product"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>
                {touched && invalid ? (
                  <span className="text-destructive">
                    Add a little more detail so we can answer properly.
                  </span>
                ) : (
                  "Answered publicly by our Tirunelveli team."
                )}
              </span>
              <span>
                {question.length}/{MAX}
              </span>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="q-name">Your name (optional)</Label>
            <Input
              id="q-name"
              value={name}
              autoComplete="name"
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name (optional)"
            />
          </div>
          <Button type="submit" disabled={sending}>
            {sending ? "Sending…" : "Send question"}
          </Button>
        </form>
      ) : null}

      <ul className="mt-6 divide-y divide-border">
        {questions.map((q) => (
          <li key={q.id} className="py-5">
            <p className="font-medium">{q.question}</p>
            {q.answer ? (
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{q.answer}</p>
            ) : (
              <p className="mt-2 inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground">
                <Clock3 className="h-3.5 w-3.5" aria-hidden /> Awaiting an answer from the Y.G team
              </p>
            )}
            <p className="mt-2 text-xs text-muted-foreground">
              Asked by {q.askedBy}
              {q.answeredBy ? ` · answered by ${q.answeredBy}` : ""}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
