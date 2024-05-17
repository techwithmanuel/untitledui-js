import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Heading02: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M6 4V20M18 4V20M9.5 4V20M11.5 4H4M18 12H9.5M11.5 20H4M20 20H16M20 4H16"
        {...pathProps}
      />
    </SVG>
  );
};

export default Heading02;

