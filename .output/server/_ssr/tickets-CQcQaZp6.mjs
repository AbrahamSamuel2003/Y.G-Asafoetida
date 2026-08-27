import { c as createServerFn } from "./createServerFn-CIHAFgYl.mjs";
import { t as createSsrRpc } from "./createSsrRpc-B5HttDjb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tickets-CQcQaZp6.js
var createTicketServerFn = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("c3fecf55cc7b7916e509d7c6d547884f16b71fca3b22f3faedfac47bdbe64fa0"));
var adminListTicketsServerFn = createServerFn({ method: "GET" }).validator((data) => ({
	status: data?.status ? String(data.status).trim() : void 0,
	search: data?.search ? String(data.search).trim() : void 0
})).handler(createSsrRpc("dd636231c74f7c74c8f0b9ca0db4ff9b9973a8e14b6ad8ea9aee73ea124c3f33"));
var adminUpdateTicketServerFn = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("676054e73ed60c9dbab89a05f5481cd148ce9c4d7611d2270324187caa931696"));
//#endregion
export { adminUpdateTicketServerFn as n, createTicketServerFn as r, adminListTicketsServerFn as t };
