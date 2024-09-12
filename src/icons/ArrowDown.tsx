"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const ArrowDown: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path d="M12 4V20M12 20L18 14M12 20L6 14" {...pathProps} />
    </SVG>
  );
};

export default ArrowDown;

