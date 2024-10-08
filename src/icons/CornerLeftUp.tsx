"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const CornerLeftUp: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M21 20H17.6C14.2397 20 12.5595 20 11.2761 19.346C10.1471 18.7708 9.2292 17.8529 8.65396 16.7239C8 15.4405 8 13.7603 8 10.4V4M8 4L13 9M8 4L3 9"
        {...pathProps}
      />
    </SVG>
  );
};

export default CornerLeftUp;

