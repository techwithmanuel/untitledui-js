![Banner](/public/banner.png)

<div style="display: flex; justify-content: space-around;">

[![NPM Version](https://img.shields.io/npm/v/untitledui-js.svg)](https://www.npmjs.com/package/untitledui-js)

[![NPM Downloads](https://img.shields.io/npm/dt/untitledui-js.svg)](https://www.npmjs.com/package/untitledui-js)

[![LICENSE](https://img.shields.io/npm/l/untitledui-js.svg)](https://github.com/techwithmanuel/untitledui-js/blob/master/LICENSE)

[![Commit](https://img.shields.io/github/last-commit/techwithmanuel/untitledui-js.svg)](https://github.com/techwithmanuel/untitledui-js/commits/master)

</div>

## Installation

```js
npm i untitledui-js framer-motion
```

or

```js
npm i untitledui-js-base
```

If you want to use the library without frmaer motion

## Info

- Official Website and Documentation [docs](https://untitledui.vercel.app)
- Customizable first with framer motion support
  ```tsx
  <Home01 size="60px" strokeWidth="2" stroke="#000" initial={...} animate={...} pathProps={{
    initial: { pathLength: 0 },
    animate: { pathLength: 1 }
  }} />
  ```
  - The pathProps prop targets the path property of the svg
  - Framer motions props can be passed directly to the svg component or the pathProps
- Compatible with Nextjs v13
- Includes 1100+ icons sourced from [untitledui-icons](https://www.untitledui.com/icons)
- Category based imports and Regular imports are now both supported

  ```tsx
  import { Communication } from "untitledui-js";

  export function Component () {
     return (
          <Communication.AnnotationAlert .../>
      );
  }
  ```

- For more information view the [docs](https://untitledui.vercel.app)
