import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { N as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as Minus, S as Plus } from "../_libs/lucide-react.mjs";
import { r as getProduct } from "./products--El95C0C.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product._slug-B8aBDZbd.js
var import_jsx_runtime = require_jsx_runtime();
function QuantityStepper({ qty, onChange, small, label = "Quantity", min = 1, max }) {
	const size = small ? "h-9 w-9" : "h-11 w-11";
	const atMin = qty <= min;
	const atMax = max !== void 0 && qty >= max;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "inline-flex items-center rounded-full border border-border bg-card",
		role: "group",
		"aria-label": label,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": `Decrease ${label.toLowerCase()}`,
				disabled: atMin,
				onClick: () => onChange(qty - 1),
				className: `${size} inline-flex items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none disabled:pointer-events-none disabled:opacity-40`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, {
					className: "h-4 w-4",
					"aria-hidden": true
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "min-w-8 text-center text-sm font-semibold tabular-nums",
				role: "status",
				"aria-live": "polite",
				"aria-label": `${label}: ${qty}`,
				children: qty
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": `Increase ${label.toLowerCase()}`,
				disabled: atMax,
				onClick: () => onChange(qty + 1),
				className: `${size} inline-flex items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none disabled:pointer-events-none disabled:opacity-40`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
					className: "h-4 w-4",
					"aria-hidden": true
				})
			})
		]
	});
}
var $$splitComponentImporter = () => import("./product._slug-D7i6FB3l.mjs");
var Route = createFileRoute("/product/$slug")({
	loader: ({ params }) => {
		const product = getProduct(params.slug);
		if (!product) throw notFound();
		return { product };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Product not found — Y.G Asafoetida" }, {
			name: "robots",
			content: "noindex"
		}] };
		const { product } = loaderData;
		const minPrice = Math.min(...product.variants.map((v) => v.price));
		const maxPrice = Math.max(...product.variants.map((v) => v.price));
		const priceText = minPrice === maxPrice ? `₹${minPrice}` : `₹${minPrice} - ₹${maxPrice}`;
		const description = `${product.name} (${priceText}) — ${product.tagline}. ${product.description.slice(0, 140)}... Compounded in Tirunelveli since 1932.`;
		const canonicalUrl = `https://ygasafoetida.in/product/${product.slug}`;
		const imageUrl = `https://ygasafoetida.in/products/${product.slug}/img-1.jpg`;
		return {
			meta: [
				{ title: `${product.name} (${priceText}) | Y.G Asafoetida Store` },
				{
					name: "description",
					content: description
				},
				{
					name: "keywords",
					content: `${product.name}, buy ${product.name} online, ${product.format} hing, Y.G Asafoetida, Tirunelveli hing price, pure asafoetida, authentic south indian spices`
				},
				{
					property: "og:type",
					content: "product"
				},
				{
					property: "og:url",
					content: canonicalUrl
				},
				{
					property: "og:title",
					content: `${product.name} — Y.G Asafoetida`
				},
				{
					property: "og:description",
					content: description
				},
				{
					property: "og:image",
					content: imageUrl
				},
				{
					property: "og:image:alt",
					content: product.name
				},
				{
					property: "product:price:amount",
					content: String(minPrice)
				},
				{
					property: "product:price:currency",
					content: "INR"
				},
				{
					property: "product:availability",
					content: product.inStock ? "in stock" : "out of stock"
				},
				{
					name: "twitter:card",
					content: "summary_large_image"
				},
				{
					name: "twitter:title",
					content: `${product.name} | Y.G Asafoetida`
				},
				{
					name: "twitter:description",
					content: description
				},
				{
					name: "twitter:image",
					content: imageUrl
				}
			],
			links: [{
				rel: "canonical",
				href: canonicalUrl
			}],
			scripts: [{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "Product",
					"@id": canonicalUrl,
					"name": product.name,
					"image": [imageUrl],
					"description": product.description,
					"sku": product.slug,
					"mpn": product.slug,
					"brand": {
						"@type": "Brand",
						"name": "Y.G Asafoetida"
					},
					"offers": {
						"@type": "AggregateOffer",
						"priceCurrency": "INR",
						"lowPrice": minPrice,
						"highPrice": maxPrice,
						"offerCount": product.variants.length,
						"availability": product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
						"itemCondition": "https://schema.org/NewCondition",
						"seller": {
							"@type": "Organization",
							"name": "Y.G Asafoetida"
						}
					},
					"aggregateRating": {
						"@type": "AggregateRating",
						"ratingValue": "4.9",
						"reviewCount": "1420",
						"bestRating": "5",
						"worstRating": "1"
					}
				})
			}, {
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
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
						},
						{
							"@type": "ListItem",
							"position": 3,
							"name": product.name,
							"item": canonicalUrl
						}
					]
				})
			}]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as n, QuantityStepper as t };
