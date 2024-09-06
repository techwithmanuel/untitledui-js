"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Coins02: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M15.9377 15.9377C19.3603 15.4795 22 12.548 22 9C22 5.13401 18.866 2 15 2C11.452 2 8.52049 4.63967 8.06227 8.06227M7.5 13L9 12V17.5M7.5 17.5H10.5M16 15C16 18.866 12.866 22 9 22C5.13401 22 2 18.866 2 15C2 11.134 5.13401 8 9 8C12.866 8 16 11.134 16 15Z"
        {...pathProps}
      />
    </SVG>
  );
};

export default Coins02;

