import "./patch.js";

export async function IncreaseViews(username: string) {
 if (username === "example") return 0;
 const kv = await Deno.openKv();
 await kv.atomic().sum([username], 1n).commit();
 const view = await kv.get([username]);
 return Number(view.value || 0);
}

export async function GetViews(username: string) {
 if (username === "example") return 0;
 const kv = await Deno.openKv();
 const view = await kv.get([username]);
 return view.value || 0;
}
