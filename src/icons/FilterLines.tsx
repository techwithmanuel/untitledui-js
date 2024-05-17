import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const FilterLines: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path d="M6 12H18M3 6H21M9 18H15" {...pathProps} />
    </SVG>
  );
};

export default FilterLines;

