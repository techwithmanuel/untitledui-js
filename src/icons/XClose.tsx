import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const XClose: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path d="M18 6L6 18M6 6L18 18" {...pathProps} />
    </SVG>
  );
};

export default XClose;

