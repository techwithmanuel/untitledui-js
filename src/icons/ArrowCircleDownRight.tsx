import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const ArrowCircleDownRight: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M15.0002 9.00005V15.0001M15.0002 15.0001H9.00019M15.0002 15.0001L9.00019 8.99994M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
        {...pathProps}
      />
    </SVG>
  );
};

export default ArrowCircleDownRight;

