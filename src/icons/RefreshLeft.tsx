"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const RefreshLeft: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M4 7H14C17.3137 7 20 9.68629 20 13C20 16.3137 17.3137 19 14 19H4M4 7L8 3M4 7L8 11"
        {...pathProps}
      />
    </SVG>
  );
};

export default RefreshLeft;

