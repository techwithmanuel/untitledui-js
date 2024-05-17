import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Sliders01: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M5 21V14M5 10V3M12 21V12M12 8V3M19 21V16M19 12V3M2 14H8M9 8H15M16 16H22"
        {...pathProps}
      />
    </SVG>
  );
};

export default Sliders01;

