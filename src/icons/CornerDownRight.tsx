"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const CornerDownRight: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M4 4V5.4C4 8.76031 4 10.4405 4.65396 11.7239C5.2292 12.8529 6.14708 13.7708 7.27606 14.346C8.55953 15 10.2397 15 13.6 15H20M20 15L15 10M20 15L15 20"
        {...pathProps}
      />
    </SVG>
  );
};

export default CornerDownRight;

