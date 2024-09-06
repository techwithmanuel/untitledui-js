"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const BatteryOn: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path d="M6 7L18 17L12 22V2L18 7L6 17" {...pathProps} />
    </SVG>
  );
};

export default BatteryOn;

