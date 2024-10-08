"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Building05: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M12 9H16.8C17.9201 9 18.4802 9 18.908 9.21799C19.2843 9.40973 19.5903 9.71569 19.782 10.092C20 10.5198 20 11.0799 20 12.2V19M12 19V4.2C12 3.0799 12 2.51984 11.782 2.09202C11.5903 1.71569 11.2843 1.40973 10.908 1.21799C10.4802 1 9.9201 1 8.8 1H5.2C4.0799 1 3.51984 1 3.09202 1.21799C2.71569 1.40973 2.40973 1.71569 2.21799 2.09202C2 2.51984 2 3.0799 2 4.2V19M21 19H1M5.5 5H8.5M5.5 9H8.5M5.5 13H8.5"
        {...pathProps}
      />
    </SVG>
  );
};

export default Building05;

