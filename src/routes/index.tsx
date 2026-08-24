import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Clock,
  Heart,
  Leaf,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ProductCard } from "@/components/site/ProductCard";
import { products, type Format } from "@/data/products";
import { TypingHeadline } from "@/components/site/TypingHeadline";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Y.G Asafoetida — Heritage Hing from Tirunelveli Since 1932" },
      {
        name: "description",
        content:
          "Artisanal compounded hing powder, gluten-free powder, slow-blooming granules, chips and pure gold cakes from Tirunelveli since 1932. Formulated for authentic South Indian cooking.",
      },
      { property: "og:title", content: "Y.G Asafoetida — Authentic Heritage Hing Since 1932" },
      {
        property: "og:description",
        content:
          "Nine artisanal hing preparations: Gold Powder, Premium Powder, Gluten-Free, Cake, Chips, Pellets, Bottle Jar, and Gift Sets.",
      },
    ],
  }),
  component: HomePage,
});

const trustPillars = [
  {
    icon: Award,
    title: "92+ Years Legacy",
    body: "Compounded in Tirunelveli since 1932.",
  },
  {
    icon: Leaf,
    title: "100% Celiac Safe",
    body: "Dedicated pure rice-starch carrier.",
  },
  {
    icon: Sparkles,
    title: "High Resin Purity",
    body: "Rich natural Ferula oleoresin concentration.",
  },
  {
    icon: Truck,
    title: "Free Shipping",
    body: "On orders above ₹499 across India.",
  },
];

const formatGuides = [
  {
    slug: "gold-asafoetida-powder",
    format: "Powder",
    title: "Gold & Premium Powder",
    tagline: "Instant Dissolving · Daily Tadka",
    description:
      "Dissolves instantly in hot ghee or sesame oil for fragrant sambar, rasam, and dal tadka.",
    bestFor: "Sambar, Rasam, Dal",
    image: "/products/100g-gold-asafoetida-powder/img-1.jpg",
    price: "From ₹175",
  },
  {
    slug: "hing-chips",
    format: "Granules & Chips",
    title: "Crunchy Pellets & Chips",
    tagline: "Slow-Blooming · Non-Burning",
    description:
      "Coarse granules that bloom slowly without scorching in curds and rice dishes.",
    bestFor: "Curd Rice, Pickles",
    image: "/products/hing-pellets/img-1.jpg",
    price: "From ₹250",
  },
  {
    slug: "asafoetida-gold-cake",
    format: "Cake & Lump",
    title: "Pure Gold Cake & Raw Lump",
    tagline: "Concentrated · Traditional Strength",
    description:
      "Solid block. Shave a pea-sized piece into oil or dissolve in warm water for festive gravies.",
    bestFor: "Festive Kuzhambu, Pickles",
    image: "/products/100g-asafoetida-gold-cake/img-1.jpg",
    price: "From ₹240",
  },
  {
    slug: "all-product-heritage-combo",
    format: "Gift & Combo",
    title: "Heritage Box & Glass Jars",
    tagline: "Collector's Sets · Gifting",
    description:
      "4-in-1 collection box with brass spoon and hermetic glass bottle jars to seal aroma.",
    bestFor: "Gourmet Gifting",
    image: "/products/all-product/img-1.jpg",
    price: "From ₹380",
  },
];

