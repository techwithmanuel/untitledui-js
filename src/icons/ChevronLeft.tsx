"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const ChevronLeft: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path d="M15 18L9 12L15 6" {...pathProps} />
    </SVG>
  );
};

export default ChevronLeft;

