"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Menu03: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path d="M3 12H21M3 6H21M3 18H15" {...pathProps} />
    </SVG>
  );
};

export default Menu03;

