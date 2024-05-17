import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Droplets01: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M22 16C22 19.3137 19.3137 22 16 22C12.6863 22 10 19.3137 10 16C10 11.6863 16 2 16 2C16 2 22 11.6863 22 16Z"
        {...pathProps}
      />
      <Path
        d="M8 9C8 10.6569 6.65685 12 5 12C3.34315 12 2 10.6569 2 9C2 6.84315 5 2 5 2C5 2 8 6.84315 8 9Z"
        {...pathProps}
      />
    </SVG>
  );
};

export default Droplets01;

