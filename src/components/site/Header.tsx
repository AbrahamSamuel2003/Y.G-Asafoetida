import { Suspense, lazy, useEffect, useState } from "react";
import { Link, useRouter } from "@tanstack/react-router";
import { Heart, Menu, Search, ShoppingBag, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useCart } from "@/lib/cart";
import { useWishlist } from "@/lib/wishlist";
import { ThemeSwitcher } from "@/components/site/ThemeSwitcher";

// Search palette is only pulled in when opened (click or ⌘K).
const SearchDialog = lazy(() =>
  import("@/components/site/SearchDialog").then((m) => ({ default: m.SearchDialog })),
);

const nav = [
  { to: "/shop", label: "Shop" },
  { to: "/story", label: "Our Story" },
  { to: "/contact", label: "Contact" },
  { to: "/account", label: "Orders" },
] as const;

const PROMO_MESSAGES = [
  "Free shipping across India on orders above ₹499",
  "BULK15 auto-applies — 15% off orders above ₹999",
  "Dispatched from Tirunelveli within 24 hours",
  "Compounded by the same family since 1932",
];

export function Header() {
  const cart = useCart();
  const wishlist = useWishlist();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [promoIndex, setPromoIndex] = useState(0);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setSearchOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const router = useRouter();
  useEffect(() => {
    let done = false;
    const warm = () => {
      if (done) return;
      done = true;
      for (const item of nav) void router.preloadRoute({ to: item.to });
    };
    const w = window as Window & { requestIdleCallback?: (cb: () => void) => number };
    const id = w.requestIdleCallback ? w.requestIdleCallback(warm) : window.setTimeout(warm, 1200);
    window.addEventListener("pointerdown", warm, { once: true, passive: true });
    return () => {
      window.removeEventListener("pointerdown", warm);
      if (!w.requestIdleCallback) window.clearTimeout(id);
    };
  }, [router]);

  useEffect(() => {
    const t = setInterval(() => setPromoIndex((i) => (i + 1) % PROMO_MESSAGES.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="bg-primary/95 py-1 text-center text-primary-foreground">
        <p
          key={promoIndex}
          className="animate-in fade-in slide-in-from-bottom-1 px-4 text-[10px] sm:text-[11px] font-medium tracking-[0.16em] uppercase duration-500"
          aria-live="polite"
        >
          {PROMO_MESSAGES[promoIndex]}
        </p>
      </div>

      <div className="container-page flex h-14 sm:h-16 items-center justify-between gap-3">
        <div className="flex items-center gap-2 md:hidden">
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu" className="h-9 w-9">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 p-6">
              <div className="flex items-center gap-2.5">
                <img
                  src="/logo.png"
                  alt="Y.G Asafoetida Logo"
                  className="h-8 w-8 rounded-full object-contain shadow-xs"
                />
                <SheetTitle className="font-display text-lg">Y.G Asafoetida</SheetTitle>
              </div>
              <nav className="mt-6 flex flex-col gap-1">
                {nav.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    preload="render"
                    onClick={() => setMenuOpen(false)}
                    className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary"
                    activeProps={{ className: "bg-secondary font-bold text-primary" }}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  to="/wishlist"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary"
                  activeProps={{ className: "bg-secondary font-bold text-primary" }}
                >
                  Saved list{wishlist.slugs.length ? ` (${wishlist.slugs.length})` : ""}
                </Link>
                <Link
                  to="/track"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary"
                  activeProps={{ className: "bg-secondary font-bold text-primary" }}
                >
                  Track an order
                </Link>
              </nav>

              <div className="mt-6 pt-4 border-t border-border">
                <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2">
                  Theme Palette
                </p>
                <ThemeSwitcher className="w-full justify-start" />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Brand Logo & Name */}
        <Link to="/" className="flex items-center gap-2.5 leading-none group">
          <img
            src="/logo.png"
            alt="Y.G Logo"
            className="h-9 w-9 sm:h-10 sm:w-10 rounded-full object-contain ring-1 ring-border/80 shadow-xs group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col">
            <span className="font-display text-base font-bold tracking-tight sm:text-lg text-foreground">
              Y.G Asafoetida
            </span>
            <span className="text-[9px] tracking-[0.2em] text-muted-foreground uppercase">
              Tirunelveli · Est. 1932
            </span>
          </div>
        </Link>

        {/* Main Desktop Nav */}
        <nav className="hidden items-center gap-6 lg:gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              preload="render"
              className="text-xs sm:text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-primary font-bold" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions & Theme Switcher */}
        <div className="flex items-center gap-1 sm:gap-1.5">
          <ThemeSwitcher />

          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 sm:h-9 sm:w-9"
            aria-label="Search products"
            onClick={() => setSearchOpen(true)}
          >
            <Search className="h-4 w-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 sm:h-9 sm:w-9 relative hidden sm:inline-flex"
            aria-label={`Your saved list, ${wishlist.slugs.length} items`}
            asChild
          >
            <Link to="/wishlist">
              <Heart className="h-4 w-4" />
              {wishlist.slugs.length > 0 ? (
                <span className="absolute -top-0.5 -right-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[9px] font-bold text-primary-foreground">
                  {wishlist.slugs.length}
                </span>
              ) : null}
            </Link>
          </Button>

          <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-9 sm:w-9" aria-label="Your account" asChild>
            <Link to="/account">
              <UserRound className="h-4 w-4" />
            </Link>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 sm:h-9 sm:w-9 relative"
            aria-label={`Open basket, ${cart.count} items`}
            onClick={() => cart.setOpen(true)}
          >
            <ShoppingBag className="h-4 w-4" />
            {cart.count > 0 ? (
              <span className="absolute -top-0.5 -right-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[9px] font-bold text-primary-foreground">
                {cart.count}
              </span>
            ) : null}
          </Button>
        </div>
      </div>

      {searchOpen ? (
        <Suspense fallback={null}>
          <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
        </Suspense>
      ) : null}
    </header>
  );
}
