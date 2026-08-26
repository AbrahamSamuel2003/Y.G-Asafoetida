import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as cn } from "./button-DRsC1qZi.mjs";
import { q as ImageOff, x as RefreshCw } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SmartImage-D8VVqI28.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var story_1_shop_560_default = "/assets/story-1-shop-560-C9AOS04y.webp";
var story_1_shop_900_default = "/assets/story-1-shop-900-C1hKWfWP.webp";
var story_1_shop_1200_default = "/assets/story-1-shop-1200-KH6P15Oz.webp";
var story_2_kitchen_560_default = "/assets/story-2-kitchen-560-BwiFpku4.webp";
var story_2_kitchen_900_default = "/assets/story-2-kitchen-900-D9xPH5h3.webp";
var story_2_kitchen_1200_default = "/assets/story-2-kitchen-1200-B0XrR51h.webp";
var story_3_today_560_default = "/assets/story-3-today-560-BqodebNV.webp";
var story_3_today_900_default = "/assets/story-3-today-900-CoQyFYq-.webp";
var story_3_today_1200_default = "/assets/story-3-today-1200-COgTFLEH.webp";
var product_powder_400_default = "/assets/product-powder-400-BzZ6QhiJ.webp";
var product_powder_800_default = "/assets/product-powder-800-DcdU81cH.webp";
var product_glutenfree_400_default = "/assets/product-glutenfree-400-dtzpdwMq.webp";
var product_glutenfree_800_default = "/assets/product-glutenfree-800-BRbglSHw.webp";
var product_granules_400_default = "/assets/product-granules-400-D98wWv4R.webp";
var product_granules_800_default = "/assets/product-granules-800-WWT9xaKD.webp";
var product_cake_400_default = "/assets/product-cake-400-IyNQ7Qca.webp";
var product_cake_800_default = "/assets/product-cake-800-D7p8IG0h.webp";
var registry = /* @__PURE__ */ new Map();
function register(sources) {
	const largest = sources[sources.length - 1][0];
	registry.set(largest, sources.map(([url, w]) => `${url} ${w}w`).join(", "));
	return largest;
}
var storyShopImage = register([
	[story_1_shop_560_default, 560],
	[story_1_shop_900_default, 900],
	[story_1_shop_1200_default, 1200]
]);
var heritageImage = storyShopImage;
var storyKitchenImage = register([
	[story_2_kitchen_560_default, 560],
	[story_2_kitchen_900_default, 900],
	[story_2_kitchen_1200_default, 1200]
]);
var storyTodayImage = register([
	[story_3_today_560_default, 560],
	[story_3_today_900_default, 900],
	[story_3_today_1200_default, 1200]
]);
register([[product_powder_400_default, 400], [product_powder_800_default, 800]]);
register([[product_glutenfree_400_default, 400], [product_glutenfree_800_default, 800]]);
register([[product_granules_400_default, 400], [product_granules_800_default, 800]]);
register([[product_cake_400_default, 400], [product_cake_800_default, 800]]);
/** srcSet string for a registered image, if we generated width variants for it. */
function srcSetFor(src) {
	return src ? registry.get(src) : void 0;
}
/**
* Image with a shimmer placeholder while loading and a branded fallback tile
* when the file is missing or the network drops. Prevents layout shift by
* keeping the wrapper sized by the caller.
*/
function SmartImage({ src, alt, className, wrapperClassName, width, height, loading = "lazy", sizes, priority, fallbackLabel }) {
	const [state, setState] = (0, import_react.useState)(src ? "loading" : "error");
	const [attempt, setAttempt] = (0, import_react.useState)(0);
	const imgRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		setState(src ? "loading" : "error");
	}, [src]);
	const retry = (0, import_react.useCallback)(() => {
		setState("loading");
		setAttempt((a) => a + 1);
	}, []);
	const attach = (0, import_react.useCallback)((node) => {
		imgRef.current = node;
		if (node?.complete) setState(node.naturalWidth > 0 ? "ready" : "error");
	}, []);
	(0, import_react.useEffect)(() => {
		const node = imgRef.current;
		if (node?.complete) setState(node.naturalWidth > 0 ? "ready" : "error");
	}, [src]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative overflow-hidden bg-white", wrapperClassName),
		children: [state === "loading" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			className: "absolute inset-0 animate-pulse bg-[linear-gradient(110deg,var(--secondary)_20%,var(--muted)_45%,var(--secondary)_70%)]"
		}) : null, state === "error" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0 flex flex-col items-center justify-center gap-2 bg-secondary px-3 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageOff, {
					className: "h-5 w-5 text-muted-foreground",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] leading-tight font-medium tracking-wide text-muted-foreground uppercase",
					children: fallbackLabel ?? "Image unavailable"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: retry,
					className: "inline-flex items-center gap-1 rounded-full border border-border bg-background px-2.5 py-1 text-[11px] font-medium text-foreground transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, {
						className: "h-3 w-3",
						"aria-hidden": "true"
					}), "Retry"]
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			ref: attach,
			src,
			alt,
			...srcSetFor(src) ? {
				srcSet: srcSetFor(src),
				sizes: sizes ?? "100vw"
			} : {},
			...width ? { width } : {},
			...height ? { height } : {},
			loading: priority ? "eager" : loading,
			decoding: priority ? "sync" : "async",
			...priority ? { fetchPriority: "high" } : {},
			onLoad: () => setState("ready"),
			onError: () => setState("error"),
			className: cn(priority ? "opacity-100" : "transition-opacity duration-300", !priority && state !== "ready" ? "opacity-0" : "opacity-100", className)
		}, attempt)]
	});
}
//#endregion
export { storyTodayImage as a, storyShopImage as i, heritageImage as n, storyKitchenImage as r, SmartImage as t };
