"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const ArrowDownLeft: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path d="M17 7L7 17M7 17H17M7 17V7" {...pathProps} />
    </SVG>
  );
};

export default ArrowDownLeft;

