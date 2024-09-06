"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const SpacingWidth01: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M6 12H18M6 12L8 9M6 12L8 15M18 12L16 9M18 12L16 15M21 21V3M3 21V3"
        {...pathProps}
      />
    </SVG>
  );
};

export default SpacingWidth01;

