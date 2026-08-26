import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { J as History } from "../_libs/lucide-react.mjs";
import { t as SmartImage } from "./SmartImage-D8VVqI28.mjs";
import { n as formatPrice, r as getProduct } from "./products-lbbj4Auw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/RecentlyViewed-DyLm6RQU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var KEY = "yg-recently-viewed-v1";
var MAX = 6;
function read() {
	try {
		const raw = window.localStorage.getItem(KEY);
		return raw ? JSON.parse(raw) : [];
	} catch {
		return [];
	}
}
/**
* Tracks the last few product slugs the visitor opened, so we can show a
* "Recently viewed" strip. Runs entirely after hydration to avoid SSR mismatch.
*/
function useRecentlyViewed(currentSlug) {
	const [slugs, setSlugs] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		const stored = read();
		setSlugs(stored);
		if (!currentSlug) return;
		const next = [currentSlug, ...stored.filter((s) => s !== currentSlug)].slice(0, MAX);
		try {
			window.localStorage.setItem(KEY, JSON.stringify(next));
		} catch {}
	}, [currentSlug]);
	const clear = (0, import_react.useCallback)(() => {
		try {
			window.localStorage.removeItem(KEY);
		} catch {}
		setSlugs([]);
	}, []);
	return {
		slugs: slugs.filter((s) => s !== currentSlug),
		clear
	};
}
/** Horizontal strip of the last products this visitor opened. */
function RecentlyViewed({ currentSlug }) {
	const { slugs, clear } = useRecentlyViewed(currentSlug);
	const items = slugs.map(getProduct).filter((p) => Boolean(p));
	if (items.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-page py-12",
		"aria-labelledby": "recently-viewed",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				id: "recently-viewed",
				className: "flex min-w-0 items-center gap-2 text-lg font-semibold",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(History, {
					className: "h-4 w-4 shrink-0 text-primary",
					"aria-hidden": true
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "truncate",
					children: "Recently viewed"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: clear,
				className: "shrink-0 text-sm text-muted-foreground underline-offset-4 hover:underline",
				children: "Clear"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-5 flex snap-x gap-4 overflow-x-auto pb-2",
			children: items.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: "w-40 shrink-0 snap-start",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/product/$slug",
					params: { slug: p.slug },
					className: "group block",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmartImage, {
							src: p.image,
							alt: p.name,
							sizes: "160px",
							fallbackLabel: p.name,
							wrapperClassName: "aspect-square w-full rounded-xl border border-border",
							className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 line-clamp-2 text-sm font-medium",
							children: p.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: formatPrice(p.variants[0].price)
						})
					]
				})
			}, p.slug))
		})]
	});
}
//#endregion
export { useRecentlyViewed as n, RecentlyViewed as t };
