"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const ClockSnooze: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M16.5 17H21.5L16.5 22H21.5M21.9506 13C21.9833 12.6711 22 12.3375 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C12.1677 22 12.3344 21.9959 12.5 21.9877C12.6678 21.9795 12.8345 21.9671 13 21.9506M12 6V12L15.7384 13.8692"
      />
    </SVG>
  );
};

export default ClockSnooze;

