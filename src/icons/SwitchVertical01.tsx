"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const SwitchVertical01: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M17 4V20M17 20L13 16M17 20L21 16M7 20V4M7 4L3 8M7 4L11 8"
        {...pathProps}
      />
    </SVG>
  );
};

export default SwitchVertical01;

