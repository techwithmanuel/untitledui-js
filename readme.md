<p align="center">
  <img src="https://untitledui.publicsource.space/logo.svg" alt="Untitled UI Logo" width="100" height="100">
</p>

<p align="center">
  The Official Javascript Library for Untitled UI Icons<br>
  Full SVG Support for React, Vue, Solid, Qwik, Svelte
</p>

## Overview

Official JavaScript implementation of Untitled UI icons. Features:

- Full [SVG specification](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute) support
- Framework packages: React (17+), Vue 3, SolidJS, Qwik, Svelte
- TypeScript-first
- Tree-shaking
- Semantic versioning

**[Official Documentation](http://untitledui.publicsource.space)**

## Installation

```bash
# Base package
npm install untitledui-js

# React + Motion
npm install untitledui-js motion
```

#### Unified API

```tsx
// React/Solid/Qwik
<Icon size={24} color="currentColor" />

<!-- Vue -->
<icon :size="24" color="var(--primary)" />
```

#### React Motion

```tsx
import { motion } from "motion/react";

<Icon
  animation={{
    motion: motion,
    attributes: {
      svg: { whileHover: { scale: 1.1 } },
      path: { transition: { duration: 0.5 } },
    },
  }}
/>;
```

## Core Features

### SVG Compliance

All icons support standard [SVG attributes](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute):

- viewBox, fill, stroke
- Class/style overrides
- Accessibility attributes (aria-\*, role)

## Compatibility

| Framework    | Version |
| ------------ | ------- |
| React        | 17+     |
| Vue          | 3+      |
| Solid & Qwik | 1+      |
| Svelte       | 5+      |

## License

MIT © 2023 Untitled UI

[Full License](./LICENSE.md)
