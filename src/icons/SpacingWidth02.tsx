"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const SpacingWidth02: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M21 21V3M3 21V3M6.5 12H17.5M17.5 15L17.5 9M6.5 15L6.5 9"
        {...pathProps}
      />
    </SVG>
  );
};

export default SpacingWidth02;

