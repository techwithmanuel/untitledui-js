import { FC } from "react";
import { motion, SVGMotionProps } from "framer-motion";
import { Path } from "typescript";

interface SVGParentProps extends SVGMotionProps<SVGSVGElement> {
  size?: string;
  ref?:  React.Ref<SVGSVGElement>
}
interface PathProps extends SVGMotionProps<SVGPathElement> {
}

const SVG: FC<SVGParentProps> = ({
  size,
  height,
  width,
  fill,
  strokeWidth,
  stroke,
  className,
  children,
  viewBox,
  ref,
  ...props
}) => {
  return (
    <motion.svg
      className={className}
      width={size && width ? width : size ? size : "24"}
      height={size && height ? height : size ? size : "24"}
      viewBox={viewBox ? viewBox : "0 0 24 24"}
      fill={fill ? fill : "none"}
      stroke={stroke ? stroke : "black"}
      strokeWidth={strokeWidth ? strokeWidth : "2"}
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      {children}
    </motion.svg>
  );
}

const Path: FC<PathProps> = ({ ...props }) => {
  return (
    <motion.path
      {...props}
      stroke={props.stroke ? props.stroke : "inherit"}
      strokeWidth={props.width ? props.width : "inherit"}
      strokeLinecap={props.strokeLinecap ? props.strokeLinecap : "round"}
      strokeLinejoin={props.strokeLinejoin ? props.strokeLinejoin : "round"}
    />
  );
};

export { SVG, Path };
