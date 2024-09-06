"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const AlertCircle: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
      />
    </SVG>
  );
};

export default AlertCircle;

