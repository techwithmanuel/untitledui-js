import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const ParagraphWrap: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M3 6H21M3 12H18C18.7956 12 19.5587 12.3161 20.1213 12.8787C20.6839 13.4413 21 14.2044 21 15C21 15.7956 20.6839 16.5587 20.1213 17.1213C19.5587 17.6839 18.7956 18 18 18H14M14 18L16 16M14 18L16 20M3 18H10"
        {...pathProps}
      />
    </SVG>
  );
};

export default ParagraphWrap;

