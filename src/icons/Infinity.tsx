import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Infinity: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M18.1777 8C23.2737 8 23.2737 16 18.1777 16C13.0827 16 11.0447 8 5.43875 8C0.85375 8 0.85375 16 5.43875 16C11.0447 16 13.0828 8 18.1788 8H18.1777Z"
        {...pathProps}
      />
    </SVG>
  );
};

export default Infinity;

