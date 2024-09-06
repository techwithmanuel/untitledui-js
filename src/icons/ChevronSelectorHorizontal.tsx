"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const ChevronSelectorHorizontal: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path d="M9 7L4 12L9 17M15 7L20 12L15 17" {...pathProps} />
    </SVG>
  );
};

export default ChevronSelectorHorizontal;

