![Banner](/public/banner.png)

<div style="display:flex; align-items:center; flex-direction: row; justify-content: space-around;" align="center">

<a  href="https://www.untitledui.com/free-icons">
    <img align=top src="./public/logo-count.png" alt="Logo count" style="width:200px"></a>

<a href="https://untitledui.vercel.app/">
    <img align=top src="./public/documentation-button.png" alt="Documentation button" style="width:200px">
</a>

</div>

# Get Started

### Installation

#### 1. Setup with framer-motion

```js
npm i untitledui-js framer-motion
```

#### 2. Setup without framer-motion (base)

```js
npm i untitledui-js-base
```

### Basic Usage

#### 1. Imports

```tsx
import { Communication } from "untitledui-js"
<-- Category Import-->

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
