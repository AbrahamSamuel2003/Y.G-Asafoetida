import { createFileRoute, Link } from "@tanstack/react-router";
import { BellRing, Heart, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { SmartImage } from "@/components/site/SmartImage";
import { RecentlyViewed } from "@/components/site/RecentlyViewed";
import { formatPrice, getProduct } from "@/data/products";
import { useCart } from "@/lib/cart";
import { useWishlist } from "@/lib/wishlist";

export const Route = createFileRoute("/wishlist")({
  head: () => ({
    meta: [
      { title: "Your kitchen list — Y.G Asafoetida" },
      {
        name: "description",
        content:
          "The hing you saved for later, plus the back-in-stock alerts you asked for. Move anything to your basket in one tap.",
      },
      { property: "og:title", content: "Your kitchen list — Y.G Asafoetida" },
      {
        property: "og:description",
        content: "Saved hing, gift boxes and back-in-stock alerts, ready when you are.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WishlistPage,
});

function WishlistPage() {
  const { slugs, remove, alerts } = useWishlist();
  const { add } = useCart();
  const items = slugs.map(getProduct).filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <div className="container-page py-10 sm:py-14">
      <p className="eyebrow">Saved by you</p>
      <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        Your kitchen list
      </h1>
      <p className="mt-3 max-w-xl text-muted-foreground">
        Nothing here expires and nothing is shared. Move anything to the basket when you're ready
        to cook.
      </p>

      {items.length === 0 ? (
        <div className="surface-card mt-8 flex flex-col items-center px-6 py-14 text-center">
          <span className="grid h-14 w-14 place-items-center rounded-full bg-secondary">
            <Heart className="h-6 w-6 text-muted-foreground" aria-hidden />
          </span>
          <h2 className="mt-4 text-lg font-semibold">Your list is empty</h2>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            Tap the heart on any product to keep it here — handy when you're deciding between the
            powder, the granules and the cake.
          </p>
          <Button asChild className="mt-6">
            <Link to="/shop">Browse the range</Link>
          </Button>
        </div>
      ) : (
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => {
            const variant = p.variants[0]!;
            const soldOut = p.inStock === false;
            return (
              <li key={p.slug} className="surface-card flex gap-4 p-4">
                <Link to="/product/$slug" params={{ slug: p.slug }} className="shrink-0">
                  <SmartImage
                    src={p.image}
                    alt={p.name}
                    sizes="96px"
                    fallbackLabel={p.name}
                    wrapperClassName="h-24 w-24 rounded-lg"
                    className="h-full w-full object-cover"
                  />
                </Link>
                <div className="flex min-w-0 flex-1 flex-col">
                  <Link
                    to="/product/$slug"
                    params={{ slug: p.slug }}
                    className="line-clamp-2 font-medium hover:text-primary"
                  >
                    {p.name}
                  </Link>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {formatPrice(variant.price)} · {variant.label}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-3">
                    <Button
                      size="sm"
                      disabled={soldOut}
                      onClick={() => add(p.slug, variant.id)}
                    >
                      {soldOut ? "Sold out" : "Add to basket"}
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => {
                        remove(p.slug);
                        toast(`${p.name} removed from your list`);
                      }}
                      aria-label={`Remove ${p.name} from your list`}
                    >
                      <Trash2 className="h-4 w-4" aria-hidden />
                    </Button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}

      {alerts.length > 0 ? (
        <section className="mt-14" aria-labelledby="alerts">
          <h2 id="alerts" className="flex items-center gap-2 text-lg font-semibold">
            <BellRing className="h-4 w-4 text-primary" aria-hidden /> Back-in-stock alerts
          </h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {alerts.map((a) => {
              const p = getProduct(a.slug);
              return (
                <li
                  key={a.slug}
                  className="surface-card flex items-center justify-between gap-3 p-4 text-sm"
                >
                  <span className="min-w-0">
                    <span className="block truncate font-medium">{p?.name ?? a.slug}</span>
                    <span className="block truncate text-muted-foreground">
                      We'll message {a.contact}
                    </span>
                  </span>
                  <span className="shrink-0 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    Watching
                  </span>
                </li>
              );
            })}
          </ul>
        </section>
      ) : null}

      <RecentlyViewed />
    </div>
  );
}
