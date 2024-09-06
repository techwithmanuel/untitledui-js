"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Target03: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M22 12H18M6 12H2M12 6V2M12 22V18M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
        {...pathProps}
      />
    </SVG>
  );
};

export default Target03;

