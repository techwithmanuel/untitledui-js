import React, { JSX, RefAttributes, SVGProps } from "react";
import { motion, SVGMotionProps } from "motion/react";

type ReactSVG = Record<
  keyof JSX.IntrinsicElements,
  React.SVGProps<SVGSVGElement>
>;

type IconNode = [elementName: keyof ReactSVG, attrs: Record<string, string>][];
type SVGAttributes = Partial<SVGProps<SVGSVGElement>>;
type ElementAttributes = RefAttributes<SVGSVGElement> & SVGAttributes;

export type Motion = typeof motion;

export interface UntitledProps extends ElementAttributes {
  size?: string | number;
  absoluteStrokeWidth?: boolean;
  color?: string;
  strokeWidth?: number;
  animation?: {
    motion: Motion;
    attributes?: {
      svg?: Omit<SVGMotionProps<SVGSVGElement>, keyof SVGProps<SVGSVGElement>>;
      path?: Omit<
        SVGMotionProps<SVGPathElement>,
        keyof SVGProps<SVGPathElement>
      >;
    };
  };
}

export interface IconComponentProps extends UntitledProps {
  iconNode: IconNode;
  className?: string;
  children?: React.ReactNode;
}

const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as "round" | "inherit" | "butt" | "square",
  strokeLinejoin: "round" as "round" | "inherit" | "miter" | "bevel",
};

const toKebabCase = (string: string): string =>
  string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

const mergeClasses = (...classes: string[]): string =>
  classes
    .filter(
      (className, index, array) =>
        Boolean(className) &&
        className.trim() !== "" &&
        array.indexOf(className) === index
    )
    .join(" ")
    .trim();

export const Icon = React.forwardRef<SVGSVGElement, IconComponentProps>(
  (
    {
      color = "currentColor",
      size = 24,
      strokeWidth = 2,
      absoluteStrokeWidth,
      className = "",
      children,
      iconNode,
      animation,
      ...rest
    },
    ref
  ) => {
    const strokeLinecap: "round" | "inherit" | "butt" | "square" = "round";
    const strokeLinejoin: "round" | "inherit" | "miter" | "bevel" = "round";

    const svgProps = {
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth
        ? (Number(strokeWidth) * 24) / Number(size)
        : strokeWidth,
      strokeLinecap,
      strokeLinejoin,
      className: mergeClasses("untitled", className),
      ...rest,
    };

    if (!animation) {
      return (
        <svg ref={ref} {...svgProps}>
          {iconNode.map(([tag, attrs]) => React.createElement(tag, attrs))}
          {Array.isArray(children) ? children : [children]}
        </svg>
      );
    } else {
      const { attributes } = animation;

      const allProps = {
        ...(svgProps as SVGMotionProps<SVGSVGElement>),
        ...attributes?.svg,
      };
      return (
        <motion.svg ref={ref} {...allProps}>
          {iconNode.map(([tag, attrs]) =>
            React.createElement(
              motion[tag as keyof typeof motion] as React.ComponentType<
                SVGMotionProps<SVGElement>
              >,
              { ...attrs, ...attributes?.path } as SVGMotionProps<SVGElement>
            )
          )}
          {Array.isArray(children) ? children : [children]}
        </motion.svg>
      );
    }
  }
);

export const createUntitledIcon = (
  iconName: string,
  iconNode: IconNode
): React.ForwardRefExoticComponent<
  Omit<UntitledProps, "ref"> & React.RefAttributes<SVGSVGElement>
> => {
  console.log(iconNode);

  const Component = React.forwardRef<SVGSVGElement, UntitledProps>(
    ({ className, ...props }, ref) => (
      <Icon
        ref={ref}
        iconNode={iconNode}
        className={mergeClasses(
          `untitled-${toKebabCase(iconName)}`,
          className || ""
        )}
        {...props}
      />
    )
  );

  Component.displayName = iconName;
  return Component;
};
