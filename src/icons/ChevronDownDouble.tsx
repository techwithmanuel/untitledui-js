"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const ChevronDownDouble: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path d="M7 13L12 18L17 13M7 6L12 11L17 6" {...pathProps} />
    </SVG>
  );
};

export default ChevronDownDouble;

