import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const CodeSnippet02: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path d="M17 17L22 12L17 7M7 7L2 12L7 17M14 3L10 21" {...pathProps} />
    </SVG>
  );
};

export default CodeSnippet02;

