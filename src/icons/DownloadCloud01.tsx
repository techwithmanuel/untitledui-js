"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const DownloadCloud01: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M4 16.2422C2.79401 15.435 2 14.0602 2 12.5C2 10.1564 3.79151 8.23129 6.07974 8.01937C6.54781 5.17213 9.02024 3 12 3C14.9798 3 17.4522 5.17213 17.9203 8.01937C20.2085 8.23129 22 10.1564 22 12.5C22 14.0602 21.206 15.435 20 16.2422M8 17L12 21M12 21L16 17M12 21V12"
        {...pathProps}
      />
    </SVG>
  );
};

export default DownloadCloud01;

