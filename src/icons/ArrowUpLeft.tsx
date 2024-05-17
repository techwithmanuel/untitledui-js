import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const ArrowUpLeft: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path d="M17 17L7 7M7 7V17M7 7H17" {...pathProps} />
    </SVG>
  );
};

export default ArrowUpLeft;

