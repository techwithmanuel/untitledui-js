import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const BluetoothConnect: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M3 7L15 17L9 22V2L15 7L3 17M18 12H18.01M15 12H15.01M21 12H21.01"
        {...pathProps}
      />
    </SVG>
  );
};

export default BluetoothConnect;

