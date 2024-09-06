"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Underline01: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M18 4V11C18 14.3137 15.3137 17 12 17C8.68629 17 6 14.3137 6 11V4M4 21H20"
        {...pathProps}
      />
    </SVG>
  );
};

export default Underline01;

