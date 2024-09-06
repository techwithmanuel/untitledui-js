"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const CodeCircle02: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M14 17L17 14L14 11M10 7L7 10L10 13M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
        {...pathProps}
      />
    </SVG>
  );
};

export default CodeCircle02;