const verifiedReviews = [
  {
    rating: 5,
    title: "Authentic Paati's Rasam Aroma",
    comment:
      "Takes me straight back to my grandmother's kitchen in Tirunelveli. Standard store brands smell synthetic compared to this deep, wholesome aroma.",
    name: "Sowmya Raman",
    city: "Chennai",
    product: "Gold Powder",
  },
  {
    rating: 5,
    title: "Life-Saver for Celiac Cooking",
    comment:
      "Finding truly wheat-free hing that still has authentic strength was impossible until I found Y.G's rice-starch formula. Safe and fragrant.",
    name: "Karthik Sundaram",
    city: "Bengaluru",
    product: "Gluten-Free Hing",
  },
  {
    rating: 5,
    title: "Pellets in Curd Rice are Perfection",
    comment:
      "The Hing Pellets don't burn like fine powders do. They puff slightly in mustard oil, giving a delicate crunch and sustained aroma.",
    name: "Meenakshi V.",
    city: "Madurai",
    product: "Hing Pellets",
  },
  {
    rating: 5,
    title: "Gold Cake for Temple Kuzhambu",
    comment:
      "Shaving a small piece of the Pindi Hing into hot gingelly oil gives the authentic tangy aroma needed for traditional vathal kuzhambu.",
    name: "Dr. K. Raghavan",
    city: "Coimbatore",
    product: "Gold Cake",
  },
  {
    rating: 5,
    title: "Glass Jar Locks Aroma Completely",
    comment:
      "The airtight rubber gasket jar is gorgeous on the kitchen counter and keeps the fragrance locked in. You need only a tiny pinch.",
    name: "Anita Deshmukh",
    city: "Mumbai",
    product: "Bottle Jar",
  },
  {
    rating: 5,
    title: "Exquisite Heritage 4-in-1 Box",
    comment:
      "Ordered the combo box as a housewarming gift. The engraved brass spoon and assortment of powder, cake, chips, and pellets delighted our hosts.",
    name: "Sridhar K.",
    city: "Hyderabad",
    product: "Heritage Box",
  },
];

