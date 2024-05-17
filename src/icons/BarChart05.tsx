import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const BarChart05: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path {...pathProps} d="M3 17V21M15 8V21M9 13V21M21 3V21" />
    </SVG>
  );
};

export default BarChart05;

