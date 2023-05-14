import { SVGMotionProps } from "framer-motion";
//Inspect d attribute of the Heart Component , compare with the github version as well as the markerPin05 in the maps tab

export interface SVGComponentProps extends SVGMotionProps<SVGSVGElement> {
  size?: string;
  pathProps?: SVGMotionProps<SVGPathElement>;
}
