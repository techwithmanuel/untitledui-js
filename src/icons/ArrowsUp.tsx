import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const ArrowsUp: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M7 20V4M7 4L3 8M7 4L11 8M17 20V9M17 9L13 13M17 9L21 13"
        {...pathProps}
      />
    </SVG>
  );
};

export default ArrowsUp;

