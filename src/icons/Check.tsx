"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Check: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path d="M20 6L9 17L4 12" {...pathProps} />
    </SVG>
  );
};

export default Check;

