"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Toggle03Left: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M2 12C2 8.68629 4.68629 6 8 6H16C19.3137 6 22 8.68629 22 12C22 15.3137 19.3137 18 16 18H8C4.68629 18 2 15.3137 2 12Z"
        {...pathProps}
      />
      <Path
        d="M8 14.5C9.38071 14.5 10.5 13.3807 10.5 12C10.5 10.6193 9.38071 9.5 8 9.5C6.61929 9.5 5.5 10.6193 5.5 12C5.5 13.3807 6.61929 14.5 8 14.5Z"
        {...pathProps}
      />
    </SVG>
  );
};

export default Toggle03Left;

