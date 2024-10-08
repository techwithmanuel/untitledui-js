"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Building03: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M6.5 5H9.25M6.5 9H9.25M6.5 13H9.25M12.75 5H15.5M12.75 9H15.5M12.75 13H15.5M19 19V4.2C19 3.0799 19 2.51984 18.782 2.09202C18.5903 1.71569 18.2843 1.40973 17.908 1.21799C17.4802 1 16.9201 1 15.8 1H6.2C5.07989 1 4.51984 1 4.09202 1.21799C3.71569 1.40973 3.40973 1.71569 3.21799 2.09202C3 2.51984 3 3.0799 3 4.2V19M21 19H1"
        {...pathProps}
      />
    </SVG>
  );
};

export default Building03;

