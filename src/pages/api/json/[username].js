import { GetViews } from "../../../../database/Views.js";

export const get = async function get({ params }) {
 try {
  const username = params.username;
  if (!username) {
   return {
    status: 400,
    headers: {
     "content-type": "application/json",
    },
    body: JSON.stringify({ error: "No username provided" }),
   };
  }
  const views = await GetViews(username);
  return {
   status: 200,
   headers: {
    "content-type": "application/json",
   },
   body: JSON.stringify({ views }),
  };
 } catch (error) {
  return {
   status: 500,
   headers: {
    "content-type": "application/json",
   },
   body: JSON.stringify({ error: error.message }),
  };
 }
};
