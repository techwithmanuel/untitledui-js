"use client";

import { Suspense, lazy, FC } from "react";
import { SVGComponentProps, DefaultLazyImportFallback } from "../template";
import { IconNames } from "..";

interface LazyIconProps extends SVGComponentProps {
  name: IconNames;
  fallback?: React.ReactNode;
}

const LazyIcon: FC<LazyIconProps> = ({ name, fallback, ...props }) => {
  const Icon = lazy(() => import(/* @vite-ignore */ `./${name}`));

  return (
    <Suspense fallback={fallback || <DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export default LazyIcon;
