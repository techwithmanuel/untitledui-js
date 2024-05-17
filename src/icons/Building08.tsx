import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Building08: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M1 20H19M4 17V8.99998M8 17V8.99998M12 17V8.99998M16 17V8.99998M18 5.99998L10.424 1.26498C10.2702 1.16884 10.1933 1.12077 10.1108 1.10203C10.0379 1.08546 9.96214 1.08546 9.88921 1.10203C9.80673 1.12077 9.72982 1.16884 9.576 1.26498L2 5.99998H18Z"
        {...pathProps}
      />
    </SVG>
  );
};

export default Building08;

