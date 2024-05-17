import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const SearchLG: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M21 21L17.5001 17.5M20 11.5C20 16.1944 16.1944 20 11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5Z"
        {...pathProps}
      />
    </SVG>
  );
};

export default SearchLG;

