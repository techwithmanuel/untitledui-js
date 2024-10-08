"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Scissors02: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M4.5 8.6L21 17M21 7L4.5 15.4M6 3C7.65685 3 9 4.34315 9 6C9 7.65685 7.65685 9 6 9C4.34315 9 3 7.65685 3 6C3 4.34315 4.34315 3 6 3ZM6 15C7.65685 15 9 16.3431 9 18C9 19.6569 7.65685 21 6 21C4.34315 21 3 19.6569 3 18C3 16.3431 4.34315 15 6 15Z"
        {...pathProps}
      />
    </SVG>
  );
};

export default Scissors02;

