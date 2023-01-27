import { makeBadge } from "badge-maker";
import { IncreaseViews, GetViews } from "../../../../database/Views";
import { FormatNumber } from "../../../utils/FormatNumber";
import type { Format } from "badge-maker";
import type { Formatting } from "../../../utils/FormatNumber";

export const get = async function get({ params, request }: { params: { username: string }; request: Request }) {
 try {
  const query = new URL(request.url).searchParams;
  const { label, labelColor, color, style, format, display } = Object.fromEntries(query) as {
   label?: string;
   labelColor?: string;
   color?: string;
   style?: string;
   format?: string;
   display?: string;
  };

  const { username } = params;
  const number = display ? await GetViews(username) : await IncreaseViews(username);
  const svg = makeBadge({
   label: label || "Views",
   message: FormatNumber(number.toString(), format as Formatting["format"]),
   color: color || "gray",
   labelColor: labelColor || "#555",
   style: style || "flat",
  } as Format);
  return new Response(svg, {
   headers: {
    "Content-Type": "image/svg+xml",
   },
   status: 200,
  }) as Response;
 } catch (error) {
  const svg = makeBadge({
   label: "Error",
   message: error.message,
   color: "red",
  } as Format);

  return new Response(svg, {
   headers: {
    "Content-Type": "image/svg+xml",
   },
   status: 500,
  }) as Response;
 }
};
