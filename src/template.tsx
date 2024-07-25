"use client";

import { FC, forwardRef, Ref } from "react";
import { SVGMotionProps, motion } from "framer-motion";

interface SVGParentProps extends SVGMotionProps<SVGSVGElement> {
  size?: string;
}
interface PathProps extends SVGMotionProps<SVGPathElement> {}

export interface SVGComponentProps extends SVGMotionProps<SVGSVGElement> {
  size?: string;
  pathProps?: SVGMotionProps<SVGPathElement>;
}

export interface SVGComponent extends FC<SVGComponentProps> {}

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
        width={width || size || "24"}
        height={height || size || "24"}
        viewBox={viewBox || "0 0 24 24"}
        fill={fill || "none"}
        stroke={stroke || "currentColor"}
        strokeWidth={strokeWidth || "2"}
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
        stroke={props.stroke || "inherit"}
        strokeWidth={props.width || "inherit"}
        strokeLinecap={props.strokeLinecap || "round"}
        strokeLinejoin={props.strokeLinejoin || "round"}
        ref={ref}
      />
    );
  }
);

const DefaultLazyImportFallback = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="2" width="20" height="20" rx="4" ry="4" fill="gray" />
    </svg>
  );
};

export { SVG, Path, DefaultLazyImportFallback };
