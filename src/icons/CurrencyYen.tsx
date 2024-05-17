import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const CurrencyYen: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M12 20.5V11.5M12 11.5L18.5001 3.5M12 11.5L5.50012 3.5M18 11.5H5.99998M17 15.5H6.99998"
        {...pathProps}
      />
    </SVG>
  );
};

export default CurrencyYen;

