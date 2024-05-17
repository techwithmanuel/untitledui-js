import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const AlertRight01: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path d="M21 21V3M3 12H17M17 12L10 5M17 12L10 19" {...pathProps} />
    </SVG>
  );
};

export default AlertRight01;

