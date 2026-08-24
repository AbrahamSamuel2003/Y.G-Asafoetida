import { Link } from "@tanstack/react-router";
import { ShoppingBag, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Progress } from "@/components/ui/progress";
import { QuantityStepper } from "@/components/site/QuantityStepper";
import { formatPrice } from "@/data/products";
import { useCart } from "@/lib/cart";
import { SmartImage } from "@/components/site/SmartImage";

export function CartDrawer() {
  const cart = useCart();
  const remaining = Math.max(cart.freeShippingThreshold - cart.subtotal, 0);

  return (
    <Sheet open={cart.isOpen} onOpenChange={cart.setOpen}>
      <SheetContent className="flex w-full flex-col gap-0 p-0 sm:max-w-md">
        <SheetHeader className="border-b border-border px-5 py-4">
          <SheetTitle className="font-display text-xl">
            Your basket {cart.count > 0 ? `(${cart.count})` : ""}
          </SheetTitle>
        </SheetHeader>

        {cart.resolved.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <ShoppingBag className="h-10 w-10 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              Your basket is empty. Start with our 1932 classic hing powder.
            </p>
            <Button asChild onClick={() => cart.setOpen(false)}>
              <Link to="/shop">Shop all hing</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="border-b border-border bg-secondary/60 px-5 py-3">
              {remaining > 0 ? (
                <p className="text-xs text-muted-foreground">
                  Add <span className="font-semibold text-foreground">{formatPrice(remaining)}</span>{" "}
                  more for free shipping
                </p>
              ) : (
                <p className="text-xs font-medium text-foreground">
                  You&apos;ve unlocked free shipping
                </p>
              )}
              <Progress
                className="mt-2 h-1.5"
                value={Math.min((cart.subtotal / cart.freeShippingThreshold) * 100, 100)}
              />
            </div>

            <div className="flex-1 space-y-4 overflow-y-auto px-5 py-4">
              {cart.resolved.map((line) => (
                <div key={`${line.slug}-${line.variantId}`} className="flex gap-3">
                  <SmartImage
                    src={line.product.image}
                    alt={line.product.name}
                    width={1000}
                    height={1000}
                    wrapperClassName="h-20 w-20 shrink-0 rounded-lg border border-border"
                    className="h-full w-full object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold">{line.product.name}</p>
                    <p className="text-xs text-muted-foreground">{line.variant.label}</p>
                    <div className="mt-2 flex items-center justify-between gap-2">
                      <QuantityStepper
                        small
                        qty={line.qty}
                        onChange={(q) => cart.setQty(line.slug, line.variantId, q)}
                      />
                      <span className="text-sm font-semibold">{formatPrice(line.lineTotal)}</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    aria-label="Remove item"
                    onClick={() => cart.remove(line.slug, line.variantId)}
                    className="self-start text-muted-foreground transition-colors hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>

            <div className="space-y-3 border-t border-border px-5 py-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium">{formatPrice(cart.subtotal)}</span>
              </div>
              {cart.appliedPromo && cart.totalSavings > 0 && (
                <div className="space-y-1.5 rounded-lg bg-primary/5 px-3 py-2">
                  <div className="flex justify-between text-xs font-medium text-primary">
                    <span>
                      Promo {cart.appliedPromo.code}
                      {cart.promoIsAutomatic ? " (auto)" : ""}
                    </span>
                    <span>−{formatPrice(cart.totalSavings)}</span>
                  </div>
                  {cart.discountLines.map((line) => (
                    <div
                      key={line.label}
                      className="flex justify-between text-xs text-muted-foreground"
                    >
                      <span>{line.label}</span>
                      <span>−{formatPrice(line.amount)}</span>
                    </div>
                  ))}
                </div>
              )}


              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Shipping</span>
                <span className="font-medium">
                  {cart.shipping === 0 ? "Free" : formatPrice(cart.shipping)}
                </span>
              </div>
              <div className="flex justify-between border-t border-border pt-3 text-base font-semibold">
                <span>Total</span>
                <span>{formatPrice(cart.total)}</span>
              </div>
              <Button className="w-full" size="lg" asChild onClick={() => cart.setOpen(false)}>
                <Link to="/checkout">Checkout</Link>
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
