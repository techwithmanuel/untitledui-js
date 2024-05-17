import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const SpacingHeight02: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M21 3H3M21 21H3M12 17.5L12 6.50004M15.0001 6.50001L9 6.5M15.0001 17.5L9 17.5"
        {...pathProps}
      />
    </SVG>
  );
};

export default SpacingHeight02;

