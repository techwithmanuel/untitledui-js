"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Target04: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M16 8V5L19 2L20 4L22 5L19 8H16ZM16 8L12 11.9999M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7"
        {...pathProps}
      />
    </SVG>
  );
};

export default Target04;

