import { type CreateTypes } from "canvas-confetti";
import canvasConfetti from "canvas-confetti";
import type { TargetedEvent } from "preact/compat";
import { useRef, useState } from "preact/hooks";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { useDebounce } from "@/utils/hooks";

export const CopyIcon = () => (
 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4">
  <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
 </svg>
);

const availableStyles = [
 {
  name: "flat",
  description: "Simple and clean, perfect for readme files.",
 },
 {
  name: "classic",
  description: "Classic style, perfect for your website.",
 },
 {
  name: "json",
  description: "Get the badge as JSON.",
 },
] satisfies Array<{ name: string; description: string }>;

export default function BadgePreview({ defaultUrl }: { defaultUrl: string | undefined }) {
 const [input, setInput] = useState<string>("");
 const [style, setStyle] = useState<(typeof availableStyles)[number]["name"]>("flat");
 const [animate, setAnimate] = useState<boolean>(false);
 const [newStyle, setNewStyle] = useState<string>(style);
 const debouncedInput = useDebounce(input, 500);
 const canvasRef = useRef<HTMLCanvasElement | null>(null);
 const confetti = useRef<CreateTypes | null>(null);
 const buttonRef = useRef<HTMLButtonElement | null>(null);

 const handleInput = (event: TargetedEvent<HTMLInputElement, Event>) => {
  if (!event) return;
  const target = event.target as HTMLInputElement | null;
  if (!target) return;

  setInput(target.value);
  if (target.value.length > 0) {
   buttonRef.current!.disabled = false;
  } else {
   buttonRef.current!.disabled = true;
  }
 };

 const handleConfetti = (text: string) => {
  navigator.clipboard.writeText(text);
  if (canvasRef.current && buttonRef.current) {
   const buttonRect = buttonRef.current.getBoundingClientRect();
   const canvasRect = canvasRef.current.getBoundingClientRect();
   const originX = (buttonRect.left + buttonRect.width / 2 - canvasRect.left) / canvasRect.width;
   const originY = (buttonRect.top + buttonRect.height / 2 - canvasRect.top) / canvasRect.height;

   confetti.current = canvasConfetti.create(canvasRef.current, {
    resize: true,
    useWorker: true,
   });

   confetti.current({
    particleCount: 50,
    spread: 70,
    startVelocity: 15,
    origin: {
     x: originX,
     y: originY,
    },
    scalar: 0.5,
   });
  }
 };

 const handleStyleChange = (newStyle: string) => {
  setAnimate(true);
  setTimeout(() => {
   setStyle(newStyle);
   setAnimate(false);
  }, 200);
 };

 return (
  <div class="grid grid-cols-1 md:grid-cols-5">
   <div class="sticky flex w-full flex-col border-b border-neutral-800 bg-background p-6 md:col-span-2 md:border-b-0 md:border-r">
    <div class="mb-2 ">
     <h3 class="mb-1 font-medium text-neutral-400">Username:</h3>
     <Input id="input" placeholder="@username" type="text" value={input} onInput={handleInput} />
    </div>
    <div class="mt-1 flex flex-col items-center gap-2">
     {availableStyles.map((styleOption) => (
      <button
       key={styleOption.name}
       class={`mb-2 shrink-0 cursor-pointer rounded-md border border-neutral-800 p-4  text-left text-white outline-hidden duration-200 w-full ${styleOption.name === newStyle ? "bg-neutral-800/70" : "hover:bg-neutral-800/40"} `}
       onClick={() => {
        setNewStyle(styleOption.name);
        handleStyleChange(styleOption.name);
       }}
      >
       <h3 class="font-medium capitalize tracking-tight">{styleOption.name}</h3>
       <p class="text-sm text-neutral-400">{styleOption.description}</p>
      </button>
     ))}
    </div>
   </div>
   <div class="col-span-1 p-6 md:col-span-3">
    <div class={`transition-all duration-200 ${animate ? "scale-95 opacity-0" : "scale-100 opacity-100"}`}>
     {style === "json" ? (
      <>
       <h3 class="mb-1 font-medium text-neutral-400">Endpoint</h3>
       <div class="relative flex flex-row gap-2 overflow-hidden rounded-lg bg-neutral-800 p-4">
        <pre class="overflow-hidden whitespace-nowrap selection:bg-neutral-900 font-mono text-sm text-white">
         {defaultUrl}api/json/{debouncedInput || "example"}
        </pre>
        <div class="absolute right-0 top-0 flex h-full items-center bg-linear-to-r from-transparent via-neutral-800 to-neutral-800 p-2 pl-8">
         <Button ref={buttonRef} variant="secondary" onClick={() => handleConfetti(`${defaultUrl}api/json/${debouncedInput || "example"}`)} disabled={!input} className="px-2">
          <CopyIcon />
         </Button>
        </div>
       </div>
       <h3 class="mt-6 font-medium text-neutral-400">JSON</h3>
       <div class="relative flex flex-row gap-2 overflow-hidden rounded-lg bg-neutral-800 p-4">
        <pre class="overflow-hidden whitespace-nowrap selection:bg-neutral-900 font-mono text-sm text-white">
         <code>
          <span class="line">
           <span style="color:#E1E4E8">{"{"} </span>
           <span style="color:#79B8FF">"views"</span>
           <span style="color:#E1E4E8">: </span>
           <span style="color:#79B8FF">0</span>
           <span style="color:#E1E4E8"> {"}"}</span>
          </span>
         </code>
        </pre>
       </div>
      </>
     ) : (
      <>
       <h3 class="mb-1 font-medium text-neutral-400">Markdown</h3>
       <div class="relative flex flex-row gap-2 overflow-hidden rounded-lg bg-neutral-800 p-4">
        <pre class="overflow-hidden whitespace-nowrap selection:bg-neutral-900 font-mono text-sm text-white">
         <code>
          <span>
           <span style="color:#E1E4E8">![</span>
           <span style="color:#DBEDFF;text-decoration:underline">Profile views</span>
           <span style="color:#E1E4E8">](</span>
           <span style="color:#E1E4E8;text-decoration:underline">
            {defaultUrl}api/badge/{debouncedInput || "example"}?style={style}
           </span>
           <span style="color:#E1E4E8">)</span>
          </span>
         </code>
        </pre>
        <div class="absolute right-0 top-0 flex h-full items-center bg-linear-to-r from-transparent via-neutral-800 to-neutral-800 p-2 pl-8">
         <Button ref={buttonRef} variant="secondary" onClick={() => handleConfetti(`![Profile views](${defaultUrl}api/badge/${debouncedInput || "example"}?style=${style})`)} disabled={!input} className="px-2">
          <CopyIcon />
         </Button>
        </div>
       </div>

       <h3 class="mt-6 font-medium text-neutral-400">Preview</h3>
       <div class="my-1 rounded-lg bg-neutral-800 p-4">
        <img src={`${defaultUrl}api/badge/${debouncedInput || "example"}?style=${style}&display=true`} alt="Profile views" class="h-6" />
       </div>
      </>
     )}
    </div>
   </div>
   <canvas ref={canvasRef} class="pointer-events-none absolute inset-0 z-10 size-full" />
  </div>
 );
}
