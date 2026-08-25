import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-clove text-clove-foreground">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <img
              src="/logo.png"
              alt="Y.G Asafoetida Logo"
              className="h-10 w-10 rounded-full object-contain ring-1 ring-white/20 shadow-xs"
            />
            <p className="font-display text-2xl font-semibold">Y.G Asafoetida</p>
          </div>
          <p className="mt-3 text-sm text-clove-foreground/70">
            Compounded hing from Tirunelveli, made by the same family since 1932. Formulated
            for South Indian kitchens.
          </p>
        </div>

        <div>
          <p className="text-xs tracking-[0.2em] uppercase opacity-60">Shop</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/shop" className="opacity-80 transition-opacity hover:opacity-100">
                All products
              </Link>
            </li>
            <li>
              <Link
                to="/product/$slug"
                params={{ slug: "gold-asafoetida-powder" }}
                className="opacity-80 transition-opacity hover:opacity-100"
              >
                Gold hing powder
              </Link>
            </li>
            <li>
              <Link
                to="/product/$slug"
                params={{ slug: "gluten-free-asafoetida-powder" }}
                className="opacity-80 transition-opacity hover:opacity-100"
              >
                Gluten-free hing
              </Link>
            </li>
            <li>
              <Link
                to="/product/$slug"
                params={{ slug: "asafoetida-gold-cake" }}
                className="opacity-80 transition-opacity hover:opacity-100"
              >
                Gold asafoetida cake
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs tracking-[0.2em] uppercase opacity-60">Brand</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/story" className="opacity-80 transition-opacity hover:opacity-100">
                Our story
              </Link>
            </li>
            <li>
              <Link to="/custom-branding" className="opacity-80 transition-opacity hover:opacity-100">
                White Labelling & Branding
              </Link>
            </li>
            <li>
              <Link to="/contact" className="opacity-80 transition-opacity hover:opacity-100">
                Contact & support
              </Link>
            </li>
            <li>
              <Link to="/track" className="opacity-80 transition-opacity hover:opacity-100">
                Track an order
              </Link>
            </li>
            <li>
              <Link to="/wishlist" className="opacity-80 transition-opacity hover:opacity-100">
                Your saved list
              </Link>
            </li>
            <li>
              <Link to="/admin" className="opacity-80 transition-opacity hover:opacity-100 font-medium text-amber-200">
                Admin portal
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs tracking-[0.2em] uppercase opacity-60">Reach us</p>
          <ul className="mt-4 space-y-3 text-sm opacity-80">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>Y.G Asafoetida Works, Tirunelveli, Tamil Nadu 627001</span>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0" />
              <span>+91 462 000 1932</span>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0" />
              <span>care@ygasafoetida.in</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-clove-foreground/10">
        <div className="container-page flex flex-col gap-2 py-5 text-xs opacity-60 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} Y.G Asafoetida. All rights reserved.</span>
          <nav aria-label="Policies" className="flex flex-wrap gap-x-4 gap-y-1">
            <Link to="/policies/$slug" params={{ slug: "shipping" }} className="hover:opacity-100">
              Shipping
            </Link>
            <Link to="/policies/$slug" params={{ slug: "returns" }} className="hover:opacity-100">
              Returns & refunds
            </Link>
            <Link to="/policies/$slug" params={{ slug: "privacy" }} className="hover:opacity-100">
              Privacy
            </Link>
            <Link to="/policies/$slug" params={{ slug: "terms" }} className="hover:opacity-100">
              Terms
            </Link>
            <span>FSSAI licensed</span>
          </nav>
        </div>
      </div>
    </footer>
  );
}
