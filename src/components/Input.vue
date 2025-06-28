<script setup lang="ts">
import { cn } from "@/utils/utils";
import { useVModel } from "@vueuse/core";

interface InputProps {
 defaultValue?: string | number;
 modelValue?: string | number;
}

const props = withDefaults(defineProps<InputProps>(), {});

const emits = defineEmits<{
 (e: "update:modelValue", payload: string | number): void;
}>();

const modelValue = useVModel(props, "modelValue", emits, {
 passive: true,
 defaultValue: props.defaultValue,
});
</script>

<template>
 <div class="relative">
  <input
   v-model="modelValue"
   v-bind="$attrs"
   :class="cn('w-full rounded-lg border border-neutral-800 bg-transparent p-2 text-white outline-none transition duration-200 focus:border-neutral-700', $attrs.class ?? '')"
  />
 </div>
</template>
