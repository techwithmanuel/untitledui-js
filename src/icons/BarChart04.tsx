"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const BarChart04: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path {...pathProps} d="M3 11L3 21M15 11L15 21M9 3L9 21M21 3V21" />
    </SVG>
  );
};

export default BarChart04;

