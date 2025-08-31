![Untitled UI Libraries by Emmanuel C.Alozie](./public/logo.png)

## ⚠️ Deprecation Notice - Move To New Framework Specific Libraries

The packages **`untitledui-js`** and **`untitledui-js-base`** will be **deprecated by the end of September 2025**.

Moving forward, please use the new framework-specific packages listed below.

- If you were using **`untitledui-js-base`** → simply switch to **`@untitledui/icons-react`**. The API and usage remain unchanged.
- If you were using **`untitledui-js`** → you can now install the specific package you need (e.g. **`@untitledui/icons-vue`**, **`@untitledui/icons-solid`**, etc.). The import paths and usage remain unchanged.

No breaking changes have been introduced — full backwards compatibility is maintained.  
This change ensures developers only install what they need, while reducing overhead for maintainers.  
No further library name changes will be made in the future.

---

## Migration Examples

### From `untitledui-js-base` → `@untitledui/icons-react`

```tsx
// Before
import { Icon } from "untitledui-js-base";

<Icon size={24} color="currentColor" />;

// After
import { Icon } from "@untitled-icons/react";

<Icon size={24} color="currentColor" />;
```

---

### From `untitledui-js` → framework-specific packages

```tsx
// React
// Before
import { Icon } from "untitledui-js/react";

// After
import { Icon } from "@untitled-icons/react";

<Icon size={24} color="currentColor" />;
```

```vue
<!-- Vue -->
<!-- Before -->
<script setup>
import { Icon } from "untitledui-js/vue";
</script>

<icon :size="24" color="var(--primary)" />

<!-- After -->
<script setup>
import { Icon } from "@untitled-icons/vue";
</script>

<icon :size="24" color="var(--primary)" />
```

```svelte
<!-- Svelte -->
<!-- Before -->
<script>
  import { Icon } from "untitledui-js/svelte";
</script>

<Icon size={24} color="var(--primary)" />

<!-- After -->
<script>
  import { Icon } from "@untitled-icons/svelte";
</script>

<Icon size={24} color="var(--primary)" />
```

```tsx
// SolidJS
// Before
import { Icon } from "untitledui-js/solid";

// After
import { Icon } from "@untitled-icons/solid";

<Icon size={24} color="currentColor" />;
```

```tsx
// Qwik
// Before
import { Icon } from "untitledui-js/qwik";

// After
import { Icon } from "@untitled-icons/qwik";

<Icon size={24} color="currentColor" />;
```

---

## Overview

Framework Agnostic JavaScript/Typescript implementation of Untitled UI icons. Features:

- Full [SVG specification](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute) support
- Framework packages: React, Vue 3, SolidJS, Qwik, Svelte
- TypeScript-first
- Tree-shaking
- Semantic versioning

**[Official Documentation](http://untitledui.publicsource.space)**

## Installation

Install the framework-specific package you need:

```bash
# React
npm install @untitled-icons/react

# Vue
npm install @untitled-icons/vue

# SolidJS
npm install @untitled-icons/solid

# Qwik
npm install @untitled-icons/qwik

# Svelte
npm install @untitled-icons/svelte
```

## Unified API

```tsx

// React / Solid / Qwik
<Icon size={24} color="currentColor" />

<!-- Vue -->
<icon :size="24" color="var(--primary)" />

<!-- Svelte -->
<Icon size={24} color="var(--primary)" />

```

## React Motion Example

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

All icons support standard [SVG attributes](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute?utm_source=chatgpt.com):

- viewBox, fill, stroke
- Class/style overrides
- Accessibility attributes (aria-\*, role)

### Compatibility

```markdown
| Framework | Version | Motion Support |
| --------- | ------- | -------------- |
| React     | 17+     | true           |
| Vue       | 3+      | false          |
| Solid     | 1+      | false          |
| Qwik      | 1+      | false          |
| Svelte    | 3+      | false          |
```

## License

Custom Attribution License © 2025 Untitled UI - [LICENSE](./LICENSE.MD)
