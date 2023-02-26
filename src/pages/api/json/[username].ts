import { GetViews } from "../../../../database/Views.js";

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
  const responseBody: { views: number } = { views };
  return {
   status: 200,
   headers: {
    "content-type": "application/json",
   },
   body: JSON.stringify(responseBody),
  };
 } catch (error) {
  const errorResponse: { error: string } = { error: error.message };
  return {
   status: 500,
   headers: {
    "content-type": "application/json",
   },
   body: JSON.stringify(errorResponse),
  };
 }
};
