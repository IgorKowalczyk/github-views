import { getViews } from "@/database/index";
import { paramsSchema } from "@/utils/utils";

export const GET = async function GET({ params }: { params: { username: string } }): Promise<Response> {
 try {
  const { username } = paramsSchema.parse(params);

  const views = await getViews(username);
  const responseBody = { views: Number(views) };

  return new Response(JSON.stringify(responseBody), {
   status: 200,
   headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Expires: "0",
    Age: "0",
   },
  });
 } catch (_err) {
  return new Response(JSON.stringify({ error: "Internal server error" }), {
   status: 500,
   headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Expires: "0",
    Age: "0",
   },
  });
 }
};
