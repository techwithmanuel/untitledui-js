import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Move: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M5 9L2 12M2 12L5 15M2 12H22M9 5L12 2M12 2L15 5M12 2V22M15 19L12 22M12 22L9 19M19 9L22 12M22 12L19 15"
        {...pathProps}
      />
    </SVG>
  );
};

export default Move;

