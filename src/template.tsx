"use client";

import { FC, forwardRef, Ref } from "react";
import { motion, SVGMotionProps } from "framer-motion";

interface SVGParentProps extends SVGMotionProps<SVGSVGElement> {
  size?: string;
}
interface PathProps extends SVGMotionProps<SVGPathElement> {}

export interface SVGComponentProps extends SVGMotionProps<SVGSVGElement> {
  size?: string;
  pathProps?: SVGMotionProps<SVGPathElement>;
}


const SVG: FC<SVGParentProps> = forwardRef<SVGSVGElement, SVGParentProps>(
  (
    {
      size,
      height,
      width,
      fill,
      strokeWidth,
      stroke,
      className,
      children,
      viewBox,
      ...props
    },
    ref: Ref<SVGSVGElement>
  ) => {
    return (
      <motion.svg
        className={className}
        width={size && width ? width : size ? size : "24"}
        height={size && height ? height : size ? size : "24"}
        viewBox={viewBox ? viewBox : "0 0 24 24"}
        fill={fill ? fill : "none"}
        stroke={stroke ? stroke : "black"}
        strokeWidth={strokeWidth ? strokeWidth : "2"}
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        {...props}
      >
        {children}
      </motion.svg>
    );
  }
);

const Path: FC<PathProps> = forwardRef<SVGPathElement, PathProps>(
  (props, ref: Ref<SVGPathElement>) => {
    return (
      <motion.path
        {...props}
        stroke={props.stroke ? props.stroke : "inherit"}
        strokeWidth={props.width ? props.width : "inherit"}
        strokeLinecap={props.strokeLinecap ? props.strokeLinecap : "round"}
        strokeLinejoin={props.strokeLinejoin ? props.strokeLinejoin : "round"}
        ref={ref}
      />
    );
  }
);

export { SVG, Path };
