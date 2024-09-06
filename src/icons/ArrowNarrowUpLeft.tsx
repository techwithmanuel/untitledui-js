"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const ArrowNarrowUpLeft: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path d="M18 18L6 6M6 6V14M6 6H14" {...pathProps} />
    </SVG>
  );
};

export default ArrowNarrowUpLeft;

