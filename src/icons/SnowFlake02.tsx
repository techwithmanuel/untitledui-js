"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const SnowFlake02: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M12 8V16M12 8V2M12 8L7 3M12 8L17 3M12 16V22M12 16L7 21M12 16L17 21M16 12H8M16 12H22M16 12L21 7M16 12L21 17M8 12H2M8 12L3 7M8 12L3 17"
        {...pathProps}
      />
    </SVG>
  );
};

export default SnowFlake02;

