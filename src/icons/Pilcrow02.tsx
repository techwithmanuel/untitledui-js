import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Pilcrow02: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M17.5 4V20M19.5 4H9C6.79086 4 5 5.79086 5 8C5 10.2091 6.79086 12 9 12H14M14 4V20M12 20H19.5"
        {...pathProps}
      />
    </SVG>
  );
};

export default Pilcrow02;

