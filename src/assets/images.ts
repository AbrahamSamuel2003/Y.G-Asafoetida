/**
 * Responsive image registry.
 *
 * Every photo ships as WebP in 2–3 widths. We import the largest width as the
 * canonical `src` and register the smaller ones as a srcSet, so <SmartImage>
 * can serve a phone-sized file to phones without every call site repeating it.
 */
import hero640 from "@/assets/hero-hing-640.webp";
import hero1000 from "@/assets/hero-hing-1000.webp";
import hero1600 from "@/assets/hero-hing-1600.webp";
import heritage560 from "@/assets/heritage-1932-560.webp";
import heritage900 from "@/assets/heritage-1932-900.webp";
import heritage1408 from "@/assets/heritage-1932-1408.webp";
import story1a from "@/assets/story-1-shop-560.webp";
import story1b from "@/assets/story-1-shop-900.webp";
import story1c from "@/assets/story-1-shop-1200.webp";
import story2a from "@/assets/story-2-kitchen-560.webp";
import story2b from "@/assets/story-2-kitchen-900.webp";
import story2c from "@/assets/story-2-kitchen-1200.webp";
import story3a from "@/assets/story-3-today-560.webp";
import story3b from "@/assets/story-3-today-900.webp";
import story3c from "@/assets/story-3-today-1200.webp";
import powder400 from "@/assets/product-powder-400.webp";
import powder800 from "@/assets/product-powder-800.webp";
import gluten400 from "@/assets/product-glutenfree-400.webp";
import gluten800 from "@/assets/product-glutenfree-800.webp";
import granules400 from "@/assets/product-granules-400.webp";
import granules800 from "@/assets/product-granules-800.webp";
import cake400 from "@/assets/product-cake-400.webp";
import cake800 from "@/assets/product-cake-800.webp";

const registry = new Map<string, string>();

function register(sources: Array<[string, number]>): string {
  const largest = sources[sources.length - 1]![0];
  registry.set(largest, sources.map(([url, w]) => `${url} ${w}w`).join(", "));
  return largest;
}

export const heroImage = register([
  [hero640, 640],
  [hero1000, 1000],
  [hero1600, 1600],
]);

export const heritageImage = register([
  [heritage560, 560],
  [heritage900, 900],
  [heritage1408, 1408],
]);

export const storyShopImage = register([
  [story1a, 560],
  [story1b, 900],
  [story1c, 1200],
]);

export const storyKitchenImage = register([
  [story2a, 560],
  [story2b, 900],
  [story2c, 1200],
]);

export const storyTodayImage = register([
  [story3a, 560],
  [story3b, 900],
  [story3c, 1200],
]);

export const powderImage = register([
  [powder400, 400],
  [powder800, 800],
]);

export const glutenFreeImage = register([
  [gluten400, 400],
  [gluten800, 800],
]);

export const granulesImage = register([
  [granules400, 400],
  [granules800, 800],
]);

export const cakeImage = register([
  [cake400, 400],
  [cake800, 800],
]);

/** srcSet string for a registered image, if we generated width variants for it. */
export function srcSetFor(src?: string): string | undefined {
  return src ? registry.get(src) : undefined;
}
