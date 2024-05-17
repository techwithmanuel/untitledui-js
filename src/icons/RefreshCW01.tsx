import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const RefreshCW01: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M21 10C21 10 18.995 7.26822 17.3662 5.63824C15.7373 4.00827 13.4864 3 11 3C6.02944 3 2 7.02944 2 12C2 16.9706 6.02944 21 11 21C15.1031 21 18.5649 18.2543 19.6482 14.5M21 10V4M21 10H15"
        {...pathProps}
      />
    </SVG>
  );
};

export default RefreshCW01;

