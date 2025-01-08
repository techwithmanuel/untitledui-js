// Ensure proper import of SVGAttributes
import type { SVGAttributes } from "vue";

// Define the IconNode type
export type IconNode = [string, Record<string, any>];

export interface IconProps extends /* @vue-ignore */ SVGAttributes {
  color?: string;
  size?: number | string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
  class?: string;
  iconNode: IconNode[];
}
