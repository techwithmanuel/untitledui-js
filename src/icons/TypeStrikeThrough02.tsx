"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const TypeStrikeThrough02: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M8 20H16M10.25 10.5V20M13.75 14V20M3 3L21 21M4 6.99995V5.99995C4 5.45873 4.21497 4.96773 4.56419 4.60767M9.5 4H17C17.9319 4 18.3978 4 18.7654 4.15224C19.2554 4.35523 19.6448 4.74458 19.8478 5.23463C20 5.60218 20 6.06812 20 7M10.25 4V5M13.75 4V8"
        {...pathProps}
      />
    </SVG>
  );
};

export default TypeStrikeThrough02;

