"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const ArrowNarrowLeft: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path d="M20 12H4M4 12L10 18M4 12L10 6" {...pathProps} />
    </SVG>
  );
};

export default ArrowNarrowLeft;

