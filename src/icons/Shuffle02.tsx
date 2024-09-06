"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Shuffle02: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M21 16V21M21 21H16M21 21L15 15M3 3L9 9M16 3H21M21 3V8M21 3L3 21"
        {...pathProps}
      />
    </SVG>
  );
};

export default Shuffle02;

