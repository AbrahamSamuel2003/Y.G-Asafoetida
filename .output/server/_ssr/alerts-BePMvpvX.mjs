import { c as createServerFn } from "./createServerFn-CIHAFgYl.mjs";
import { t as createSsrRpc } from "./createSsrRpc-B5HttDjb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/alerts-BePMvpvX.js
var subscribeStockAlertServerFn = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("126c54026198195dc0ac76ee0c3b09b726dc7cc97c5f4c13e451d8b5a4206d59"));
var adminListStockAlertsServerFn = createServerFn({ method: "GET" }).handler(createSsrRpc("aec148f7d6271b05e3d0f9154e305e72e7a305f4f94620ded3cc4a485445ee1e"));
var adminNotifyStockAlertServerFn = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("579f932c9185d201f5223618d08ff0a6699aa8e2a3f1667b36c426726418f027"));
//#endregion
export { adminNotifyStockAlertServerFn as n, subscribeStockAlertServerFn as r, adminListStockAlertsServerFn as t };
