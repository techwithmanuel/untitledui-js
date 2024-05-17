import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const TrendDown02: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path {...pathProps} d="M7 7L17 17M17 17V7M17 17H7" />
    </SVG>
  );
};

export default TrendDown02;

