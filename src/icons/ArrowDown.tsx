"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const ArrowDown: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path d="M12 5V19M12 19L19 12M12 19L5 12" {...pathProps} />
    </SVG>
  );
};

export default ArrowDown;

