"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const PenToolMinus: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path d="M18 10H6M21 6H3M21 14H3M18 18H6" {...pathProps} />
    </SVG>
  );
};

export default PenToolMinus;

