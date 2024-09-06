"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const ChevronUp: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path d="M18 15L12 9L6 15" {...pathProps} />
    </SVG>
  );
};

export default ChevronUp;

