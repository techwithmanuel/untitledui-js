"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const RefreshCW05: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M20.453 12.893C20.1752 15.5029 18.6964 17.9487 16.2494 19.3614C12.1839 21.7086 6.98539 20.3157 4.63818 16.2502L4.38818 15.8172M3.54613 11.107C3.82393 8.49711 5.30272 6.05138 7.74971 4.63862C11.8152 2.29141 17.0137 3.68434 19.3609 7.74983L19.6109 8.18285M3.49316 18.0661L4.22521 15.334L6.95727 16.0661M17.0424 7.93401L19.7744 8.66606L20.5065 5.93401"
        {...pathProps}
      />
    </SVG>
  );
};

export default RefreshCW05;

