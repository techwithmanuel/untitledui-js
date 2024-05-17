import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Minus: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path d="M5 12H19" {...pathProps} />
    </SVG>
  );
};

export default Minus;

