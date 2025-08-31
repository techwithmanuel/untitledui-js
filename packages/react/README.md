# @untitledui/icons-react

Official **React** implementation of Untitled UI icons.

## Installation

```bash
npm install @untitled-icons/react
```

## Usage

```tsx
import { Icon } from " @untitled-icons/react";

export default function App() {
  return <Icon size={24} color="currentColor" />;
}
```

### Motion Example (Framer Motion)

```tsx
import { motion } from "motion/react";
import { Icon } from "@untitled-icons/react";

export default function App() {
  return (
    <Icon
      animation={{
        motion: motion,
        attributes: {
          svg: { whileHover: { scale: 1.1 } },
          path: { transition: { duration: 0.5 } },
        },
      }}
    />
  );
}
```

## Features

- Full [SVG attribute](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute) support
- TypeScript-ready
- Motion support via Framer Motion
- Tree-shakable

## Compatibility

- React **17+**

## License

Custom Attribution License © 2025 Untitled UI - [LICENSE](../LICENSE.MD)
