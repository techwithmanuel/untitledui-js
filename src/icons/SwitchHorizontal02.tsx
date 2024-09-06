"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const SwitchHorizontal02: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M4 17H20M20 17L16 13M20 17L16 21M20 7H4M4 7L8 3M4 7L8 11"
        {...pathProps}
      />
    </SVG>
  );
};

export default SwitchHorizontal02;

