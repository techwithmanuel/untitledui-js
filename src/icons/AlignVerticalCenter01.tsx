"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const AlignVerticalCenter01: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M3 12H21M12 2V8.5M12 8.5L16 4.5M12 8.5L8 4.5M12 22V15.5M12 15.5L16 19.5M12 15.5L8 19.5"
        {...pathProps}
      />
    </SVG>
  );
};

export default AlignVerticalCenter01;

