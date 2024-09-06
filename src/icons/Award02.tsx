"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Award02: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M7 15.0903V22L11.7029 20.1188C11.8126 20.0749 11.8675 20.053 11.9242 20.0443C11.9744 20.0366 12.0256 20.0366 12.0758 20.0443C12.1325 20.053 12.1874 20.0749 12.2971 20.1188L17 22V15.0903M19.5 9.5C19.5 13.6421 16.1421 17 12 17C7.85786 17 4.5 13.6421 4.5 9.5C4.5 5.35786 7.85786 2 12 2C16.1421 2 19.5 5.35786 19.5 9.5Z"
        {...pathProps}
      />
    </SVG>
  );
};

export default Award02;

