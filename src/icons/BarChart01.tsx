"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const BarChart01: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path {...pathProps} d="M18 20V10M12 20V4M6 20V14" />
    </SVG>
  );
};

export default BarChart01;

