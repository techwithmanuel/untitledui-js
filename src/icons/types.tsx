import { SVGMotionProps } from "framer-motion";

export interface SVGComponentProps extends SVGMotionProps<SVGSVGElement> {
  size?: string;
  pathProps?: SVGMotionProps<SVGPathElement>;
}
