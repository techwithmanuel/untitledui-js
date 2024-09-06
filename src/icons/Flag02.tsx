"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Flag02: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M4 15C4 15 5 14 8 14C11 14 13 16 16 16C19 16 20 15 20 15V4C20 4 19 5 16 5C13 5 11 3 8 3C5 3 4 4 4 4M4 22L4 2"
        {...pathProps}
      />
    </SVG>
  );
};

export default Flag02;

