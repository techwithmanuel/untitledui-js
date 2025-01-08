<p align="center">
  <img src="./public/logo.png" alt="Motion logo" width="100" height="100" />
</p>

<h1 align="center">Untitled UI Icons</h1>

<h3 align="center">
  The official library for using Untitled UI icons with JavaScript. <br>
  Supports Vue JS, React JS, Solid JS, and Qwik JS.
</h3>

---

## Preface

`untitledui-js` is now the official library for using Untitled UI icons in JavaScript. This change was approved by Jordan Hughes from Untitled UI, ensuring the legality and long-term safety of the library.

To support this transition, the library has been rewritten from the ground up for consistency across frameworks. The new version emphasizes type safety and an improved developer experience. Moving forward, the current syntax and system are designed to avoid breaking changes.

A notable change is that `untitledui-js` is now the primary library for both animated and non-animated icons. As a result, `untitledui-js-base` will no longer be supported.

Official link: [Untitled UI Icons](http://untitledui.com)

---

## Upgrade to v2.3.0 for React JS

### Key Changes

If you previously used `pathProps` to animate icons, note that a new animation pattern is now required. While the new approach no longer directly adjusts path properties, it introduces more robust options for animating both the path properties and the SVG itself.

### Previous React Versions:

```tsx
import { Activity } from "untitledui-js";

function App() {
  return (
    <Activity
      // motion properties
      pathProps={
        {
          // motion properties
        }
      }
    />
  );
}
```

### New Pattern (v2.3.0+):

The new pattern introduces the motion library as an argument for animations, making animations conditional.

```tsx
import { Activity } from "untitledui-js/react";
import { motion } from "motion/react";

function App() {
  return (
    <Activity
      animation={{
        motion: motion,
        attributes: {
          svg: {
            // motion attributes
          },
          path: {
            // motion attributes
          },
        },
      }}
    />
  );
}
```

## Usage in other frameworks

### Vue JS (motion not supported)

```html
<template>
  <Activity />
</template>

<script>
  import { Activity } from "untitledui-js/vue";

  export default {
    components: {
      Activity,
    },
  };
</script>
```

### Qwik JS (motion not supported)

```tsx
import { component$ } from "@builder.io/qwik";
import { Activity } from "untitledui-js/qwik";

export default component$(() => {
  return (
    <div>
      <Activity />
    </div>
  );
});
```

### Solid JS (motion not supported)

```tsx
import { Activity } from "untitledui-js/solid";

function App() {
  return <Activity />;
}
```
