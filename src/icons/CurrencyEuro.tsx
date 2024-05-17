import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const CurrencyEuro: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M19 5.51903C17.5176 4.25973 15.5975 3.5 13.5 3.5C8.80558 3.5 5 7.30558 5 12C5 16.6944 8.80558 20.5 13.5 20.5C15.5975 20.5 17.5176 19.7403 19 18.481M3 14H13M3 10H13"
        {...pathProps}
      />
    </SVG>
  );
};

export default CurrencyEuro;

