"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const CodeCircle03: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M15.5 15L18.5 12L15.5 9M8.5 9L5.5 12L8.5 15M13 7L11 17M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
        {...pathProps}
      />
    </SVG>
  );
};

export default CodeCircle03;

