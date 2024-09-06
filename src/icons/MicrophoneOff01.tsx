"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const MicrophoneOff01: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M15 9.4V5C15 3.34315 13.6569 2 12 2C10.8224 2 9.80325 2.67852 9.3122 3.66593M12 19V22M12 19C8.13401 19 5 15.866 5 12V10M12 19C15.866 19 19 15.866 19 12V10M8 22H16M2 2L22 22M12 15C10.3431 15 9 13.6569 9 12V9L14.1226 14.12C13.5796 14.6637 12.8291 15 12 15Z"
        {...pathProps}
      />
    </SVG>
  );
};

export default MicrophoneOff01;

