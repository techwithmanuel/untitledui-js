import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Building06: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M10 9H5.2C4.07989 9 3.51984 9 3.09202 9.21799C2.71569 9.40973 2.40973 9.71569 2.21799 10.092C2 10.5198 2 11.0799 2 12.2V19M20 19V4.2C20 3.0799 20 2.51984 19.782 2.09202C19.5903 1.71569 19.2843 1.40973 18.908 1.21799C18.4802 1 17.9201 1 16.8 1H13.2C12.0799 1 11.5198 1 11.092 1.21799C10.7157 1.40973 10.4097 1.71569 10.218 2.09202C10 2.51984 10 3.0799 10 4.2V19M21 19H1M13.5 5H16.5M13.5 9H16.5M13.5 13H16.5"
        {...pathProps}
      />
    </SVG>
  );
};

export default Building06;

