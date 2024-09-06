"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const CornerUpLeft: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M9 14L4 9M4 9L9 4M4 9H10.4C13.7603 9 15.4405 9 16.7239 9.65396C17.8529 10.2292 18.7708 11.1471 19.346 12.2761C20 13.5595 20 15.2397 20 18.6V20"
        {...pathProps}
      />
    </SVG>
  );
};

export default CornerUpLeft;

