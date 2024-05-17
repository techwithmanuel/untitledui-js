import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const SwitchHorizontal01: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M20 17H4M4 17L8 13M4 17L8 21M4 7H20M20 7L16 3M20 7L16 11"
        {...pathProps}
      />
    </SVG>
  );
};

export default SwitchHorizontal01;

