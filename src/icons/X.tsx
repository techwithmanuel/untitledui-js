import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const X: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path d="M17 7L7 17M7 7L17 17" {...pathProps} />
    </SVG>
  );
};

export default X;

