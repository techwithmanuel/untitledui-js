"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const ArrowLeft: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path d="M19 12H5M5 12L12 19M5 12L12 5" {...pathProps} />
    </SVG>
  );
};

export default ArrowLeft;

