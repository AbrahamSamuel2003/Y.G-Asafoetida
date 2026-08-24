import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Package, RotateCcw, Trash2, UserRound } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { formatPrice } from "@/data/products";
import { useCart } from "@/lib/cart";
import { currentStatus, resolutionEligibility, useOrders } from "@/lib/orders";
import { OrderResolutionDialog, ResolutionBanner } from "@/components/site/OrderResolutionDialog";
import { SmartImage } from "@/components/site/SmartImage";
import { PolicyRules } from "@/components/site/PolicyRules";
import { SupportTicketDialog } from "@/components/site/SupportTicketDialog";

export const Route = createFileRoute("/account")({
  head: () => ({
    meta: [
      { title: "Your Account — Y.G Asafoetida" },
      {
        name: "description",
        content: "View your Y.G Asafoetida orders, track deliveries, reorder hing and manage saved addresses.",
      },
      { property: "og:title", content: "Your Account — Y.G Asafoetida" },
      { property: "og:description", content: "Orders, tracking and saved addresses in one place." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AccountPage,
});

function AccountPage() {
  const { profile, signIn, signOut, orders, addresses, removeAddress, setDefaultAddress } = useOrders();
  const cart = useCart();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="container-page py-10 sm:py-14">
      <h1 className="text-3xl font-semibold sm:text-4xl">Your account</h1>
      <p className="mt-2 text-muted-foreground">
        Orders, tracking and saved addresses — kept on this device so guest checkout stays fast.
      </p>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1.6fr]">
        <div className="space-y-6">
          <section className="surface-card p-6">
            <h2 className="flex items-center gap-2 text-lg font-semibold">
              <UserRound className="h-5 w-5 text-primary" /> Profile
            </h2>
            {profile ? (
              <div className="mt-4 space-y-1 text-sm">
                <p className="font-medium">{profile.name || "Guest"}</p>
                <p className="text-muted-foreground">{profile.email}</p>
                <p className="text-muted-foreground">{profile.phone}</p>
                <Button variant="outline" size="sm" className="mt-4" onClick={signOut}>
                  Sign out
                </Button>
              </div>
            ) : (
              <form
                className="mt-4 space-y-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  signIn({ name, email, phone });
                  toast.success("You're signed in on this device");
                }}
              >
                <div className="space-y-2">
                  <Label htmlFor="acc-name">Name</Label>
                  <Input id="acc-name" value={name} onChange={(e) => setName(e.target.value)} required className="min-h-11" placeholder="Enter your name" autoComplete="name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="acc-email">Email</Label>
                  <Input id="acc-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="min-h-11" placeholder="Enter your email address" autoComplete="email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="acc-phone">Phone</Label>
                  <Input id="acc-phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required className="min-h-11" placeholder="Enter your 10-digit mobile number" autoComplete="tel" />
                </div>
                <Button type="submit" className="w-full">
                  Save profile
                </Button>
              </form>
            )}
          </section>

          <section className="surface-card p-6">
            <h2 className="flex items-center gap-2 text-lg font-semibold">
              <MapPin className="h-5 w-5 text-primary" /> Saved addresses
            </h2>
            {addresses.length === 0 ? (
              <p className="mt-3 text-sm text-muted-foreground">
                Addresses you save at checkout appear here.
              </p>
            ) : (
              <ul className="mt-4 space-y-3">
                {addresses.map((a) => (
                  <li key={a.id} className="rounded-lg border border-border p-3 text-sm">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-medium">
                          {a.firstName} {a.lastName}
                          {a.isDefault && (
                            <span className="ml-2 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] tracking-wide text-primary uppercase">
                              Default
                            </span>
                          )}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {a.line1}, {a.city}, {a.state} {a.pin}
                        </p>
                        <p className="text-xs text-muted-foreground">{a.phone}</p>
                      </div>
                      <button
                        type="button"
                        aria-label="Remove address"
                        onClick={() => removeAddress(a.id)}
                        className="text-muted-foreground hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    {!a.isDefault && (
                      <button
                        type="button"
                        onClick={() => setDefaultAddress(a.id)}
                        className="mt-2 text-xs text-primary underline"
                      >
                        Make default
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>

        <section className="surface-card p-6">
          <h2 className="flex items-center gap-2 text-lg font-semibold">
            <Package className="h-5 w-5 text-primary" /> Order history
          </h2>
          {orders.length === 0 ? (
            <div className="mt-4">
              <p className="text-sm text-muted-foreground">No orders yet.</p>
              <Button asChild className="mt-4">
                <Link to="/shop">Start shopping</Link>
              </Button>
            </div>
          ) : (
            <ul className="mt-4 space-y-4">
              {orders.map((order) => {
                const status = currentStatus(order);
                const eligibility = resolutionEligibility(order);
                return (
                  <li key={order.id} className="rounded-xl border border-border p-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <p className="font-semibold">{order.id}</p>
                        <p className="text-xs text-muted-foreground">
                          {new Date(order.createdAt).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}{" "}
                          · {order.items.reduce((n, i) => n + i.qty, 0)} items
                        </p>
                      </div>
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {status.label}
                      </span>
                    </div>
                    <Separator className="my-3" />
                    <div className="flex flex-wrap items-center gap-3">
                      {order.items.slice(0, 4).map((item) => (
                        <SmartImage
                          key={`${item.slug}-${item.variantId}`}
                          src={item.image}
                          alt={item.name}
                          width={200}
                          height={200}
                          wrapperClassName="h-12 w-12 shrink-0 rounded-md border border-border"
                          className="h-full w-full object-cover"
                        />
                      ))}
                      <span className="ml-auto text-sm font-semibold">
                        {formatPrice(order.totals.total)}
                      </span>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Button asChild size="sm" variant="outline">
                        <Link to="/order/$id" params={{ id: order.id }}>
                          Track order
                        </Link>
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => {
                          order.items.forEach((i) => cart.add(i.slug, i.variantId, i.qty));
                          toast.success("Items added back to your basket");
                        }}
                      >
                        <RotateCcw className="mr-1.5 h-4 w-4" /> Reorder
                      </Button>
                      <OrderResolutionDialog order={order} mode="cancellation" size="sm" />
                      <OrderResolutionDialog order={order} mode="refund" size="sm" />
                      <SupportTicketDialog order={order} size="sm" variant="ghost" label="Get help" />
                    </div>
                    {order.resolution ? (
                      <div className="mt-3">
                        <ResolutionBanner order={order} />
                      </div>
                    ) : (
                      <details className="mt-2">
                        <summary className="cursor-pointer text-xs text-muted-foreground">
                          {eligibility.reason} · see the exact rules
                        </summary>
                        <PolicyRules order={order} className="mt-2" />
                      </details>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}
