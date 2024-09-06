"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const GridDotsHorizontalCenter: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M3 3H3.01M3 12H3.01M3 21H3.01M3 16.5H3.01M3 7.5H3.01M7.5 3H7.51M7.5 12H7.51M7.5 21H7.51M16.5 3H16.51M16.5 12H16.51M16.5 21H16.51M21 3H21.01M21 12H21.01M21 21H21.01M21 16.5H21.01M21 7.5H21.01M12 21V3"
        {...pathProps}
      />
    </SVG>
  );
};

export default GridDotsHorizontalCenter;

