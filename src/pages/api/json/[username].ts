import { GetViews } from "@/database/index";

type Response = {
 status: number;
 headers: Record<string, string>;
 body: string;
};

export const get = async function get({ params }: { params: { username: string } }): Promise<Response> {
 try {
  const { username } = params;
  if (!username) {
   return {
    status: 400,
    headers: {
     "Content-Type": "application/json",
     "Cache-Control": "no-cache, no-store, must-revalidate",
     Pragma: "no-cache",
     Expires: "0",
    },
    body: JSON.stringify({
     error: "No username provided",
    }),
   };
  }
  const views = await GetViews(username);
  const responseBody: { views: number } = { views: Number(views) };
  return {
   status: 200,
   headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Expires: "0",
   },
   body: JSON.stringify(responseBody),
  };
 } catch (error: unknown) {
  const errorResponse: { error: string } = { error: error instanceof Error ? error.message : "Unknown error" };
  return {
   status: 500,
   headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Expires: "0",
   },
   body: JSON.stringify(errorResponse),
  };
 }
};
