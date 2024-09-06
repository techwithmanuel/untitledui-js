"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Activity: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path d="M22 12H18L15 21L9 3L6 12H2" {...pathProps} />
    </SVG>
  );
};

export default Activity;

