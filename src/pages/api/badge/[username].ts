import type { APIRoute } from "astro";
import { z } from "astro/zod";
import { badgen } from "badgen";
import { increaseViews, getViews } from "@/database/index";
import { badgeCreatorSchema, formatNumber, paramsSchema } from "@/utils/utils";

export const GET: APIRoute = async (context) => {
 try {
  const query = context.url.searchParams;
  const queryEntries = Object.fromEntries(query.entries());
  const data = badgeCreatorSchema.parse(queryEntries);

  const { username } = paramsSchema.parse(context.params);

  const views: number = data.display ? await getViews(username, context.locals.runtime.env) : await increaseViews(username, context.locals.runtime.env);

  const badge = badgen({
   label: data.label || "Views",
   labelColor: data.labelColor,
   status: formatNumber(views, data.format || "short"),
   color: data.color,
   style: data.style || "flat",
  });

  return new Response(badge, {
   headers: {
    "Content-Type": "image/svg+xml",
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Expires: "0",
    Age: "0",
   },
   status: 200,
  });
 } catch (error) {
  console.error(error);
  const svg = badgen({
   label: "Error",
   labelColor: "ef4444",
   status: error instanceof z.ZodError ? error.errors[0].message : "Internal server error",
   color: "000",
   style: "flat",
  });

  return new Response(svg, {
   headers: {
    "Content-Type": "image/svg+xml",
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Expires: "0",
    Age: "0",
   },
   status: 500,
  });
 }
};
