import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const CurrencyPound: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M17.5 20.5H6.5C6.5 20.5 10 17.7413 10 13.5C10 10.6725 7.91376 9.66123 7.8837 7.30497C7.88566 2.64078 13.5005 2.88877 15.4521 4.74258M6.5 13.5H15"
        {...pathProps}
      />
    </SVG>
  );
};

export default CurrencyPound;

