import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { lazy, Suspense, useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { CartProvider } from "@/lib/cart";
import { OrdersProvider } from "@/lib/orders";
import { WishlistProvider } from "@/lib/wishlist";
import { ThemeProvider } from "@/lib/theme";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CartDrawer } from "@/components/site/CartDrawer";
import { MobileCartBar } from "@/components/site/MobileCartBar";
import { Toaster } from "@/components/ui/sonner";
// The FAQ bot is a floating helper: keep it out of the first paint bundle.
const FaqBot = lazy(() =>
  import("@/components/site/FaqBot").then((m) => ({ default: m.FaqBot })),
);

/** Mounts children only once the browser is idle, after the page is interactive. */
function DeferUntilIdle({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const w = window as Window & { requestIdleCallback?: (cb: () => void) => number };
    const run = () => setReady(true);
    if (w.requestIdleCallback) {
      const id = w.requestIdleCallback(run);
      return () => (window as any).cancelIdleCallback?.(id);
    }
    const t = window.setTimeout(run, 1200);
    return () => window.clearTimeout(t);
  }, []);
  return ready ? <Suspense fallback={null}>{children}</Suspense> : null;
}

function NotFoundComponent() {
  const links = [
    { to: "/shop", label: "Shop all hing" },
    { to: "/story", label: "Our story since 1932" },
    { to: "/contact", label: "Contact support" },
    { to: "/account", label: "Your orders" },
  ] as const;

  return (
    <div className="container-page flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
      <p className="eyebrow">Est. 1932 · Tirunelveli</p>
      <h1 className="font-display mt-3 text-7xl leading-none font-bold text-primary">404</h1>
      <h2 className="mt-4 text-2xl font-semibold">This shelf is empty</h2>
      <p className="mt-2 max-w-md text-sm text-muted-foreground">
        The page you're looking for doesn't exist, or it moved while we were grinding a fresh
        batch. Try one of these instead.
      </p>
      <div className="mt-8 grid w-full max-w-lg gap-3 sm:grid-cols-2">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className="surface-card px-4 py-3 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
          >
            {l.label}
          </Link>
        ))}
      </div>
      <Link
        to="/"
        className="mt-8 inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Back to home
      </Link>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="container-page flex min-h-[60vh] flex-col items-center justify-center py-16">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground">
          This page didn&apos;t load
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Something went wrong on our end — your basket and orders are safe. Try again, or reach
          us at care@ygasafoetida.in if it keeps happening.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Y.G Asafoetida — Heritage Hing from Tirunelveli" },
      {
        name: "description",
        content:
          "Compounded and gluten-free asafoetida powder, granules and cakes, made in Tirunelveli since 1932.",
      },
      { name: "author", content: "Y.G Asafoetida" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=DM+Sans:wght@400;500;600;700&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
      <WishlistProvider>
      <OrdersProvider>
      <CartProvider>
        <div className="flex min-h-screen flex-col">
          <a
            href="#main"
            className="sr-only rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50"
          >
            Skip to main content
          </a>
          <Header />
          <main id="main" className="flex-1">
            {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
            <Outlet />
          </main>
          <Footer />
        </div>
        <CartDrawer />
        <MobileCartBar />
        <DeferUntilIdle>
          <FaqBot />
        </DeferUntilIdle>
        <Toaster position="top-center" />
      </CartProvider>
      </OrdersProvider>
      </WishlistProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
