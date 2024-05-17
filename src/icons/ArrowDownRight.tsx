import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const ArrowDownRight: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path d="M7 7L17 17M17 17V7M17 17H7" {...pathProps} />
    </SVG>
  );
};

export default ArrowDownRight;

