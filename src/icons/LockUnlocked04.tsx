"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const LockUnlocked04: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M7 10V8C7 5.23858 9.23858 3 12 3C13.6358 3 15.0882 3.78555 16.0004 5M12 14V16M19 15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15C5 11.134 8.13401 8 12 8C15.866 8 19 11.134 19 15Z"
        {...pathProps}
      />
    </SVG>
  );
};

export default LockUnlocked04;

