"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Settings03: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M15.0505 9H5.5C4.11929 9 3 7.88071 3 6.5C3 5.11929 4.11929 4 5.5 4H15.0505M8.94949 20H18.5C19.8807 20 21 18.8807 21 17.5C21 16.1193 19.8807 15 18.5 15H8.94949M3 17.5C3 19.433 4.567 21 6.5 21C8.433 21 10 19.433 10 17.5C10 15.567 8.433 14 6.5 14C4.567 14 3 15.567 3 17.5ZM21 6.5C21 8.433 19.433 10 17.5 10C15.567 10 14 8.433 14 6.5C14 4.567 15.567 3 17.5 3C19.433 3 21 4.567 21 6.5Z"
        {...pathProps}
      />
    </SVG>
  );
};

export default Settings03;

