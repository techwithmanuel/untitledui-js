"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const BarChart03: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path {...pathProps} d="M6 20V4M18 20V16M12 20V10" />
    </SVG>
  );
};

export default BarChart03;

