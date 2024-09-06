"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const ChevronRight: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path d="M9 18L15 12L9 6" {...pathProps} />
    </SVG>
  );
};

export default ChevronRight;

