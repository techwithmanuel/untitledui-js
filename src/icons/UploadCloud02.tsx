"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const UploadCloud02: FC = ({
  pathProps,
  ...props
}: SVGComponentProps) => {
  return (
    <SVG {...props}>
      <Path
        d="M8 16L12 12M12 12L16 16M12 12V21M20 16.7428C21.2215 15.734 22 14.2079 22 12.5C22 9.46243 19.5376 7 16.5 7C16.2815 7 16.0771 6.886 15.9661 6.69774C14.6621 4.48484 12.2544 3 9.5 3C5.35786 3 2 6.35786 2 10.5C2 12.5661 2.83545 14.4371 4.18695 15.7935"
        {...pathProps}
      />
    </SVG>
  );
};

export default UploadCloud02;

