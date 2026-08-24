import { useState } from "react";
import { CheckCircle2, Copy, LifeBuoy, Mail, MessageCircle, Phone } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SUPPORT } from "@/data/faq";
import type { Order } from "@/lib/orders";
import { mailtoForOrder, orderDigest, saveTicket, TICKET_TOPICS } from "@/lib/support";

type Props = {
  order: Order;
  /** Pre-selected topic, e.g. when opened from the resolution banner. */
  defaultTopic?: string;
  label?: string;
  size?: "sm" | "default";
  variant?: "default" | "outline" | "secondary" | "ghost";
};

/**
 * One-tap support ticket: every order detail is prefilled, the customer only picks a topic
 * and (optionally) adds a line of context.
 */
export function SupportTicketDialog({
  order,
  defaultTopic = TICKET_TOPICS[0]!,
  label = "Get help with this order",
  size = "default",
  variant = "outline",
}: Props) {
  const [open, setOpen] = useState(false);
  const [topic, setTopic] = useState(defaultTopic);
  const [note, setNote] = useState("");
  const [ticketId, setTicketId] = useState<string | null>(null);

  const digest = orderDigest(order);

  const submit = async () => {
    const ticket = await saveTicket({
      topic,
      orderId: order.id,
      message: note.trim(),
      contact: order.email || order.phone,
    });
    setTicketId(ticket.id);
    toast.success(`Ticket ${ticket.id} raised — we reply within one working day.`);
  };

  const reset = () => {
    setOpen(false);
    window.setTimeout(() => {
      setTicketId(null);
      setNote("");
      setTopic(defaultTopic);
    }, 200);
  };

  return (
    <Dialog open={open} onOpenChange={(o) => (o ? setOpen(true) : reset())}>
      <DialogTrigger asChild>
        <Button variant={variant} size={size}>
          <LifeBuoy className="mr-1.5 h-4 w-4" />
          {label}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
        {ticketId ? (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" /> Ticket {ticketId} raised
              </DialogTitle>
              <DialogDescription>
                Our Tirunelveli team has your order {order.id} and all its details. We reply to{" "}
                {order.email || order.phone} within one working day.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-2 rounded-lg bg-primary/5 p-4 text-sm">
              <p className="font-medium">Need it faster?</p>
              <div className="flex flex-wrap gap-2">
                <Button size="sm" variant="outline" asChild>
                  <a href={SUPPORT.phoneHref}>
                    <Phone className="mr-1.5 h-4 w-4" /> Call
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <a href={SUPPORT.whatsappHref} target="_blank" rel="noreferrer">
                    <MessageCircle className="mr-1.5 h-4 w-4" /> WhatsApp
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <a href={mailtoForOrder(order, topic, note)}>
                    <Mail className="mr-1.5 h-4 w-4" /> Email with details
                  </a>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">{SUPPORT.hours}</p>
            </div>
            <DialogFooter>
              <Button onClick={reset}>Done</Button>
            </DialogFooter>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Raise a support ticket</DialogTitle>
              <DialogDescription>
                Order {order.id} and its full details are attached automatically — just pick a topic.
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label>What do you need help with?</Label>
                <div className="flex flex-wrap gap-2">
                  {TICKET_TOPICS.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTopic(t)}
                      aria-pressed={topic === t}
                      className={`min-h-9 rounded-full border px-3 text-xs font-medium transition-colors ${
                        topic === t
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border hover:border-primary hover:text-primary"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor={`ticket-note-${order.id}`}>Add a line for our team (optional)</Label>
                <Textarea
                  id={`ticket-note-${order.id}`}
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  maxLength={400}
                  rows={3}
                  placeholder="Describe your issue here"
                />
              </div>

              <details className="rounded-lg border border-border p-3 text-sm">
                <summary className="cursor-pointer font-medium">
                  Attached automatically — order details
                </summary>
                <pre className="mt-3 max-h-40 overflow-auto text-xs whitespace-pre-wrap text-muted-foreground">
                  {digest}
                </pre>
                <Button
                  type="button"
                  size="sm"
                  variant="ghost"
                  className="mt-2"
                  onClick={() => {
                    navigator.clipboard?.writeText(digest);
                    toast.success("Order details copied");
                  }}
                >
                  <Copy className="mr-1.5 h-4 w-4" /> Copy details
                </Button>
              </details>
            </div>

            <DialogFooter className="gap-2">
              <Button variant="ghost" onClick={reset}>
                Close
              </Button>
              <Button onClick={submit}>Raise ticket</Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
