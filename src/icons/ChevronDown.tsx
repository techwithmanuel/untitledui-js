"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const ChevronDown: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path d="M6 9L12 15L18 9" {...pathProps} />
    </SVG>
  );
};

export default ChevronDown;

