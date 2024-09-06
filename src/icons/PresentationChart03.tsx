"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const PresentationChart03: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M12 16V21M12 16L18 21M12 16L6 21M8 7V12M12 9V12M16 11V12M22 3H2M3 3H21V11.2C21 12.8802 21 13.7202 20.673 14.362C20.3854 14.9265 19.9265 15.3854 19.362 15.673C18.7202 16 17.8802 16 16.2 16H7.8C6.11984 16 5.27976 16 4.63803 15.673C4.07354 15.3854 3.6146 14.9265 3.32698 14.362C3 13.7202 3 12.8802 3 11.2V3Z"
      />
    </SVG>
  );
};

export default PresentationChart03;

