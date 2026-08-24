import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Search, CornerDownLeft, Sparkles } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { formatPrice, products, searchProducts } from "@/data/products";
import { recipes } from "@/data/recipes";
import { SmartImage } from "@/components/site/SmartImage";

const SUGGESTIONS = ["Gluten-free", "Curd rice", "Gift box", "Cake", "Granules"];

/**
 * Sitewide search. Opens from the header button or Cmd/Ctrl+K, matches products
 * and recipes, and always offers a recovery path when nothing matches.
 */
export function SearchDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  const productHits = useMemo(
    () => (query.trim() ? searchProducts(query) : products.filter((p) => p.bestseller)),
    [query],
  );

  const recipeHits = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return recipes.slice(0, 2);
    return recipes.filter((r) => `${r.title} ${r.blurb} ${r.region}`.toLowerCase().includes(q));
  }, [query]);

  const go = (to: string, params?: Record<string, string>) => {
    onOpenChange(false);
    void navigate({ to, params } as never);
  };

  const nothing = productHits.length === 0 && recipeHits.length === 0;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="overflow-hidden p-0">
        <DialogTitle className="sr-only">Search Y.G Asafoetida</DialogTitle>
        <DialogDescription className="sr-only">
          Find hing, gift boxes and recipes
        </DialogDescription>
        <Command shouldFilter={false} className="[&_[cmdk-input]]:h-12">
      <CommandInput
        placeholder="Search products and recipes"
        value={query}
        onValueChange={setQuery}
      />
      <CommandList className="max-h-[60vh]">
        {nothing ? (
          <CommandEmpty className="py-8">
            <div className="px-6 text-center">
              <p className="font-medium">No match for “{query}”</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Try a format or a dish — or browse the full range.
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {SUGGESTIONS.map((s) => (
                  <Button key={s} variant="outline" size="sm" onClick={() => setQuery(s)}>
                    {s}
                  </Button>
                ))}
              </div>
              <Button className="mt-4" size="sm" onClick={() => go("/shop")}>
                Browse all products
              </Button>
            </div>
          </CommandEmpty>
        ) : null}

        {productHits.length ? (
          <CommandGroup heading={query.trim() ? "Products" : "Most loved"}>
            {productHits.map((p) => (
              <CommandItem
                key={p.slug}
                value={p.slug}
                onSelect={() => go("/product/$slug", { slug: p.slug })}
                className="gap-3 py-2.5"
              >
                <SmartImage
                  src={p.image}
                  alt=""
                  wrapperClassName="h-11 w-11 shrink-0 rounded-md"
                  className="h-full w-full object-cover"
                />
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-medium">{p.name}</span>
                  <span className="block truncate text-xs text-muted-foreground">{p.tagline}</span>
                </span>
                <span className="shrink-0 text-sm font-semibold">
                  {formatPrice(p.variants[0]!.price)}
                </span>
              </CommandItem>
            ))}
          </CommandGroup>
        ) : null}

        {recipeHits.length ? (
          <CommandGroup heading="Recipes">
            {recipeHits.map((r) => (
              <CommandItem
                key={r.slug}
                value={`recipe-${r.slug}`}
                onSelect={() => go("/recipes/$slug", { slug: r.slug })}
                className="gap-3"
              >
                <Sparkles className="h-4 w-4 shrink-0 text-primary" />
                <span className="min-w-0 flex-1 truncate">{r.title}</span>
                <span className="shrink-0 text-xs text-muted-foreground">{r.minutes} min</span>
              </CommandItem>
            ))}
          </CommandGroup>
        ) : null}

        <CommandGroup heading="Go to">
          <CommandItem value="shop-all" onSelect={() => go("/shop")}>
            <Search className="mr-2 h-4 w-4" /> Shop the full range
          </CommandItem>
          <CommandItem value="track-order" onSelect={() => go("/track")}>
            <CornerDownLeft className="mr-2 h-4 w-4" /> Track an order
          </CommandItem>
        </CommandGroup>
      </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
