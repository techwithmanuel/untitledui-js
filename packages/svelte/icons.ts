import type { Component, ComponentInternals } from "svelte";
import IconBase from "./base.svelte";
import type { IconNode, IconProps } from "./types";

const toKebabCase = (str: string): string => {
  return str.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
};

export function createUntitledIcon(
  iconName: string,
  iconNode: IconNode[],
): Component<Omit<IconProps, "iconNode">> {
  function UntitledIcon(
    internals: ComponentInternals,
    props: Omit<IconProps, "iconNode">,
  ) {
    const kebabName = toKebabCase(iconName);
    const className = `untitled-${kebabName} ${props.class || ""}`.trim();

    return IconBase(internals, {
      ...props,
      iconNode,
      class: className,
    });
  }

  return UntitledIcon;
}
