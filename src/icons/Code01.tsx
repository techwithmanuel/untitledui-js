import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Code01: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path d="M16 18L22 12L16 6M8 6L2 12L8 18" {...pathProps} />
    </SVG>
  );
};

export default Code01;

