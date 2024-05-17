import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const FlipBackward: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M3 9H16.5C18.9853 9 21 11.0147 21 13.5C21 15.9853 18.9853 18 16.5 18H12M3 9L7 5M3 9L7 13"
        {...pathProps}
      />
    </SVG>
  );
};

export default FlipBackward;

