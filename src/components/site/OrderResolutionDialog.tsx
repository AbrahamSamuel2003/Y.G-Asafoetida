import { useState } from "react";
import { AlertTriangle, Ban, IndianRupee } from "lucide-react";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { formatPrice } from "@/data/products";
import { PolicyRules } from "@/components/site/PolicyRules";
import { SupportTicketDialog } from "@/components/site/SupportTicketDialog";
import {
  CANCEL_REASONS,
  REFUND_REASONS,
  RESOLUTION_POLICY,
  refundMethodLabel,
  resolutionEligibility,
  useOrders,
  type Order,
} from "@/lib/orders";

type Props = {
  order: Order;
  mode: "cancellation" | "refund";
  size?: "sm" | "default";
};

export function OrderResolutionDialog({ order, mode, size = "default" }: Props) {
  const { cancelOrder, requestRefund } = useOrders();
  const [open, setOpen] = useState(false);
  const reasons = mode === "cancellation" ? CANCEL_REASONS : REFUND_REASONS;
  const [reason, setReason] = useState(reasons[0]!);
  const [note, setNote] = useState("");

  const eligibility = resolutionEligibility(order);
  const allowed = mode === "cancellation" ? eligibility.canCancel : eligibility.canRefund;
  if (!allowed) return null;

  const isCancel = mode === "cancellation";
  const submit = async () => {
    const res = await (isCancel
      ? cancelOrder(order.id, reason, note.trim() || undefined)
      : requestRefund(order.id, reason, note.trim() || undefined));
    if (!res) {
      toast.error("This order is no longer eligible — please contact support.");
      setOpen(false);
      return;
    }
    setOpen(false);
    toast.success(
      isCancel
        ? `Order ${order.id} cancelled${res.amount > 0 ? ` · ${formatPrice(res.amount)} refund initiated` : ""}`
        : `Refund request raised for ${order.id}`,
    );
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size={size} className={isCancel ? "text-destructive hover:text-destructive" : ""}>
          {isCancel ? <Ban className="mr-1.5 h-4 w-4" /> : <IndianRupee className="mr-1.5 h-4 w-4" />}
          {isCancel ? "Cancel order" : "Request refund"}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>{isCancel ? `Cancel order ${order.id}?` : `Request a refund for ${order.id}`}</DialogTitle>
          <DialogDescription>
            {isCancel
              ? "We'll stop the parcel before it leaves our Tirunelveli works."
              : "Tell us what went wrong and our team will review within 24 hours."}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Reason</Label>
            <RadioGroup value={reason} onValueChange={setReason} className="space-y-2">
              {reasons.map((r) => (
                <label
                  key={r}
                  className={`flex min-h-11 cursor-pointer items-center gap-3 rounded-lg border px-3 text-sm transition-colors ${
                    reason === r ? "border-primary bg-primary/5" : "border-border"
                  }`}
                >
                  <RadioGroupItem value={r} id={`${order.id}-${mode}-${r}`} />
                  {r}
                </label>
              ))}
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor={`${order.id}-${mode}-note`}>Anything else? (optional)</Label>
            <Textarea
              id={`${order.id}-${mode}-note`}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              maxLength={300}
              placeholder={isCancel ? "Tell us how we could have done better (optional)" : "Add any details that help us check the refund (optional)"}
            />
          </div>

          <PolicyRules order={order} />

          <div className="rounded-lg bg-primary/5 p-4 text-sm">
            <p className="flex items-center gap-2 font-medium">
              <AlertTriangle className="h-4 w-4 text-primary" />
              {eligibility.refundAmount > 0
                ? `${formatPrice(eligibility.refundAmount)} back to you`
                : "No amount was pre-paid on this order"}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              {eligibility.refundAmount > 0
                ? `${refundMethodLabel(order.payment)} · within ${isCancel ? "3" : "7"} working days of approval.`
                : "Cash-on-delivery orders are simply stopped — nothing to refund."}
            </p>
          </div>
        </div>

        <DialogFooter className="gap-2">
          <Button variant="ghost" onClick={() => setOpen(false)}>
            Keep order
          </Button>
          <Button variant={isCancel ? "destructive" : "default"} onClick={submit}>
            {isCancel ? "Confirm cancellation" : "Submit refund request"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function ResolutionBanner({ order }: { order: Order }) {
  const r = order.resolution;
  if (!r) return null;
  const cancelled = r.type === "cancellation";
  const date = (t: number) =>
    new Date(t).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

  return (
    <div className="space-y-3">
      <div className="rounded-xl border border-primary/30 bg-primary/5 p-4 text-sm">
        <p className="font-medium">
          {cancelled ? "Order cancelled" : "Refund request under review"} · {date(r.requestedAt)}
        </p>
        <p className="mt-1 text-xs text-muted-foreground">Reason: {r.reason}</p>
        {r.note && <p className="text-xs text-muted-foreground">Note: {r.note}</p>}
        <p className="mt-2 text-xs text-muted-foreground">
          {r.amount > 0
            ? `${formatPrice(r.amount)} to ${r.method.toLowerCase()} by ${date(r.refundBy)}.`
            : "Nothing was pre-paid, so no refund is due."}
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          {cancelled
            ? `Cancellations apply instantly; any pre-paid amount is returned within ${RESOLUTION_POLICY.cancelRefundDays} working days.`
            : `Our team reviews refund requests within ${RESOLUTION_POLICY.reviewHours} hours, then releases the amount within ${RESOLUTION_POLICY.refundRefundDays} working days.`}
        </p>
        <div className="mt-3">
          <SupportTicketDialog
            order={order}
            size="sm"
            defaultTopic="Cancellation or refund help"
            label="Get help with this request"
          />
        </div>
      </div>
      <PolicyRules order={order} />
    </div>
  );
}
