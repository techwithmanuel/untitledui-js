"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const ArrowBlockLeft: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M3 12L10 5V9H20.2C20.48 9 20.62 9 20.727 9.0545C20.8211 9.10243 20.8976 9.17892 20.9455 9.273C21 9.37996 21 9.51997 21 9.8V14.2C21 14.48 21 14.62 20.9455 14.727C20.8976 14.8211 20.8211 14.8976 20.727 14.9455C20.62 15 20.48 15 20.2 15H10V19L3 12Z"
        {...pathProps}
      />
    </SVG>
  );
};

export default ArrowBlockLeft;

