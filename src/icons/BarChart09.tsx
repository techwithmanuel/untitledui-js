"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const BarChart09: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M21 21H6.2C5.07989 21 4.51984 21 4.09202 20.782C3.71569 20.5903 3.40973 20.2843 3.21799 19.908C3 19.4802 3 18.9201 3 17.8V3M7 5.5V17.5M11.5 8.5V17.5M16 11.5V17.5M20.5 14.5V17.5"
      />
    </SVG>
  );
};

export default BarChart09;

