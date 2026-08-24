import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Grid2X2, LayoutGrid, List, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ProductCard, type ProductCardMode } from "@/components/site/ProductCard";
import { formatLabels, products, type Format } from "@/data/products";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Buy Authentic Hing Online — Powders, Cakes, Health Mix & Sambrani | Y.G Asafoetida" },
      {
        name: "description",
        content:
          "Explore 11 authentic heritage products: Gold & Premium Hing Powder, Gluten-Free Hing, Solid Cakes, Granules, Traditional Sathu Maavu, and Pure Benzoin Pooja Sambrani. Fast shipping across India.",
      },
      {
        name: "keywords",
        content:
          "buy hing online, asafoetida powder price, pure gold hing cake, gluten free hing powder, traditional health mix, sathu maavu online, pure benzoin pooja sambrani, buy hing in India",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://ygasafoetida.in/shop" },
      { property: "og:title", content: "Buy Authentic Hing, Health Mix & Sambrani — Y.G Asafoetida" },
      {
        property: "og:description",
        content:
          "Explore 11 authentic heritage products: Gold & Premium Hing Powder, Gluten-Free Hing, Solid Cakes, Granules, Traditional Sathu Maavu, and Pure Benzoin Pooja Sambrani.",
      },
      { property: "og:image", content: "https://ygasafoetida.in/products/all-product/img-1.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Shop Authentic Heritage Hing — Y.G Asafoetida" },
      {
        name: "twitter:description",
        content:
          "Explore 11 authentic heritage preparations: Hing powders, solid cakes, gluten-free, health mix, and sambrani.",
      },
      { name: "twitter:image", content: "https://ygasafoetida.in/products/all-product/img-1.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://ygasafoetida.in/shop" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Y.G Asafoetida & Traditional Products Store",
          "description": "Authentic compounded hing powders, solid cakes, traditional health mix, and pooja sambrani.",
          "url": "https://ygasafoetida.in/shop",
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://ygasafoetida.in/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Shop",
                "item": "https://ygasafoetida.in/shop"
              }
            ]
          },
          "mainEntity": {
            "@type": "ItemList",
            "itemListElement": products.map((p, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": p.name,
              "url": `https://ygasafoetida.in/product/${p.slug}`,
              "image": `https://ygasafoetida.in/products/${p.slug}/img-1.jpg`
            }))
          }
        }),
      },
    ],
  }),
  component: ShopPage,
});

const filters: Array<{ id: Format | "all" | "gf"; label: string }> = [
  { id: "all", label: "All Products" },
  { id: "powder", label: formatLabels.powder },
  { id: "granules", label: formatLabels.granules },
  { id: "cake", label: formatLabels.cake },
  { id: "combo", label: formatLabels.combo },
  { id: "wellness", label: formatLabels.wellness },
  { id: "pooja", label: formatLabels.pooja },
  { id: "gf", label: "Gluten-free" },
];

function ShopPage() {
  const [filter, setFilter] = useState<Format | "all" | "gf">("all");
  const [sort, setSort] = useState("featured");
  const [viewMode, setViewMode] = useState<ProductCardMode>("compact");

  const visible = useMemo(() => {
    let list = products.filter((p) => {
      if (filter === "all") return true;
      if (filter === "gf") return p.glutenFree;
      return p.format === filter;
    });
    if (sort === "low") {
      list = [...list].sort((a, b) => a.variants[0]!.price - b.variants[0]!.price);
    } else if (sort === "high") {
      list = [...list].sort((a, b) => b.variants[0]!.price - a.variants[0]!.price);
    } else if (sort === "rating") {
      list = [...list].sort((a, b) => b.rating - a.rating);
    }
    return list;
  }, [filter, sort]);

  return (
    <div className="container-page py-8 sm:py-12">
      <header className="max-w-2xl">
        <p className="eyebrow">The full range</p>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl lg:text-5xl tracking-tight">Shop Y.G Products</h1>
        <p className="mt-2 text-sm sm:text-base text-muted-foreground">
          Artisanal hing formulations and heritage wellness products, crafted with pure traditions since 1932.
        </p>
      </header>

      {/* Filter & Toolbar */}
      <div className="mt-8 flex flex-col gap-4 border-y border-border py-3.5 sm:flex-row sm:items-center sm:justify-between">
        {/* Category Pills */}
        <div className="-mx-1 flex gap-1.5 overflow-x-auto px-1 pb-1 scrollbar-none">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={`min-h-9 shrink-0 rounded-full border px-3.5 text-xs font-semibold transition-all ${
                filter === f.id
                  ? "border-primary bg-primary text-primary-foreground shadow-xs"
                  : "border-border bg-card text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* View Switcher & Sort */}
        <div className="flex items-center justify-between sm:justify-end gap-3">
          {/* Grid/Compact/List Toggle Buttons */}
          <div className="flex items-center rounded-lg border border-border bg-muted/40 p-0.5">
            <button
              type="button"
              onClick={() => setViewMode("compact")}
              title="Compact Small View"
              aria-label="Compact Small View"
              className={`flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors ${
                viewMode === "compact"
                  ? "bg-card text-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Grid2X2 className="h-3.5 w-3.5" />
              <span className="hidden md:inline">Compact</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode("default")}
              title="Comfortable Grid View"
              aria-label="Comfortable Grid View"
              className={`flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors ${
                viewMode === "default"
                  ? "bg-card text-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <LayoutGrid className="h-3.5 w-3.5" />
              <span className="hidden md:inline">Large</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode("list")}
              title="List View"
              aria-label="List View"
              className={`flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors ${
                viewMode === "list"
                  ? "bg-card text-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <List className="h-3.5 w-3.5" />
              <span className="hidden md:inline">List</span>
            </button>
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-1.5">
            <SlidersHorizontal className="h-3.5 w-3.5 text-muted-foreground hidden sm:block" />
            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger className="h-9 w-36 sm:w-40 text-xs">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured" className="text-xs">Featured</SelectItem>
                <SelectItem value="low" className="text-xs">Price: low to high</SelectItem>
                <SelectItem value="high" className="text-xs">Price: high to low</SelectItem>
                <SelectItem value="rating" className="text-xs">Top rated</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
        <span>Showing {visible.length} products</span>
        <span className="capitalize text-[11px] font-mono text-muted-foreground/80">
          View: {viewMode}
        </span>
      </div>

      {/* Product Display Area */}
      {viewMode === "compact" && (
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
          {visible.map((p, i) => (
            <ProductCard key={p.slug} product={p} priority={i < 4} mode="compact" />
          ))}
        </div>
      )}

      {viewMode === "default" && (
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p, i) => (
            <ProductCard key={p.slug} product={p} priority={i < 3} mode="default" />
          ))}
        </div>
      )}

      {viewMode === "list" && (
        <div className="mt-4 flex flex-col gap-3 sm:gap-4">
          {visible.map((p, i) => (
            <ProductCard key={p.slug} product={p} priority={i < 3} mode="list" />
          ))}
        </div>
      )}

      {visible.length === 0 ? (
        <div className="py-16 text-center">
          <p className="text-muted-foreground">Nothing matches this filter yet.</p>
          <Button className="mt-4" variant="outline" onClick={() => setFilter("all")}>
            Show all products
          </Button>
        </div>
      ) : null}
    </div>
  );
}
