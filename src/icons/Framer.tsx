import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Framer: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M12 15.5V22.5L5 15.5M5 15.5V8.5H12M5 15.5H19L12 8.5M12 8.5H19V1.5H5L12 8.5Z"
        {...pathProps}
      />
    </SVG>
  );
};

export default Framer;

