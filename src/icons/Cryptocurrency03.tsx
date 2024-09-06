"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Cryptocurrency03: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M2 2L4 4M22 2L20 4M22 22L20 20M2 22L4 20M2 16H3.5M8 2V3.5M22 8H20.5M16 22V20.5M18 16H21.5M16 2V6M2 8H6M8 22V18M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
        {...pathProps}
      />
    </SVG>
  );
};

export default Cryptocurrency03;

