"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Menu04: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path d="M3 12H21M3 6H21M9 18H21" {...pathProps} />
    </SVG>
  );
};

export default Menu04;

