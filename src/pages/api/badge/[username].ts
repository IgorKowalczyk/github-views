import { makeBadge } from "badge-maker";
import { IncreaseViews, GetViews } from "../../../../database/Views";
import { FormatNumber } from "../../../utils/FormatNumber";
import type { Format } from "badge-maker";
import type { Formatting } from "../../../utils/FormatNumber";

interface QueryParams {
 label?: string;
 labelColor?: string;
 color?: string;
 style?: string;
 format?: string;
 display?: string;
}

export const get = async function get({ params, request }: { params: { username: string }; request }): Promise<Response> {
 try {
  const query = new URL(request.url).searchParams;
  const { label, labelColor, color, style, format, display }: QueryParams = Object.fromEntries(query);

  const { username } = params;
  const number = display ? await GetViews(username) : await IncreaseViews(username);
  const svg = makeBadge({
   label: label || "Views",
   message: FormatNumber(number, format as Formatting["format"]),
   color: color || "gray",
   labelColor: labelColor || "#555",
   style: style || "flat",
  } as Format);
  return new Response(svg, {
   headers: {
    "Content-Type": "image/svg+xml",
   },
   status: 200,
  });
 } catch (error: unknown) {
  const svg = makeBadge({
   label: "Error",
   message: (error as Error).message,
   color: "red",
  } as Format);

  return new Response(svg, {
   headers: {
    "Content-Type": "image/svg+xml",
   },
   status: 500,
  });
 }
};
