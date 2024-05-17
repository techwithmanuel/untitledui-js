import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Toggle01Left: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M7 17H17C19.7614 17 22 14.7614 22 12C22 9.23858 19.7614 7 17 7H7M7 17C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7M7 17C9.76142 17 12 14.7614 12 12C12 9.23858 9.76142 7 7 7"
        {...pathProps}
      />
    </SVG>
  );
};

export default Toggle01Left;

