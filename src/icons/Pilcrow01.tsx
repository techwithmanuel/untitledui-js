import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Pilcrow01: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M16 4V20M16 4H18M16 4H10.5C8.01472 4 6 6.01472 6 8.5C6 10.9853 8.01472 13 10.5 13H16V4ZM14 20H18"
        {...pathProps}
      />
    </SVG>
  );
};

export default Pilcrow01;

