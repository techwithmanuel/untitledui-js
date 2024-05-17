import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Asterisk02: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path d="M12 4V20M18 6L6 18M20 12H4M18 18L6 6" {...pathProps} />
    </SVG>
  );
};

export default Asterisk02;

