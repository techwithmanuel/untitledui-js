import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const CurrencyRupee: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M6 3H18M6 8H18M14.5 21L6 13H9C15.667 13 15.667 3 9 3"
        {...pathProps}
      />
    </SVG>
  );
};

export default CurrencyRupee;

