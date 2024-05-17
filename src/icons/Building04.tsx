import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Building04: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M6.5 5H11.5M6.5 9H11.5M6.5 13H11.5M15 19V4.2C15 3.0799 15 2.51984 14.782 2.09202C14.5903 1.71569 14.2843 1.40973 13.908 1.21799C13.4802 1 12.9201 1 11.8 1H6.2C5.0799 1 4.51984 1 4.09202 1.21799C3.71569 1.40973 3.40973 1.71569 3.21799 2.09202C3 2.51984 3 3.0799 3 4.2V19M17 19H1"
        {...pathProps}
      />
    </SVG>
  );
};

export default Building04;

