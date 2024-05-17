import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Bold01: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M6 12H14C16.2091 12 18 10.2091 18 8C18 5.79086 16.2091 4 14 4H6V12ZM6 12H15C17.2091 12 19 13.7909 19 16C19 18.2091 17.2091 20 15 20H6V12Z"
        {...pathProps}
      />
    </SVG>
  );
};

export default Bold01;

