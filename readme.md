<video  src="./public/demo.mp4" autoplay loop muted></video>

# Untitled UI JS

<p>
  <img src="https://img.shields.io/npm/v/untitledui-js" alt="NPM Version">
  <img src="https://img.shields.io/bundlephobia/minzip/untitledui-js?logo=npm" alt="npm bundle size">
  <img src="https://img.shields.io/npm/d18m/untitledui-js?logo=npm" alt="NPM Downloads">
</p>

This initiative began due to increasing dissatisfaction with how the Feather Icons project was being managed. With over 300 open issues and more than 100 pending pull requests, the Feather Icons project has been left abandoned. This means that many developers and designers wasted their time contributing to Feather Icons without any chance of their pull requests being accepted.

Additionally, Untitled UI Icons supports SVG animations without the need for any configuration. Essentially, each icon is wrapped in a `<motion.svg> ...  </motion.svg>` element, making it simple to incorporate dynamic animations.

###  Why choose Untitled UI JS over other icons libraries

- More icons to work with: Untitled UI Icons boasts over 1200 icons, providing an extensive library for your projects.
- Support for Framer Motion animations, enhancing the visual appeal and interactivity of your applications.
- Easy access to design assets with Untitled UI's free icons library.
- Actively supported and maintained: Untitled UI Icons is regularly updated and improved to meet the evolving needs of developers and designers.

### Note

- Framer's svg animation properties are to be passed directly to the icon `<Home01 initial={{}} animate={{}} />` or path as `pathProps` if required

- If you aren't familiar with svg properties, you can view this documentation by [documentation by mozilla](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute)

- You can also view the current [documentation site in beta](https://untitledui.vercel.app/)

- For simple animations of svg paths you can [read this article by Noel](https://blog.noelcserepy.com/how-to-animate-svg-paths-with-framer-motion)

- Category based imports have been deprecated

- Icons can now be imported lazily on `untitledui-js` with the `LazyIcon` component which takes in the name of the icon and lazily loads the icon, support would be rolling out for the base version soon

```ts
import { LazyIcon } from "untitledui-js";

export default function App() {
  return <LazyIcon name="Activity" {...props} />;
}
```

## Installation

#### Setup with framer motion support

```node
 npm i untitledui-js framer-motion
```

#### Setup without framer motion support

```node
 npm i untitledui-js-base
```

## Quick Start Guide

#### 1. Imports

```tsx

import { AnnotationAlert } from "untitledui-js"
<-- Direct Import  -->

```

#### 2. Rendering on the DOM

```tsx
//...imports

const App = () => {
  return (
    <Fragment>
      <Communication.AnnotationAlert />

      <AnnotationAlert />
    </Fragment>
  );
};
```

#### 3. Customization

```tsx
return (
  <AnnotationAlert
    size={"15"} //adjusts both width and height properties
    pathProps={{
      ...props,
    }} //allows the adjustment of the path properties directly
    {...props} //other svg properties
  />
);
```
