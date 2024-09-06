"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const ArrowNarrowUpRight: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path d="M6 18L18 6M18 6H10M18 6V14" {...pathProps} />
    </SVG>
  );
};

export default ArrowNarrowUpRight;

