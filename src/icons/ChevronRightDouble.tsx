"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const ChevronRightDouble: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path d="M6 17L11 12L6 7M13 17L18 12L13 7" {...pathProps} />
    </SVG>
  );
};

export default ChevronRightDouble;

