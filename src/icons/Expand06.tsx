"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Expand06: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M16 8L21 3M21 3H16M21 3V8M8 8L3 3M3 3L3 8M3 3L8 3M8 16L3 21M3 21H8M3 21L3 16M16 16L21 21M21 21V16M21 21H16"
        {...pathProps}
      />
    </SVG>
  );
};

export default Expand06;

