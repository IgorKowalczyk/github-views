<script setup lang="ts">
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "@/utils/utils";

const buttonVariants = cva("rounded-md px-4 py-2 font-medium duration-200 disabled:cursor-not-allowed disabled:opacity-50 motion-reduce:transition-none cursor-pointer", {
 variants: {
  variant: {
   primary: "bg-blue-500 text-white hover:bg-blue-600",
   secondary: "bg-neutral-200 text-neutral-700 hover:bg-neutral-300 dark:bg-white/10 dark:text-white dark:hover:bg-white/15",
  },
 },
 defaultVariants: {
  variant: "primary",
 },
});

interface ButtonProps {
 variant?: VariantProps<typeof buttonVariants>["variant"];
 as?: string;
 href?: string;
}

const props = withDefaults(defineProps<ButtonProps>(), {
 variant: "primary",
 as: "button",
 href: "",
});

const emits = defineEmits(["click"]);
</script>

<template>
 <component :is="props.as" @click="$emit('click')" v-bind="$attrs" :href="props.href" :class="cn(buttonVariants({ variant: props.variant }), $attrs.class ?? '')">
  <slot />
 </component>
</template>
