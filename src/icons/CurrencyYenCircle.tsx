import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const CurrencyYenCircle: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M12 18V12M12 12L16 7M12 12L8 7M16 12H8M15.5 15H8.5M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
        {...pathProps}
      />
    </SVG>
  );
};

export default CurrencyYenCircle;

