import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const ChevronLeftDouble: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path d="M18 17L13 12L18 7M11 17L6 12L11 7" {...pathProps} />
    </SVG>
  );
};

export default ChevronLeftDouble;

