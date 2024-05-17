import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const BarChart06: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path {...pathProps} d="M9 8V21M21 17V21M3 3V21M15 13V21" />
    </SVG>
  );
};

export default BarChart06;

