import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const GitCommit: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M16 12C16 14.2091 14.2091 16 12 16C9.79085 16 7.99999 14.2091 7.99999 12M16 12C16 9.79086 14.2091 8 12 8C9.79085 8 7.99999 9.79086 7.99999 12M16 12H22M7.99999 12H2.00018"
        {...pathProps}
      />
    </SVG>
  );
};

export default GitCommit;

