export const FormatNumber = (number, format) => {
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
