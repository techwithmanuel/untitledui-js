"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const ArrowNarrowUp: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path d="M12 20V4M12 4L6 10M12 4L18 10" {...pathProps} />
    </SVG>
  );
};

export default ArrowNarrowUp;

