"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Link05: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H9M8 12L18 12M15.7778 17H17C19.7614 17 22 14.7614 22 12C22 9.23858 19.7614 7 17 7H15.7778C15.3482 7 15 7.34822 15 7.77778V16.2222C15 16.6518 15.3482 17 15.7778 17Z"
        {...pathProps}
      />
    </SVG>
  );
};

export default Link05;

