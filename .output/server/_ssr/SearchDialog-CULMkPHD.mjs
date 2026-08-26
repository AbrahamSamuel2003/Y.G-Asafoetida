import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as cn, t as Button } from "./button-DRsC1qZi.mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { it as CornerDownLeft, p as Sparkles, v as Search } from "../_libs/lucide-react.mjs";
import { n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-CiapfthD.mjs";
import { t as SmartImage } from "./SmartImage-D8VVqI28.mjs";
import { a as searchProducts, i as products, n as formatPrice } from "./products--El95C0C.mjs";
import { t as _e } from "../_libs/cmdk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SearchDialog-CULMkPHD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Command$1 = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e, {
	ref,
	className: cn("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", className),
	...props
}));
Command$1.displayName = _e.displayName;
var CommandInput = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	className: "flex items-center border-b px-3",
	"cmdk-input-wrapper": "",
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Input, {
		ref,
		className: cn("flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	})]
}));
CommandInput.displayName = _e.Input.displayName;
var CommandList = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.List, {
	ref,
	className: cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className),
	...props
}));
CommandList.displayName = _e.List.displayName;
var CommandEmpty = import_react.forwardRef((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Empty, {
	ref,
	className: "py-6 text-center text-sm",
	...props
}));
CommandEmpty.displayName = _e.Empty.displayName;
var CommandGroup = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Group, {
	ref,
	className: cn("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", className),
	...props
}));
CommandGroup.displayName = _e.Group.displayName;
var CommandSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Separator, {
	ref,
	className: cn("-mx-1 h-px bg-border", className),
	...props
}));
CommandSeparator.displayName = _e.Separator.displayName;
var CommandItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Item, {
	ref,
	className: cn("relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", className),
	...props
}));
CommandItem.displayName = _e.Item.displayName;
var CommandShortcut = ({ className, ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("ml-auto text-xs tracking-widest text-muted-foreground", className),
		...props
	});
};
CommandShortcut.displayName = "CommandShortcut";
var recipes = [
	{
		slug: "tirunelveli-rasam",
		title: "Tirunelveli pepper rasam",
		blurb: "The clear, peppery rasam our family drinks at the end of every meal. The hing goes in at the tempering, never earlier.",
		region: "Tirunelveli",
		minutes: 25,
		serves: 4,
		difficulty: "Easy",
		heroSlug: "gold-asafoetida-powder",
		uses: ["gold-asafoetida-powder"],
		ingredients: [
			"1 lime-sized ball of tamarind, soaked in 2 cups warm water",
			"2 tomatoes, crushed by hand",
			"1 tsp black pepper + 1 tsp cumin, coarsely pounded",
			"1/4 tsp Y.G Gold Asafoetida Powder",
			"2 tsp ghee, 1 tsp mustard seeds, 2 dried red chillies, curry leaves",
			"Turmeric, salt, coriander leaves"
		],
		steps: [
			"Strain the tamarind water into a pot, add tomatoes, turmeric and salt, and simmer for 8 minutes until the raw smell goes.",
			"Add the pounded pepper-cumin and 1 more cup of water. Heat until it froths at the edges — do not let it boil hard.",
			"Heat ghee in a small pan, crackle the mustard, add chillies and curry leaves, then switch off and stir in the hing.",
			"Pour the tempering over the rasam, cover for 2 minutes, and finish with coriander leaves."
		],
		tip: "Adding hing to ghee off the flame keeps the aroma; burnt hing turns bitter."
	},
	{
		slug: "curd-rice-with-granules",
		title: "Temple-style curd rice",
		blurb: "Soft rice, cold curd, and crushed hing granules that bloom slowly as it rests. The reason granules exist.",
		region: "Madurai",
		minutes: 20,
		serves: 3,
		difficulty: "Easy",
		heroSlug: "hing-pellets",
		uses: ["hing-pellets"],
		ingredients: [
			"1 cup rice, cooked soft and mashed while warm",
			"1.5 cups thick curd + 1/4 cup milk",
			"4–5 Y.G Hing Pellets, crushed between the fingers",
			"1 tsp oil, mustard seeds, urad dal, green chilli, ginger, curry leaves",
			"Salt, grated carrot, pomegranate to finish"
		],
		steps: [
			"Mash the warm rice with milk so it stays creamy even after chilling.",
			"Cool fully, then fold in curd and salt. Never add curd to hot rice.",
			"Temper mustard, urad dal, chilli, ginger and curry leaves; crush the hing granules into the hot oil for 3 seconds.",
			"Stir the tempering through and rest for 15 minutes before serving."
		],
		tip: "Granules keep releasing aroma as the curd rice sits — pack it for a journey and it only gets better."
	},
	{
		slug: "vathal-kuzhambu",
		title: "Vathal kuzhambu",
		blurb: "A dark, tangy gravy built on sesame oil and hing. This is where the gold cake earns its keep.",
		region: "Kongunadu",
		minutes: 35,
		serves: 4,
		difficulty: "Medium",
		heroSlug: "asafoetida-gold-cake",
		uses: ["asafoetida-gold-cake", "gold-asafoetida-powder"],
		ingredients: [
			"3 tbsp gingelly (sesame) oil",
			"A pea-sized piece scraped from a YG Gold Asafoetida Cake",
			"1 tbsp sambar powder, 1 tsp rice flour",
			"Manathakkali or sundakkai vathal, a handful",
			"Thick tamarind extract from a lemon-sized ball, jaggery, salt"
		],
		steps: [
			"Warm the sesame oil, crackle mustard and fenugreek, then fry the vathal until it darkens.",
			"Scrape in the hing cake and let it dissolve in the oil for 10 seconds.",
			"Add tamarind extract, sambar powder, salt and a small piece of jaggery. Simmer 20 minutes until oil floats on top.",
			"Slurry the rice flour in water, stir in, and cook 2 more minutes to thicken."
		],
		tip: "This gravy keeps for four days and deepens each day — make it on Sunday for the week."
	},
	{
		slug: "gluten-free-sambar",
		title: "Everyday gluten-free sambar",
		blurb: "The same weekday sambar, made with our rice-starch hing so a gluten-free kitchen loses nothing.",
		region: "Tamil Nadu",
		minutes: 40,
		serves: 5,
		difficulty: "Easy",
		heroSlug: "gluten-free-hing-powder",
		uses: ["gluten-free-hing-powder"],
		ingredients: [
			"3/4 cup toor dal, pressure-cooked soft",
			"Drumstick, brinjal, shallots — 2 cups mixed",
			"2 tbsp sambar powder, tamarind extract, turmeric, salt",
			"1/4 tsp YG Gluten-Free Hing Powder",
			"Ghee or oil, mustard, curry leaves, coriander"
		],
		steps: [
			"Boil the vegetables in tamarind water with turmeric, salt and sambar powder until just tender.",
			"Whisk in the cooked dal and simmer 10 minutes so the flavours settle.",
			"Temper mustard and curry leaves in ghee, stir in the gluten-free hing off the flame, and pour over.",
			"Rest for 10 minutes before serving with rice and a spoon of ghee."
		],
		tip: "Rice-starch hing dissolves faster than wheat-based hing — a quarter teaspoon is plenty."
	}
];
var SUGGESTIONS = [
	"Gluten-free",
	"Curd rice",
	"Gift box",
	"Cake",
	"Granules"
];
/**
* Sitewide search. Opens from the header button or Cmd/Ctrl+K, matches products
* and recipes, and always offers a recovery path when nothing matches.
*/
function SearchDialog({ open, onOpenChange }) {
	const navigate = useNavigate();
	const [query, setQuery] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (!open) setQuery("");
	}, [open]);
	const productHits = (0, import_react.useMemo)(() => query.trim() ? searchProducts(query) : products.filter((p) => p.bestseller), [query]);
	const recipeHits = (0, import_react.useMemo)(() => {
		const q = query.trim().toLowerCase();
		if (!q) return recipes.slice(0, 2);
		return recipes.filter((r) => `${r.title} ${r.blurb} ${r.region}`.toLowerCase().includes(q));
	}, [query]);
	const go = (to, params) => {
		onOpenChange(false);
		navigate({
			to,
			params
		});
	};
	const nothing = productHits.length === 0 && recipeHits.length === 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "overflow-hidden p-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "sr-only",
					children: "Search Y.G Asafoetida"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
					className: "sr-only",
					children: "Find hing, gift boxes and recipes"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Command$1, {
					shouldFilter: false,
					className: "[&_[cmdk-input]]:h-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandInput, {
						placeholder: "Search products and recipes",
						value: query,
						onValueChange: setQuery
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandList, {
						className: "max-h-[60vh]",
						children: [
							nothing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandEmpty, {
								className: "py-8",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "px-6 text-center",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "font-medium",
											children: [
												"No match for “",
												query,
												"”"
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm text-muted-foreground",
											children: "Try a format or a dish — or browse the full range."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-4 flex flex-wrap justify-center gap-2",
											children: SUGGESTIONS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												variant: "outline",
												size: "sm",
												onClick: () => setQuery(s),
												children: s
											}, s))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											className: "mt-4",
											size: "sm",
											onClick: () => go("/shop"),
											children: "Browse all products"
										})
									]
								})
							}) : null,
							productHits.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandGroup, {
								heading: query.trim() ? "Products" : "Most loved",
								children: productHits.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandItem, {
									value: p.slug,
									onSelect: () => go("/product/$slug", { slug: p.slug }),
									className: "gap-3 py-2.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmartImage, {
											src: p.image,
											alt: "",
											wrapperClassName: "h-11 w-11 shrink-0 rounded-md",
											className: "h-full w-full object-cover"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "min-w-0 flex-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block truncate text-sm font-medium",
												children: p.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block truncate text-xs text-muted-foreground",
												children: p.tagline
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "shrink-0 text-sm font-semibold",
											children: formatPrice(p.variants[0].price)
										})
									]
								}, p.slug))
							}) : null,
							recipeHits.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandGroup, {
								heading: "Recipes",
								children: recipeHits.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandItem, {
									value: `recipe-${r.slug}`,
									onSelect: () => go("/recipes/$slug", { slug: r.slug }),
									className: "gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 shrink-0 text-primary" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "min-w-0 flex-1 truncate",
											children: r.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "shrink-0 text-xs text-muted-foreground",
											children: [r.minutes, " min"]
										})
									]
								}, r.slug))
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandGroup, {
								heading: "Go to",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandItem, {
									value: "shop-all",
									onSelect: () => go("/shop"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "mr-2 h-4 w-4" }), " Shop the full range"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandItem, {
									value: "track-order",
									onSelect: () => go("/track"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CornerDownLeft, { className: "mr-2 h-4 w-4" }), " Track an order"]
								})]
							})
						]
					})]
				})
			]
		})
	});
}
//#endregion
export { SearchDialog };
