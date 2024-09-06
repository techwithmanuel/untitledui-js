"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Reflect02: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M12 3V6M12 10.5V13.5M12 18V21M22 12H15.5M15.5 12L19.5 16M15.5 12L19.5 8M2 12H8.5M8.5 12L4.5 16M8.5 12L4.5 8"
        {...pathProps}
      />
    </SVG>
  );
};

export default Reflect02;

