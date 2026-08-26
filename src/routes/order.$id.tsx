import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Gift, Loader2, Package, RotateCcw } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { formatPrice } from "@/data/products";
import { useCart } from "@/lib/cart";
import { currentStatus, estimatedDelivery, resolutionEligibility, trackingSteps, useOrders, type Order } from "@/lib/orders";
import { OrderResolutionDialog, ResolutionBanner } from "@/components/site/OrderResolutionDialog";
import { SmartImage } from "@/components/site/SmartImage";
import { PolicyRules } from "@/components/site/PolicyRules";
import { SupportTicketDialog } from "@/components/site/SupportTicketDialog";

export const Route = createFileRoute("/order/$id")({
  head: ({ params }) => ({
    meta: [
      { title: `Track order ${params.id} — Y.G Asafoetida` },
      {
        name: "description",
        content: "Follow your Y.G Asafoetida hing order from our Tirunelveli works to your door.",
      },
      { property: "og:title", content: "Track your order — Y.G Asafoetida" },
      { property: "og:description", content: "Live status for your heritage hing delivery." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: OrderTrackingPage,
});

function OrderTrackingPage() {
  const { id } = Route.useParams();
  const { getOrder, fetchOrder } = useOrders();
  const cart = useCart();
  const [loading, setLoading] = useState(true);
  const [fetchedOrder, setFetchedOrder] = useState<Order | null>(null);

  const localOrder = getOrder(id);
  const order = fetchedOrder ?? localOrder;

  useEffect(() => {
    let active = true;
    fetchOrder(id).then((res) => {
      if (active) {
        if (res) setFetchedOrder(res);
        setLoading(false);
      }
    });
    return () => {
      active = false;
    };
  }, [id, fetchOrder]);

  if (loading && !order) {
    return (
      <div className="container-page flex min-h-[50vh] flex-col items-center justify-center text-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="mt-4 text-sm text-muted-foreground">Finding order {id}…</p>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="container-page flex min-h-[50vh] flex-col items-center justify-center text-center">
        <Package className="h-12 w-12 text-muted-foreground" />
        <h1 className="mt-6 text-3xl font-semibold">Order not found</h1>
        <p className="mt-2 max-w-md text-muted-foreground">
          We couldn&apos;t find order {id}. Check the order number in your confirmation email, or track using your email.
        </p>
        <div className="mt-6 flex gap-3">
          <Button asChild variant="outline">
            <Link to="/track">Track another order</Link>
          </Button>
          <Button asChild>
            <Link to="/account">Go to account</Link>
          </Button>
        </div>
      </div>
    );
  }

  const steps = trackingSteps(order);
  const status = currentStatus(order);
  const eta = estimatedDelivery(order);
  const eligibility = resolutionEligibility(order);

  return (
    <div className="container-page py-10 sm:py-14">
      <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">Order {order.id}</p>
      <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">{status.label}</h1>
      {order.resolution ? (
        <p className="mt-2 text-muted-foreground">
          {order.resolution.type === "cancellation"
            ? "This order will not be delivered."
            : "Delivery completed — refund under review."}
        </p>
      ) : (
        <p className="mt-2 text-muted-foreground">
          Estimated delivery{" "}
          {new Date(eta).toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "long" })}
          {" · "}
          {order.delivery === "express" ? "Express" : "Standard"} shipping
        </p>
      )}

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <OrderResolutionDialog order={order} mode="cancellation" />
        <OrderResolutionDialog order={order} mode="refund" />
        <SupportTicketDialog order={order} />
        <p className="text-xs text-muted-foreground">{eligibility.reason}</p>
      </div>

      <div className="mt-5">
        {order.resolution ? <ResolutionBanner order={order} /> : <PolicyRules order={order} />}
      </div>


      <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <section className="surface-card p-6 sm:p-8">
          <h2 className="text-lg font-semibold">Tracking</h2>
          <ol className="mt-6 space-y-6">
            {steps.map((step) => (
              <li key={step.key} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-full border ${
                      step.done
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border text-muted-foreground"
                    }`}
                  >
                    {step.done ? <Check className="h-4 w-4" /> : <span className="h-2 w-2 rounded-full bg-current" />}
                  </span>
                  <span className="mt-1 w-px flex-1 bg-border last:hidden" />
                </div>
                <div className="pb-2">
                  <p className={`text-sm font-medium ${step.done ? "" : "text-muted-foreground"}`}>
                    {step.label}
                  </p>
                  <p className="text-xs text-muted-foreground">{step.description}</p>
                  <p className="mt-1 text-[11px] text-muted-foreground">
                    {new Date(step.at).toLocaleString("en-IN", {
                      day: "numeric",
                      month: "short",
                      hour: "numeric",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <Separator className="my-6" />
          <div className="grid gap-4 text-sm sm:grid-cols-2">
            <div>
              <p className="text-muted-foreground">Delivering to</p>
              <p className="mt-1 font-medium">
                {order.address.firstName} {order.address.lastName}
              </p>
              <p className="text-xs text-muted-foreground">
                {order.address.line1}, {order.address.city}, {order.address.state} {order.address.pin}
              </p>
              <p className="text-xs text-muted-foreground">{order.phone}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Payment</p>
              <p className="mt-1 font-medium capitalize">{order.payment}</p>
              {order.gift && (
                <p className="mt-2 flex items-center gap-1.5 text-xs text-primary">
                  <Gift className="h-3.5 w-3.5" /> Gift wrapped
                </p>
              )}
              {order.notes && (
                <p className="mt-2 text-xs text-muted-foreground">Note: {order.notes}</p>
              )}
            </div>
          </div>
        </section>

        <aside className="surface-card h-fit p-6">
          <h2 className="text-lg font-semibold">Order summary</h2>
          <ul className="mt-4 space-y-4">
            {order.items.map((item) => (
              <li key={`${item.slug}-${item.variantId}`} className="flex gap-3">
                <SmartImage
                  src={item.image}
                  alt={item.name}
                  width={200}
                  height={200}
                  wrapperClassName="h-14 w-14 shrink-0 rounded-lg border border-border"
                  className="h-full w-full object-cover"
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {item.variantLabel} × {item.qty}
                  </p>
                </div>
                <span className="text-sm font-medium">{formatPrice(item.price * item.qty)}</span>
              </li>
            ))}
          </ul>
          <Separator className="my-5" />
          <div className="space-y-2 text-sm">
            <Row label="Subtotal" value={formatPrice(order.totals.subtotal)} />
            {order.totals.discount > 0 && (
              <Row
                label={`Discount${order.promoCode ? ` (${order.promoCode})` : ""}`}
                value={`−${formatPrice(order.totals.discount)}`}
                accent
              />
            )}
            <Row
              label="Shipping"
              value={order.totals.shipping === 0 ? "Free" : formatPrice(order.totals.shipping)}
            />
            {order.totals.giftWrap > 0 && <Row label="Gift wrap" value={formatPrice(order.totals.giftWrap)} />}
            {order.totals.codFee > 0 && <Row label="COD handling" value={formatPrice(order.totals.codFee)} />}
          </div>
          <Separator className="my-5" />
          <div className="flex justify-between text-base font-semibold">
            <span>Total</span>
            <span>{formatPrice(order.totals.total)}</span>
          </div>
          <Button
            className="mt-6 w-full"
            variant="outline"
            onClick={() => {
              order.items.forEach((i) => cart.add(i.slug, i.variantId, i.qty));
              toast.success("Items added back to your basket");
            }}
          >
            <RotateCcw className="mr-2 h-4 w-4" /> Reorder these items
          </Button>

          <div className="mt-4 pt-3 border-t border-dashed border-border/80 text-center text-[10px] text-muted-foreground">
            <p>
              Platform & security engineered by{" "}
              <a
                href="https://www.ss40network.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground hover:text-primary transition-colors underline"
              >
                SS40 NETWORK PRIVATE LIMITED
              </a>
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Row({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className={`flex justify-between ${accent ? "text-primary" : ""}`}>
      <span className={accent ? "" : "text-muted-foreground"}>{label}</span>
      <span>{value}</span>
    </div>
  );
}
