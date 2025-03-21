import "./patch";

export async function increaseViews(username: string, env: Cloudflare.Env): Promise<number> {
 if (username === "example") return 0;

 const kv = env.views;
 if (!kv) throw new Error("KV Namespace not available! Check your configuration - The KV namespace should be named 'views'.");

 const currentViews = Number((await kv.get(username)) || 0);

 // Increase views by 1
 const newViews = currentViews + 1;
 await kv.put(username, newViews.toString());

 return newViews;
}

export async function getViews(username: string, env: Cloudflare.Env): Promise<number> {
 if (username === "example") return 0;

 const kv = env.views;
 if (!kv) throw new Error("KV Namespace not available! Check your configuration - The KV namespace should be named 'views'.");

 const view = await kv.get(username);
 return Number(view || 0);
}