function HomePage() {
  const [activeCatalogTab, setActiveCatalogTab] = useState<Format | "all">("all");

  const displayedProducts = products.filter((p) => {
    if (activeCatalogTab === "all") return true;
    return p.format === activeCatalogTab;
  });

  return (
    <div className="space-y-0">
      {/* ======================================================== */}
      {/* 1. COMPACT HERO SECTION */}
      {/* ======================================================== */}
      <section className="relative overflow-hidden gradient-warm border-b border-border py-8 sm:py-12">
        <div className="container-page grid items-center gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-0.5 text-[11px] font-semibold text-primary uppercase">
              <Sparkles className="h-3 w-3" />
              <span>Tirunelveli · Est. 1932</span>
            </div>

            <TypingHeadline className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight text-foreground" />

            <p className="max-w-lg text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Nine artisanal hing formulations compounded from mountain Ferula resin and natural carriers.
              Stone-milled for the exact aroma your sambar, rasam, and tadka deserve.
            </p>

            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <Button size="sm" className="h-9 px-4 font-semibold shadow-xs gap-1.5" asChild>
                <Link to="/shop">
                  Shop All 9 Products <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Button>
              <Button size="sm" variant="outline" className="h-9 px-4 font-medium" asChild>
                <Link to="/story">Our 1932 Story</Link>
              </Button>
            </div>

            {/* Social Proof & Rating Badge */}
            <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-border/60 text-[11px] text-muted-foreground">
              <div className="flex items-center gap-1">
                <span className="flex text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-amber-500 text-amber-500" />
                  ))}
                </span>
                <span className="font-bold text-foreground">4.9 / 5</span>
              </div>
              <span>·</span>
              <span>48,000+ Kitchens</span>
              <span>·</span>
              <span className="text-primary font-medium flex items-center gap-1">
                <CheckCircle2 className="h-3 w-3" /> 100% Pure Resin
              </span>
            </div>
          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-5 relative max-w-sm mx-auto lg:max-w-none w-full">
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-md bg-secondary/20 p-2 flex items-center justify-center">
              <img
                src="/products/all-product/img-1.jpg"
                alt="Y.G Complete Heritage Asafoetida Box"
                className="w-full h-auto aspect-4/3 object-contain transition-transform duration-500 hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-background/95 backdrop-blur-md rounded-xl p-2.5 border border-border flex items-center justify-between shadow-xs">
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Featured Set</span>
                    <span className="text-[9px] px-1 bg-primary/15 text-primary rounded font-semibold">4-in-1</span>
                  </div>
                  <p className="text-xs font-semibold text-foreground">Complete Heritage Box</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-foreground">₹999</p>
                  <Button size="sm" className="h-6 text-[10px] font-semibold px-2.5" asChild>
                    <Link to="/product/$slug" params={{ slug: "all-product-heritage-combo" }}>
                      Buy Now
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Floating Top Pill */}
            <div className="absolute -top-2 -right-1 bg-primary text-primary-foreground px-2.5 py-0.5 rounded-full text-[10px] font-bold shadow-xs flex items-center gap-1">
              <Sparkles className="h-3 w-3" /> Direct from Works
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. COMPACT TRUST STRIP */}
      {/* ======================================================== */}
      <section className="border-b border-border bg-card">
        <div className="container-page grid gap-3 py-4 grid-cols-2 md:grid-cols-4">
          {trustPillars.map((t) => (
            <div key={t.title} className="flex items-center gap-2.5 p-1.5">
              <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <t.icon className="h-4 w-4 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-foreground truncate">{t.title}</p>
                <p className="text-[11px] text-muted-foreground truncate">{t.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. FOUR ARTISANAL FORMATS SHOWCASE */}
      {/* ======================================================== */}
      <section className="container-page py-8 sm:py-12">
        <SectionHeading
          eyebrow="Formulations & Uses"
          title="Engineered for Every Culinary Style"
          description="Different culinary traditions call for different bloom speeds and carrier bases."
          align="center"
        />

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {formatGuides.map((guide) => (
            <div
              key={guide.slug}
              className="surface-card group relative flex flex-col justify-between overflow-hidden rounded-xl border border-border transition-all duration-300 hover:border-primary/40 hover:shadow-sm"
            >
              <div>
                <div className="relative aspect-4/3 w-full overflow-hidden bg-secondary/35 p-2 flex items-center justify-center">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2 left-2 bg-card/90 backdrop-blur px-2 py-0.5 rounded-full text-[9px] font-bold text-foreground border border-border">
                    {guide.format}
                  </div>
                  <div className="absolute bottom-2 right-2 bg-background/90 backdrop-blur px-1.5 py-0.5 rounded text-[10px] font-bold text-primary">
                    {guide.price}
                  </div>
                </div>

                <div className="p-3 space-y-1">
                  <p className="text-[10px] font-bold text-primary uppercase tracking-wider">{guide.tagline}</p>
                  <h3 className="text-sm font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-[11px] text-muted-foreground leading-relaxed line-clamp-2">{guide.description}</p>
                </div>
              </div>

              <div className="p-3 pt-0 border-t border-border/40 mt-2 flex items-center justify-between text-[10px]">
                <span className="text-muted-foreground truncate max-w-[130px]">
                  <span className="font-semibold text-foreground">For: </span>{guide.bestFor}
                </span>
                <Link
                  to="/product/$slug"
                  params={{ slug: guide.slug }}
                  className="inline-flex items-center font-bold text-primary hover:underline shrink-0"
                >
                  View <ArrowRight className="ml-0.5 h-2.5 w-2.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. FULL CATALOG GRID WITH COMPACT TABS */}
      {/* ======================================================== */}
      <section className="border-t border-border bg-secondary/25 py-8 sm:py-12">
        <div className="container-page space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
            <div>
              <p className="eyebrow">The Complete Collection</p>
              <h2 className="mt-0.5 text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
                Authentic Y.G Heritage Range
              </h2>
              <p className="text-xs text-muted-foreground mt-0.5">
                Hand-compounded hing, roasted sathu maavu, and sacred natural sambrani resins.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-1 p-0.5 bg-muted/60 rounded-lg border border-border w-fit">
              {(
                [
                  { id: "all", label: `All (${products.length})` },
                  { id: "powder", label: "Powder" },
                  { id: "granules", label: "Granules" },
                  { id: "cake", label: "Cake" },
                  { id: "combo", label: "Gift Sets" },
                  { id: "wellness", label: "Health Mix" },
                  { id: "pooja", label: "Sambrani" },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveCatalogTab(tab.id as any)}
                  className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${
                    activeCatalogTab === tab.id
                      ? "bg-card text-foreground shadow-xs font-bold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Compact Product Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
            {displayedProducts.map((p, i) => (
              <ProductCard key={p.slug} product={p} priority={i < 5} mode="compact" />
            ))}
          </div>

          <div className="text-center pt-2">
            <Button size="sm" variant="outline" className="text-xs font-semibold" asChild>
              <Link to="/shop">
                Explore Full Shop with Filters & Sorting <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. HERITAGE STORY & STONE COMPOUNDING SPOTLIGHT */}
      {/* ======================================================== */}
      <section className="border-y border-border bg-clove text-clove-foreground py-10 sm:py-14">
        <div className="container-page grid items-center gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5 relative max-w-sm mx-auto lg:max-w-none w-full">
            <div className="aspect-4/3 rounded-2xl overflow-hidden border border-white/10 shadow-lg">
              <img
                src="/products/bottle-jar/img-1.jpg"
                alt="Y.G Heritage Glass Bottle Jar"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -left-2 bg-amber-500 text-slate-950 font-bold px-3 py-1 rounded-lg text-[10px] shadow-md">
              Estd. 1932 · Tirunelveli
            </div>
          </div>

          <div className="lg:col-span-7 space-y-3.5">
            <p className="text-[11px] font-bold tracking-widest uppercase text-amber-400">
              Preserving A 90-Year Craft
            </p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight">
              Started by Shri P. Subramanian. Mastered across three generations.
            </h2>
            <p className="text-xs sm:text-sm opacity-85 leading-relaxed">
              In 1932, near the banks of the Thamirabarani river, Shri P. Subramanian perfected the art of
              stone-compounding imported mountain ferula resin with pure starches. Today, his grandchildren
              continue the same strict formula without shortcuts.
            </p>

            <div className="grid grid-cols-3 gap-3 pt-2 border-t border-white/10 text-center">
              <div>
                <p className="text-lg sm:text-xl font-extrabold text-amber-400">1932</p>
                <p className="opacity-75 text-[10px]">Founding Year</p>
              </div>
              <div>
                <p className="text-lg sm:text-xl font-extrabold text-amber-400">100%</p>
                <p className="opacity-75 text-[10px]">Natural Ferula</p>
              </div>
              <div>
                <p className="text-lg sm:text-xl font-extrabold text-amber-400">0%</p>
                <p className="opacity-75 text-[10px]">Chemical Additives</p>
              </div>
            </div>

            <div className="pt-1">
              <Button variant="secondary" size="sm" className="font-semibold text-slate-950 text-xs" asChild>
                <Link to="/story">Read Our Full 1932 Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. AUTHENTIC VERIFIED REVIEWS GRID */}
      {/* ======================================================== */}
      <section className="container-page py-10 sm:py-14">
        <SectionHeading
          eyebrow="Customer Testimonials"
          title="Trusted Across 48,000+ Kitchens"
          description="Real verified experiences from traditional cooks and culinary enthusiasts."
          align="center"
        />

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {verifiedReviews.map((rev) => (
            <figure
              key={rev.name}
              className="surface-card flex flex-col justify-between p-4 rounded-xl border border-border shadow-xs hover:border-primary/40 transition-all"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-500">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <span className="text-[9px] px-1.5 py-0.2 bg-primary/10 text-primary font-bold rounded">
                    Verified
                  </span>
                </div>

                <h4 className="mt-2 text-xs font-bold text-foreground leading-snug">{rev.title}</h4>

                <blockquote className="mt-1.5 text-[11px] text-muted-foreground leading-relaxed line-clamp-3">
                  &ldquo;{rev.comment}&rdquo;
                </blockquote>
              </div>

              <div className="mt-3 pt-2 border-t border-border/60 flex items-center justify-between text-[10px]">
                <div>
                  <p className="font-bold text-foreground">{rev.name}</p>
                  <p className="text-muted-foreground">{rev.city}</p>
                </div>
                <span className="font-semibold text-primary">{rev.product}</span>
              </div>
            </figure>
          ))}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 7. PROMO OFFER & CLOSING CTA */}
      {/* ======================================================== */}
      <section className="container-page py-10 sm:py-14">
        <div className="relative overflow-hidden gradient-gold rounded-2xl p-6 sm:p-10 text-center text-primary-foreground shadow-lg">
          <div className="max-w-xl mx-auto space-y-3">
            <span className="inline-block px-2.5 py-0.5 bg-black/20 rounded-full text-[10px] font-bold uppercase tracking-wider">
              Special Code: HERITAGE10
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Ninety Years of Culinary Purity, One Pinch at a Time
            </h2>
            <p className="text-xs sm:text-sm opacity-90 leading-relaxed">
              Free delivery on orders above ₹499 with same-day dispatch from Tirunelveli.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-2.5">
              <Button size="sm" variant="secondary" className="font-bold text-slate-950 px-5 shadow-xs" asChild>
                <Link to="/shop">Shop the 9 Formulations</Link>
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="bg-transparent border-white/40 text-white hover:bg-white/10 text-xs"
                asChild
              >
                <Link to="/contact">Ask Specialists</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
