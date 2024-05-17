import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Toggle02Left: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M10.0005 16H18C20.2091 16 22 14.2091 22 12C22 9.79086 20.2091 8 18 8H10.0005M12 12C12 14.7614 9.76142 17 7 17C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7C9.76142 7 12 9.23858 12 12Z"
        {...pathProps}
      />
    </SVG>
  );
};

export default Toggle02Left;

