import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/data/products";

type OrderSearch = { order: string | undefined; total: number | undefined };

export const Route = createFileRoute("/order-confirmed")({
  validateSearch: (search: Record<string, unknown>): OrderSearch => ({
    order: typeof search["order"] === "string" ? search["order"] : undefined,
    total: typeof search["total"] === "number" ? search["total"] : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Order Confirmed — Y.G Asafoetida" },
      { name: "description", content: "Thank you for your Y.G Asafoetida order." },
      { property: "og:title", content: "Order Confirmed — Y.G Asafoetida" },
      { property: "og:description", content: "Your hing is on its way from Tirunelveli." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: OrderConfirmedPage,
});

function OrderConfirmedPage() {
  const { order, total } = Route.useSearch();

  return (
    <div className="container-page flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
      <CheckCircle2 className="h-14 w-14 text-primary" />
      <h1 className="mt-6 text-3xl font-semibold sm:text-4xl">Thank you — your order is in</h1>
      <p className="mt-3 max-w-lg text-muted-foreground">
        We&apos;ve emailed your confirmation. Your hing is packed and dispatched from our
        Tirunelveli works within 24 hours.
      </p>

      <div className="surface-card mt-8 w-full max-w-sm p-6 text-left">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Order number</span>
          <span className="font-semibold">{order ?? "YG000000"}</span>
        </div>
        {typeof total === "number" ? (
          <div className="mt-3 flex justify-between text-sm">
            <span className="text-muted-foreground">Amount paid</span>
            <span className="font-semibold">{formatPrice(total)}</span>
          </div>
        ) : null}
        <div className="mt-3 flex justify-between text-sm">
          <span className="text-muted-foreground">Estimated delivery</span>
          <span className="font-semibold">2–6 working days</span>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button asChild size="lg">
          <Link to="/order/$id" params={{ id: order ?? "" }}>Track your order</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link to="/shop">Continue shopping</Link>
        </Button>
        <Button asChild size="lg" variant="ghost">
          <Link to="/account">View all orders</Link>
        </Button>
      </div>
    </div>
  );
}
