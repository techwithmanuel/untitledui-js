"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Login04: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M12 8L16 12M16 12L12 16M16 12H3M3.33782 7C5.06687 4.01099 8.29859 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C8.29859 22 5.06687 19.989 3.33782 17"
        {...pathProps}
      />
    </SVG>
  );
};

export default Login04;

