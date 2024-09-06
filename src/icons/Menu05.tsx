"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Menu05: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path d="M3 8.5H21M3 15.5H21" {...pathProps} />
    </SVG>
  );
};

export default Menu05;

