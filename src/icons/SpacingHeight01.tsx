"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const SpacingHeight01: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M12 18L12 6M12 18L9 16M12 18L15 16M12 6L9 8M12 6L15 8M21 3H3M21 21H3"
        {...pathProps}
      />
    </SVG>
  );
};

export default SpacingHeight01;

