import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const AlignRight: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path d="M21 10H8M21 6H4M21 14H4M21 18H8" {...pathProps} />
    </SVG>
  );
};

export default AlignRight;

