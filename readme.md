![Banner](/public/banner.png)

## Installation

```js
npm i untitledui-js framer-motion
```

or

```js
npm i untitledui-js-base
```

If you want to use the library without framer motion

## Info

- Official Website and Documentation [docs](https://untitledui.vercel.app)
- Base version of [untitledui-js](https://www.npmjs.com/package/untitledui-js) without framer motion support
- Compatible with Nextjs v13
- Includes 1100+ icons sourced from [untitledui-icons](https://www.untitledui.com/icons)
- Category based imports and Regular Imports are supported

  ```tsx
  import { Communication } from "untitledui-js";

  export function Component () {
     return (
          <Communication.AnnotationAlert .../>
      );
  }
  ```

  OR

  ```tsx
  import { AnnotationAlert } from "untitledui-js";

  export function Component () {
    return (
         <AnnotationAlert .../>
     );
  }
  ```

- For more information view the [docs](https://untitledui.vercel.app)
