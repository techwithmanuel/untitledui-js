"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Coins03: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M10.101 4C11.3636 2.76281 13.0927 2 15 2C18.866 2 22 5.13401 22 9C22 10.9073 21.2372 12.6365 19.9999 13.899M16 15C16 18.866 12.866 22 9 22C5.13401 22 2 18.866 2 15C2 11.134 5.13401 8 9 8C12.866 8 16 11.134 16 15Z"
        {...pathProps}
      />
    </SVG>
  );
};

export default Coins03;

