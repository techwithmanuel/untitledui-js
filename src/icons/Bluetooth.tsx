import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Bluetooth: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M6 17L12 12V22L17.4398 17.4668M12 7V2L18 7L15.0817 9.43194M21 21L3 3"
        {...pathProps}
      />
    </SVG>
  );
};

export default Bluetooth;

