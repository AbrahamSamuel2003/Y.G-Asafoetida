import { createServerFn } from "@tanstack/react-start";

export type PincodeLookup = {
  ok: boolean;
  pin: string;
  city: string;
  district: string;
  state: string;
  areas: string[];
  message?: string;
};

export const lookupPincode = createServerFn({ method: "GET" })
  .validator((data: { pin: string }) => {
    const pin = String(data?.pin ?? "").trim();
    if (!/^\d{6}$/.test(pin)) throw new Error("PIN must be 6 digits");
    return { pin };
  })
  .handler(async ({ data }): Promise<PincodeLookup> => {
    const empty: PincodeLookup = {
      ok: false,
      pin: data.pin,
      city: "",
      district: "",
      state: "",
      areas: [],
    };
    try {
      const res = await fetch(`https://api.postalpincode.in/pincode/${data.pin}`, {
        headers: { accept: "application/json" },
      });
      if (!res.ok) return { ...empty, message: "Lookup service unavailable" };
      const json = (await res.json()) as Array<{
        Status?: string;
        PostOffice?: Array<{ Name?: string; District?: string; State?: string; Block?: string }> | null;
      }>;
      const entry = json?.[0];
      const offices = entry?.PostOffice ?? [];
      if (entry?.Status !== "Success" || offices.length === 0) {
        return { ...empty, message: "We couldn't find that PIN code" };
      }
      const first = offices[0]!;
      const areas = Array.from(new Set(offices.map((o) => o.Name).filter(Boolean) as string[]));
      return {
        ok: true,
        pin: data.pin,
        city: first.District ?? "",
        district: first.District ?? "",
        state: first.State ?? "",
        areas,
      };
    } catch {
      return { ...empty, message: "Lookup service unavailable" };
    }
  });
