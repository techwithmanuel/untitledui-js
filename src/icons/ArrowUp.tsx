"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const ArrowUp: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path d="M12 19V5M12 5L5 12M12 5L19 12" {...pathProps} />
    </SVG>
  );
};

export default ArrowUp;

