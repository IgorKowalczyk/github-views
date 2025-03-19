<script setup lang="ts">
import { ref, reactive, watch } from "vue";
import { useDebounceFn, useElementBounding, useClipboard, useTimeoutFn } from "@vueuse/core";
import Button from "@/components/Button.vue";
import Input from "@/components/Input.vue";
import canvasConfetti from "canvas-confetti";
import { Clipboard, ClipboardCheck } from "lucide-vue-next";

const props = defineProps({
 defaultUrl: {
  type: String,
  required: true,
 },
});

const state = reactive({
 input: "",
 style: "flat",
 animating: false,
 isCopied: false,
});

const debouncedInput = ref("");
const debouncedInputFn = useDebounceFn(() => {
 debouncedInput.value = state.input;
}, 250);

watch(() => state.input, debouncedInputFn);

const canvasRef = ref(null);
const buttonRef = ref(null);

const availableStyles = [
 { name: "flat", description: "Simple and clean, perfect for readme files." },
 { name: "classic", description: "Classic style, perfect for your website." },
 { name: "json", description: "Get the badge as JSON." },
];

const { copy } = useClipboard();

const handleCopy = async (text: string) => {
 await copy(text);

 state.isCopied = true;

 const { start } = useTimeoutFn(() => {
  state.isCopied = false;
 }, 2000);

 start();

 if (!canvasRef.value || !buttonRef.value) return;

 const buttonBounds = useElementBounding(buttonRef);
 const canvasBounds = useElementBounding(canvasRef);
 const originX = (buttonBounds.left.value + buttonBounds.width.value / 2 - canvasBounds.left.value) / canvasBounds.width.value;
 const originY = (buttonBounds.top.value + buttonBounds.height.value / 2 - canvasBounds.top.value) / canvasBounds.height.value;

 const confetti = canvasConfetti.create(canvasRef.value, { resize: true, useWorker: true });
 confetti({ particleCount: 50, spread: 70, startVelocity: 15, origin: { x: originX, y: originY }, scalar: 0.5 });
};

const handleStyleChange = (newStyle: string) => {
 state.animating = true;
 state.isCopied = false;

 const { start } = useTimeoutFn(() => {
  state.style = newStyle;
  state.animating = false;
 }, 200);

 start();
};
</script>

<template>
 <div class="grid grid-cols-1 md:grid-cols-5">
  <div class="sticky flex w-full flex-col border-b border-neutral-800 bg-background p-6 md:col-span-2 md:border-b-0 md:border-r">
   <div class="mb-2">
    <h3 class="mb-1 font-medium text-neutral-400">Username:</h3>
    <Input id="input" placeholder="@username" type="text" v-model="state.input" />
   </div>
   <div class="mt-1 flex flex-col items-center gap-2">
    <button v-for="styleOption in availableStyles" :key="styleOption.name" :class="['mb-2 w-full shrink-0 cursor-pointer rounded-md border border-neutral-800 p-4 text-left text-white outline-hidden duration-200', styleOption.name === state.style ? 'bg-neutral-800/70' : 'hover:bg-neutral-800/40']" @click="handleStyleChange(styleOption.name)">
     <h3 class="font-medium capitalize tracking-tight">{{ styleOption.name }}</h3>
     <p class="text-sm text-neutral-400">{{ styleOption.description }}</p>
    </button>
   </div>
  </div>
  <div class="col-span-1 p-6 md:col-span-3">
   <div :class="['transition-all duration-300', state.animating ? 'scale-95 opacity-0' : 'scale-100 opacity-100']">
    <div v-if="state.style == 'flat' || state.style == 'classic'" :key="state.style">
     <h3 class="mb-1 font-medium text-neutral-400">Markdown</h3>
     <div class="relative flex flex-row gap-2 overflow-hidden rounded-lg bg-neutral-800 p-4">
      <pre class="overflow-hidden whitespace-nowrap selection:bg-neutral-900 font-mono text-sm text-white"><code>![Profile views]({{ props.defaultUrl }}api/badge/{{ debouncedInput || 'example' }}?style={{ state.style }})</code></pre>
      <div class="absolute right-0 top-0 flex h-full items-center bg-linear-to-r from-transparent via-neutral-800 to-neutral-800 p-2 pl-8">
       <Button ref="buttonRef" variant="secondary" @click="handleCopy(`![Profile views](${props.defaultUrl}api/badge/${debouncedInput || 'example'}?style=${state.style})`)" :disabled="!debouncedInput" class="relative py-4">
        <Transition name="fade-scale">
         <Clipboard v-if="!state.isCopied" class="size-4 mx-auto mt-2 inset-0 absolute" />
         <ClipboardCheck v-else class="size-4 mx-auto mt-2 inset-0 absolute" />
        </Transition>
       </Button>
      </div>
     </div>
     <h3 class="mt-6 font-medium text-neutral-400">Preview</h3>
     <div class="my-1 rounded-lg bg-neutral-800 p-4">
      <img :src="`${props.defaultUrl}api/badge/${debouncedInput || 'example'}?style=${state.style}&display=true`" alt="Profile views" class="h-6" />
     </div>
    </div>
    <div v-if="state.style === 'json'">
     <h3 class="mb-1 font-medium text-neutral-400">Endpoint</h3>
     <div class="relative flex flex-row gap-2 overflow-hidden rounded-lg bg-neutral-800 p-4">
      <pre class="overflow-hidden whitespace-nowrap selection:bg-neutral-900 font-mono text-sm text-white">{{ props.defaultUrl }}api/json/{{ debouncedInput || "example" }}</pre>
      <div class="absolute right-0 top-0 flex h-full items-center bg-linear-to-r from-transparent via-neutral-800 to-neutral-800 p-2 pl-8">
       <Button ref="buttonRef" variant="secondary" @click="handleCopy(`${props.defaultUrl}api/json/${debouncedInput || 'example'}`)" :disabled="!debouncedInput" class="relative py-4">
        <Transition name="fade-scale">
         <Clipboard v-if="!state.isCopied" class="size-4 mx-auto mt-2 inset-0 absolute" />
         <ClipboardCheck v-else class="size-4 mx-auto mt-2 inset-0 absolute" />
        </Transition>
       </Button>
      </div>
     </div>
     <h3 class="mt-6 font-medium text-neutral-400">JSON</h3>
     <div class="relative flex flex-row gap-2 overflow-hidden rounded-lg bg-neutral-800 p-4">
      <pre class="overflow-hidden whitespace-nowrap selection:bg-neutral-900 font-mono text-sm text-white"><code><span class="line"><span style="color:#E1E4E8">{</span><span style="color:#79B8FF">"views"</span><span style="color:#E1E4E8">: </span><span style="color:#79B8FF">0</span><span style="color:#E1E4E8">}</span> </span></code></pre>
     </div>
    </div>
   </div>
  </div>
  <canvas ref="canvasRef" class="pointer-events-none absolute inset-0 z-10 size-full" />
 </div>
</template>

<style scoped>
.fade-scale-enter-active,
.fade-scale-leave-active {
 transition:
  opacity 0.5s,
  transform 0.5s;
}

.fade-scale-enter-from,
.fade-scale-leave-to {
 opacity: 0;

 transform: scale(0);
}
</style>
