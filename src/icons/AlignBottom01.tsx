import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const AlignBottom01: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path d="M3 21H21M12 3V17M12 17L19 10M12 17L5 10" {...pathProps} />
    </SVG>
  );
};

export default AlignBottom01;

