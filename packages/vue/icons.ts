import { defineComponent, h } from "vue";
import type { IconNode } from "./types";
import IconBaseVue from "./base.vue";

const toKebabCase = (str: string): string => {
  return str.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
};

export function createUntitledIcon(iconName: string, iconNode: IconNode[]) {
  return defineComponent({
    name: iconName,
    inheritAttrs: false,
    props: {
      color: String,
      size: {
        type: [Number, String],
        default: 24,
      },
      strokeWidth: {
        type: Number,
        default: 2,
      },
      absoluteStrokeWidth: Boolean,
      class: String,
    },
    setup(props, { attrs }) {
      return () =>
        h(IconBaseVue, {
          ...props,
          ...attrs,
          iconNode,
          class: `untitled-${toKebabCase(iconName)} ${props.class || ""}`,
        });
    },
  });
}
