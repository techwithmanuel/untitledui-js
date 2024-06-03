import { lazy, FC, Suspense } from "react";
import { SVGComponentProps, DefaultLazyImportFallback } from "./template";
export type { SVGComponentProps } from "./template";
export type { IconNames } from "./lazy";
export { default as LazyIcon } from "./lazy";

export const Activity: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Activity"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ActivityHeart: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ActivityHeart"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Airplay: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Airplay"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Airpods: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Airpods"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const AlarmClock: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/AlarmClock"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const AlarmClockCheck: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/AlarmClockCheck"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const AlarmClockMinus: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/AlarmClockMinus"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const AlarmClockOff: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/AlarmClockOff"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const AlarmClockPlus: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/AlarmClockPlus"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const AlertCircle: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/AlertCircle"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const AlertHexagon: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/AlertHexagon"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const AlertOctagon: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/AlertOctagon"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const AlertRight01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/AlertRight01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const AlertSquare: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/AlertSquare"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const AlertTriangle: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/AlertTriangle"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const AlignBottom01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/AlignBottom01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const AlignBottom02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/AlignBottom02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const AlignCenter: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/AlignCenter"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const AlignHorizontalCenter02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/AlignHorizontalCenter02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const AlignJustify: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/AlignJustify"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const AlignLeft: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/AlignLeft"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const AlignLeft01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/AlignLeft01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const AlignLeft02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/AlignLeft02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const AlignRight: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/AlignRight"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const AlignRight02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/AlignRight02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const AlignTopArrow01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/AlignTopArrow01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const AlignTopArrow02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/AlignTopArrow02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const AlignVerticalCenter01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/AlignVerticalCenter01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const AlignVerticalCenter02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/AlignVerticalCenter02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Annotation: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Annotation"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const AnnotationAlert: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/AnnotationAlert"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const AnnotationCheck: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/AnnotationCheck"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const AnnotationDots: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/AnnotationDots"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const AnnotationHeart: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/AnnotationHeart"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const AnnotationInfo: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/AnnotationInfo"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const AnnotationPlus: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/AnnotationPlus"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const AnnotationQuestion: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/AnnotationQuestion"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const AnnotationX: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/AnnotationX"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Announcement01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Announcement01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Announcement02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Announcement02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Announcement03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Announcement03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Archive: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Archive"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ArrowBlockDown: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ArrowBlockDown"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ArrowBlockLeft: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ArrowBlockLeft"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ArrowBlockRight: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ArrowBlockRight"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ArrowBlockUp: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ArrowBlockUp"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ArrowCircleBrokenDown: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ArrowCircleBrokenDown"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ArrowCircleBrokenDownLeft: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ArrowCircleBrokenDownLeft"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ArrowCircleBrokenDownRight: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ArrowCircleBrokenDownRight"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ArrowCircleBrokenLeft: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ArrowCircleBrokenLeft"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ArrowCircleBrokenRight: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ArrowCircleBrokenRight"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ArrowCircleBrokenUp: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ArrowCircleBrokenUp"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ArrowCircleBrokenUpLeft: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ArrowCircleBrokenUpLeft"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ArrowCircleBrokenUpRight: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ArrowCircleBrokenUpRight"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ArrowCircleDown: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ArrowCircleDown"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ArrowCircleDownLeft: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ArrowCircleDownLeft"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ArrowCircleDownRight: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ArrowCircleDownRight"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ArrowCircleLeft: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ArrowCircleLeft"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ArrowCircleRight: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ArrowCircleRight"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ArrowCircleUp: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ArrowCircleUp"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ArrowCircleUpLeft: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ArrowCircleUpLeft"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ArrowCircleUpRight: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ArrowCircleUpRight"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ArrowDown: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ArrowDown"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ArrowDownLeft: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ArrowDownLeft"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ArrowDownRight: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ArrowDownRight"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ArrowLeft: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ArrowLeft"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ArrowNarrowDown: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ArrowNarrowDown"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ArrowNarrowDownLeft: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ArrowNarrowDownLeft"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ArrowNarrowDownRight: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ArrowNarrowDownRight"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ArrowNarrowLeft: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ArrowNarrowLeft"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ArrowNarrowRight: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ArrowNarrowRight"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ArrowNarrowUp: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ArrowNarrowUp"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ArrowNarrowUpLeft: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ArrowNarrowUpLeft"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ArrowNarrowUpRight: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ArrowNarrowUpRight"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ArrowRight: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ArrowRight"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ArrowSquareDown: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ArrowSquareDown"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ArrowSquareDownLeft: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ArrowSquareDownLeft"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ArrowSquareDownRight: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ArrowSquareDownRight"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ArrowSquareLeft: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ArrowSquareLeft"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ArrowSquareRight: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ArrowSquareRight"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ArrowSquareUp: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ArrowSquareUp"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ArrowSquareUpLeft: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ArrowSquareUpLeft"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ArrowSquareUpRight: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ArrowSquareUpRight"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ArrowUp: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ArrowUp"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ArrowUpLeft: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ArrowUpLeft"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ArrowUpRight: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ArrowUpRight"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ArrowsDown: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ArrowsDown"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ArrowsLeft: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ArrowsLeft"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ArrowsRight: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ArrowsRight"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ArrowsTriangle: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ArrowsTriangle"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ArrowsUp: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ArrowsUp"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Asterisk01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Asterisk01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Asterisk02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Asterisk02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const AtSign: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/AtSign"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Atom01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Atom01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Atom02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Atom02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Attachment01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Attachment01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Attachment02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Attachment02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Award01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Award01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Award02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Award02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Award03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Award03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Award04: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Award04"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Award05: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Award05"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Backpack: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Backpack"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Bank: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Bank"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const BankNote01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/BankNote01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const BankNote02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/BankNote02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const BankNote03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/BankNote03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const BarChart01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/BarChart01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const BarChart02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/BarChart02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const BarChart03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/BarChart03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const BarChart04: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/BarChart04"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const BarChart05: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/BarChart05"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const BarChart06: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/BarChart06"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const BarChart07: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/BarChart07"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const BarChart08: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/BarChart08"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const BarChart09: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/BarChart09"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const BarChart10: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/BarChart10"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const BarChart11: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/BarChart11"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const BarChart12: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/BarChart12"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const BarChartCircle01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/BarChartCircle01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const BarChartCircle02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/BarChartCircle02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const BarChartCircle03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/BarChartCircle03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const BarChartSquare01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/BarChartSquare01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const BarChartSquare02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/BarChartSquare02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const BarChartSquare03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/BarChartSquare03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const BarChartSquareDown: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/BarChartSquareDown"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const BarChartSquareMinus: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/BarChartSquareMinus"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const BarChartSquarePlus: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/BarChartSquarePlus"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const BarChartSquareUp: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/BarChartSquareUp"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const BarLineChart: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/BarLineChart"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const BatteryCharging01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/BatteryCharging01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const BatteryCharging02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/BatteryCharging02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const BatteryEmpty: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/BatteryEmpty"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const BatteryFull: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/BatteryFull"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const BatteryLow: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/BatteryLow"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const BatteryMid: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/BatteryMid"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const BatteryOn: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/BatteryOn"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Beaker01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Beaker01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Beaker02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Beaker02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Bell01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Bell01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Bell02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Bell02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Bell03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Bell03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Bell04: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Bell04"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const BellMinus: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/BellMinus"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const BellOff01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/BellOff01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const BellOff03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/BellOff03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const BellPlus: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/BellPlus"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const BellRinging01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/BellRinging01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const BellRinging02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/BellRinging02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const BellRinging03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/BellRinging03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const BellRinging04: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/BellRinging04"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const BezierCurve01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/BezierCurve01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const BezierCurve02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/BezierCurve02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const BezierCurve03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/BezierCurve03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Bluetooth: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Bluetooth"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const BluetoothConnect: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/BluetoothConnect"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const BluetoothSignal: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/BluetoothSignal"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Bold01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Bold01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Bold02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Bold02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const BoldSquare: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/BoldSquare"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const BookClosed: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/BookClosed"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const BookOpen01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/BookOpen01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const BookOpen02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/BookOpen02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Bookmark: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Bookmark"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const BookmarkAdd: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/BookmarkAdd"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const BookmarkCheck: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/BookmarkCheck"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const BookmarkMinus: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/BookmarkMinus"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const BookmarkX: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/BookmarkX"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Box: FC<SVGComponentProps> = ({ ...props }: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Box"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Brackets: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Brackets"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const BracketsCheck: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/BracketsCheck"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const BracketsEllipse: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/BracketsEllipse"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const BracketsMinus: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/BracketsMinus"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const BracketsPlus: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/BracketsPlus"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const BracketsSlash: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/BracketsSlash"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const BracketsX: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/BracketsX"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const BriefCase01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/BriefCase01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const BriefCase02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/BriefCase02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Browser: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Browser"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Brush01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Brush01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Brush02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Brush02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Brush03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Brush03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Building01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Building01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Building02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Building02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Building03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Building03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Building04: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Building04"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Building05: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Building05"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Building06: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Building06"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Building07: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Building07"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Building08: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Building08"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Bus: FC<SVGComponentProps> = ({ ...props }: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Bus"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CPUChip01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CPUChip01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CPUChip02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CPUChip02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Calculator: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Calculator"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CalendarMinus02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CalendarMinus02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Calender: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Calender"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CalenderCheck01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CalenderCheck01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CalenderCheck02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CalenderCheck02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CalenderDate: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CalenderDate"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CalenderHeart01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CalenderHeart01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CalenderHeart02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CalenderHeart02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CalenderMinus01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CalenderMinus01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CalenderPlus01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CalenderPlus01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CalenderPlus02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CalenderPlus02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Certificate01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Certificate01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Certificate02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Certificate02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ChartBreakoutCircle: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ChartBreakoutCircle"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ChartBreakoutSquare: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ChartBreakoutSquare"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Check: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Check"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CheckCircle: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CheckCircle"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CheckCircleBroken: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CheckCircleBroken"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CheckDone01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CheckDone01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CheckDone02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CheckDone02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CheckHeart: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CheckHeart"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CheckSquare: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CheckSquare"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CheckSquareBroken: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CheckSquareBroken"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CheckVerified01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CheckVerified01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CheckVerified02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CheckVerified02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CheckVerified03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CheckVerified03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ChevronDown: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ChevronDown"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ChevronDownDouble: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ChevronDownDouble"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ChevronLeft: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ChevronLeft"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ChevronLeftDouble: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ChevronLeftDouble"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ChevronRight: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ChevronRight"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ChevronRightDouble: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ChevronRightDouble"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ChevronSelectorHorizontal: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ChevronSelectorHorizontal"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ChevronSelectorVertical: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ChevronSelectorVertical"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ChevronUp: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ChevronUp"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ChevronUpDouble: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ChevronUpDouble"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ChromeCast: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ChromeCast"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Circle: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Circle"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CircleCut: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CircleCut"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ClapperBoard: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ClapperBoard"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Clipboard: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Clipboard"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ClipboardAttachment: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ClipboardAttachment"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ClipboardCheck: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ClipboardCheck"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ClipboardDownload: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ClipboardDownload"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ClipboardMinus: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ClipboardMinus"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ClipboardPlus: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ClipboardPlus"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ClipboardX: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ClipboardX"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Clock: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Clock"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ClockCheck: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ClockCheck"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ClockFastForward: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ClockFastForward"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ClockPlus: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ClockPlus"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ClockRefresh: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ClockRefresh"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ClockRewind: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ClockRewind"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ClockSnooze: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ClockSnooze"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ClockStopWatch: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ClockStopWatch"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Cloud01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Cloud01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Cloud02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Cloud02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Cloud03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Cloud03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CloudBank01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CloudBank01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CloudBank02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CloudBank02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CloudLightning: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CloudLightning"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CloudMoon: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CloudMoon"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CloudOff: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CloudOff"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CloudRaining01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CloudRaining01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CloudRaining02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CloudRaining02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CloudRaining03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CloudRaining03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CloudRaining04: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CloudRaining04"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CloudRaining05: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CloudRaining05"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CloudRaining06: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CloudRaining06"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CloudSnowing01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CloudSnowing01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CloudSnowing02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CloudSnowing02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CloudSun01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CloudSun01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CloudSun02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CloudSun02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CloudSun03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CloudSun03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Code01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Code01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Code02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Code02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CodeBrowser: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CodeBrowser"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CodeCircle01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CodeCircle01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CodeCircle02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CodeCircle02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CodeCircle03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CodeCircle03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CodePen: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CodePen"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CodeSnippet01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CodeSnippet01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CodeSnippet02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CodeSnippet02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CodeSquare01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CodeSquare01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CodeSquare02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CodeSquare02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CoinSwap01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CoinSwap01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CoinSwap02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CoinSwap02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Coins01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Coins01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Coins02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Coins02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Coins03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Coins03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Coins04: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Coins04"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CoinsHand: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CoinsHand"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CoinsStacked01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CoinsStacked01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CoinsStacked02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CoinsStacked02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CoinsStacked03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CoinsStacked03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CoinsStacked04: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CoinsStacked04"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Colors: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Colors"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Columns02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Columns02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Columns03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Columns03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Command: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Command"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Compass: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Compass"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Compass01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Compass01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Compass02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Compass02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Compass03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Compass03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Container: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Container"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Contrast01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Contrast01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Contrast02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Contrast02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Contrast03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Contrast03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Copy01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Copy01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Copy02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Copy02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Copy03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Copy03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Copy04: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Copy04"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Copy05: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Copy05"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Copy06: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Copy06"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Copy07: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Copy07"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CornerDownLeft: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CornerDownLeft"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CornerDownRight: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CornerDownRight"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CornerLeftDown: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CornerLeftDown"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CornerLeftUp: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CornerLeftUp"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CornerRightDown: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CornerRightDown"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CornerRightUp: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CornerRightUp"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CornerUpLeft: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CornerUpLeft"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CornerUpRight: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CornerUpRight"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CreditCard01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CreditCard01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CreditCard02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CreditCard02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CreditCardCheck: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CreditCardCheck"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CreditCardDown: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CreditCardDown"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CreditCardDownload: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CreditCardDownload"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CreditCardEdit: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CreditCardEdit"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CreditCardLock: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CreditCardLock"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CreditCardMinus: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CreditCardMinus"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CreditCardPlus: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CreditCardPlus"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CreditCardRefresh: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CreditCardRefresh"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CreditCardSearch: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CreditCardSearch"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CreditCardShield: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CreditCardShield"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CreditCardUp: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CreditCardUp"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CreditCardUpload: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CreditCardUpload"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CreditCardX: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CreditCardX"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Crop01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Crop01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Crop02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Crop02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Cryptocurrency01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Cryptocurrency01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Cryptocurrency02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Cryptocurrency02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Cryptocurrency03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Cryptocurrency03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Cryptocurrency04: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Cryptocurrency04"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Cube01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Cube01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Cube02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Cube02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Cube03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Cube03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Cube04: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Cube04"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CubeOutline: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CubeOutline"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CurrencyBitcoin: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CurrencyBitcoin"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CurrencyBitcoinCircle: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CurrencyBitcoinCircle"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CurrencyDollar: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CurrencyDollar"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CurrencyDollarCircle: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CurrencyDollarCircle"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CurrencyEthereum: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CurrencyEthereum"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CurrencyEthereumCircle: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CurrencyEthereumCircle"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CurrencyEuro: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CurrencyEuro"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CurrencyEuroCircle: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CurrencyEuroCircle"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CurrencyPound: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CurrencyPound"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CurrencyPoundCircle: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CurrencyPoundCircle"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CurrencyRuble: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CurrencyRuble"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CurrencyRubleCircle: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CurrencyRubleCircle"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CurrencyRupee: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CurrencyRupee"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CurrencyRupeeCircle: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CurrencyRupeeCircle"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CurrencyYen: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CurrencyYen"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CurrencyYenCircle: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CurrencyYenCircle"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Cursor01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Cursor01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Cursor02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Cursor02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Cursor03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Cursor03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Cursor04: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Cursor04"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CursorBox: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CursorBox"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CursorClick01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CursorClick01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const CursorClick02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/CursorClick02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Data: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Data"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Database01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Database01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Database02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Database02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Database03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Database03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Dataflow01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Dataflow01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Dataflow02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Dataflow02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Dataflow03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Dataflow03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Dataflow04: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Dataflow04"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Delete: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Delete"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Diamond01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Diamond01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Diamond02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Diamond02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Dice01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Dice01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Dice02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Dice02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Dice03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Dice03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Dice04: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Dice04"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Dice05: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Dice05"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Dice06: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Dice06"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Disc01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Disc01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Disc02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Disc02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const DistributeSpacingHorizontally: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/DistributeSpacingHorizontally"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const DistributeSpacingVertical: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/DistributeSpacingVertical"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Divide01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Divide01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Divide02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Divide02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Divide03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Divide03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Divider: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Divider"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const DotPoints01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/DotPoints01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const DotPoints02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/DotPoints02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const DotsGrid: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/DotsGrid"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const DotsHorizontal: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/DotsHorizontal"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const DotsVertical: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/DotsVertical"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Download01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Download01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Download02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Download02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Download04: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Download04"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const DownloadCloud01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/DownloadCloud01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const DownloadCloud02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/DownloadCloud02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Drop: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Drop"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Droplets01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Droplets01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Droplets02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Droplets02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Droplets03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Droplets03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Dropper: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Dropper"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Edit01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Edit01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Edit02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Edit02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Edit03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Edit03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Edit04: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Edit04"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Edit05: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Edit05"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Equal: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Equal"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const EqualNot: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/EqualNot"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Eraser: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Eraser"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Expand01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Expand01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Expand02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Expand02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Expand03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Expand03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Expand04: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Expand04"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Expand05: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Expand05"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Expand06: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Expand06"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Eye: FC<SVGComponentProps> = ({ ...props }: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Eye"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const EyeOff: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/EyeOff"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FaceContent: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FaceContent"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FaceFrown: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FaceFrown"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FaceHappy: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FaceHappy"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FaceID: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FaceID"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FaceIDSquare: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FaceIDSquare"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FaceNeutral: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FaceNeutral"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FaceSad: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FaceSad"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FaceSmile: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FaceSmile"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FaceWink: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FaceWink"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FastBackward: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FastBackward"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FastForward: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FastForward"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Feather: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Feather"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Figma: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Figma"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const File01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/File01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const File02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/File02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const File03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/File03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const File04: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/File04"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const File05: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/File05"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const File06: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/File06"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const File07: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/File07"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FileAttachment01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FileAttachment01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FileAttachment02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FileAttachment02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FileAttachment03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FileAttachment03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FileAttachment04: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FileAttachment04"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FileAttachment05: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FileAttachment05"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FileCheck01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FileCheck01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FileCheck02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FileCheck02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FileCheck03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FileCheck03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FileCode: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FileCode"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FileCode01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FileCode01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FileCode02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FileCode02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FileDownload01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FileDownload01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FileDownload02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FileDownload02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FileDownload03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FileDownload03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FileHeart01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FileHeart01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FileHeart02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FileHeart02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FileHeart03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FileHeart03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FileLock01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FileLock01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FileLock02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FileLock02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FileLock03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FileLock03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FileMinus01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FileMinus01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FileMinus02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FileMinus02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FileMinus03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FileMinus03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FilePlus01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FilePlus01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FilePlus02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FilePlus02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FilePlus03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FilePlus03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FileQuestion01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FileQuestion01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FileQuestion02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FileQuestion02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FileQuestion03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FileQuestion03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FileSearch01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FileSearch01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FileSearch02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FileSearch02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FileSearch03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FileSearch03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FileShield01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FileShield01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FileShield02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FileShield02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FileShield03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FileShield03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FileX01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FileX01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FileX02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FileX02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FileX03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FileX03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Film01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Film01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Film02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Film02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Film03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Film03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FilterFunnel01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FilterFunnel01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FilterFunnel02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FilterFunnel02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FilterLines: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FilterLines"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Fingerprint01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Fingerprint01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Fingerprint02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Fingerprint02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Fingerprint03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Fingerprint03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Fingerprint04: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Fingerprint04"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Flag01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Flag01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Flag02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Flag02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Flag03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Flag03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Flag04: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Flag04"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Flag05: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Flag05"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Flag06: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Flag06"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FlexAlignBottom: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FlexAlignBottom"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FlexAlignLeft: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FlexAlignLeft"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FlexAlignRight: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FlexAlignRight"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FlexAlignTop: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FlexAlignTop"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FlipBackward: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FlipBackward"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FlipForward: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FlipForward"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Folder: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Folder"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FolderCheck: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FolderCheck"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FolderClosed: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FolderClosed"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FolderDownload: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FolderDownload"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FolderLock: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FolderLock"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FolderMinus: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FolderMinus"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FolderPlus: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FolderPlus"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FolderQuestion: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FolderQuestion"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FolderSearch: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FolderSearch"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FolderShield: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FolderShield"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const FolderX: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/FolderX"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Framer: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Framer"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const GamingPad01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/GamingPad01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const GamingPad02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/GamingPad02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Gift01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Gift01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Gift02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Gift02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const GitBranch01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/GitBranch01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const GitBranch02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/GitBranch02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const GitCommit: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/GitCommit"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const GitMerge: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/GitMerge"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Glasses01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Glasses01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Glasses02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Glasses02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Globe01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Globe01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Globe02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Globe02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Globe03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Globe03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Globe04: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Globe04"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Globe05: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Globe05"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Globe06: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Globe06"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Globe07: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Globe07"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const GoogleChrome: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/GoogleChrome"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const GraduationHat01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/GraduationHat01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const GraduationHat02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/GraduationHat02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Grid: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Grid"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Grid01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Grid01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Grid02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Grid02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Grid03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Grid03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const GridDotsBlank: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/GridDotsBlank"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const GridDotsBottom: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/GridDotsBottom"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const GridDotsHorizontalCenter: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/GridDotsHorizontalCenter"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const GridDotsLeft: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/GridDotsLeft"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const GridDotsOuter: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/GridDotsOuter"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const GridDotsRight: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/GridDotsRight"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const GridDotsTop: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/GridDotsTop"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const GridDotsVerticalCenter: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/GridDotsVerticalCenter"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Hand: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Hand"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const HardDrive: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/HardDrive"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Hash01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Hash01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Hash02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Hash02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Heading01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Heading01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Heading02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Heading02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const HeadingSquare: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/HeadingSquare"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Headphones01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Headphones01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Headphones02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Headphones02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Heart: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Heart"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const HeartCircle: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/HeartCircle"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const HeartHand: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/HeartHand"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const HeartOctagon: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/HeartOctagon"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const HeartRounded: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/HeartRounded"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const HeartSquare: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/HeartSquare"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Hearts: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Hearts"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const HelpCircle: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/HelpCircle"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const HelpHexagon: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/HelpHexagon"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const HelpOctagon: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/HelpOctagon"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const HelpOctagon1: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/HelpOctagon1"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const HelpSquare: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/HelpSquare"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Hexagon01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Hexagon01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Hexagon02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Hexagon02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Home01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Home01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Home02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Home02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Home03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Home03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Home04: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Home04"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Home05: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Home05"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const HomeLine: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/HomeLine"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const HomeSmile: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/HomeSmile"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const HorizontalBarChart01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/HorizontalBarChart01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const HorizontalBarChart02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/HorizontalBarChart02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const HorizontalBarChart03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/HorizontalBarChart03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const HourGlass01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/HourGlass01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const HourGlass02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/HourGlass02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const HourGlass03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/HourGlass03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Hurricane01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Hurricane01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Hurricane02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Hurricane02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Hurricane03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Hurricane03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ImageIndentLeft: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ImageIndentLeft"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ImageIndentRight: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ImageIndentRight"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Inbox01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Inbox01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Inbox02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Inbox02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Infinity: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Infinity"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const InfoCircle: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/InfoCircle"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const InfoHexagon: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/InfoHexagon"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const InfoOctagon: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/InfoOctagon"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const InfoSquare: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/InfoSquare"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const IntersectCircle: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/IntersectCircle"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const IntersectSquare: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/IntersectSquare"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Italic01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Italic01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Italic02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Italic02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ItalicSquare: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ItalicSquare"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Key01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Key01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Key02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Key02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Keyboard01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Keyboard01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Keyboard02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Keyboard02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Laptop01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Laptop01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Laptop02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Laptop02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const LayerAlt01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/LayerAlt01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const LayerAlt02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/LayerAlt02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const LayerAlt03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/LayerAlt03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const LayerAlt04: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/LayerAlt04"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const LayerSingle: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/LayerSingle"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const LayersThree01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/LayersThree01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const LayersThree02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/LayersThree02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const LayersTwo01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/LayersTwo01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const LayersTwo02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/LayersTwo02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const LayoutBottom: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/LayoutBottom"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const LayoutGrid01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/LayoutGrid01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const LayoutGrid02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/LayoutGrid02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const LayoutLeft: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/LayoutLeft"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const LayoutRight: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/LayoutRight"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const LayoutTop: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/LayoutTop"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const LeftIndent01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/LeftIndent01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const LeftIndent02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/LeftIndent02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const LetterSpacing01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/LetterSpacing01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const LetterSpacing02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/LetterSpacing02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const LifeBuoy01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/LifeBuoy01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const LifeBuoy02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/LifeBuoy02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const LightBulb01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/LightBulb01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const LightBulb02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/LightBulb02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const LightBulb03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/LightBulb03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const LightBulb04: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/LightBulb04"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const LightBulb05: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/LightBulb05"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Lightning01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Lightning01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Lightning02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Lightning02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const LineChartDown01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/LineChartDown01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const LineChartDown02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/LineChartDown02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const LineChartDown03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/LineChartDown03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const LineChartDown04: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/LineChartDown04"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const LineChartDown05: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/LineChartDown05"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const LineChartUp01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/LineChartUp01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const LineChartUp02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/LineChartUp02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const LineChartUp03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/LineChartUp03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const LineChartUp04: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/LineChartUp04"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const LineChartUp05: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/LineChartUp05"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const LineHeight: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/LineHeight"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Link01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Link01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Link02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Link02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Link03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Link03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Link04: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Link04"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Link05: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Link05"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const LinkBroken01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/LinkBroken01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const LinkBroken02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/LinkBroken02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const LinkExternal01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/LinkExternal01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const LinkExternal02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/LinkExternal02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const List: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/List"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Loading01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Loading01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Loading02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Loading02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Loading03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Loading03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Lock01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Lock01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Lock02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Lock02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Lock03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Lock03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Lock04: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Lock04"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const LockKeyholeCircle: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/LockKeyholeCircle"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const LockKeyholeSquare: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/LockKeyholeSquare"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const LockUnlocked01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/LockUnlocked01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const LockUnlocked02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/LockUnlocked02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const LockUnlocked03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/LockUnlocked03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const LockUnlocked04: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/LockUnlocked04"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Login01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Login01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Login02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Login02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Login03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Login03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Login04: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Login04"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Logout01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Logout01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Logout02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Logout02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Logout03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Logout03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Logout04: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Logout04"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Luggage01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Luggage01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Luggage02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Luggage02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Luggage03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Luggage03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const MagicWand01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/MagicWand01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const MagicWand02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/MagicWand02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Mail01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Mail01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Mail02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Mail02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Mail03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Mail03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Mail04: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Mail04"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Mail05: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Mail05"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Map01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Map01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Map02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Map02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Mark: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Mark"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const MarkerPin01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/MarkerPin01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const MarkerPin02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/MarkerPin02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const MarkerPin03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/MarkerPin03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const MarkerPin04: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/MarkerPin04"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const MarkerPin05: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/MarkerPin05"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const MarkerPin06: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/MarkerPin06"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Maximize01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Maximize01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Maximize02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Maximize02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const MedicalCircle: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/MedicalCircle"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const MedicalCross: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/MedicalCross"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const MedicalSquare: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/MedicalSquare"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Menu01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Menu01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Menu02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Menu02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Menu03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Menu03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Menu04: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Menu04"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Menu05: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Menu05"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const MessageAlertCircle: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/MessageAlertCircle"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const MessageAlertSquare: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/MessageAlertSquare"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const MessageChatCircle: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/MessageChatCircle"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const MessageChatSquare: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/MessageChatSquare"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const MessageCheckCircle: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/MessageCheckCircle"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const MessageCheckSquare: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/MessageCheckSquare"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const MessageCircle01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/MessageCircle01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const MessageCircle02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/MessageCircle02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const MessageDotsCircle: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/MessageDotsCircle"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const MessageDotsSquare: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/MessageDotsSquare"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const MessageHeartCircle: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/MessageHeartCircle"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const MessageHeartSquare: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/MessageHeartSquare"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const MessageNotificationCircle: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/MessageNotificationCircle"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const MessageNotificationSquare: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/MessageNotificationSquare"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const MessageNotificationSquare02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/MessageNotificationSquare02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const MessagePlusCircle: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/MessagePlusCircle"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const MessagePlusSquare: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/MessagePlusSquare"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const MessageQuestionCircle: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/MessageQuestionCircle"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const MessageQuestionSquare: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/MessageQuestionSquare"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const MessageSmileCircle: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/MessageSmileCircle"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const MessageSmileSquare: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/MessageSmileSquare"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const MessageSquare01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/MessageSquare01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const MessageSquare02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/MessageSquare02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const MessageTextCircle01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/MessageTextCircle01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const MessageTextCircle02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/MessageTextCircle02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const MessageTextSquare01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/MessageTextSquare01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const MessageXCircle: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/MessageXCircle"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const MessageXSquare: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/MessageXSquare"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Microphone01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Microphone01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Microphone02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Microphone02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const MicrophoneOff01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/MicrophoneOff01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const MicrophoneOff02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/MicrophoneOff02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Microscope: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Microscope"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Minimize01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Minimize01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Minimize02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Minimize02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Minus: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Minus"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const MinusCircle: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/MinusCircle"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const MinusSquare: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/MinusSquare"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Modem01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Modem01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Modem02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Modem02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Monitor01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Monitor01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Monitor02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Monitor02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Monitor03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Monitor03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Monitor04: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Monitor04"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Monitor05: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Monitor05"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Moon01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Moon01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Moon02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Moon02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const MoonEclipse: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/MoonEclipse"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const MoonStar: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/MoonStar"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Mouse: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Mouse"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Move: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Move"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Music: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Music"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const MusicNote01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/MusicNote01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const MusicNote02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/MusicNote02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const NavigationPointer01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/NavigationPointer01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const NavigationPointer02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/NavigationPointer02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const NavigationPointerOff01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/NavigationPointerOff01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const NavigationPointerOff02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/NavigationPointerOff02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const NotificationBox: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/NotificationBox"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const NotificationText: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/NotificationText"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Octagon: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Octagon"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Package: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Package"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const PackageCheck: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/PackageCheck"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const PackageMinus: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/PackageMinus"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const PackagePlus: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/PackagePlus"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const PackageSearch: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/PackageSearch"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const PackageX: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/PackageX"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Paint: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Paint"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const PaintPour: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/PaintPour"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Palette: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Palette"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const PaperClip: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/PaperClip"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ParagraphSpacing: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ParagraphSpacing"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ParagraphWrap: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ParagraphWrap"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Passcode: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Passcode"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const PasscodeLock: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/PasscodeLock"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Passport: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Passport"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const PauseCircle: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/PauseCircle"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const PauseSquare: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/PauseSquare"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const PenTool01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/PenTool01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const PenTool02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/PenTool02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const PenToolMinus: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/PenToolMinus"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const PenToolPlus: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/PenToolPlus"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Pencil01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Pencil01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Pencil02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Pencil02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const PencilLine: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/PencilLine"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Percent01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Percent01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Percent02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Percent02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Percent03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Percent03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Perspective01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Perspective01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Perspective02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Perspective02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Phone: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Phone"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Phone01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Phone01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Phone02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Phone02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const PhoneCall01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/PhoneCall01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const PhoneCall02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/PhoneCall02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const PhoneHangUp: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/PhoneHangUp"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const PhoneIncoming01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/PhoneIncoming01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const PhoneIncoming02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/PhoneIncoming02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const PhoneOutgoing01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/PhoneOutgoing01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const PhoneOutgoing02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/PhoneOutgoing02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const PhonePause: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/PhonePause"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const PhoneX: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/PhoneX"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const PieChart01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/PieChart01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const PieChart02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/PieChart02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const PieChart03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/PieChart03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const PieChart04: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/PieChart04"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const PiggyBank01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/PiggyBank01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const PiggyBank02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/PiggyBank02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Pilcrow01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Pilcrow01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Pilcrow02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Pilcrow02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const PilcrowSquare: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/PilcrowSquare"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Pin01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Pin01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Pin02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Pin02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Placeholder: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Placeholder"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Play: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Play"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const PlayCircle: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/PlayCircle"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const PlaySquare: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/PlaySquare"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Plus: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Plus"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const PlusCircle: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/PlusCircle"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const PlusSquare: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/PlusSquare"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Podcast: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Podcast"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Power01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Power01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Power02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Power02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Power03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Power03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const PresentationChart01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/PresentationChart01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const PresentationChart02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/PresentationChart02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const PresentationChart03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/PresentationChart03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Printer: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Printer"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const PuzzlePiece: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/PuzzlePiece"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const PuzzlePiece02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/PuzzlePiece02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const QRCode01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/QRCode01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const QRCode02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/QRCode02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const RSS01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/RSS01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const RSS02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/RSS02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Receipt: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Receipt"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ReceiptCheck: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ReceiptCheck"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Recording01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Recording01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Recording02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Recording02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Recording03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Recording03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Reflect01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Reflect01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Reflect02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Reflect02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const RefreshCCW01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/RefreshCCW01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const RefreshCCW02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/RefreshCCW02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const RefreshCCW03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/RefreshCCW03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const RefreshCCW04: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/RefreshCCW04"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const RefreshCW01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/RefreshCW01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const RefreshCW02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/RefreshCW02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const RefreshCW03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/RefreshCW03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const RefreshCW04: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/RefreshCW04"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const RefreshCW05: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/RefreshCW05"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const RefreshLeft: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/RefreshLeft"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const RefreshRight: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/RefreshRight"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Repeat01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Repeat01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Repeat02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Repeat02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Repeat03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Repeat03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Repeat04: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Repeat04"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const RightIndent01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/RightIndent01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const RightIndent02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/RightIndent02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Rocket01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Rocket01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Rocket02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Rocket02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const RollerBrush: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/RollerBrush"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Route: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Route"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Rows01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Rows01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Rows02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Rows02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Rows03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Rows03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Ruler: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Ruler"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Safe: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Safe"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Sale01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Sale01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Sale02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Sale02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Sale03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Sale03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Sale04: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Sale04"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Save01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Save01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Save02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Save02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Save03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Save03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Scale01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Scale01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Scale02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Scale02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Scale03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Scale03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Scales01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Scales01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Scales02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Scales02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Scan: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Scan"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Scissors01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Scissors01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Scissors02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Scissors02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ScissorsCut01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ScissorsCut01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ScissorsCut02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ScissorsCut02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const SearchLG: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/SearchLG"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const SearchMD: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/SearchMD"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const SearchRefraction: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/SearchRefraction"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const SearchSM: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/SearchSM"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Send01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Send01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Send02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Send02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Send03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Send03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Server01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Server01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Server02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Server02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Server03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Server03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Server04: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Server04"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Server05: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Server05"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Server06: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Server06"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Settings01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Settings01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Settings02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Settings02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Settings03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Settings03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Settings04: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Settings04"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Share01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Share01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Share02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Share02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Share03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Share03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Share04: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Share04"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Share05: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Share05"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Share06: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Share06"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Share07: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Share07"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Shield01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Shield01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Shield02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Shield02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Shield03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Shield03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ShieldDollar: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ShieldDollar"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ShieldPlus: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ShieldPlus"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ShieldTick: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ShieldTick"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ShieldZap: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ShieldZap"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ShoppingBag01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ShoppingBag01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ShoppingBag02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ShoppingBag02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ShoppingBag03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ShoppingBag03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ShoppingCart01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ShoppingCart01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ShoppingCart02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ShoppingCart02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ShoppingCart03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ShoppingCart03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Shuffle01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Shuffle01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Shuffle02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Shuffle02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Signal01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Signal01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Signal02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Signal02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Signal03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Signal03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const SimCard: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/SimCard"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Skew: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Skew"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const SkipBack: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/SkipBack"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const SkipForward: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/SkipForward"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const SlashCircle01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/SlashCircle01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const SlashCircle02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/SlashCircle02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const SlashDivider: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/SlashDivider"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const SlashOctagon: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/SlashOctagon"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Sliders01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Sliders01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Sliders02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Sliders02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Sliders03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Sliders03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Sliders04: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Sliders04"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const SnowFlake01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/SnowFlake01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const SnowFlake02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/SnowFlake02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const SpacingHeight01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/SpacingHeight01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const SpacingHeight02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/SpacingHeight02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const SpacingWidth01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/SpacingWidth01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const SpacingWidth02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/SpacingWidth02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Speakers01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Speakers01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Speakers02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Speakers02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Speakers03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Speakers03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Speedometer01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Speedometer01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Speedometer02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Speedometer02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Speedometer03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Speedometer03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Speedometer04: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Speedometer04"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Square: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Square"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Stand: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Stand"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Star01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Star01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Star02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Star02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Star03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Star03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Star04: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Star04"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Star05: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Star05"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Star06: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Star06"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Star07: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Star07"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const StarW01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/StarW01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const StarW02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/StarW02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const StarW03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/StarW03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const StickerCircle: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/StickerCircle"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const StickerSquare: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/StickerSquare"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Stop: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Stop"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const StopCircle: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/StopCircle"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const StopSquare: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/StopSquare"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const StrikeThrough01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/StrikeThrough01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const StrikeThrough02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/StrikeThrough02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const StrikeThroughSquare: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/StrikeThroughSquare"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Subscript: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Subscript"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Sun: FC<SVGComponentProps> = ({ ...props }: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Sun"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const SunSetting01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/SunSetting01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const SunSetting02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/SunSetting02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const SunSetting03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/SunSetting03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Sunrise: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Sunrise"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Sunset: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Sunset"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const SwitchHorizontal01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/SwitchHorizontal01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const SwitchHorizontal02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/SwitchHorizontal02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const SwitchVertical01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/SwitchVertical01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const SwitchVertical02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/SwitchVertical02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const TV01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/TV01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const TV02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/TV02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const TV03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/TV03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Table: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Table"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Tablet01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Tablet01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Tablet02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Tablet02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Tag01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Tag01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Tag02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Tag02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Tag03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Tag03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Target01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Target01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Target02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Target02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Target03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Target03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Target04: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Target04"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Target05: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Target05"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Telescope: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Telescope"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Terminal: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Terminal"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const TerminalBrowser: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/TerminalBrowser"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const TerminalCircle: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/TerminalCircle"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const TerminalSquare: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/TerminalSquare"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const TextInput: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/TextInput"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Thermometer01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Thermometer01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Thermometer02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Thermometer02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Thermometer03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Thermometer03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ThermometerCold: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ThermometerCold"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ThermometerWarm: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ThermometerWarm"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ThumbsDown: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ThumbsDown"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ThumbsUp: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ThumbsUp"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Ticket01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Ticket01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Ticket02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Ticket02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Toggle01Left: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Toggle01Left"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Toggle01Right: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Toggle01Right"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Toggle02Left: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Toggle02Left"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Toggle02Right: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Toggle02Right"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Toggle03Left: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Toggle03Left"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Toggle03Right: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Toggle03Right"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Tool01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Tool01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Tool02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Tool02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Train: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Train"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Tram: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Tram"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Transform: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Transform"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Translate01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Translate01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Translate02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Translate02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Trash01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Trash01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Trash02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Trash02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Trash03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Trash03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Trash04: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Trash04"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const TrendDown01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/TrendDown01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const TrendDown02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/TrendDown02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const TrendUp01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/TrendUp01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const TrendUp02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/TrendUp02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Triangle: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Triangle"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Trophy01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Trophy01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Trophy02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Trophy02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Truck01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Truck01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Truck02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Truck02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Type01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Type01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Type02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Type02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const TypeSquare: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/TypeSquare"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const TypeStrikeThrough01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/TypeStrikeThrough01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const TypeStrikeThrough02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/TypeStrikeThrough02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const USBFlashDrive: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/USBFlashDrive"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Umbrella01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Umbrella01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Umbrella02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Umbrella02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Umbrella03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Umbrella03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Underline01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Underline01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Underline02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Underline02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const UnderlineSquare: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/UnderlineSquare"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Upload01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Upload01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Upload02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Upload02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Upload03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Upload03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Upload04: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Upload04"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const UploadCloud01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/UploadCloud01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const UploadCloud02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/UploadCloud02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const User01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/User01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const User02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/User02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const User03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/User03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const UserCheck01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/UserCheck01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const UserCheck02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/UserCheck02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const UserCircle: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/UserCircle"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const UserDown01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/UserDown01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const UserDown02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/UserDown02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const UserEdit: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/UserEdit"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const UserLeft01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/UserLeft01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const UserLeft02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/UserLeft02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const UserMinus01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/UserMinus01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const UserMinus02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/UserMinus02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const UserPlus01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/UserPlus01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const UserPlus02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/UserPlus02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const UserRight01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/UserRight01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const UserRight02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/UserRight02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const UserSquare: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/UserSquare"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const UserUp01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/UserUp01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const UserUp02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/UserUp02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const UserX01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/UserX01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const UserX02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/UserX02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Users01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Users01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Users02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Users02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Users03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Users03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const UsersCheck: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/UsersCheck"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const UsersDown: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/UsersDown"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const UsersEdit: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/UsersEdit"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const UsersLeft: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/UsersLeft"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const UsersMinus: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/UsersMinus"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const UsersPlus: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/UsersPlus"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const UsersRight: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/UsersRight"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const UsersUp: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/UsersUp"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const UsersX: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/UsersX"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Variable: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Variable"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const VideoRecorder: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/VideoRecorder"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const VideoRecorderOff: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/VideoRecorderOff"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Virus: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Virus"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const VoiceMail: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/VoiceMail"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const VolumeMax: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/VolumeMax"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const VolumeMin: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/VolumeMin"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const VolumeMinus: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/VolumeMinus"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const VolumePlus: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/VolumePlus"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const VolumeX: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/VolumeX"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Wallet01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Wallet01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Wallet02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Wallet02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Wallet03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Wallet03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Wallet04: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Wallet04"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Wallet05: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Wallet05"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const WatchCircle: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/WatchCircle"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const WatchSquare: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/WatchSquare"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Waves: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Waves"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const WebCam01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/WebCam01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const WebCam02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/WebCam02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const WiFi: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/WiFi"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const WiFiOff: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/WiFiOff"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Wind01: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Wind01"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Wind02: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Wind02"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Wind03: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Wind03"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const X: FC<SVGComponentProps> = ({ ...props }: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/X"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const XCircle: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/XCircle"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const XClose: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/XClose"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const XSquare: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/XSquare"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const YouTube: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/YouTube"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const Zap: FC<SVGComponentProps> = ({ ...props }: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/Zap"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ZapCircle: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ZapCircle"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ZapFast: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ZapFast"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ZapOff: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ZapOff"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ZoomIn: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ZoomIn"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export const ZoomOut: FC<SVGComponentProps> = ({
  ...props
}: SVGComponentProps) => {
  const Icon = lazy(() => import("./icons/ZoomOut"));

  return (
    <Suspense fallback={<DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};
