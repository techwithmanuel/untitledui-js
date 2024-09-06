"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Contrast02: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        {...pathProps}
      />
      <Path
        d="M12 18.5C15.5899 18.5 18.5 15.5899 18.5 12C18.5 8.41015 15.5899 5.5 12 5.5V18.5Z"
        {...pathProps}
      />
    </SVG>
  );
};

export default Contrast02;

