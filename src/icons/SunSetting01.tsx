import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const SunSetting01: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M12 3V5M5.31412 7.31412L3.8999 5.8999M18.6858 7.31412L20.1 5.8999M6 15C6 11.6863 8.68629 9 12 9C15.3137 9 18 11.6863 18 15M22 15H2M19 19H5"
        {...pathProps}
      />
    </SVG>
  );
};

export default SunSetting01;

