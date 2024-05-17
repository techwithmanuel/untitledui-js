import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Expand05: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M15 9L21 3M21 3H15M21 3V9M9 9L3 3M3 3L3 9M3 3L9 3M9 15L3 21M3 21H9M3 21L3 15M15 15L21 21M21 21V15M21 21H15"
        {...pathProps}
      />
    </SVG>
  );
};

export default Expand05;

