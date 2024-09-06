"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const ArrowCircleBrokenDownRight: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M9.41045 2.33944C12.7466 1.44852 16.4538 2.3117 19.0711 4.92899C22.9763 8.83424 22.9763 15.1659 19.0711 19.0711C15.1658 22.9764 8.83418 22.9764 4.92893 19.0711C2.31164 16.4538 1.44846 12.7467 2.33938 9.41051M15.0001 9.00007V15.0001M15.0001 15.0001H9.00014M15.0001 15.0001L4.99995 5.00001"
        {...pathProps}
      />
    </SVG>
  );
};

export default ArrowCircleBrokenDownRight;

