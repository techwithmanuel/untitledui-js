import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const ArrowsDown: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M17 4V15M17 15L13 11M17 15L21 11M7 4V20M7 20L3 16M7 20L11 16"
        {...pathProps}
      />
    </SVG>
  );
};

export default ArrowsDown;

