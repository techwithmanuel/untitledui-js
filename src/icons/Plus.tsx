import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Plus: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path d="M12 5V19M5 12H19" {...pathProps} />
    </SVG>
  );
};

export default Plus;

