import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const ParagraphSpacing: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M21 10H13M21 6H13M21 14H13M21 18H13M6 20L6 4M6 20L3 17M6 20L9 17M6 4L3 7M6 4L9 7"
        {...pathProps}
      />
    </SVG>
  );
};

export default ParagraphSpacing;

