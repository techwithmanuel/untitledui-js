import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Link02: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H9M15 17H17C19.7614 17 22 14.7614 22 12C22 9.23858 19.7614 7 17 7H15M7 12L17 12"
        {...pathProps}
      />
    </SVG>
  );
};

export default Link02;

