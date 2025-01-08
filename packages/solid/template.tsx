import { Component, JSX } from "solid-js";
import { Dynamic } from "solid-js/web";

type IconNode = [
  elementName: keyof JSX.IntrinsicElements,
  attrs: Record<string, string>
][];
type SVGAttributes = JSX.GSVGAttributes<SVGSVGElement>;

export interface UntitledProps extends SVGAttributes {
  size?: string | number;
  absoluteStrokeWidth?: boolean;
  color?: string;
  strokeWidth?: number;
  class?: string;
}

export interface IconComponentProps extends UntitledProps {
  iconNode: IconNode;
  children?: JSX.Element;
}

const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
} as const;

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

export const Icon: Component<IconComponentProps> = (props) => {
  const svgProps = {
    ...defaultAttributes,
    width: props.size || 24,
    height: props.size || 24,
    stroke: props.color || "currentColor",
    "stroke-width": props.absoluteStrokeWidth
      ? (Number(props.strokeWidth || 2) * 24) / Number(props.size || 24)
      : props.strokeWidth || 2,
    class: mergeClasses("untitled", props.class || ""),
  };

  return (
    <svg {...svgProps}>
      {props.iconNode.map(([tag, attrs]) => (
        <Dynamic component={tag} {...attrs} />
      ))}
      {Array.isArray(props.children) ? props.children : [props.children]}
    </svg>
  );
};

export const createUntitledIcon = (
  iconName: string,
  iconNode: IconNode
): Component<UntitledProps> => {
  return (props) => (
    <Icon
      iconNode={iconNode}
      class={mergeClasses(
        `untitled-${toKebabCase(iconName)}`,
        props.class || ""
      )}
      {...props}
    />
  );
};
