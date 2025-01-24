<p align="center">
  <img src="./public/logo.png" alt="Untitled UI Logo" width="100" height="100">
</p>

<h1 align="center">Untitled UI Icons</h1>

<h3 align="center">
  The Universal JavaScript Icon Library for Untitled UI<br>
  Full SVG Support for React, Vue, Solid, and Qwik
</h3>

## Overview

`untitledui-js` is the officially sanctioned JavaScript implementation of the Untitled UI icon system, developed with direct approval from Jordan Hughes (Untitled UI founder). This library provides:

- Full SVG compliance with all standard attributes and methods
- Framework-specific implementations for:
  - React (v17+)
  - Vue (v3+)
  - SolidJS (v1+)
  - Qwik (v1+)
- TypeScript-first architecture
- Motion integration (React only)
- Tree-shaking support
- Semantic versioning

**Official Design System**: [Untitled UI](http://untitledui.com)

---

## Installation

```bash
# Base installation (framework-agnostic)
npm install untitledui-js

# React with motion support
npm install untitledui-js motion
```

---

## Version Compatibility

| Framework | Supported Versions | Motion Support |
| --------- | ------------------ | -------------- |
| React     | 17.x, 18.x, 19.x   | Yes            |
| Vue       | 3.x                | No             |
| Solid     | 1.x                | No             |
| Qwik      | 1.x                | No             |

---

## Core Principles

### 1. SVG Compliance

All icons are pure SVG components supporting:

- Standard SVG attributes (`viewBox`, `fill`, `stroke`, etc.)
- Direct DOM manipulation
- Class-based styling
- Inline style overrides
- Accessibility attributes (`aria-*`, `role`, etc.)

### 2. Framework Consistency

Identical API surface across frameworks:

```tsx
// React/Solid/Qwik
<Icon size={24} color="currentColor" />

<!-- Vue -->
<icon :size="24" color="var(--primary)" />
```

### 3. Motion Integration (React Only)

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

---

## React Migration Guide (v2.3.0+)

### Before: Legacy Pattern

```tsx
import { Activity } from "untitledui-js";

function App() {
  return (
    <Activity
      pathProps={{
        initial: { opacity: 0 },
        animate: { opacity: 1 },
      }}
    />
  );
}
```

### After: Modern Pattern

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
            initial: { rotate: 0 },
            animate: { rotate: 360 },
            transition: { duration: 1 },
          },
          path: {
            initial: { rotate: 0 },
            animate: { rotate: 360 },
            transition: { duration: 1 },
          },
        },
      }}
    />
  );
}
```

**Key Changes:**

- Separate SVG/path animations
- Explicit motion library declaration
- Type-safe animation properties
- No side effects in static implementations

---

## Framework Implementations

### Vue 3

```html
<template>
  <Activity :size="24" class="icon-primary" />
</template>

<script setup>
  import { Activity } from "untitledui-js/vue";
</script>
```

### Qwik

```tsx
import { component$ } from "@builder.io/qwik";
import { Activity } from "untitledui-js/qwik";

export default component$(() => {
  return <Activity style={{ color: "#3b82f6" }} />;
});
```

### SolidJS

```tsx
import { Activity } from "untitledui-js/solid";

function App() {
  return <Activity fill="none" stroke="currentColor" stroke-width="2" />;
}
```

---

## SVG Customization

All SVG properties and methods are fully supported:

### Class-Based Styling

```tsx
<Activity className="icon-lg text-red-500 hover:scale-110" />
```

### Inline Styles

```tsx
<Activity
  style={{
    width: "2rem",
    height: "2rem",
    filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.25))",
  }}
/>
```

### Direct Attribute Access

```tsx
<Activity aria-label="Active indicator" role="img" data-custom="value" />
```

---

## Contribution Guidelines

1. **Icon Updates**: Submit SVG files through PRs to `src/raw-icons`
2. **Version Bumps**: Use `npm run version` (semantic versioning enforced)
3. **Type Safety**: All icons must pass `tsc --strict` checks
4. **Framework Parity**: Changes must be implemented across all frameworks

---

## License

MIT License  
Copyright (c) 2023 Untitled UI & Contributors  
See [LICENSE.md](./LICENSE.md) for full text.

[GitHub Repository](https://github.com/techwithmanuel/untitledui-js)
