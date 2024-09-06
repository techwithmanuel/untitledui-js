"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Umbrella02: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M7 19.4C7 20.8359 8.11929 22 9.5 22C10.8807 22 12 20.8359 12 19.4V11M12 11C10.3898 11 8 12 8 12C8 12 6.61017 11 5 11C3.38983 11 2 12 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 12 20.6102 11 19 11C17.3898 11 16 12 16 12C16 12 13.6102 11 12 11Z"
        {...pathProps}
      />
    </SVG>
  );
};

export default Umbrella02;

