globalThis.__nitro_main__ = import.meta.url;
import { i as serve, r as NodeResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
import { i as toEventHandler, n as defineHandler, o as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { i as withoutTrailingSlash, n as joinURL, r as withLeadingSlash, t as decodePath } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"61bb-YRgf3sjok5YXHMpUlQEAIyY8Ep0\"",
		"mtime": "2026-08-24T05:52:08.225Z",
		"size": 25019,
		"path": "../public/favicon.png"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"6a-Gx5VT6ofJudSGagGxdLOgDBMRzM\"",
		"mtime": "2026-08-26T10:25:06.610Z",
		"size": 106,
		"path": "../public/robots.txt"
	},
	"/logo.png": {
		"type": "image/png",
		"etag": "\"61bb-YRgf3sjok5YXHMpUlQEAIyY8Ep0\"",
		"mtime": "2026-08-24T05:52:08.311Z",
		"size": 25019,
		"path": "../public/logo.png"
	},
	"/sitemap.xml": {
		"type": "application/xml",
		"etag": "\"11ab-Ij9dkqvF7FZOh3Emw1HdGVHPS80\"",
		"mtime": "2026-08-25T09:27:42.398Z",
		"size": 4523,
		"path": "../public/sitemap.xml"
	},
	"/assets/accordion-yGyqgK2u.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c09-iHuVncUx5saNW51IhA/KZ66g5Fw\"",
		"mtime": "2026-08-27T07:28:18.449Z",
		"size": 7177,
		"path": "../public/assets/accordion-yGyqgK2u.js"
	},
	"/assets/account-iHeZltkL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a1d-Kgyz9n6W/wKMBAqu3EmpAFI0jKo\"",
		"mtime": "2026-08-27T07:28:18.449Z",
		"size": 6685,
		"path": "../public/assets/account-iHeZltkL.js"
	},
	"/assets/arrow-right-DNJwBKfT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a5-cJv0Zc38qmmtLmGVnGQsCsl3w44\"",
		"mtime": "2026-08-27T07:28:18.450Z",
		"size": 165,
		"path": "../public/assets/arrow-right-DNJwBKfT.js"
	},
	"/assets/award-B1b0mtob.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"112-zbGkAeZDZVfLxYKbIf92AKv7H8Q\"",
		"mtime": "2026-08-27T07:28:18.450Z",
		"size": 274,
		"path": "../public/assets/award-B1b0mtob.js"
	},
	"/assets/check-sllhmnVN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7c-no3O9T+dzTO+2u7mK2ERTeklAaw\"",
		"mtime": "2026-08-27T07:28:18.450Z",
		"size": 124,
		"path": "../public/assets/check-sllhmnVN.js"
	},
	"/assets/button-BHo6p2Ug.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7ce7-VQjlHMlK3xBagQGMo6mfsTCSKVE\"",
		"mtime": "2026-08-27T07:28:18.450Z",
		"size": 31975,
		"path": "../public/assets/button-BHo6p2Ug.js"
	},
	"/assets/admin-B41LlzXO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"126dd-Bf73gqtswnJm7X+cZEkR5R/fLfU\"",
		"mtime": "2026-08-27T07:28:18.449Z",
		"size": 75485,
		"path": "../public/assets/admin-B41LlzXO.js"
	},
	"/assets/chevron-right-Bj_KW_iD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"82-16xHjx7RMEM17WVhsBa/0pfi17k\"",
		"mtime": "2026-08-27T07:28:18.450Z",
		"size": 130,
		"path": "../public/assets/chevron-right-Bj_KW_iD.js"
	},
	"/assets/chevron-down-BfkJGXcS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"80-yB8iCtsCmrPzJAq3hN/CmCxuofQ\"",
		"mtime": "2026-08-27T07:28:18.450Z",
		"size": 128,
		"path": "../public/assets/chevron-down-BfkJGXcS.js"
	},
	"/assets/checkout-DC4LAbF5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"72a2-0TgsSCIz1VXHKjqGA1NdGG+arSg\"",
		"mtime": "2026-08-27T07:28:18.450Z",
		"size": 29346,
		"path": "../public/assets/checkout-DC4LAbF5.js"
	},
	"/assets/circle-check-CRQN4vvI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b2-wLjMGqav0OPYKaA4TxBuBdBcegA\"",
		"mtime": "2026-08-27T07:28:18.450Z",
		"size": 178,
		"path": "../public/assets/circle-check-CRQN4vvI.js"
	},
	"/assets/createLucideIcon-Qk0VrUvi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"32f1-YcgSnbeHPGUm7KIGejOIRD4fj3Y\"",
		"mtime": "2026-08-27T07:28:18.451Z",
		"size": 13041,
		"path": "../public/assets/createLucideIcon-Qk0VrUvi.js"
	},
	"/assets/contact-B9XzVcPG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"21f8-EvnzeFn686VbYDZwbb1LFnZooiU\"",
		"mtime": "2026-08-27T07:28:18.450Z",
		"size": 8696,
		"path": "../public/assets/contact-B9XzVcPG.js"
	},
	"/assets/custom-branding-w7-SLdVD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5d36-r2u6g9FV6qoBqXhcYmUBV+2oEEM\"",
		"mtime": "2026-08-27T07:28:18.451Z",
		"size": 23862,
		"path": "../public/assets/custom-branding-w7-SLdVD.js"
	},
	"/assets/dialog-B_aZEaUy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"841-oshQkVo4O4MYg4fK08Omly77hec\"",
		"mtime": "2026-08-27T07:28:18.451Z",
		"size": 2113,
		"path": "../public/assets/dialog-B_aZEaUy.js"
	},
	"/assets/createServerFn-Cgt2qLK-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"94ed-J0fwDj5NsaWWKd5jiKOGlecNmO0\"",
		"mtime": "2026-08-27T07:28:18.451Z",
		"size": 38125,
		"path": "../public/assets/createServerFn-Cgt2qLK-.js"
	},
	"/assets/dist-Bn4LlgGU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1356-N5ZZ+cm594UN7aP8I+TK/ruM1XU\"",
		"mtime": "2026-08-27T07:28:18.451Z",
		"size": 4950,
		"path": "../public/assets/dist-Bn4LlgGU.js"
	},
	"/assets/dist-BuOGcenG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"29b-WIbeVYzyHr1KIvkGl151ZQyTpc0\"",
		"mtime": "2026-08-27T07:28:18.451Z",
		"size": 667,
		"path": "../public/assets/dist-BuOGcenG.js"
	},
	"/assets/dist-CcMZzHWY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"284-hmwICHsLOsv3I2by6K6ovyB4rfc\"",
		"mtime": "2026-08-27T07:28:18.451Z",
		"size": 644,
		"path": "../public/assets/dist-CcMZzHWY.js"
	},
	"/assets/dist-CSg9brrI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c28-CSVudwfMkgAvMxDDGINmA/47fG8\"",
		"mtime": "2026-08-27T07:28:18.451Z",
		"size": 7208,
		"path": "../public/assets/dist-CSg9brrI.js"
	},
	"/assets/dist-jwIiqr1T.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c9f-u4GPs7/IvwJmyFVWIslVn3rpH1s\"",
		"mtime": "2026-08-27T07:28:18.452Z",
		"size": 7327,
		"path": "../public/assets/dist-jwIiqr1T.js"
	},
	"/assets/dist-SosQ1KXr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"129-tyHeHPAdBrIb8iZJ2c3GBFvglCo\"",
		"mtime": "2026-08-27T07:28:18.452Z",
		"size": 297,
		"path": "../public/assets/dist-SosQ1KXr.js"
	},
	"/assets/faq-DZ_WL7C1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d97-YYfdas79m7uBSMNABJ4HbqZ20Tc\"",
		"mtime": "2026-08-27T07:28:18.452Z",
		"size": 7575,
		"path": "../public/assets/faq-DZ_WL7C1.js"
	},
	"/assets/FaqBot-o71wqS3A.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"134d-bf7tIfCbiGTHmWRFF0Sn0XpkMTk\"",
		"mtime": "2026-08-27T07:28:18.448Z",
		"size": 4941,
		"path": "../public/assets/FaqBot-o71wqS3A.js"
	},
	"/assets/gift-DNq5BBQe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"15d-nBLgaLkJbwvpiuFfZwT6a/yHHEw\"",
		"mtime": "2026-08-27T07:28:18.452Z",
		"size": 349,
		"path": "../public/assets/gift-DNq5BBQe.js"
	},
	"/assets/history-Bp4cwO0E.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ed-T/o1Zbdn0iCWKz4iTZ3VVNm03cU\"",
		"mtime": "2026-08-27T07:28:18.452Z",
		"size": 237,
		"path": "../public/assets/history-Bp4cwO0E.js"
	},
	"/assets/input-bBJa4LxQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2b4-jQZSlIm0ap5DbEhCy8zHFB8aOlM\"",
		"mtime": "2026-08-27T07:28:18.452Z",
		"size": 692,
		"path": "../public/assets/input-bBJa4LxQ.js"
	},
	"/assets/invariant-DEEwAagU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3c-eVh/3DMi1s3cxf4N/OJar+ew1jA\"",
		"mtime": "2026-08-27T07:28:18.452Z",
		"size": 60,
		"path": "../public/assets/invariant-DEEwAagU.js"
	},
	"/assets/label-BSTgYtqt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2b3-v96lgUWsOrxk+VAkwy8m9A1u6JM\"",
		"mtime": "2026-08-27T07:28:18.452Z",
		"size": 691,
		"path": "../public/assets/label-BSTgYtqt.js"
	},
	"/assets/link-CahZZY15.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5af6-hYr+cUDLN6UIpeDXwVxuIfLNEvM\"",
		"mtime": "2026-08-27T07:28:18.453Z",
		"size": 23286,
		"path": "../public/assets/link-CahZZY15.js"
	},
	"/assets/loader-circle-BAhHYJnl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"90-xGUV0vXI0NHTPsHCQo2BE2ZBzXQ\"",
		"mtime": "2026-08-27T07:28:18.453Z",
		"size": 144,
		"path": "../public/assets/loader-circle-BAhHYJnl.js"
	},
	"/assets/lock-BVsDF5gZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ce-dosszMG7CQWdHor0vzL62vwaXrE\"",
		"mtime": "2026-08-27T07:28:18.453Z",
		"size": 206,
		"path": "../public/assets/lock-BVsDF5gZ.js"
	},
	"/assets/message-square-l2Tyzf61.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e9-3LjcSy2fVAKdzX4XKRQECDM2s3k\"",
		"mtime": "2026-08-27T07:28:18.453Z",
		"size": 233,
		"path": "../public/assets/message-square-l2Tyzf61.js"
	},
	"/assets/not-found-i5RsCZif.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"76-Trmr7GZIBZuvfg4uM18tBiRtOXg\"",
		"mtime": "2026-08-27T07:28:18.453Z",
		"size": 118,
		"path": "../public/assets/not-found-i5RsCZif.js"
	},
	"/assets/order-confirmed-BpEYFb4C.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7df-+HwHOfbJxHbfhUyWarrpD8osjXo\"",
		"mtime": "2026-08-27T07:28:18.453Z",
		"size": 2015,
		"path": "../public/assets/order-confirmed-BpEYFb4C.js"
	},
	"/assets/order._id-GOU9d6mm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c00-5KXM/jmvplEakicugu3VC3Q4/eg\"",
		"mtime": "2026-08-27T07:28:18.453Z",
		"size": 7168,
		"path": "../public/assets/order._id-GOU9d6mm.js"
	},
	"/assets/index-BnF7gmpX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"68b01-eBzcTjU1IYruiqgdHwigUtfu0Ew\"",
		"mtime": "2026-08-27T07:28:18.447Z",
		"size": 428801,
		"path": "../public/assets/index-BnF7gmpX.js"
	},
	"/assets/OrderResolutionDialog-BBgNhJVH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"27e5-ekNXkXQGW3s5azKnapOH0qYp+Qk\"",
		"mtime": "2026-08-27T07:28:18.448Z",
		"size": 10213,
		"path": "../public/assets/OrderResolutionDialog-BBgNhJVH.js"
	},
	"/hero-video-gold.mp4": {
		"type": "video/mp4",
		"etag": "\"2843e1-WIUn1+uNEqHYfFi2NoXuyoFG9AI\"",
		"mtime": "2026-08-26T13:57:20.845Z",
		"size": 2638817,
		"path": "../public/hero-video-gold.mp4"
	},
	"/hero-video-slide2.mp4": {
		"type": "video/mp4",
		"etag": "\"2e5c3f-hA63w8pz3VDSRfOniLKuQodoApo\"",
		"mtime": "2026-08-26T14:41:22.254Z",
		"size": 3038271,
		"path": "../public/hero-video-slide2.mp4"
	},
	"/hero-video-factory.mp4": {
		"type": "video/mp4",
		"etag": "\"3c2ef6-d8vkzUvVmULDyga5uRpZUr5arUk\"",
		"mtime": "2026-08-26T14:04:37.463Z",
		"size": 3944182,
		"path": "../public/hero-video-factory.mp4"
	},
	"/hero-video.mp4": {
		"type": "video/mp4",
		"etag": "\"3e843d-TRXj/LLlHZvFaV12klRY5bYxRH0\"",
		"mtime": "2026-08-26T15:05:56.150Z",
		"size": 4097085,
		"path": "../public/hero-video.mp4"
	},
	"/assets/package-BP5brPu7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"174-y6kcMBaUpHERgIv08fNGaWaoUoo\"",
		"mtime": "2026-08-27T07:28:18.453Z",
		"size": 372,
		"path": "../public/assets/package-BP5brPu7.js"
	},
	"/assets/pincode.functions-CsMUP8KA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"282-y4Nqh2kNi5C9CYteVGCta0g4vEQ\"",
		"mtime": "2026-08-27T07:28:18.454Z",
		"size": 642,
		"path": "../public/assets/pincode.functions-CsMUP8KA.js"
	},
	"/assets/policies._slug-CUjUq5m1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a4b-qXZ8tJDThGFPYu51c79wUEwjPls\"",
		"mtime": "2026-08-27T07:28:18.454Z",
		"size": 2635,
		"path": "../public/assets/policies._slug-CUjUq5m1.js"
	},
	"/assets/product-cake-400-IyNQ7Qca.webp": {
		"type": "image/webp",
		"etag": "\"231a-XZXTs8DL9WIV0wM06ILR+TyXGyw\"",
		"mtime": "2026-08-27T07:28:18.457Z",
		"size": 8986,
		"path": "../public/assets/product-cake-400-IyNQ7Qca.webp"
	},
	"/assets/product-cake-800-D7p8IG0h.webp": {
		"type": "image/webp",
		"etag": "\"8a9c-FUEv5wy89JF3N/Xi4FPDGq0Oa6A\"",
		"mtime": "2026-08-27T07:28:18.458Z",
		"size": 35484,
		"path": "../public/assets/product-cake-800-D7p8IG0h.webp"
	},
	"/assets/product-glutenfree-400-dtzpdwMq.webp": {
		"type": "image/webp",
		"etag": "\"191c-0160DxdXvd1Ez2qyK+5Edn8kPHk\"",
		"mtime": "2026-08-27T07:28:18.459Z",
		"size": 6428,
		"path": "../public/assets/product-glutenfree-400-dtzpdwMq.webp"
	},
	"/assets/product-glutenfree-800-BRbglSHw.webp": {
		"type": "image/webp",
		"etag": "\"4be2-4ZuVdoh9vc8SIcRNeniPXSXBpG4\"",
		"mtime": "2026-08-27T07:28:18.459Z",
		"size": 19426,
		"path": "../public/assets/product-glutenfree-800-BRbglSHw.webp"
	},
	"/assets/product-granules-400-D98wWv4R.webp": {
		"type": "image/webp",
		"etag": "\"1986-pW4Tw+bAfTFuVQjtOVNXaLBbG3M\"",
		"mtime": "2026-08-27T07:28:18.459Z",
		"size": 6534,
		"path": "../public/assets/product-granules-400-D98wWv4R.webp"
	},
	"/assets/product-granules-800-WWT9xaKD.webp": {
		"type": "image/webp",
		"etag": "\"4c94-ndAVPibr7RpoSMK3WBGSbMGTCM0\"",
		"mtime": "2026-08-27T07:28:18.459Z",
		"size": 19604,
		"path": "../public/assets/product-granules-800-WWT9xaKD.webp"
	},
	"/assets/product-powder-400-BzZ6QhiJ.webp": {
		"type": "image/webp",
		"etag": "\"1484-G3RIQC0/RrkZqXpVf02Q9xEmMns\"",
		"mtime": "2026-08-27T07:28:18.459Z",
		"size": 5252,
		"path": "../public/assets/product-powder-400-BzZ6QhiJ.webp"
	},
	"/assets/product-powder-800-DcdU81cH.webp": {
		"type": "image/webp",
		"etag": "\"3770-kg0m3WIrBgEFb276hCgR5PeaH1w\"",
		"mtime": "2026-08-27T07:28:18.459Z",
		"size": 14192,
		"path": "../public/assets/product-powder-800-DcdU81cH.webp"
	},
	"/assets/ProductCard-DI6cyHEU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3162-jHfg0YTqTYO6djWbZdYvJr4arpw\"",
		"mtime": "2026-08-27T07:28:18.448Z",
		"size": 12642,
		"path": "../public/assets/ProductCard-DI6cyHEU.js"
	},
	"/assets/product._slug-Bjvwo7Gw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9692-oDNec9zAne/EshgJdDqhbgFzqU0\"",
		"mtime": "2026-08-27T07:28:18.454Z",
		"size": 38546,
		"path": "../public/assets/product._slug-Bjvwo7Gw.js"
	},
	"/assets/questions-BMKTHLWt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3fe-NC4vglgo0vzgARRm59ts3s6E8O8\"",
		"mtime": "2026-08-27T07:28:18.454Z",
		"size": 1022,
		"path": "../public/assets/questions-BMKTHLWt.js"
	},
	"/assets/QuickViewDialog-BprY6NQw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b67-ebpycx0W+ZloQxW+1bVFzP47/OY\"",
		"mtime": "2026-08-27T07:28:18.448Z",
		"size": 2919,
		"path": "../public/assets/QuickViewDialog-BprY6NQw.js"
	},
	"/assets/radio-group-D93ZxI0q.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1856-60tugdsmXqkhJn7MyEKuIZnlDUs\"",
		"mtime": "2026-08-27T07:28:18.454Z",
		"size": 6230,
		"path": "../public/assets/radio-group-D93ZxI0q.js"
	},
	"/assets/RecentlyViewed-CB1QTTBX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"981-h5WD5C3g+ONQA7Mi9NQTWfQgK8w\"",
		"mtime": "2026-08-27T07:28:18.449Z",
		"size": 2433,
		"path": "../public/assets/RecentlyViewed-CB1QTTBX.js"
	},
	"/assets/redirect-Dhm19zUi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1f4-ePZWCXP5uehkmkGMkMl5xDch+/Y\"",
		"mtime": "2026-08-27T07:28:18.454Z",
		"size": 500,
		"path": "../public/assets/redirect-Dhm19zUi.js"
	},
	"/assets/rotate-ccw-D_TOQcIJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c8-tAwsEz/QTQBMGPoh8jMzU1gr5iI\"",
		"mtime": "2026-08-27T07:28:18.454Z",
		"size": 200,
		"path": "../public/assets/rotate-ccw-D_TOQcIJ.js"
	},
	"/assets/routes-DABvnmZL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"462b-PsG9lZV71GExi6842k9U0kCg20g\"",
		"mtime": "2026-08-27T07:28:18.455Z",
		"size": 17963,
		"path": "../public/assets/routes-DABvnmZL.js"
	},
	"/assets/SearchDialog-B-c_v4JX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5064-dSI8+vniGCnfunLn9A48vCykTfA\"",
		"mtime": "2026-08-27T07:28:18.449Z",
		"size": 20580,
		"path": "../public/assets/SearchDialog-B-c_v4JX.js"
	},
	"/assets/shield-check-BRyfGHB7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"140-7bIyAgIaSc4NwHVpdeIW1USyzOI\"",
		"mtime": "2026-08-27T07:28:18.455Z",
		"size": 320,
		"path": "../public/assets/shield-check-BRyfGHB7.js"
	},
	"/assets/select-C8c6bIjd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bafd-SVfdVrtG1mY50Dk0WkNgN1j3KlU\"",
		"mtime": "2026-08-27T07:28:18.455Z",
		"size": 47869,
		"path": "../public/assets/select-C8c6bIjd.js"
	},
	"/assets/shop-gbNRcz6d.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"18d0-3T29DPx1fyB8lnC96QFhGdOjIIA\"",
		"mtime": "2026-08-27T07:28:18.455Z",
		"size": 6352,
		"path": "../public/assets/shop-gbNRcz6d.js"
	},
	"/assets/sparkles-YJipJYOr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ee-zyZ1oSDWz3P+iC/JPdiWM51tjCo\"",
		"mtime": "2026-08-27T07:28:18.455Z",
		"size": 494,
		"path": "../public/assets/sparkles-YJipJYOr.js"
	},
	"/assets/star-BEAUIMql.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2a3-qHAQP8YapWh/M975LgcgT3DXX84\"",
		"mtime": "2026-08-27T07:28:18.455Z",
		"size": 675,
		"path": "../public/assets/star-BEAUIMql.js"
	},
	"/assets/story-1-shop-560-C9AOS04y.webp": {
		"type": "image/webp",
		"etag": "\"d3c2-Mg5/P4UXbq5SBypO4cN/MbDdotw\"",
		"mtime": "2026-08-27T07:28:18.461Z",
		"size": 54210,
		"path": "../public/assets/story-1-shop-560-C9AOS04y.webp"
	},
	"/assets/story-1-shop-900-C1hKWfWP.webp": {
		"type": "image/webp",
		"etag": "\"1c524-wJ5rCMaRqEWBHHJPFRlStv2Bbz4\"",
		"mtime": "2026-08-27T07:28:18.461Z",
		"size": 116004,
		"path": "../public/assets/story-1-shop-900-C1hKWfWP.webp"
	},
	"/assets/story-1-shop-1200-KH6P15Oz.webp": {
		"type": "image/webp",
		"etag": "\"2d50c-+x+NV7ahJwD6K2FAnVqBqXzkqnk\"",
		"mtime": "2026-08-27T07:28:18.461Z",
		"size": 185612,
		"path": "../public/assets/story-1-shop-1200-KH6P15Oz.webp"
	},
	"/assets/story-2-kitchen-560-BwiFpku4.webp": {
		"type": "image/webp",
		"etag": "\"f778-fzVX+5ecgwmKIWcIN6n2HJ4ElJU\"",
		"mtime": "2026-08-27T07:28:18.461Z",
		"size": 63352,
		"path": "../public/assets/story-2-kitchen-560-BwiFpku4.webp"
	},
	"/assets/story-2-kitchen-1200-B0XrR51h.webp": {
		"type": "image/webp",
		"etag": "\"3a14e-w3i/7SDu4WeVbSIwWEuZaPVpkt8\"",
		"mtime": "2026-08-27T07:28:18.461Z",
		"size": 237902,
		"path": "../public/assets/story-2-kitchen-1200-B0XrR51h.webp"
	},
	"/assets/story-3-today-560-BqodebNV.webp": {
		"type": "image/webp",
		"etag": "\"100b2-SEV1Se0DY2Exhgul/oj4yrRrjow\"",
		"mtime": "2026-08-27T07:28:18.462Z",
		"size": 65714,
		"path": "../public/assets/story-3-today-560-BqodebNV.webp"
	},
	"/assets/story-CjQY7Tfr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2d32-TKGz966oywrMKpmJ7wq/C7eyAKA\"",
		"mtime": "2026-08-27T07:28:18.456Z",
		"size": 11570,
		"path": "../public/assets/story-CjQY7Tfr.js"
	},
	"/assets/story-2-kitchen-900-D9xPH5h3.webp": {
		"type": "image/webp",
		"etag": "\"24d44-pFv3Ceyn3Qyk+v4gcbBCsMhbClU\"",
		"mtime": "2026-08-27T07:28:18.462Z",
		"size": 150852,
		"path": "../public/assets/story-2-kitchen-900-D9xPH5h3.webp"
	},
	"/assets/support-CFlziCQT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"887-486ZphvFK5jzkc6RV8uQV00HKLg\"",
		"mtime": "2026-08-27T07:28:18.456Z",
		"size": 2183,
		"path": "../public/assets/support-CFlziCQT.js"
	},
	"/assets/textarea-CXAqO8kY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"24e-HyRAzIKE5xZ14tMS+3/BrTcK7rY\"",
		"mtime": "2026-08-27T07:28:18.456Z",
		"size": 590,
		"path": "../public/assets/textarea-CXAqO8kY.js"
	},
	"/assets/story-3-today-1200-COgTFLEH.webp": {
		"type": "image/webp",
		"etag": "\"3b3e0-IgpgxUNMre1gLuXTJ/BXAXKOeR8\"",
		"mtime": "2026-08-27T07:28:18.462Z",
		"size": 242656,
		"path": "../public/assets/story-3-today-1200-COgTFLEH.webp"
	},
	"/assets/tickets-5sBLbMRC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"17f-JwnZIYEjB4+nMZF50kd5H+SGy9E\"",
		"mtime": "2026-08-27T07:28:18.456Z",
		"size": 383,
		"path": "../public/assets/tickets-5sBLbMRC.js"
	},
	"/assets/track-DuMjpimi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ed7-SZkqV8cmNnOSUHnty0hWaRwkfxc\"",
		"mtime": "2026-08-27T07:28:18.456Z",
		"size": 3799,
		"path": "../public/assets/track-DuMjpimi.js"
	},
	"/assets/story-3-today-900-CoQyFYq-.webp": {
		"type": "image/webp",
		"etag": "\"2642e-PrnboRpJqv4QYtJLSs+oAYMBQx8\"",
		"mtime": "2026-08-27T07:28:18.462Z",
		"size": 156718,
		"path": "../public/assets/story-3-today-900-CoQyFYq-.webp"
	},
	"/assets/styles-BRGDoe5h.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1d7f6-19/o2/QDAlp1ilxHcFEXCFyZS7w\"",
		"mtime": "2026-08-27T07:28:18.463Z",
		"size": 120822,
		"path": "../public/assets/styles-BRGDoe5h.css"
	},
	"/assets/triangle-alert-CTQiK_Cu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"251-s7a6SLXh33q2F5cfy6Zk8nN9LpM\"",
		"mtime": "2026-08-27T07:28:18.456Z",
		"size": 593,
		"path": "../public/assets/triangle-alert-CTQiK_Cu.js"
	},
	"/assets/wishlist-SUDh-cT0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"df5-y806wWdl5Y4mIL8v4JR5JRm3+gE\"",
		"mtime": "2026-08-27T07:28:18.457Z",
		"size": 3573,
		"path": "../public/assets/wishlist-SUDh-cT0.js"
	},
	"/assets/truck-BfP6IyW0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e3-KfgVjbwVk3gTkggzdlTqXGpdH3w\"",
		"mtime": "2026-08-27T07:28:18.457Z",
		"size": 483,
		"path": "../public/assets/truck-BfP6IyW0.js"
	},
	"/assets/useRouter-D7Fmf6Jm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9c-hPvxQFuMBFv4OrkqvTQ9w93NQW4\"",
		"mtime": "2026-08-27T07:28:18.457Z",
		"size": 156,
		"path": "../public/assets/useRouter-D7Fmf6Jm.js"
	},
	"/products/100g-asafoetida-gold-cake/img-1.jpg": {
		"type": "image/jpeg",
		"etag": "\"4318d-old8EuOfSB683qAlqNNCwTUqVIo\"",
		"mtime": "2026-08-24T05:52:09.584Z",
		"size": 274829,
		"path": "../public/products/100g-asafoetida-gold-cake/img-1.jpg"
	},
	"/products/100g-asafoetida-gold-cake/img-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"33a58-FL05lX5Aa2lM4G6I9UJ7se8W7CQ\"",
		"mtime": "2026-08-24T05:52:10.504Z",
		"size": 211544,
		"path": "../public/products/100g-asafoetida-gold-cake/img-2.jpg"
	},
	"/products/100g-asafoetida-gold-cake/img-3.jpg": {
		"type": "image/jpeg",
		"etag": "\"5f2a7-gk96D4Hg/vtk1/GpWtVbfr8k4K8\"",
		"mtime": "2026-08-24T05:52:11.612Z",
		"size": 389799,
		"path": "../public/products/100g-asafoetida-gold-cake/img-3.jpg"
	},
	"/products/100g-asafoetida-gold-cake/img-4.jpg": {
		"type": "image/jpeg",
		"etag": "\"61f28-8Ft0dQ2msQmT24QiT/pBzi5L/yY\"",
		"mtime": "2026-08-24T05:52:13.171Z",
		"size": 401192,
		"path": "../public/products/100g-asafoetida-gold-cake/img-4.jpg"
	},
	"/products/100g-asafoetida-gold-cake/img-5.jpg": {
		"type": "image/jpeg",
		"etag": "\"4c425-sNjBxXkHgfHnx0GXBhm/KLwh5vA\"",
		"mtime": "2026-08-24T05:52:14.698Z",
		"size": 312357,
		"path": "../public/products/100g-asafoetida-gold-cake/img-5.jpg"
	},
	"/products/100g-asafoetida-gold-cake/img-6.jpg": {
		"type": "image/jpeg",
		"etag": "\"4ba83-1vNQPCdts4FVFBqvzOlpr+CQaPo\"",
		"mtime": "2026-08-24T05:52:16.093Z",
		"size": 309891,
		"path": "../public/products/100g-asafoetida-gold-cake/img-6.jpg"
	},
	"/products/100g-gold-asafoetida-powder/img-1.jpg": {
		"type": "image/jpeg",
		"etag": "\"40b6f-DqcC3CwSYJHqHWw3gFDvXdJ5YWA\"",
		"mtime": "2026-08-24T05:52:19.570Z",
		"size": 265071,
		"path": "../public/products/100g-gold-asafoetida-powder/img-1.jpg"
	},
	"/products/100g-asafoetida-gold-cake/img-7.jpg": {
		"type": "image/jpeg",
		"etag": "\"59a8b-zoFT3mmxeDKt5P1FYK/o0cNC+wY\"",
		"mtime": "2026-08-24T05:52:17.295Z",
		"size": 367243,
		"path": "../public/products/100g-asafoetida-gold-cake/img-7.jpg"
	},
	"/products/100g-gold-asafoetida-powder/img-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"398f6-vJEFP1F2ACp8MujUyOSn48yRkyA\"",
		"mtime": "2026-08-24T05:52:20.504Z",
		"size": 235766,
		"path": "../public/products/100g-gold-asafoetida-powder/img-2.jpg"
	},
	"/products/100g-asafoetida-gold-cake/img-8.jpg": {
		"type": "image/jpeg",
		"etag": "\"57508-5g22zO3ClQ8BtCq46AigyZuf/4M\"",
		"mtime": "2026-08-24T05:52:18.648Z",
		"size": 357640,
		"path": "../public/products/100g-asafoetida-gold-cake/img-8.jpg"
	},
	"/products/100g-gold-asafoetida-powder/img-3.jpg": {
		"type": "image/jpeg",
		"etag": "\"3feb1-7HdVYa61Y3tq003MU75/f5BAYrA\"",
		"mtime": "2026-08-24T05:52:21.354Z",
		"size": 261809,
		"path": "../public/products/100g-gold-asafoetida-powder/img-3.jpg"
	},
	"/products/100g-gold-asafoetida-powder/img-4.jpg": {
		"type": "image/jpeg",
		"etag": "\"3c185-xBiFCRltQUwymA1I9ba76TYKHXc\"",
		"mtime": "2026-08-24T05:52:22.265Z",
		"size": 246149,
		"path": "../public/products/100g-gold-asafoetida-powder/img-4.jpg"
	},
	"/products/100g-premium-asafoetida-powder/img-1.jpg": {
		"type": "image/jpeg",
		"etag": "\"49698-W78bt1jokoffR3KKRYOiyL+XnqQ\"",
		"mtime": "2026-08-24T05:52:23.392Z",
		"size": 300696,
		"path": "../public/products/100g-premium-asafoetida-powder/img-1.jpg"
	},
	"/products/100g-premium-asafoetida-powder/img-11.png": {
		"type": "image/png",
		"etag": "\"7d86a-gcRKQXaCja34gfM+Dy3AMo+ksPw\"",
		"mtime": "2026-08-24T05:48:52.586Z",
		"size": 514154,
		"path": "../public/products/100g-premium-asafoetida-powder/img-11.png"
	},
	"/products/100g-premium-asafoetida-powder/img-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"4cd08-pWGkaWR2/BwaWjEh1IgfM2vcifY\"",
		"mtime": "2026-08-24T05:52:40.707Z",
		"size": 314632,
		"path": "../public/products/100g-premium-asafoetida-powder/img-2.jpg"
	},
	"/products/100g-premium-asafoetida-powder/img-10.png": {
		"type": "image/png",
		"etag": "\"d26c0-+mgknT+sAVtvGbUFt9DufcXxzUI\"",
		"mtime": "2026-08-24T05:48:48.356Z",
		"size": 861888,
		"path": "../public/products/100g-premium-asafoetida-powder/img-10.png"
	},
	"/products/100g-premium-asafoetida-powder/img-12.png": {
		"type": "image/png",
		"etag": "\"de1f7-mZSHOfwgbEOdxGECoR19wvRc+iQ\"",
		"mtime": "2026-08-24T05:48:59.363Z",
		"size": 909815,
		"path": "../public/products/100g-premium-asafoetida-powder/img-12.png"
	},
	"/products/100g-premium-asafoetida-powder/img-13.png": {
		"type": "image/png",
		"etag": "\"d933b-ZXeFmXu/5O4OV1W2e6B5+B+L2pM\"",
		"mtime": "2026-08-24T05:49:05.602Z",
		"size": 889659,
		"path": "../public/products/100g-premium-asafoetida-powder/img-13.png"
	},
	"/products/100g-premium-asafoetida-powder/img-14.png": {
		"type": "image/png",
		"etag": "\"e7501-CdACz/xhh+Vn2BtpKKPX74w6MqM\"",
		"mtime": "2026-08-24T05:49:09.648Z",
		"size": 947457,
		"path": "../public/products/100g-premium-asafoetida-powder/img-14.png"
	},
	"/products/100g-premium-asafoetida-powder/img-17.png": {
		"type": "image/png",
		"etag": "\"dcfa9-mR3MqcClKp49cymitQ08jKAMggg\"",
		"mtime": "2026-08-24T05:52:36.565Z",
		"size": 905129,
		"path": "../public/products/100g-premium-asafoetida-powder/img-17.png"
	},
	"/products/100g-premium-asafoetida-powder/img-18.png": {
		"type": "image/png",
		"etag": "\"df8db-7PG7ls7lK+vm5vV4fkN2NmfqOX0\"",
		"mtime": "2026-08-24T05:52:38.005Z",
		"size": 915675,
		"path": "../public/products/100g-premium-asafoetida-powder/img-18.png"
	},
	"/products/100g-premium-asafoetida-powder/img-19.png": {
		"type": "image/png",
		"etag": "\"8ff7c-KQpsRpFsRDr/oF76w/iZAIaahv8\"",
		"mtime": "2026-08-24T05:52:39.231Z",
		"size": 589692,
		"path": "../public/products/100g-premium-asafoetida-powder/img-19.png"
	},
	"/products/100g-premium-asafoetida-powder/img-20.png": {
		"type": "image/png",
		"etag": "\"8cff5-ctN+nam5UFz3O609nKt+yPrxqq8\"",
		"mtime": "2026-08-24T05:52:41.941Z",
		"size": 577525,
		"path": "../public/products/100g-premium-asafoetida-powder/img-20.png"
	},
	"/products/100g-premium-asafoetida-powder/img-15.png": {
		"type": "image/png",
		"etag": "\"113c05-4EW0zWIGkq2/X92/X280Z3sRH5s\"",
		"mtime": "2026-08-24T05:52:33.306Z",
		"size": 1129477,
		"path": "../public/products/100g-premium-asafoetida-powder/img-15.png"
	},
	"/products/100g-premium-asafoetida-powder/img-21.png": {
		"type": "image/png",
		"etag": "\"baf6f-aQrGBI2JtEM0l2N6pnfcs9dNcOw\"",
		"mtime": "2026-08-24T05:52:43.446Z",
		"size": 765807,
		"path": "../public/products/100g-premium-asafoetida-powder/img-21.png"
	},
	"/products/100g-premium-asafoetida-powder/img-16.png": {
		"type": "image/png",
		"etag": "\"12420d-JZnCGh7ypZdOubO8+TokJW2kQJw\"",
		"mtime": "2026-08-24T05:49:18.891Z",
		"size": 1196557,
		"path": "../public/products/100g-premium-asafoetida-powder/img-16.png"
	},
	"/products/100g-premium-asafoetida-powder/img-22.png": {
		"type": "image/png",
		"etag": "\"ac405-8hQqi7n+A0bW31uuccCsy/C3s3M\"",
		"mtime": "2026-08-24T05:52:45.044Z",
		"size": 705541,
		"path": "../public/products/100g-premium-asafoetida-powder/img-22.png"
	},
	"/products/100g-premium-asafoetida-powder/img-23.png": {
		"type": "image/png",
		"etag": "\"c7a34-6+BpaIko5lQ0wYkUk1ZFI0kZil4\"",
		"mtime": "2026-08-24T05:52:46.489Z",
		"size": 817716,
		"path": "../public/products/100g-premium-asafoetida-powder/img-23.png"
	},
	"/products/100g-premium-asafoetida-powder/img-3.jpg": {
		"type": "image/jpeg",
		"etag": "\"4c2a9-mE1yZMiu8c7ZsAK/n0u8nTuqZvo\"",
		"mtime": "2026-08-24T05:52:57.201Z",
		"size": 311977,
		"path": "../public/products/100g-premium-asafoetida-powder/img-3.jpg"
	},
	"/products/100g-premium-asafoetida-powder/img-24.png": {
		"type": "image/png",
		"etag": "\"bbbe2-o0QHLiCzSsV1ewizB49Err/Iiag\"",
		"mtime": "2026-08-24T05:52:47.752Z",
		"size": 768994,
		"path": "../public/products/100g-premium-asafoetida-powder/img-24.png"
	},
	"/products/100g-premium-asafoetida-powder/img-25.png": {
		"type": "image/png",
		"etag": "\"9a1b8-+K2NoSySeScO5H7makOODgyBKUE\"",
		"mtime": "2026-08-24T05:52:49.240Z",
		"size": 631224,
		"path": "../public/products/100g-premium-asafoetida-powder/img-25.png"
	},
	"/products/100g-premium-asafoetida-powder/img-26.png": {
		"type": "image/png",
		"etag": "\"a21fd-A8NWdRXjk1mjQq5V01IVxMkh2cc\"",
		"mtime": "2026-08-24T05:52:50.596Z",
		"size": 664061,
		"path": "../public/products/100g-premium-asafoetida-powder/img-26.png"
	},
	"/products/100g-premium-asafoetida-powder/img-29.png": {
		"type": "image/png",
		"etag": "\"c3043-Wykm8dX9PEgFox9Mk0XOoD9A2p0\"",
		"mtime": "2026-08-24T05:52:55.408Z",
		"size": 798787,
		"path": "../public/products/100g-premium-asafoetida-powder/img-29.png"
	},
	"/products/100g-premium-asafoetida-powder/img-30.png": {
		"type": "image/png",
		"etag": "\"d0b04-EmFUGAoGBLwmKh2GHXBGwlhZxz4\"",
		"mtime": "2026-08-24T05:52:59.014Z",
		"size": 854788,
		"path": "../public/products/100g-premium-asafoetida-powder/img-30.png"
	},
	"/products/100g-premium-asafoetida-powder/img-31.png": {
		"type": "image/png",
		"etag": "\"e9324-UpzjEBlak7732l8q2zE6X3yr2+M\"",
		"mtime": "2026-08-24T05:53:00.857Z",
		"size": 955172,
		"path": "../public/products/100g-premium-asafoetida-powder/img-31.png"
	},
	"/products/100g-premium-asafoetida-powder/img-32.png": {
		"type": "image/png",
		"etag": "\"de78e-qmvwMsjEwD0t/MmcFkoItVJPyY0\"",
		"mtime": "2026-08-24T05:53:02.682Z",
		"size": 911246,
		"path": "../public/products/100g-premium-asafoetida-powder/img-32.png"
	},
	"/products/100g-premium-asafoetida-powder/img-4.jpg": {
		"type": "image/jpeg",
		"etag": "\"479ed-nwq4tZ4Ndb5bMObF+/2+3sWJQM8\"",
		"mtime": "2026-08-24T05:53:12.692Z",
		"size": 293357,
		"path": "../public/products/100g-premium-asafoetida-powder/img-4.jpg"
	},
	"/products/100g-premium-asafoetida-powder/img-27.png": {
		"type": "image/png",
		"etag": "\"107842-y9OrWkTBzyhCQJfq4oTuTB5omKw\"",
		"mtime": "2026-08-24T05:52:52.360Z",
		"size": 1079362,
		"path": "../public/products/100g-premium-asafoetida-powder/img-27.png"
	},
	"/products/100g-premium-asafoetida-powder/img-28.png": {
		"type": "image/png",
		"etag": "\"110db6-YqtsdWIErigcNHeeFXQmLUdXFMI\"",
		"mtime": "2026-08-24T05:52:54.051Z",
		"size": 1117622,
		"path": "../public/products/100g-premium-asafoetida-powder/img-28.png"
	},
	"/products/100g-premium-asafoetida-powder/img-35.png": {
		"type": "image/png",
		"etag": "\"c7031-q4pnFSFBpRsGin9xjHE0BGxytp8\"",
		"mtime": "2026-08-24T05:53:07.464Z",
		"size": 815153,
		"path": "../public/products/100g-premium-asafoetida-powder/img-35.png"
	},
	"/products/500g-gold-asafoetida-powder/img-1.jpg": {
		"type": "image/jpeg",
		"etag": "\"3e58f-CnY1+4BAsSUAmJXl0Ko2ZuPdhYE\"",
		"mtime": "2026-08-24T05:53:23.269Z",
		"size": 255375,
		"path": "../public/products/500g-gold-asafoetida-powder/img-1.jpg"
	},
	"/products/500g-gold-asafoetida-powder/img-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"395ed-oS2PKHuKNR8opSaONdw57Y9cPQM\"",
		"mtime": "2026-08-24T05:53:24.896Z",
		"size": 234989,
		"path": "../public/products/500g-gold-asafoetida-powder/img-2.jpg"
	},
	"/products/100g-premium-asafoetida-powder/img-33.png": {
		"type": "image/png",
		"etag": "\"139fc4-U4B3Je2w4/W1lSeX1p1w7GgUD48\"",
		"mtime": "2026-08-24T05:53:04.185Z",
		"size": 1286084,
		"path": "../public/products/100g-premium-asafoetida-powder/img-33.png"
	},
	"/products/500g-gold-asafoetida-powder/img-3.jpg": {
		"type": "image/jpeg",
		"etag": "\"387bd-tZq98i7O9hTwxx11l3HAcsOIdfc\"",
		"mtime": "2026-08-24T05:53:26.609Z",
		"size": 231357,
		"path": "../public/products/500g-gold-asafoetida-powder/img-3.jpg"
	},
	"/products/100g-premium-asafoetida-powder/img-37.png": {
		"type": "image/png",
		"etag": "\"fc902-0/cG+wdtERX/X7RRQvb3K7+YCfk\"",
		"mtime": "2026-08-24T05:50:39.510Z",
		"size": 1034498,
		"path": "../public/products/100g-premium-asafoetida-powder/img-37.png"
	},
	"/products/100g-premium-asafoetida-powder/img-7.png": {
		"type": "image/png",
		"etag": "\"e40b6-VnM8aP3B1NVKMduETkYI5oz2AUE\"",
		"mtime": "2026-08-24T05:53:18.491Z",
		"size": 934070,
		"path": "../public/products/100g-premium-asafoetida-powder/img-7.png"
	},
	"/products/50g-gluten-free-asafoetida-powder/img-1.jpg": {
		"type": "image/jpeg",
		"etag": "\"3b19e-jaBTWcmYgaWnSY6n21vJ1u+4hsI\"",
		"mtime": "2026-08-24T05:53:42.347Z",
		"size": 242078,
		"path": "../public/products/50g-gluten-free-asafoetida-powder/img-1.jpg"
	},
	"/products/100g-premium-asafoetida-powder/img-34.png": {
		"type": "image/png",
		"etag": "\"13907d-ycwwzfj90tSNJP7BtXBy7Wi/FyI\"",
		"mtime": "2026-08-24T05:53:05.831Z",
		"size": 1282173,
		"path": "../public/products/100g-premium-asafoetida-powder/img-34.png"
	},
	"/products/100g-premium-asafoetida-powder/img-36.png": {
		"type": "image/png",
		"etag": "\"1054f2-eyg4iT+GkP/pux2N+zA0Kb8BZlc\"",
		"mtime": "2026-08-24T05:50:34.531Z",
		"size": 1070322,
		"path": "../public/products/100g-premium-asafoetida-powder/img-36.png"
	},
	"/products/100g-premium-asafoetida-powder/img-8.png": {
		"type": "image/png",
		"etag": "\"eb9c9-QrLZzbXkJ2o21tFraWAisWZzlSc\"",
		"mtime": "2026-08-24T05:51:06.351Z",
		"size": 965065,
		"path": "../public/products/100g-premium-asafoetida-powder/img-8.png"
	},
	"/products/100g-premium-asafoetida-powder/img-9.png": {
		"type": "image/png",
		"etag": "\"ec65c-My/01AWsJ+75Nc+4bjQL5of3tdc\"",
		"mtime": "2026-08-24T05:53:21.783Z",
		"size": 968284,
		"path": "../public/products/100g-premium-asafoetida-powder/img-9.png"
	},
	"/products/50g-gluten-free-asafoetida-powder/img-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"39186-7aKllXwWl3d9G9R6Ci5pQzipWig\"",
		"mtime": "2026-08-24T05:53:44.129Z",
		"size": 233862,
		"path": "../public/products/50g-gluten-free-asafoetida-powder/img-2.jpg"
	},
	"/products/100g-premium-asafoetida-powder/img-6.png": {
		"type": "image/png",
		"etag": "\"152f2c-34umO1l41NDFJlAcWop/nV5VJ7M\"",
		"mtime": "2026-08-24T05:50:53.475Z",
		"size": 1388332,
		"path": "../public/products/100g-premium-asafoetida-powder/img-6.png"
	},
	"/products/100g-premium-asafoetida-powder/img-5.png": {
		"type": "image/png",
		"etag": "\"14d0fd-6aPT46ZCjYT6U0DvupQwlgrrqY0\"",
		"mtime": "2026-08-24T05:50:47.697Z",
		"size": 1364221,
		"path": "../public/products/100g-premium-asafoetida-powder/img-5.png"
	},
	"/products/50g-gluten-free-asafoetida-powder/img-3.jpg": {
		"type": "image/jpeg",
		"etag": "\"3c9b1-Y0JAWxVMMxM3/nMWAqxWdj41zc0\"",
		"mtime": "2026-08-24T05:53:45.864Z",
		"size": 248241,
		"path": "../public/products/50g-gluten-free-asafoetida-powder/img-3.jpg"
	},
	"/products/50g-gluten-free-asafoetida-powder/img-4.jpg": {
		"type": "image/jpeg",
		"etag": "\"3c875-fJ1l84P1DT2lKx2277Ro31TwySI\"",
		"mtime": "2026-08-24T05:53:47.617Z",
		"size": 247925,
		"path": "../public/products/50g-gluten-free-asafoetida-powder/img-4.jpg"
	},
	"/products/50g-asafoetida-gold-cake/img-1.jpg": {
		"type": "image/jpeg",
		"etag": "\"3a0ca-aVPDF9cdGvAVy4P07Ngsn6kZb5c\"",
		"mtime": "2026-08-24T05:53:28.344Z",
		"size": 237770,
		"path": "../public/products/50g-asafoetida-gold-cake/img-1.jpg"
	},
	"/products/50g-asafoetida-gold-cake/img-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"2eebe-Z9vZzzHV7LvVtb6C7bzlP3333/c\"",
		"mtime": "2026-08-24T05:53:30.082Z",
		"size": 192190,
		"path": "../public/products/50g-asafoetida-gold-cake/img-2.jpg"
	},
	"/products/50g-asafoetida-gold-cake/img-3.jpg": {
		"type": "image/jpeg",
		"etag": "\"66350-TJmrTfY3WFBwHVxKzO+2RmPpZCk\"",
		"mtime": "2026-08-24T05:53:31.621Z",
		"size": 418640,
		"path": "../public/products/50g-asafoetida-gold-cake/img-3.jpg"
	},
	"/products/50g-asafoetida-gold-cake/img-4.jpg": {
		"type": "image/jpeg",
		"etag": "\"64086-cHiED41lc9fe37TCFcwvn5+xoFo\"",
		"mtime": "2026-08-24T05:53:33.053Z",
		"size": 409734,
		"path": "../public/products/50g-asafoetida-gold-cake/img-4.jpg"
	},
	"/products/50g-asafoetida-gold-cake/img-5.jpg": {
		"type": "image/jpeg",
		"etag": "\"4d505-93QN1RxVFJ5tf6EanCdqhsidb8Q\"",
		"mtime": "2026-08-24T05:53:34.401Z",
		"size": 316677,
		"path": "../public/products/50g-asafoetida-gold-cake/img-5.jpg"
	},
	"/products/50g-asafoetida-gold-cake/img-6.jpg": {
		"type": "image/jpeg",
		"etag": "\"5600d-gr6Bf0tg/eOLxZWoIc6+cYJsV00\"",
		"mtime": "2026-08-24T05:53:35.905Z",
		"size": 352269,
		"path": "../public/products/50g-asafoetida-gold-cake/img-6.jpg"
	},
	"/products/50g-asafoetida-gold-cake/img-9.jpg": {
		"type": "image/jpeg",
		"etag": "\"ed83-ICUZkG5k+Wz1HgHuSVPCcqs+90U\"",
		"mtime": "2026-08-24T05:53:40.884Z",
		"size": 60803,
		"path": "../public/products/50g-asafoetida-gold-cake/img-9.jpg"
	},
	"/products/50g-asafoetida-gold-cake/img-7.jpg": {
		"type": "image/jpeg",
		"etag": "\"5d4d6-V3Wy4GEy1JeM/CJ6dLIc3CSzaI8\"",
		"mtime": "2026-08-24T05:53:37.589Z",
		"size": 382166,
		"path": "../public/products/50g-asafoetida-gold-cake/img-7.jpg"
	},
	"/products/50g-asafoetida-gold-cake/img-8.jpg": {
		"type": "image/jpeg",
		"etag": "\"58b7b-xgDMPtQS/PU25EWRxroL67ald2Y\"",
		"mtime": "2026-08-24T05:53:39.510Z",
		"size": 363387,
		"path": "../public/products/50g-asafoetida-gold-cake/img-8.jpg"
	},
	"/products/50g-gold-asafoetida-powder/img-1.jpg": {
		"type": "image/jpeg",
		"etag": "\"40ee8-5JzmYEQFAsrwBrG6y/5n4c5Hf6E\"",
		"mtime": "2026-08-24T05:53:49.569Z",
		"size": 265960,
		"path": "../public/products/50g-gold-asafoetida-powder/img-1.jpg"
	},
	"/products/50g-gold-asafoetida-powder/img-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"3ff2c-NhXfSURTxWAPaE/vB1IY/2pWTY0\"",
		"mtime": "2026-08-24T05:53:51.172Z",
		"size": 261932,
		"path": "../public/products/50g-gold-asafoetida-powder/img-2.jpg"
	},
	"/products/50g-gold-asafoetida-powder/img-3.jpg": {
		"type": "image/jpeg",
		"etag": "\"42840-YVBlv14H1Ippcp5I9LttI+gP0t4\"",
		"mtime": "2026-08-24T05:53:52.811Z",
		"size": 272448,
		"path": "../public/products/50g-gold-asafoetida-powder/img-3.jpg"
	},
	"/products/50g-gold-asafoetida-powder/img-4.jpg": {
		"type": "image/jpeg",
		"etag": "\"3c341-ZEQbR4YseO/f53czZ2kjDJrHxww\"",
		"mtime": "2026-08-24T05:53:54.516Z",
		"size": 246593,
		"path": "../public/products/50g-gold-asafoetida-powder/img-4.jpg"
	},
	"/products/50g-premium-asafoetida-powder/img-1.jpg": {
		"type": "image/jpeg",
		"etag": "\"48174-bFQ/JNkYMwdmGzmgOrNV4aL/fXE\"",
		"mtime": "2026-08-24T05:53:56.406Z",
		"size": 295284,
		"path": "../public/products/50g-premium-asafoetida-powder/img-1.jpg"
	},
	"/products/50g-premium-asafoetida-powder/img-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"468f0-fyK6MhSCmjYO27ssA5hPXdyGH2g\"",
		"mtime": "2026-08-24T05:53:58.552Z",
		"size": 289008,
		"path": "../public/products/50g-premium-asafoetida-powder/img-2.jpg"
	},
	"/products/50g-premium-asafoetida-powder/img-3.jpg": {
		"type": "image/jpeg",
		"etag": "\"46a79-VhsDLUxq/xpl4hGhDKcIeQXHjJA\"",
		"mtime": "2026-08-24T05:54:00.323Z",
		"size": 289401,
		"path": "../public/products/50g-premium-asafoetida-powder/img-3.jpg"
	},
	"/products/50g-premium-asafoetida-powder/img-4.jpg": {
		"type": "image/jpeg",
		"etag": "\"461de-oIQFwonG/rOA0WYiRAnVFv/d8ZY\"",
		"mtime": "2026-08-24T05:54:01.960Z",
		"size": 287198,
		"path": "../public/products/50g-premium-asafoetida-powder/img-4.jpg"
	},
	"/products/black-sesame-seeds/img-1.jpg": {
		"type": "image/jpeg",
		"etag": "\"581c5-CxoSsCsJw/3aN1cREACWPpxeXOY\"",
		"mtime": "2026-08-25T08:35:15.543Z",
		"size": 360901,
		"path": "../public/products/black-sesame-seeds/img-1.jpg"
	},
	"/products/black-sesame-seeds/img-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"506ac-dTVSnqWb/uJ2SLYKYkbu3UD7IP4\"",
		"mtime": "2026-08-25T08:35:16.251Z",
		"size": 329388,
		"path": "../public/products/black-sesame-seeds/img-2.jpg"
	},
	"/products/black-sesame-seeds/img-3.jpg": {
		"type": "image/jpeg",
		"etag": "\"5e071-EgJnT5N6N20dujLCzTtqGzUy2ME\"",
		"mtime": "2026-08-25T08:35:16.962Z",
		"size": 385137,
		"path": "../public/products/black-sesame-seeds/img-3.jpg"
	},
	"/products/black-sesame-seeds/img-4.jpg": {
		"type": "image/jpeg",
		"etag": "\"4fd86-WaBr2aEgLFBsltt6I6afldaggOg\"",
		"mtime": "2026-08-25T08:35:17.903Z",
		"size": 327046,
		"path": "../public/products/black-sesame-seeds/img-4.jpg"
	},
	"/products/all-product/img-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"40df4-ydaHxyRtlr1bqKIElCYpKjdh9AU\"",
		"mtime": "2026-08-24T05:54:05.411Z",
		"size": 265716,
		"path": "../public/products/all-product/img-2.jpg"
	},
	"/products/all-product/img-1.jpg": {
		"type": "image/jpeg",
		"etag": "\"4832f-qGxJ0DZlcK3Ojb6XTl+ZipnBQ1s\"",
		"mtime": "2026-08-24T05:54:03.730Z",
		"size": 295727,
		"path": "../public/products/all-product/img-1.jpg"
	},
	"/products/all-product/img-3.jpg": {
		"type": "image/jpeg",
		"etag": "\"45f60-u/6NSGRpzP/LYWriVX+3nmEqAvU\"",
		"mtime": "2026-08-24T05:54:07.248Z",
		"size": 286560,
		"path": "../public/products/all-product/img-3.jpg"
	},
	"/products/all-product/img-4.jpg": {
		"type": "image/jpeg",
		"etag": "\"51b45-aSmJ6mod5f9ubYGyVxg9vO41IsY\"",
		"mtime": "2026-08-24T05:54:09.253Z",
		"size": 334661,
		"path": "../public/products/all-product/img-4.jpg"
	},
	"/products/all-product/img-6.jpg": {
		"type": "image/jpeg",
		"etag": "\"70fba-qU6YUikaOYk91SXfrPjalcpgJ3U\"",
		"mtime": "2026-08-24T05:54:13.323Z",
		"size": 462778,
		"path": "../public/products/all-product/img-6.jpg"
	},
	"/products/all-product/img-5.jpg": {
		"type": "image/jpeg",
		"etag": "\"4e418-Myg9ltCscn/3hL2AuRCudtuTZIQ\"",
		"mtime": "2026-08-24T05:54:11.105Z",
		"size": 320536,
		"path": "../public/products/all-product/img-5.jpg"
	},
	"/products/all-product/img-7.jpg": {
		"type": "image/jpeg",
		"etag": "\"5d2d8-GOkbvqHLdDhqFgBfQgMAXhHrnbw\"",
		"mtime": "2026-08-24T05:54:15.250Z",
		"size": 381656,
		"path": "../public/products/all-product/img-7.jpg"
	},
	"/products/all-product/img-8.jpg": {
		"type": "image/jpeg",
		"etag": "\"670fe-ohMpyhnYx0iLjsSAIdHhgkUD0Qk\"",
		"mtime": "2026-08-24T05:54:17.472Z",
		"size": 422142,
		"path": "../public/products/all-product/img-8.jpg"
	},
	"/products/all-product/img-9.jpg": {
		"type": "image/jpeg",
		"etag": "\"44296-qDFmf5VtsAqjAkdGYCsc7h6QWBM\"",
		"mtime": "2026-08-24T05:54:19.332Z",
		"size": 279190,
		"path": "../public/products/all-product/img-9.jpg"
	},
	"/products/bottle-jar/img-1.jpg": {
		"type": "image/jpeg",
		"etag": "\"5c525-tkorcAlQlF8YmeO8eJONqJou06A\"",
		"mtime": "2026-08-24T05:54:21.373Z",
		"size": 378149,
		"path": "../public/products/bottle-jar/img-1.jpg"
	},
	"/products/bottle-jar/img-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"4bea6-ctZ0vyNvqx27yfRUinlwkPBkdoA\"",
		"mtime": "2026-08-24T05:54:23.105Z",
		"size": 310950,
		"path": "../public/products/bottle-jar/img-2.jpg"
	},
	"/products/bottle-jar/img-3.jpg": {
		"type": "image/jpeg",
		"etag": "\"5ac48-6c+jFf8UxUBmV3O/D+FTvgtavAY\"",
		"mtime": "2026-08-24T05:54:24.722Z",
		"size": 371784,
		"path": "../public/products/bottle-jar/img-3.jpg"
	},
	"/products/bottle-jar/img-4.jpg": {
		"type": "image/jpeg",
		"etag": "\"46d12-wWfe80keBJSdIr1zj6ivkufLWcM\"",
		"mtime": "2026-08-24T05:54:26.349Z",
		"size": 290066,
		"path": "../public/products/bottle-jar/img-4.jpg"
	},
	"/products/hing/img-1.jpg": {
		"type": "image/jpeg",
		"etag": "\"38333-IfPxyPzpLZbk0gYZCZDnxQ/XvrU\"",
		"mtime": "2026-08-24T05:54:29.803Z",
		"size": 230195,
		"path": "../public/products/hing/img-1.jpg"
	},
	"/products/bottle-jar/img-5.jpg": {
		"type": "image/jpeg",
		"etag": "\"5ea2a-vh5l2UWhj3eQzYlDpW6ckEVMLmE\"",
		"mtime": "2026-08-24T05:54:28.138Z",
		"size": 387626,
		"path": "../public/products/bottle-jar/img-5.jpg"
	},
	"/products/hing/img-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"397de-j5g4DjcC5JX4l2BJYNAS1EtgP7I\"",
		"mtime": "2026-08-24T05:54:31.636Z",
		"size": 235486,
		"path": "../public/products/hing/img-2.jpg"
	},
	"/products/hing/img-3.jpg": {
		"type": "image/jpeg",
		"etag": "\"3c032-wZ3OU9J/pzKmaIMghWXlbnOAIGo\"",
		"mtime": "2026-08-24T05:54:33.353Z",
		"size": 245810,
		"path": "../public/products/hing/img-3.jpg"
	},
	"/products/hing/img-4.jpg": {
		"type": "image/jpeg",
		"etag": "\"3a709-fqld1y/MNoufGqX803BSo9VMu1M\"",
		"mtime": "2026-08-24T05:54:35.501Z",
		"size": 239369,
		"path": "../public/products/hing/img-4.jpg"
	},
	"/products/hing/img-5.jpg": {
		"type": "image/jpeg",
		"etag": "\"41f59-diElF2bGkacRPtS0X+A4sByKfKE\"",
		"mtime": "2026-08-24T05:54:37.323Z",
		"size": 270169,
		"path": "../public/products/hing/img-5.jpg"
	},
	"/products/hing/img-6.jpg": {
		"type": "image/jpeg",
		"etag": "\"2b9af-HACLKv2qOr7M42o7NtgZJhvHi0U\"",
		"mtime": "2026-08-24T05:54:38.925Z",
		"size": 178607,
		"path": "../public/products/hing/img-6.jpg"
	},
	"/products/hing-chips/img-1.jpg": {
		"type": "image/jpeg",
		"etag": "\"485e2-PEH1AMfKA1aSOOqWm5zVAmZm1tE\"",
		"mtime": "2026-08-24T05:54:40.588Z",
		"size": 296418,
		"path": "../public/products/hing-chips/img-1.jpg"
	},
	"/products/hing-chips/img-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"41572-EY08dvdnMcMdAw2qO4ob5yWKRpY\"",
		"mtime": "2026-08-24T05:54:42.243Z",
		"size": 267634,
		"path": "../public/products/hing-chips/img-2.jpg"
	},
	"/products/hing-pellets/img-1.jpg": {
		"type": "image/jpeg",
		"etag": "\"6c226-Qs0lN2z5VR/CKixzdzrxMHB6HEw\"",
		"mtime": "2026-08-24T05:54:44.277Z",
		"size": 442918,
		"path": "../public/products/hing-pellets/img-1.jpg"
	},
	"/products/hing-pellets/img-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"6f30e-mAClqfvgDFREpPvO2kDUbnWuSl8\"",
		"mtime": "2026-08-24T05:54:46.080Z",
		"size": 455438,
		"path": "../public/products/hing-pellets/img-2.jpg"
	},
	"/products/hing-pellets/img-5.jpg": {
		"type": "image/jpeg",
		"etag": "\"20099-4CyNeARHukNXb+Mc7ZA72VhZno4\"",
		"mtime": "2026-08-24T05:54:51.229Z",
		"size": 131225,
		"path": "../public/products/hing-pellets/img-5.jpg"
	},
	"/products/hing-pellets/img-4.jpg": {
		"type": "image/jpeg",
		"etag": "\"28c2d-xPJq2krVT8PO+bPfCDdzfViZclk\"",
		"mtime": "2026-08-24T05:54:49.753Z",
		"size": 166957,
		"path": "../public/products/hing-pellets/img-4.jpg"
	},
	"/products/hing-pellets/img-3.jpg": {
		"type": "image/jpeg",
		"etag": "\"38013-8j5b5l2+OI9oRvipmkSVEhiUYtQ\"",
		"mtime": "2026-08-24T05:54:47.895Z",
		"size": 229395,
		"path": "../public/products/hing-pellets/img-3.jpg"
	},
	"/products/millet-pongal-mix/img-1.jpg": {
		"type": "image/jpeg",
		"etag": "\"352a3-DiPUm8KNPOPu9NBxkkoJqLPzZsA\"",
		"mtime": "2026-08-25T08:35:21.442Z",
		"size": 217763,
		"path": "../public/products/millet-pongal-mix/img-1.jpg"
	},
	"/products/millet-pongal-mix/img-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"3d61e-dyHLNzZkB5hAB+at+wwDtx1nljQ\"",
		"mtime": "2026-08-25T08:35:22.049Z",
		"size": 251422,
		"path": "../public/products/millet-pongal-mix/img-2.jpg"
	},
	"/products/millet-sambar-mix/img-1.jpg": {
		"type": "image/jpeg",
		"etag": "\"37cfd-6Tk+cPsVsIb5w/J6g8Z0flkVAwA\"",
		"mtime": "2026-08-25T08:35:22.582Z",
		"size": 228605,
		"path": "../public/products/millet-sambar-mix/img-1.jpg"
	},
	"/products/pure-benzoin-sambrani/img-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"243aa-E8YGWbp1G9V9rTc9T4jZZ3jdvXI\"",
		"mtime": "2026-08-24T05:54:54.026Z",
		"size": 148394,
		"path": "../public/products/pure-benzoin-sambrani/img-2.jpg"
	},
	"/products/millet-sambar-mix/img-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"407b2-DGpgPAUY8G1tZQkTAForAwbJwtg\"",
		"mtime": "2026-08-25T08:35:23.335Z",
		"size": 264114,
		"path": "../public/products/millet-sambar-mix/img-2.jpg"
	},
	"/products/pure-benzoin-sambrani/img-1.png": {
		"type": "image/png",
		"etag": "\"37ec0-iFgu0AnFiHawbyrq6G7XaJVGpec\"",
		"mtime": "2026-08-24T05:52:25.579Z",
		"size": 229056,
		"path": "../public/products/pure-benzoin-sambrani/img-1.png"
	},
	"/products/pure-benzoin-sambrani/img-3.jpg": {
		"type": "image/jpeg",
		"etag": "\"27c45-tezhUyCwL5u4q2rzsDEay6z6GXo\"",
		"mtime": "2026-08-24T05:54:55.864Z",
		"size": 162885,
		"path": "../public/products/pure-benzoin-sambrani/img-3.jpg"
	},
	"/products/pure-benzoin-sambrani/img-4.jpg": {
		"type": "image/jpeg",
		"etag": "\"32be7-rSv7UhSxWsHuZ5p5vCKR2xIY1k4\"",
		"mtime": "2026-08-24T05:54:57.779Z",
		"size": 207847,
		"path": "../public/products/pure-benzoin-sambrani/img-4.jpg"
	},
	"/products/traditional-health-mix/img-4.jpg": {
		"type": "image/jpeg",
		"etag": "\"19871-xuA0fjYaDmD39I0adPnhpDDb07Q\"",
		"mtime": "2026-08-24T05:55:05.922Z",
		"size": 104561,
		"path": "../public/products/traditional-health-mix/img-4.jpg"
	},
	"/products/traditional-health-mix/img-5.jpg": {
		"type": "image/jpeg",
		"etag": "\"19279-b7QjF59AM7o1lv/etXiKKB9uOzE\"",
		"mtime": "2026-08-24T05:55:07.334Z",
		"size": 103033,
		"path": "../public/products/traditional-health-mix/img-5.jpg"
	},
	"/products/traditional-health-mix/img-1.jpg": {
		"type": "image/jpeg",
		"etag": "\"5071b-Q+uvJfbA+kO7qmVf9mFJFoSmQ1g\"",
		"mtime": "2026-08-24T05:54:59.878Z",
		"size": 329499,
		"path": "../public/products/traditional-health-mix/img-1.jpg"
	},
	"/products/traditional-health-mix/img-3.jpg": {
		"type": "image/jpeg",
		"etag": "\"5b333-pd3VeW6KQ5N9oNoWVAKSYljoFJI\"",
		"mtime": "2026-08-24T05:55:04.336Z",
		"size": 373555,
		"path": "../public/products/traditional-health-mix/img-3.jpg"
	},
	"/products/traditional-health-mix/img-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"5b333-pd3VeW6KQ5N9oNoWVAKSYljoFJI\"",
		"mtime": "2026-08-24T05:55:02.013Z",
		"size": 373555,
		"path": "../public/products/traditional-health-mix/img-2.jpg"
	},
	"/products/traditional-health-mix/img-6.jpg": {
		"type": "image/jpeg",
		"etag": "\"32253-Ol+HKfmJg6SukBOgJESUc1F4td4\"",
		"mtime": "2026-08-24T05:55:09.275Z",
		"size": 205395,
		"path": "../public/products/traditional-health-mix/img-6.jpg"
	},
	"/products/traditional-health-mix/img-7.jpg": {
		"type": "image/jpeg",
		"etag": "\"36bbc-BJ4zLr4B9q2bM0vBlDusoLPFcKI\"",
		"mtime": "2026-08-24T05:55:11.519Z",
		"size": 224188,
		"path": "../public/products/traditional-health-mix/img-7.jpg"
	},
	"/products/traditional-idli-podi/img-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"49741-oaKJsfbhCqNH8DO2qWNntrxhTEc\"",
		"mtime": "2026-08-25T08:35:19.432Z",
		"size": 300865,
		"path": "../public/products/traditional-idli-podi/img-2.jpg"
	},
	"/products/traditional-idli-podi/img-1.jpg": {
		"type": "image/jpeg",
		"etag": "\"549d4-nyhYmG7N+Vv0z6IqCkLUElcJMmo\"",
		"mtime": "2026-08-25T08:35:18.647Z",
		"size": 346580,
		"path": "../public/products/traditional-idli-podi/img-1.jpg"
	},
	"/products/traditional-idli-podi/img-3.jpg": {
		"type": "image/jpeg",
		"etag": "\"52891-By6rnjeYaDHTAYbVKwEwYeYA9S0\"",
		"mtime": "2026-08-25T08:35:20.197Z",
		"size": 338065,
		"path": "../public/products/traditional-idli-podi/img-3.jpg"
	},
	"/products/traditional-idli-podi/img-4.jpg": {
		"type": "image/jpeg",
		"etag": "\"473d9-kAjjbhP1xV9jJmFdiPTSuLPzdAU\"",
		"mtime": "2026-08-25T08:35:20.865Z",
		"size": 291801,
		"path": "../public/products/traditional-idli-podi/img-4.jpg"
	}
};
//#endregion
//#region #nitro/virtual/public-assets-node
function readAsset(id) {
	const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
	return promises.readFile(resolve(serverDir, public_assets_data_default[id].path));
}
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
function getAsset(id) {
	return public_assets_data_default[id];
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/static.mjs
var METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
var EncodingMap = {
	gzip: ".gz",
	br: ".br",
	zstd: ".zst"
};
var static_default = defineHandler((event) => {
	if (event.req.method && !METHODS.has(event.req.method)) return;
	let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
	let asset;
	const encodings = [...(event.req.headers.get("accept-encoding") || "").split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
	for (const encoding of encodings) for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
		const _asset = getAsset(_id);
		if (_asset) {
			asset = _asset;
			id = _id;
			break;
		}
	}
	if (!asset) {
		if (isPublicAssetURL(id)) {
			event.res.headers.delete("Cache-Control");
			throw new HTTPError({ status: 404 });
		}
		return;
	}
	if (encodings.length > 1) event.res.headers.append("Vary", "Accept-Encoding");
	if (event.req.headers.get("if-none-match") === asset.etag) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	const ifModifiedSinceH = event.req.headers.get("if-modified-since");
	const mtimeDate = new Date(asset.mtime);
	if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	if (asset.type) event.res.headers.set("Content-Type", asset.type);
	if (asset.etag && !event.res.headers.has("ETag")) event.res.headers.set("ETag", asset.etag);
	if (asset.mtime && !event.res.headers.has("Last-Modified")) event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
	if (asset.encoding && !event.res.headers.has("Content-Encoding")) event.res.headers.set("Content-Encoding", asset.encoding);
	if (asset.size > 0 && !event.res.headers.has("Content-Length")) event.res.headers.set("Content-Length", asset.size.toString());
	return readAsset(id);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_ajftbG = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_ajftbG
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
var globalMiddleware = [toEventHandler(static_default)].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~middleware"].push(...globalMiddleware);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		middleware.push(...h3App["~middleware"]);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/hooks.mjs
function _captureError(error, type) {
	console.error(`[${type}]`, error);
	useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
	process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
	process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
//#endregion
//#region #nitro/virtual/tracing
var tracingSrvxPlugins = [];
//#endregion
//#region node_modules/nitro/dist/presets/node/runtime/node-server.mjs
var _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
var port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
var host = process.env.NITRO_HOST || process.env.HOST;
var cert = process.env.NITRO_SSL_CERT;
var key = process.env.NITRO_SSL_KEY;
var nitroApp = useNitroApp();
serve({
	port,
	hostname: host,
	tls: cert && key ? {
		cert,
		key
	} : void 0,
	fetch: nitroApp.fetch,
	plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
var node_server_default = {};
//#endregion
export { node_server_default as default };
