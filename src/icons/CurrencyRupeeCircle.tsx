"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const CurrencyRupeeCircle: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M8.5 9.99984H15.5M8.5 6.5H15.5M14 18.0002L8.5 13.5002L10 13.5C14.4447 13.5 14.4447 6.5 10 6.5M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
        {...pathProps}
      />
    </SVG>
  );
};

export default CurrencyRupeeCircle;

