import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const ArrowsRight: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M4 7H15M15 7L11 11M15 7L11 3M4 17H20M20 17L16 21M20 17L16 13"
        {...pathProps}
      />
    </SVG>
  );
};

export default ArrowsRight;

