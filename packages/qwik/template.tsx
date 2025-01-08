import {
  component$,
  type Component,
  type QwikIntrinsicElements,
} from "@builder.io/qwik";

type IconNode = [
  elementName: keyof QwikIntrinsicElements,
  attrs: Record<string, string>
][];

export interface UntitledProps {
  size?: string | number;
  absoluteStrokeWidth?: boolean;
  color?: string;
  strokeWidth?: number;
  class?: string;
}

export interface IconComponentProps extends UntitledProps {
  iconNode: IconNode;
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
  classes.filter(Boolean).join(" ").trim();

export const Icon = component$<IconComponentProps>((props) => {
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
      {props.iconNode.map(([tag, attrs], index) => {
        switch (tag) {
          case "path":
            return <path key={index} {...attrs} />;
          case "circle":
            return <circle key={index} {...attrs} />;
          case "rect":
            return <rect key={index} {...attrs} />;
          case "line":
            return <line key={index} {...attrs} />;
          case "polyline":
            return <polyline key={index} {...attrs} />;
          case "polygon":
            return <polygon key={index} {...attrs} />;
          default:
            return null;
        }
      })}
    </svg>
  );
});

export const createUntitledIcon = (
  iconName: string,
  iconNode: IconNode
): Component<UntitledProps> => {
  return component$((props) => (
    <Icon
      iconNode={iconNode}
      class={mergeClasses(
        `untitled-${toKebabCase(iconName)}`,
        props.class || ""
      )}
      {...props}
    />
  ));
};
