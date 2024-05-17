import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const AlignTopArrow01: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path d="M21 3H3M12 21V7M12 7L5 14M12 7L19 14" {...pathProps} />
    </SVG>
  );
};

export default AlignTopArrow01;

