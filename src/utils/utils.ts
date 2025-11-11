import { z } from "astro/zod";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatNumber = (number: number, format: "short" | "long"): string => {
  if (format === "short") {
    const formatted = Intl.NumberFormat("en-US", {
      notation: "compact",
      compactDisplay: "short",
      maximumFractionDigits: 2,
    }).format(number);
    return formatted;
  } else {
    const formatted = Intl.NumberFormat("en-US").format(number);
    return formatted;
  }
};

export const paramsSchema = z.object({
  username: z.string().min(1).max(32),
});

export const badgeCreatorSchema = z.object({
  label: z.string().optional(),
  labelColor: z.string().optional(),
  color: z.string().optional(),
  style: z.enum(["flat", "classic"]).optional(),
  format: z.enum(["short", "long"]).optional(),
  display: z.enum(["true", "false"]).optional(),
});
