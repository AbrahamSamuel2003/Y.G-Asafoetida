import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { $ as Grid2x2, V as List, W as LayoutGrid, h as SlidersHorizontal } from "../_libs/lucide-react.mjs";
import { i as products, t as formatLabels } from "./products--El95C0C.mjs";
import { t as ProductCard } from "./ProductCard-DCV5pOR_.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-DUy71i1r.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop-D38_27hR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var filters = [
	{
		id: "all",
		label: "All Products"
	},
	{
		id: "powder",
		label: formatLabels.powder
	},
	{
		id: "granules",
		label: formatLabels.granules
	},
	{
		id: "cake",
		label: formatLabels.cake
	},
	{
		id: "combo",
		label: formatLabels.combo
	},
	{
		id: "wellness",
		label: formatLabels.wellness
	},
	{
		id: "pooja",
		label: formatLabels.pooja
	},
	{
		id: "gf",
		label: "Gluten-free"
	}
];
function ShopPage() {
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [sort, setSort] = (0, import_react.useState)("featured");
	const [viewMode, setViewMode] = (0, import_react.useState)("compact");
	const visible = (0, import_react.useMemo)(() => {
		let list = products.filter((p) => {
			if (filter === "all") return true;
			if (filter === "gf") return p.glutenFree;
			return p.format === filter;
		});
		if (sort === "low") list = [...list].sort((a, b) => a.variants[0].price - b.variants[0].price);
		else if (sort === "high") list = [...list].sort((a, b) => b.variants[0].price - a.variants[0].price);
		else if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
		return list;
	}, [filter, sort]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-page py-8 sm:py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "The full range"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 text-3xl font-bold sm:text-4xl lg:text-5xl tracking-tight",
						children: "Shop Y.G Products"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm sm:text-base text-muted-foreground",
						children: "Artisanal hing formulations and heritage wellness products, crafted with pure traditions since 1932."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-col gap-4 border-y border-border py-3.5 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "-mx-1 flex gap-1.5 overflow-x-auto px-1 pb-1 scrollbar-none",
					children: filters.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setFilter(f.id),
						className: `min-h-9 shrink-0 rounded-full border px-3.5 text-xs font-semibold transition-all ${filter === f.id ? "border-primary bg-primary text-primary-foreground shadow-xs" : "border-border bg-card text-muted-foreground hover:text-foreground hover:bg-muted/50"}`,
						children: f.label
					}, f.id))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between sm:justify-end gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center rounded-lg border border-border bg-muted/40 p-0.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setViewMode("compact"),
								title: "Compact Small View",
								"aria-label": "Compact Small View",
								className: `flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors ${viewMode === "compact" ? "bg-card text-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Grid2x2, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden md:inline",
									children: "Compact"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setViewMode("default"),
								title: "Comfortable Grid View",
								"aria-label": "Comfortable Grid View",
								className: `flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors ${viewMode === "default" ? "bg-card text-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutGrid, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden md:inline",
									children: "Large"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setViewMode("list"),
								title: "List View",
								"aria-label": "List View",
								className: `flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors ${viewMode === "list" ? "bg-card text-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden md:inline",
									children: "List"
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { className: "h-3.5 w-3.5 text-muted-foreground hidden sm:block" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							value: sort,
							onValueChange: setSort,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
								className: "h-9 w-36 sm:w-40 text-xs",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Sort by" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "featured",
									className: "text-xs",
									children: "Featured"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "low",
									className: "text-xs",
									children: "Price: low to high"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "high",
									className: "text-xs",
									children: "Price: high to low"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "rating",
									className: "text-xs",
									children: "Top rated"
								})
							] })]
						})]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex items-center justify-between text-xs text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"Showing ",
					visible.length,
					" products"
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "capitalize text-[11px] font-mono text-muted-foreground/80",
					children: ["View: ", viewMode]
				})]
			}),
			viewMode === "compact" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4",
				children: visible.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
					product: p,
					priority: i < 4,
					mode: "compact"
				}, p.slug))
			}),
			viewMode === "default" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: visible.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
					product: p,
					priority: i < 3,
					mode: "default"
				}, p.slug))
			}),
			viewMode === "list" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 flex flex-col gap-3 sm:gap-4",
				children: visible.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
					product: p,
					priority: i < 3,
					mode: "list"
				}, p.slug))
			}),
			visible.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "py-16 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground",
					children: "Nothing matches this filter yet."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "mt-4",
					variant: "outline",
					onClick: () => setFilter("all"),
					children: "Show all products"
				})]
			}) : null
		]
	});
}
//#endregion
export { ShopPage as component };
