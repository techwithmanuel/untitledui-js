import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Recording01: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M3 10L3 14M7.5 6L7.5 18M12 3V21M16.5 6V18M21 10V14"
        {...pathProps}
      />
    </SVG>
  );
};

export default Recording01;

