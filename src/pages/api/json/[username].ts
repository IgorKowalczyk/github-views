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
     "content-type": "application/json",
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
    "content-type": "application/json",
   },
   body: JSON.stringify(responseBody),
  };
 } catch (error: unknown) {
  const errorResponse: { error: string } = { error: error instanceof Error ? error.message : "Unknown error" };
  return {
   status: 500,
   headers: {
    "content-type": "application/json",
   },
   body: JSON.stringify(errorResponse),
  };
 }
};
