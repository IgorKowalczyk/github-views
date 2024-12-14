import { forwardRef, type InputHTMLAttributes } from "preact/compat";

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>((props, ref) => <input ref={ref} class=" w-full max-w-md rounded-lg border border-neutral-800 bg-transparent p-2 font-normal text-white outline-none duration-200 focus:border-neutral-700" {...props} />);