import { makeBadge } from "badge-maker";
import { IncreaseViews, GetViews } from "../../../database/Views";
import { FormatNumber } from "../../../utils/FormatNumber";

export default async function handler(req, res) {
 const { username, label, labelColor, color, style, format, display } = req.query;
 try {
  const number = display ? await GetViews(username) : await IncreaseViews(username);
  const svg = makeBadge({
   label: label || "Views",
   message: FormatNumber(number.toString(), format),
   color: color || "gray",
   labelColor: labelColor || "#555",
   style: style || "flat",
  });
  res.setHeader("Content-Type", "image/svg+xml");
  res.setHeader("Cache-Control", "no-cache");
  res.status(200).send(svg);
 } catch (e) {
  const svg = makeBadge({
   label: "Error",
   message: e.message,
   color: "red",
  });
  res.setHeader("Content-Type", "image/svg+xml");
  res.setHeader("Cache-Control", "no-cache");
  return res.status(400).send(svg);
 }
};
