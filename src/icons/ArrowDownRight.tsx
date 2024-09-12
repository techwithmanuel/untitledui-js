"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const ArrowDownRight: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path d="M6 6L18 18M18 18V10M18 18H10" {...pathProps} />
    </SVG>
  );
};

export default ArrowDownRight;

