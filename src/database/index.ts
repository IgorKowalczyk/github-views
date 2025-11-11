import "./patch";

export async function increaseViews(username: string, env: Cloudflare.Env): Promise<number> {
  if (username === "example") return 0;

  // No views for thebabayaga or thebabayagakiller, don't spam the api bro
  if (username === "thebabayaga" || username === "thebabayagakiller") return 0;

  const kv = env.views;
  if (!kv) throw new Error("KV Namespace not available! Check your configuration - The KV namespace should be named 'views'.");

  const currentViews = Number((await kv.get(username)) || 0);
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
