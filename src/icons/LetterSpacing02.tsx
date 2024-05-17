import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const LetterSpacing02: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M2 18H22M2 18L5 15M2 18L5 21M22 18L19 15M22 18L19 21M7 3H17M12 3V14"
        {...pathProps}
      />
    </SVG>
  );
};

export default LetterSpacing02;

