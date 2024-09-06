"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const ChevronUpDouble: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path d="M17 18L12 13L7 18M17 11L12 6L7 11" {...pathProps} />
    </SVG>
  );
};

export default ChevronUpDouble;

