import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Hash01: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path d="M4 8H20M4 16H20M8 3V21M16 3V21" {...pathProps} />
    </SVG>
  );
};

export default Hash01;

