import { c as createServerFn } from "./createServerFn-CIHAFgYl.mjs";
import { t as createSsrRpc } from "./createSsrRpc-BnLbdv0O.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pincode.functions-DtOglr6Y.js
var lookupPincode = createServerFn({ method: "GET" }).inputValidator((data) => {
	const pin = String(data?.pin ?? "").trim();
	if (!/^\d{6}$/.test(pin)) throw new Error("PIN must be 6 digits");
	return { pin };
}).handler(createSsrRpc("820798398360e6b9cb87d2838e2c08bb532848aa639d0247f51ea7ce67e03197"));
//#endregion
export { lookupPincode as t };
