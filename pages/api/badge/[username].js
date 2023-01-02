import { makeBadge } from "badge-maker";
import { IncreaseViews, GetViews } from "../../../database/Views";
import { FormatNumber } from "../../../utils/FormatNumber";

export default async function handler(req, res) {
 const { username, label, labelColor, color, style, format, display } = req.query;
 res.setHeader("Content-Type", "image/svg+xml");
 res.setHeader("Cache-Control", "no-cache");
 res.setHeader("X-Content-Type-Options", "nosniff");
 res.setHeader("Content-Security-Policy", "default-src 'self'");
 res.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
 res.setHeader("X-Frame-Options", "SAMEORIGIN");
 res.setHeader("X-XSS-Protection", "1; mode=block");
 try {
  const number = display ? await GetViews(username) : await IncreaseViews(username);
  const svg = makeBadge({
   label: label || "Views",
   message: FormatNumber(number.toString(), format),
   color: color || "gray",
   labelColor: labelColor || "#555",
   style: style || "flat",
  });
  return res.status(200).send(svg);
 } catch (e) {
  const svg = makeBadge({
   label: "Error",
   message: e.message,
   color: "red",
  });
  return res.status(200).send(svg);
 }
}
