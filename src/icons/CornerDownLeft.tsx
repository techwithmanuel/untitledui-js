import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const CornerDownLeft: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M20 4V5.4C20 8.76031 20 10.4405 19.346 11.7239C18.7708 12.8529 17.8529 13.7708 16.7239 14.346C15.4405 15 13.7603 15 10.4 15H4M4 15L9 10M4 15L9 20"
        {...pathProps}
      />
    </SVG>
  );
};

export default CornerDownLeft;

