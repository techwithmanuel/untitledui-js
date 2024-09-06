"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Italic01: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path d="M19 4H10M14 20H5M15 4L9 20" {...pathProps} />
    </SVG>
  );
};

export default Italic01;

