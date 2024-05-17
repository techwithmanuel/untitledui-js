import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const CurrencyEthereumCircle: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M6.5 15.5L12.0002 18L17.5 15.5M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM6.5 11.5L12.0002 14L17.5 11.5L12.0002 5L6.5 11.5Z"
        {...pathProps}
      />
    </SVG>
  );
};

export default CurrencyEthereumCircle;

