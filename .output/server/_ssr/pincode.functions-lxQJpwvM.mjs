import { c as createServerFn } from "./createServerFn-CIHAFgYl.mjs";
import { t as createServerRpc } from "./createServerRpc-B90ckaqP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pincode.functions-lxQJpwvM.js
var lookupPincode_createServerFn_handler = createServerRpc({
	id: "820798398360e6b9cb87d2838e2c08bb532848aa639d0247f51ea7ce67e03197",
	name: "lookupPincode",
	filename: "src/lib/pincode.functions.ts"
}, (opts) => lookupPincode.__executeServer(opts));
var lookupPincode = createServerFn({ method: "GET" }).validator((data) => {
	const pin = String(data?.pin ?? "").trim();
	if (!/^\d{6}$/.test(pin)) throw new Error("PIN must be 6 digits");
	return { pin };
}).handler(lookupPincode_createServerFn_handler, async ({ data }) => {
	const empty = {
		ok: false,
		pin: data.pin,
		city: "",
		district: "",
		state: "",
		areas: []
	};
	try {
		const res = await fetch(`https://api.postalpincode.in/pincode/${data.pin}`, { headers: { accept: "application/json" } });
		if (!res.ok) return {
			...empty,
			message: "Lookup service unavailable"
		};
		const entry = (await res.json())?.[0];
		const offices = entry?.PostOffice ?? [];
		if (entry?.Status !== "Success" || offices.length === 0) return {
			...empty,
			message: "We couldn't find that PIN code"
		};
		const first = offices[0];
		const areas = Array.from(new Set(offices.map((o) => o.Name).filter(Boolean)));
		return {
			ok: true,
			pin: data.pin,
			city: first.District ?? "",
			district: first.District ?? "",
			state: first.State ?? "",
			areas
		};
	} catch {
		return {
			...empty,
			message: "Lookup service unavailable"
		};
	}
});
//#endregion
export { lookupPincode_createServerFn_handler };
