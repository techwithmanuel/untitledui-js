import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const ArrowUpRight: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path d="M7 17L17 7M17 7H7M17 7V17" {...pathProps} />
    </SVG>
  );
};

export default ArrowUpRight;

