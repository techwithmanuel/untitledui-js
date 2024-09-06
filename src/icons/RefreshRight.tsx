"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const RefreshRight: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M20 7H10C6.68629 7 4 9.68629 4 13C4 16.3137 6.68629 19 10 19H20M20 7L16 3M20 7L16 11"
        {...pathProps}
      />
    </SVG>
  );
};

export default RefreshRight;

