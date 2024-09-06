"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Minimize01: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M4 14H10M10 14V20M10 14L3 21M20 10H14M14 10V4M14 10L21 3"
        {...pathProps}
      />
    </SVG>
  );
};

export default Minimize01;

