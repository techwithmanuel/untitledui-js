import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const ArrowNarrowRight: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path d="M4 12H20M20 12L14 6M20 12L14 18" {...pathProps} />
    </SVG>
  );
};

export default ArrowNarrowRight;

