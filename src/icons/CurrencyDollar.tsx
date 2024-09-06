"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const CurrencyDollar: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M6 16C6 18.2091 7.79086 20 10 20H14C16.2091 20 18 18.2091 18 16C18 13.7909 16.2091 12 14 12H10C7.79086 12 6 10.2091 6 8C6 5.79086 7.79086 4 10 4H14C16.2091 4 18 5.79086 18 8M12 2V22"
        {...pathProps}
      />
    </SVG>
  );
};

export default CurrencyDollar;

