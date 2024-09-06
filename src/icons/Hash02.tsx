"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Hash02: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M9.49999 3L6.49999 21M17.5 3L14.5 21M20.5 8H3.5M19.5 16H2.5"
        {...pathProps}
      />
    </SVG>
  );
};

export default Hash02;

