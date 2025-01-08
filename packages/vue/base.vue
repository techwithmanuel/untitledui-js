<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="props.size"
    :height="props.size"
    :stroke="props.color"
    :stroke-width="calculatedStrokeWidth"
    :class="mergedClasses"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
    viewBox="0 0 24 24"
    v-bind="$attrs"
  >
    <template v-for="(node, _) in props.iconNode" :key="node[1].key || index">
      <component :is="node[0]" v-bind="{ ...node[1] }" />
    </template>
  </svg>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { IconProps } from "./types";

const props = withDefaults(defineProps<IconProps>(), {
  color: "currentColor",
  size: 24,
  strokeWidth: 2,
  absoluteStrokeWidth: false,
  class: "",
  pathProps: () => ({}),
});

const calculatedStrokeWidth = computed(() => {
  return props.absoluteStrokeWidth
    ? (Number(props.strokeWidth) * 24) / Number(props.size)
    : props.strokeWidth;
});

const mergedClasses = computed(() => {
  return ["untitled", props.class].filter(Boolean).join(" ");
});
</script>
