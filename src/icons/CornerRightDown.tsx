"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const CornerRightDown: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M3 4H6.4C9.76031 4 11.4405 4 12.7239 4.65396C13.8529 5.2292 14.7708 6.14708 15.346 7.27606C16 8.55953 16 10.2397 16 13.6L16 20M16 20L11 15M16 20L21 15"
        {...pathProps}
      />
    </SVG>
  );
};

export default CornerRightDown;

