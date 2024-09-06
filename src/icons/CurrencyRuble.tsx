"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const CurrencyRuble: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M8.5 11.5H14.5C16.7091 11.5 18.5 9.70914 18.5 7.5C18.5 5.29086 16.7091 3.5 14.5 3.5H8.5V11.5ZM8.5 11.5H6.5M13.5 15.5H6.5M8.5 4V20.5"
        {...pathProps}
      />
    </SVG>
  );
};

export default CurrencyRuble;

