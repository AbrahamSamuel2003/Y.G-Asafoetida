import { c as createServerFn } from "./createServerFn-CIHAFgYl.mjs";
import { t as createSsrRpc } from "./createSsrRpc-BnLbdv0O.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/orders-C1LsiGW1.js
var createOrderServerFn = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("575047d67d894c265c103aab089c753ea67766147e633e5434034cf9f0f045aa"));
var getOrderByIdServerFn = createServerFn({ method: "GET" }).validator((data) => {
	return {
		id: String(data?.id ?? "").trim(),
		verify: data?.verify ? String(data.verify).trim() : void 0
	};
}).handler(createSsrRpc("866a21b1cb57c3c6af314d27a74bbe61dda9f7d1dd1363b4ae3a5752e8f44076"));
createServerFn({ method: "GET" }).validator((data) => ({
	email: data?.email ? String(data.email).trim() : void 0,
	phone: data?.phone ? String(data.phone).trim() : void 0
})).handler(createSsrRpc("fc80778c43c3088479a09a711c07ddfd76343932dbbd64a4996cf771622733e8"));
var resolveOrderServerFn = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("78612f084a89e41ee9e462513c82222bcef059540bfa966e7f8c62d0f952dda6"));
var adminListOrdersServerFn = createServerFn({ method: "GET" }).validator((data) => ({
	status: data?.status ? String(data.status).trim() : void 0,
	search: data?.search ? String(data.search).trim() : void 0,
	limit: data?.limit ? Number(data.limit) : 100
})).handler(createSsrRpc("03969ccbf709d58844a0a811fd5e363a101a7ed883b781a42afe172541b4976d"));
var adminUpdateOrderStatusServerFn = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("e35a133ec1de0373db21cb754a2e42a0a5bafedb761341bb870fa4e0af42b2b1"));
var adminProcessResolutionServerFn = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("75320d427faed7bb519ca6b272ea119162e058ebf9eb60cb32363ce5dd062b18"));
var adminDeleteOrderServerFn = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("b56c43b918719dd2ed567b4e2252e54b5a782a5a65bd53b3c3743063780f2769"));
var adminClearAllOrdersServerFn = createServerFn({ method: "POST" }).handler(createSsrRpc("7f71670ce8c24aabe2d638ad62ca2ece630e7153bc7c13e4bc8b8d67dd776588"));
//#endregion
export { adminUpdateOrderStatusServerFn as a, resolveOrderServerFn as c, adminProcessResolutionServerFn as i, adminDeleteOrderServerFn as n, createOrderServerFn as o, adminListOrdersServerFn as r, getOrderByIdServerFn as s, adminClearAllOrdersServerFn as t };
