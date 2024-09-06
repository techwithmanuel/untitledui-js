"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const CornerLeftDown: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M21 4H17.6C14.2397 4 12.5595 4 11.2761 4.65396C10.1471 5.2292 9.2292 6.14708 8.65396 7.27606C8 8.55953 8 10.2397 8 13.6V20M8 20L13 15M8 20L3 15"
        {...pathProps}
      />
    </SVG>
  );
};

export default CornerLeftDown;

