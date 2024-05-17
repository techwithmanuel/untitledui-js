import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const AlignJustify: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path d="M21 10H3M21 18H3M21 6H3M21 14H3" {...pathProps} />
    </SVG>
  );
};

export default AlignJustify;

