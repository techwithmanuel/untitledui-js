import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Asterisk01: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M12 2V22M19.0711 4.92893L4.92893 19.0711M22 12H2M19.0711 19.0711L4.92893 4.92893"
        {...pathProps}
      />
    </SVG>
  );
};

export default Asterisk01;

