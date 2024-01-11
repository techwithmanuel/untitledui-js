"use client";

import React, { FC, forwardRef, Ref } from "react";

interface SVGParentProps extends React.SVGProps<SVGSVGElement> {
  size?: string;
}
interface PathProps extends React.SVGProps<SVGPathElement> {}

export interface SVGComponentProps extends React.SVGProps<SVGSVGElement> {
  size?: string;
  pathProps?: React.SVGProps<SVGPathElement>;
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
      <svg
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
      </svg>
    );
  }
);

const Path: FC<PathProps> = forwardRef<SVGPathElement, PathProps>(
  (props, ref: Ref<SVGPathElement>) => {
    return (
      <path
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
