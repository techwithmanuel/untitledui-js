import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const SwitchVertical02: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M7 4V20M7 20L3 16M7 20L11 16M17 20V4M17 4L13 8M17 4L21 8"
        {...pathProps}
      />
    </SVG>
  );
};

export default SwitchVertical02;

