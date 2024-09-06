"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Recording02: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M3 10L3 14M7.5 11V13M12 6V18M16.5 3V21M21 10V14"
        {...pathProps}
      />
    </SVG>
  );
};

export default Recording02;

