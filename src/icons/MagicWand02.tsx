"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const MagicWand02: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M15 4V2M15 16V14M8 9H10M20 9H22M17.8 11.8L19 13M17.8 6.2L19 5M3 21L12 12M12.2 6.2L11 5"
        {...pathProps}
      />
    </SVG>
  );
};

export default MagicWand02;

