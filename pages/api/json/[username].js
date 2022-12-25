import { GetViews } from "../../../database/Views";

export default async function handler(req, res) {
 const { username } = req.query;
 res.setHeader("Content-Type", "application/json");
 res.setHeader("Cache-Control", "no-cache");
 if (!username) return res.status(400).send({ error: "No username provided" });
 return res.status(200).send({ views: await GetViews(username), username: username });
};
