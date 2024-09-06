"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const ArrowCircleBrokenDown: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M17 3.33782C19.989 5.06687 22 8.29859 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 8.29859 4.01099 5.06687 7 3.33782M8 12L12 16M12 16L16 12M12 16V2"
        {...pathProps}
      />
    </SVG>
  );
};

export default ArrowCircleBrokenDown;

