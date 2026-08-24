import { CircleSlash, Info, ShieldCheck } from "lucide-react";
import { resolutionRules, type Order } from "@/lib/orders";

const icon = {
  pass: ShieldCheck,
  fail: CircleSlash,
  info: Info,
} as const;

const tone = {
  pass: "text-primary",
  fail: "text-destructive",
  info: "text-muted-foreground",
} as const;

/** Shows the exact cancellation/refund rules and how this specific order measures against them. */
export function PolicyRules({ order, className = "" }: { order: Order; className?: string }) {
  const rules = resolutionRules(order);
  return (
    <div className={`rounded-xl border border-border bg-card p-4 sm:p-5 ${className}`}>
      <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
        Cancellation &amp; refund rules
      </p>
      <ul className="mt-3 space-y-3">
        {rules.map((rule) => {
          const Icon = icon[rule.state];
          return (
            <li key={rule.label} className="flex gap-3">
              <Icon className={`mt-0.5 h-4 w-4 shrink-0 ${tone[rule.state]}`} aria-hidden />
              <div>
                <p className="text-sm font-medium">{rule.label}</p>
                <p className="text-xs text-muted-foreground">{rule.detail}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
