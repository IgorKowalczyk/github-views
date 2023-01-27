import { makeBadge } from "badge-maker";
import { IncreaseViews, GetViews } from "../../../../database/Views";
import { FormatNumber } from "../../../utils/FormatNumber";

export const get = async function get({ params, request }) {
 try {
  const query = new URL(request.url).searchParams;
  const { label, labelColor, color, style, format, display } = Object.fromEntries(query);
  const { username } = params;
  const number = display ? await GetViews(username) : await IncreaseViews(username);
  const svg = makeBadge({
   label: label || "Views",
   message: FormatNumber(number.toString(), format),
   color: color || "gray",
   labelColor: labelColor || "#555",
   style: style || "flat",
  });
  return new Response(svg, {
   headers: { "Content-Type": "image/svg+xml" },
   status: 200,
  });
 } catch (error) {
  const svg = makeBadge({
   label: "Error",
   message: error.message,
   color: "red",
  });

  return new Response(svg, {
   headers: { "Content-Type": "image/svg+xml" },
   status: 500,
  });
 }
};
