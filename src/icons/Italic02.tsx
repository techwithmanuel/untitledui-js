"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Italic02: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M13.25 4L7.25 20M16.75 4L10.75 20M19.5 4L9.5 4M14.5 20H4.5"
        {...pathProps}
      />
    </SVG>
  );
};

export default Italic02;

