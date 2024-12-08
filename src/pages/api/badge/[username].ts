import { badgen } from "badgen";
import type { StyleOption } from "badgen";
import { IncreaseViews, GetViews } from "@/database/index";
import { FormatNumber } from "@/utils/FormatNumber";

interface QueryParams {
 label?: string;
 labelColor?: string;
 color?: string;
 style?: StyleOption;
 format?: "short" | "long";
 display?: string;
}

export const GET = async function GET({ params, request }: { params: { username: string }; request: Request }): Promise<Response> {
 try {
  const query = new URL(request.url).searchParams;
  const { label, labelColor, color, style, format, display }: QueryParams = Object.fromEntries(query);
  const { username } = params;
  const views: number = display ? await GetViews(username) : await IncreaseViews(username);

  // Validate the format to ensure it's "short" or "long"
  const isValidFormat = format === "short" || format === "long";

  const badge = badgen({
   label: label || "Views",
   labelColor,
   status: FormatNumber(views, isValidFormat ? format! : "short"),
   color,
   style: style || "flat",
  });

  return new Response(badge, {
   headers: {
    "Content-Type": "image/svg+xml",
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Expires: "0",
    Age: "0",
   },
   status: 200,
  });
 } catch (error: unknown) {
  const errorResponse: { error: string } = { error: error instanceof Error ? error.message : "Unknown error" };
  const svg = badgen({
   label: "error",
   labelColor: "#000",
   status: errorResponse.error,
   color: "#e05d44",
   style: "flat",
  });

  return new Response(svg, {
   headers: {
    "Content-Type": "image/svg+xml",
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Expires: "0",
    Age: "0",
   },
   status: 500,
  });
 }
};
