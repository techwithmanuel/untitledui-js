import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Equal: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path d="M5 9H19M5 15H19" {...pathProps} />
    </SVG>
  );
};

export default Equal;

