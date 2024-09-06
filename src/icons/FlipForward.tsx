"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const FlipForward: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M21 9H7.5C5.01472 9 3 11.0147 3 13.5C3 15.9853 5.01472 18 7.5 18H12M21 9L17 5M21 9L17 13"
        {...pathProps}
      />
    </SVG>
  );
};

export default FlipForward;

