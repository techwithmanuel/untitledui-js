"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Maximize01: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M14 10L21 3M21 3H15M21 3V9M10 14L3 21M3 21H9M3 21L3 15"
        {...pathProps}
      />
    </SVG>
  );
};

export default Maximize01;

