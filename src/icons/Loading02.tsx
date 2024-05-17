import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Loading02: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M12 2V6M12 18V22M6 12H2M22 12H18M19.0784 19.0784L16.25 16.25M19.0784 4.99994L16.25 7.82837M4.92157 19.0784L7.75 16.25M4.92157 4.99994L7.75 7.82837"
        {...pathProps}
      />
    </SVG>
  );
};

export default Loading02;

