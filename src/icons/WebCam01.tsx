"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const WebCam01: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M12 18C16.4183 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 7.58172 18 12 18ZM12 18V22M12 22H7M12 22H17M15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10Z"
        {...pathProps}
      />
    </SVG>
  );
};

export default WebCam01;

