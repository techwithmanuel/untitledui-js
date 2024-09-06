"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const ArrowRight: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path d="M5 12H19M19 12L12 5M19 12L12 19" {...pathProps} />
    </SVG>
  );
};

export default ArrowRight;

