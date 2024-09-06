"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const WebCam02: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M8 22H16M20.5 10.5C20.5 15.1944 16.6944 19 12 19C7.30558 19 3.5 15.1944 3.5 10.5C3.5 5.80558 7.30558 2 12 2C16.6944 2 20.5 5.80558 20.5 10.5ZM15.1875 10.5C15.1875 12.2604 13.7604 13.6875 12 13.6875C10.2396 13.6875 8.8125 12.2604 8.8125 10.5C8.8125 8.73959 10.2396 7.3125 12 7.3125C13.7604 7.3125 15.1875 8.73959 15.1875 10.5Z"
        {...pathProps}
      />
    </SVG>
  );
};

export default WebCam02;

