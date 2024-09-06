"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const ArrowCircleUpRight: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M15.0002 15.0001V9.00005M15.0002 9.00005H9.00019M15.0002 9.00005L9.00019 14.9999M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
        {...pathProps}
      />
    </SVG>
  );
};

export default ArrowCircleUpRight;

