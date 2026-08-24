import { useState, type FormEvent } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { PackageSearch, SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useOrders } from "@/lib/orders";

export const Route = createFileRoute("/track")({
  head: () => ({
    meta: [
      { title: "Track your order — Y.G Asafoetida" },
      {
        name: "description",
        content:
          "Enter your order number and email to follow your hing from our Tirunelveli works to your kitchen — no account needed.",
      },
      { property: "og:title", content: "Track your order — Y.G Asafoetida" },
      {
        property: "og:description",
        content: "Guest order lookup with live packing and dispatch status.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TrackPage,
});

function TrackPage() {
  const { fetchOrder } = useOrders();
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [checking, setChecking] = useState(false);

  const idInvalid = id.trim().length < 4;
  const emailInvalid = !/^\S+@\S+\.\S+$/.test(email.trim());

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setTouched(true);
    setError(null);
    if (idInvalid || emailInvalid) return;
    setChecking(true);
    
    try {
      const match = await fetchOrder(id.trim().toUpperCase(), email.trim());
      setChecking(false);
      if (!match) {
        setError(
          "We couldn't find an order with that ID and email combination. Check the order number in your confirmation email, or contact support.",
        );
        return;
      }
      void navigate({ to: "/order/$id", params: { id: match.id } });
    } catch {
      setChecking(false);
      setError("Lookup service temporarily unavailable. Please try again in a moment.");
    }
  };

  return (
    <div className="container-page py-10 sm:py-14">
      <div className="mx-auto max-w-lg">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-primary/10">
          <PackageSearch className="h-6 w-6 text-primary" aria-hidden />
        </span>
        <h1 className="mt-5 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Where's my hing?
        </h1>
        <p className="mt-3 text-muted-foreground">
          No account needed. Enter the order number from your confirmation and the email you used
          at checkout.
        </p>

        <form onSubmit={submit} className="surface-card mt-8 space-y-5 p-6" noValidate>
          <div className="space-y-2">
            <Label htmlFor="track-id">Order number</Label>
            <Input
              id="track-id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              onBlur={() => setTouched(true)}
              aria-invalid={touched && idInvalid}
              placeholder="Enter your order ID"
              autoComplete="off"
            />
            {touched && idInvalid ? (
              <p className="text-sm text-destructive">
                Order numbers look like YG123456 — check your confirmation email.
              </p>
            ) : null}
          </div>

          <div className="space-y-2">
            <Label htmlFor="track-email">Email used at checkout</Label>
            <Input
              id="track-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setTouched(true)}
              aria-invalid={touched && emailInvalid}
              placeholder="Enter the email used at checkout"
              autoComplete="email"
            />
            {touched && emailInvalid ? (
              <p className="text-sm text-destructive">Enter the email address you ordered with.</p>
            ) : null}
          </div>

          <Button type="submit" className="w-full" disabled={checking}>
            {checking ? "Looking up…" : "Track order"}
          </Button>

          {error ? (
            <div
              role="alert"
              className="flex gap-3 rounded-lg border border-destructive/30 bg-destructive/5 p-4 text-sm"
            >
              <SearchX className="mt-0.5 h-4 w-4 shrink-0 text-destructive" aria-hidden />
              <span>{error}</span>
            </div>
          ) : null}
        </form>

        <p className="mt-6 text-sm text-muted-foreground">
          Signed in on this device?{" "}
          <Link to="/account" className="font-medium text-foreground underline">
            See all your orders
          </Link>
          . Still stuck?{" "}
          <Link to="/contact" className="font-medium text-foreground underline">
            Contact support
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
