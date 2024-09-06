"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Menu02: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path d="M3 12H15M3 6H21M3 18H21" {...pathProps} />
    </SVG>
  );
};

export default Menu02;

