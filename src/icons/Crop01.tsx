"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Crop01: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M2 6H14.8C15.9201 6 16.4802 6 16.908 6.21799C17.2843 6.40973 17.5903 6.71569 17.782 7.09202C18 7.51984 18 8.07989 18 9.2V22M22 18L9.2 18C8.07989 18 7.51984 18 7.09202 17.782C6.71569 17.5903 6.40973 17.2843 6.21799 16.908C6 16.4802 6 15.9201 6 14.8V2"
        {...pathProps}
      />
    </SVG>
  );
};

export default Crop01;

