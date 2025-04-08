<script lang="ts">
  import type { IconProps } from "./types";

  let {
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth = false,
    class: className = "",
    iconNode = [],
    ...attrs
  }: IconProps = $props();

  let calculatedStrokeWidth = $derived(
    absoluteStrokeWidth
      ? (Number(strokeWidth) * 24) / Number(size)
      : strokeWidth,
  );

  let mergedClasses = $derived(
    ["untitled", className].filter(Boolean).join(" "),
  );
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  stroke={color}
  stroke-width={calculatedStrokeWidth}
  class={mergedClasses}
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
  viewBox="0 0 24 24"
  {...attrs}
>
  {#each iconNode as [tagName, attributes], index (attributes.key || index)}
    <svelte:element this={tagName} {...attributes} />
  {/each}
</svg>
