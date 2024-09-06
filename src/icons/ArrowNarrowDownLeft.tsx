"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const ArrowNarrowDownLeft: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path d="M18 6L6 18M6 18H14M6 18V10" {...pathProps} />
    </SVG>
  );
};

export default ArrowNarrowDownLeft;

