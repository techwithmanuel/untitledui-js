"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Expand02: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path d="M3 21L21 3M3 21H9M3 21L3 15M21 3H15M21 3V9" {...pathProps} />
    </SVG>
  );
};

export default Expand02;

