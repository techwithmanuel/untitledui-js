import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Loading01: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M12 2.25V4.75M12 18V22M5.75 12H2.25M21.25 12H19.75M18.4571 18.4571L17.75 17.75M18.6642 5.41579L17.25 6.83M4.92157 19.0784L7.75 16.25M5.12868 5.20868L7.25 7.33"
        {...pathProps}
      />
    </SVG>
  );
};

export default Loading01;

