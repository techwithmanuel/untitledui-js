import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const AlignLeft: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path d="M16 10H3M20 6H3M20 14H3M16 18H3" {...pathProps} />
    </SVG>
  );
};

export default AlignLeft;

