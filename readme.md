![Banner](/public/banner.png)

<div style="display:flex; align-items:center;">

[![Logo count](/public/logo-count.png)](https://www.untitledui.com/free-icons)

<div style="width: 15px"></div>

[![Documentation button](/public/documentation-button.png)](https://untitledui.vercel.app/)


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
