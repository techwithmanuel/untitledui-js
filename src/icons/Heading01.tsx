"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Heading01: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M6 4V20M18 4V20M8 4H4M18 12L6 12M8 20H4M20 20H16M20 4H16"
        {...pathProps}
      />
    </SVG>
  );
};

export default Heading01;

