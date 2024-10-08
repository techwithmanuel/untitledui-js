"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const ArrowCircleBrokenUp: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M7 20.6621C4.01099 18.933 2 15.7013 2 11.9999C2 6.47703 6.47715 1.99988 12 1.99988C17.5228 1.99988 22 6.47703 22 11.9999C22 15.7013 19.989 18.933 17 20.6621M16 11.9999L12 7.99995M12 7.99995L8 11.9999M12 7.99995V21.9999"
        {...pathProps}
      />
    </SVG>
  );
};

export default ArrowCircleBrokenUp;

