"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Download02: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path d="M21 21H3M18 11L12 17M12 17L6 11M12 17V3" {...pathProps} />
    </SVG>
  );
};

export default Download02;

