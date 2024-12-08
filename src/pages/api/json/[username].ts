import { GetViews } from "@/database/index";

export const GET = async function GET({ params }: { params: { username: string } }): Promise<Response> {
 try {
  const { username } = params;

  if (!username) {
   return new Response(
    JSON.stringify({
     error: "No username provided",
    }),
    {
     status: 400,
     headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache, no-store, must-revalidate",
      Pragma: "no-cache",
      Expires: "0",
     },
    }
   );
  }

  const views = await GetViews(username);
  const responseBody: { views: number } = { views: Number(views) };

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
 } catch (error: unknown) {
  return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Something went wrong! Please try again later." }), {
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
