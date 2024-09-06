"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const SearchSM: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
        {...pathProps}
      />
    </SVG>
  );
};

export default SearchSM;

