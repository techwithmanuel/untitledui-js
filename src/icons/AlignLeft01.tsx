"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const AlignLeft01: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path d="M3 3V21M21 12H7M7 12L14 19M7 12L14 5" {...pathProps} />
    </SVG>
  );
};

export default AlignLeft01;

