import type { SVGAttributes } from "svelte/elements";

export type IconNode = [string, Record<string, any>];

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
  class?: string;
  iconNode: IconNode[];
}
