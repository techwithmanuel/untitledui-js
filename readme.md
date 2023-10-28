![Banner](/public/banner.png)

## Installation 
```js
npm i untitledui framer-motion
```

## Info

- Customizabile first with framer motion support
  ```tsx
  <Home01 size="60px" stroke="2px" pathProps={{}} />
  ```
  - The pathProps prop targets the path property of the svg
  - Framer motions props can be passed directly to the svg component or the pathProps
  ```tsx
     <Home01 size="60px" stroke="2px" animate={} pathProps={{
      animate:
     }} />
  ```
- Compatible with Nextjs v13
- Includes 1100+ icons sourced from [untitledui-icons](https://www.untitledui.com/icons)
- Category based imports are now the ONLY way of importing icons

  ```tsx
  import { Communication } from "untitledui-js";

  export function Component () {
     return (
          <Communication.AnnotationAlert .../>
      );
  }
  ```

- For more information view the [docs](https://untitledui.vercel.app)
