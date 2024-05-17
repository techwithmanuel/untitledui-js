import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Hurricane03: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M21 4H3M20 8L6 8M18 12L9 12M15 16L8 16M17 20H12"
        {...pathProps}
      />
    </SVG>
  );
};

export default Hurricane03;

