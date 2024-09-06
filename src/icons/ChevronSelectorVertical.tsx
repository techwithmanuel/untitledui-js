"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const ChevronSelectorVertical: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path d="M7 15L12 20L17 15M7 9L12 4L17 9" {...pathProps} />
    </SVG>
  );
};

export default ChevronSelectorVertical;

