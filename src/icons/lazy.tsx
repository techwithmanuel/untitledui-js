"use client";

import { Suspense, lazy, FC } from "react";
import { DefaultLazyImportFallback, LazyIconProps } from "../template";

const LazyIcon: FC<LazyIconProps> = ({ name, fallback, ...props }) => {
  const Icon = lazy(() => import(/* @vite-ignore */ `./${name}`));

  return (
    <Suspense fallback={fallback || <DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export default LazyIcon;
