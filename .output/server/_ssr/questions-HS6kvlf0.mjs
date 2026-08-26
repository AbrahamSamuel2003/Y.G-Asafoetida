import { c as createServerFn } from "./createServerFn-CIHAFgYl.mjs";
import { t as createSsrRpc } from "./createSsrRpc-BnLbdv0O.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/questions-HS6kvlf0.js
var getProductReviewsServerFn = createServerFn({ method: "GET" }).validator((data) => ({ slug: String(data?.slug ?? "").trim() })).handler(createSsrRpc("8e5043662c086483cd737a8f1c69e85a3e154d5b44f3b6afc700a0fd80bc0d6c"));
var submitReviewServerFn = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("a51633ae714f150ce08118589e6de10d0e814164bfa9139085440e56319fc489"));
var adminListReviewsServerFn = createServerFn({ method: "GET" }).validator((data) => ({
	status: data?.status ? String(data.status).trim() : void 0,
	slug: data?.slug ? String(data.slug).trim() : void 0
})).handler(createSsrRpc("ebb0f906b5b901fe0ffebbae00ebba4b5b3fa68d35280b759b33d6f0827ed58d"));
var adminModerateReviewServerFn = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("20c069086689ace61e7564a26d0c6056a924e9fe5b8d417bb75c835bc1235ea4"));
var getProductQuestionsServerFn = createServerFn({ method: "GET" }).validator((data) => ({ slug: String(data?.slug ?? "").trim() })).handler(createSsrRpc("4ab8af57cec7a61a8255cd367ed0f14486b1befca03ef6a66044ccd749972b62"));
var askQuestionServerFn = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("eb279a78d43a3166ad78bf26065f44f316ee58cdc92d0f6beaa075998395280e"));
var adminListQuestionsServerFn = createServerFn({ method: "GET" }).validator((data) => ({
	status: data?.status ? String(data.status).trim() : void 0,
	slug: data?.slug ? String(data.slug).trim() : void 0
})).handler(createSsrRpc("4dab48bafb6af5004be81ebc807fb8583a96a17d0aad39fa17a0f98fbbb7be6a"));
var adminAnswerQuestionServerFn = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("c609583c266f5765b44f7d275ddb6c312beeb853cbf359efce90daae89b359bb"));
var adminDeleteQuestionServerFn = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("70e6af66f65057384770cd96bccf9a89a83173d238da9a89ed5562e73b88b7f0"));
//#endregion
export { adminModerateReviewServerFn as a, getProductReviewsServerFn as c, adminListReviewsServerFn as i, submitReviewServerFn as l, adminDeleteQuestionServerFn as n, askQuestionServerFn as o, adminListQuestionsServerFn as r, getProductQuestionsServerFn as s, adminAnswerQuestionServerFn as t };
