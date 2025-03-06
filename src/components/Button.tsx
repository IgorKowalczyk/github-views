import { type VariantProps, cva } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "preact/compat";
import { cn } from "@/utils/utils";

const buttonVariants = cva("rounded-md px-4 py-2 font-medium duration-200 disabled:cursor-not-allowed disabled:opacity-50 motion-reduce:transition-none cursor-pointer", {
 variants: {
  variant: {
   primary: "bg-blue-500 text-white hover:bg-blue-600",
   secondary: "bg-neutral-200 text-neutral-700 hover:bg-neutral-300 dark:bg-white/10 dark:text-white dark:hover:bg-white/15",
  },
  defaultVariants: {
   variant: "primary",
  },
 },
});

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
 variant?: VariantProps<typeof buttonVariants>["variant"];
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ variant, className, ...rest }, ref) => {
 return (
  <button ref={ref} className={cn(buttonVariants({ variant }), className)} {...rest}>
   {rest.children}
  </button>
 );
});
