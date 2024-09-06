"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Logout04: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M18 8L22 12M22 12L18 16M22 12H9M15 4.20404C13.7252 3.43827 12.2452 3 10.6667 3C5.8802 3 2 7.02944 2 12C2 16.9706 5.8802 21 10.6667 21C12.2452 21 13.7252 20.5617 15 19.796"
        {...pathProps}
      />
    </SVG>
  );
};

export default Logout04;

