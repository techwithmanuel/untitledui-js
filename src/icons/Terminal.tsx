import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Terminal: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path d="M4 17L10 11L4 5M12 19H20" {...pathProps} />
    </SVG>
  );
};

export default Terminal;

