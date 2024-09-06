"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const SlashDivider: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path d="M7 22L17 2" {...pathProps} />
    </SVG>
  );
};

export default SlashDivider;

