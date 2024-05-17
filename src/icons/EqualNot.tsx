import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const EqualNot: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path d="M5 9H19M5 15H19M19 5L5 19" {...pathProps} />
    </SVG>
  );
};

export default EqualNot;

