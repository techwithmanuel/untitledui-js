"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const BarChart02: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path {...pathProps} d="M18 20V4M6 20V16M12 20V10" />
    </SVG>
  );
};

export default BarChart02;

