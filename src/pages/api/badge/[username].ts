import { z } from "astro/zod";
import { badgen } from "badgen";
import { increaseViews, getViews } from "@/database/index";
import { badgeCreatorSchema, formatNumber, paramsSchema } from "@/utils/utils";

export const GET = async function GET({ params, request }: { params: { username: string }; request: Request }): Promise<Response> {
 try {
  const query = new URL(request.url).searchParams;
  const queryEntries = Object.fromEntries(query.entries());

  const data = badgeCreatorSchema.parse(queryEntries);
  const { username } = paramsSchema.parse(params);

  const views: number = data.display ? await getViews(username) : await increaseViews(username);

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
