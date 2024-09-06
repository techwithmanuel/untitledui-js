"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Upload02: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path d="M21 3H3M18 13L12 7M12 7L6 13M12 7V21" {...pathProps} />
    </SVG>
  );
};

export default Upload02;

