import { SVGComponentProps, Fallback } from "./template";
import { Suspense, lazy, FC } from "react";

export type { SVGComponentProps } from "./template";

const LazyAlertCircle = lazy(() =>
  import("./icons/alerts").then((module) => ({ default: module.AlertCircle }))
);

export const AlertCircle: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyAlertCircle {...props} />
    </Suspense>
  );
};

const LazyAlertHexagon = lazy(() =>
  import("./icons/alerts").then((module) => ({ default: module.AlertHexagon }))
);

export const AlertHexagon: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyAlertHexagon {...props} />
    </Suspense>
  );
};

const LazyAlertOctagon = lazy(() =>
  import("./icons/alerts").then((module) => ({ default: module.AlertOctagon }))
);

export const AlertOctagon: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyAlertOctagon {...props} />
    </Suspense>
  );
};

const LazyAlertSquare = lazy(() =>
  import("./icons/alerts").then((module) => ({ default: module.AlertSquare }))
);

export const AlertSquare: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyAlertSquare {...props} />
    </Suspense>
  );
};

const LazyAlertTriangle = lazy(() =>
  import("./icons/alerts").then((module) => ({ default: module.AlertTriangle }))
);

export const AlertTriangle: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyAlertTriangle {...props} />
    </Suspense>
  );
};

const LazyAnnouncement01 = lazy(() =>
  import("./icons/alerts").then((module) => ({
    default: module.Announcement01,
  }))
);

export const Announcement01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyAnnouncement01 {...props} />
    </Suspense>
  );
};

const LazyAnnouncement02 = lazy(() =>
  import("./icons/alerts").then((module) => ({
    default: module.Announcement02,
  }))
);

export const Announcement02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyAnnouncement02 {...props} />
    </Suspense>
  );
};

const LazyAnnouncement03 = lazy(() =>
  import("./icons/alerts").then((module) => ({
    default: module.Announcement03,
  }))
);

export const Announcement03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyAnnouncement03 {...props} />
    </Suspense>
  );
};

const LazyBell01 = lazy(() =>
  import("./icons/alerts").then((module) => ({ default: module.Bell01 }))
);

export const Bell01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBell01 {...props} />
    </Suspense>
  );
};

const LazyBell02 = lazy(() =>
  import("./icons/alerts").then((module) => ({ default: module.Bell02 }))
);

export const Bell02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBell02 {...props} />
    </Suspense>
  );
};

const LazyBell03 = lazy(() =>
  import("./icons/alerts").then((module) => ({ default: module.Bell03 }))
);

export const Bell03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBell03 {...props} />
    </Suspense>
  );
};

const LazyBell04 = lazy(() =>
  import("./icons/alerts").then((module) => ({ default: module.Bell04 }))
);

export const Bell04: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBell04 {...props} />
    </Suspense>
  );
};

const LazyBellMinus = lazy(() =>
  import("./icons/alerts").then((module) => ({ default: module.BellMinus }))
);

export const BellMinus: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBellMinus {...props} />
    </Suspense>
  );
};

const LazyBellOff01 = lazy(() =>
  import("./icons/alerts").then((module) => ({ default: module.BellOff01 }))
);

export const BellOff01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBellOff01 {...props} />
    </Suspense>
  );
};

const LazyBellOff03 = lazy(() =>
  import("./icons/alerts").then((module) => ({ default: module.BellOff03 }))
);

export const BellOff03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBellOff03 {...props} />
    </Suspense>
  );
};

const LazyBellPlus = lazy(() =>
  import("./icons/alerts").then((module) => ({ default: module.BellPlus }))
);

export const BellPlus: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBellPlus {...props} />
    </Suspense>
  );
};

const LazyBellRinging01 = lazy(() =>
  import("./icons/alerts").then((module) => ({ default: module.BellRinging01 }))
);

export const BellRinging01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBellRinging01 {...props} />
    </Suspense>
  );
};

const LazyBellRinging02 = lazy(() =>
  import("./icons/alerts").then((module) => ({ default: module.BellRinging02 }))
);

export const BellRinging02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBellRinging02 {...props} />
    </Suspense>
  );
};

const LazyBellRinging03 = lazy(() =>
  import("./icons/alerts").then((module) => ({ default: module.BellRinging03 }))
);

export const BellRinging03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBellRinging03 {...props} />
    </Suspense>
  );
};

const LazyBellRinging04 = lazy(() =>
  import("./icons/alerts").then((module) => ({ default: module.BellRinging04 }))
);

export const BellRinging04: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBellRinging04 {...props} />
    </Suspense>
  );
};

const LazyMessageNotificationSquare = lazy(() =>
  import("./icons/alerts").then((module) => ({
    default: module.MessageNotificationSquare,
  }))
);

export const MessageNotificationSquare: FC<SVGComponentProps> = ({
  ...props
}) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMessageNotificationSquare {...props} />
    </Suspense>
  );
};

const LazyNotificationBox = lazy(() =>
  import("./icons/alerts").then((module) => ({
    default: module.NotificationBox,
  }))
);

export const NotificationBox: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyNotificationBox {...props} />
    </Suspense>
  );
};

const LazyNotificationText = lazy(() =>
  import("./icons/alerts").then((module) => ({
    default: module.NotificationText,
  }))
);

export const NotificationText: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyNotificationText {...props} />
    </Suspense>
  );
};

const LazyThumbsDown = lazy(() =>
  import("./icons/alerts").then((module) => ({ default: module.ThumbsDown }))
);

export const ThumbsDown: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyThumbsDown {...props} />
    </Suspense>
  );
};

const LazyThumbsUp = lazy(() =>
  import("./icons/alerts").then((module) => ({ default: module.ThumbsUp }))
);

export const ThumbsUp: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyThumbsUp {...props} />
    </Suspense>
  );
};

const LazyArrowBlockDown = lazy(() =>
  import("./icons/arrow").then((module) => ({ default: module.ArrowBlockDown }))
);

export const ArrowBlockDown: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyArrowBlockDown {...props} />
    </Suspense>
  );
};

const LazyArrowBlockRight = lazy(() =>
  import("./icons/arrow").then((module) => ({
    default: module.ArrowBlockRight,
  }))
);

export const ArrowBlockRight: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyArrowBlockRight {...props} />
    </Suspense>
  );
};

const LazyArrowBlockLeft = lazy(() =>
  import("./icons/arrow").then((module) => ({ default: module.ArrowBlockLeft }))
);

export const ArrowBlockLeft: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyArrowBlockLeft {...props} />
    </Suspense>
  );
};

const LazyArrowBlockUp = lazy(() =>
  import("./icons/arrow").then((module) => ({ default: module.ArrowBlockUp }))
);

export const ArrowBlockUp: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyArrowBlockUp {...props} />
    </Suspense>
  );
};

const LazyArrowCircleBrokenDownLeft = lazy(() =>
  import("./icons/arrow").then((module) => ({
    default: module.ArrowCircleBrokenDownLeft,
  }))
);

export const ArrowCircleBrokenDownLeft: FC<SVGComponentProps> = ({
  ...props
}) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyArrowCircleBrokenDownLeft {...props} />
    </Suspense>
  );
};

const LazyArrowCircleBrokenDownRight = lazy(() =>
  import("./icons/arrow").then((module) => ({
    default: module.ArrowCircleBrokenDownRight,
  }))
);

export const ArrowCircleBrokenDownRight: FC<SVGComponentProps> = ({
  ...props
}) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyArrowCircleBrokenDownRight {...props} />
    </Suspense>
  );
};

const LazyArrowCircleBrokenDown = lazy(() =>
  import("./icons/arrow").then((module) => ({
    default: module.ArrowCircleBrokenDown,
  }))
);

export const ArrowCircleBrokenDown: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyArrowCircleBrokenDown {...props} />
    </Suspense>
  );
};

const LazyArrowCircleBrokenLeft = lazy(() =>
  import("./icons/arrow").then((module) => ({
    default: module.ArrowCircleBrokenLeft,
  }))
);

export const ArrowCircleBrokenLeft: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyArrowCircleBrokenLeft {...props} />
    </Suspense>
  );
};

const LazyArrowCircleBrokenRight = lazy(() =>
  import("./icons/arrow").then((module) => ({
    default: module.ArrowCircleBrokenRight,
  }))
);

export const ArrowCircleBrokenRight: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyArrowCircleBrokenRight {...props} />
    </Suspense>
  );
};

const LazyArrowCircleBrokenUpLeft = lazy(() =>
  import("./icons/arrow").then((module) => ({
    default: module.ArrowCircleBrokenUpLeft,
  }))
);

export const ArrowCircleBrokenUpLeft: FC<SVGComponentProps> = ({
  ...props
}) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyArrowCircleBrokenUpLeft {...props} />
    </Suspense>
  );
};

const LazyArrowCircleBrokenUpRight = lazy(() =>
  import("./icons/arrow").then((module) => ({
    default: module.ArrowCircleBrokenUpRight,
  }))
);

export const ArrowCircleBrokenUpRight: FC<SVGComponentProps> = ({
  ...props
}) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyArrowCircleBrokenUpRight {...props} />
    </Suspense>
  );
};

const LazyArrowCircleBrokenUp = lazy(() =>
  import("./icons/arrow").then((module) => ({
    default: module.ArrowCircleBrokenUp,
  }))
);

export const ArrowCircleBrokenUp: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyArrowCircleBrokenUp {...props} />
    </Suspense>
  );
};

const LazyArrowCircleDownLeft = lazy(() =>
  import("./icons/arrow").then((module) => ({
    default: module.ArrowCircleDownLeft,
  }))
);

export const ArrowCircleDownLeft: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyArrowCircleDownLeft {...props} />
    </Suspense>
  );
};

const LazyArrowCircleDownRight = lazy(() =>
  import("./icons/arrow").then((module) => ({
    default: module.ArrowCircleDownRight,
  }))
);

export const ArrowCircleDownRight: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyArrowCircleDownRight {...props} />
    </Suspense>
  );
};

const LazyArrowCircleDown = lazy(() =>
  import("./icons/arrow").then((module) => ({
    default: module.ArrowCircleDown,
  }))
);

export const ArrowCircleDown: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyArrowCircleDown {...props} />
    </Suspense>
  );
};

const LazyArrowCircleLeft = lazy(() =>
  import("./icons/arrow").then((module) => ({
    default: module.ArrowCircleLeft,
  }))
);

export const ArrowCircleLeft: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyArrowCircleLeft {...props} />
    </Suspense>
  );
};

const LazyArrowCircleRight = lazy(() =>
  import("./icons/arrow").then((module) => ({
    default: module.ArrowCircleRight,
  }))
);

export const ArrowCircleRight: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyArrowCircleRight {...props} />
    </Suspense>
  );
};

const LazyArrowCircleUpLeft = lazy(() =>
  import("./icons/arrow").then((module) => ({
    default: module.ArrowCircleUpLeft,
  }))
);

export const ArrowCircleUpLeft: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyArrowCircleUpLeft {...props} />
    </Suspense>
  );
};

const LazyArrowCircleUpRight = lazy(() =>
  import("./icons/arrow").then((module) => ({
    default: module.ArrowCircleUpRight,
  }))
);

export const ArrowCircleUpRight: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyArrowCircleUpRight {...props} />
    </Suspense>
  );
};

const LazyArrowCircleUp = lazy(() =>
  import("./icons/arrow").then((module) => ({ default: module.ArrowCircleUp }))
);

export const ArrowCircleUp: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyArrowCircleUp {...props} />
    </Suspense>
  );
};

const LazyArrowDownLeft = lazy(() =>
  import("./icons/arrow").then((module) => ({ default: module.ArrowDownLeft }))
);

export const ArrowDownLeft: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyArrowDownLeft {...props} />
    </Suspense>
  );
};

const LazyArrowDownRight = lazy(() =>
  import("./icons/arrow").then((module) => ({ default: module.ArrowDownRight }))
);

export const ArrowDownRight: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyArrowDownRight {...props} />
    </Suspense>
  );
};

const LazyArrowDown = lazy(() =>
  import("./icons/arrow").then((module) => ({ default: module.ArrowDown }))
);

export const ArrowDown: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyArrowDown {...props} />
    </Suspense>
  );
};

const LazyArrowLeft = lazy(() =>
  import("./icons/arrow").then((module) => ({ default: module.ArrowLeft }))
);

export const ArrowLeft: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyArrowLeft {...props} />
    </Suspense>
  );
};

const LazyArrowNarrowDownLeft = lazy(() =>
  import("./icons/arrow").then((module) => ({
    default: module.ArrowNarrowDownLeft,
  }))
);

export const ArrowNarrowDownLeft: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyArrowNarrowDownLeft {...props} />
    </Suspense>
  );
};

const LazyArrowNarrowDownRight = lazy(() =>
  import("./icons/arrow").then((module) => ({
    default: module.ArrowNarrowDownRight,
  }))
);

export const ArrowNarrowDownRight: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyArrowNarrowDownRight {...props} />
    </Suspense>
  );
};

const LazyArrowNarrowDown = lazy(() =>
  import("./icons/arrow").then((module) => ({
    default: module.ArrowNarrowDown,
  }))
);

export const ArrowNarrowDown: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyArrowNarrowDown {...props} />
    </Suspense>
  );
};

const LazyArrowNarrowLeft = lazy(() =>
  import("./icons/arrow").then((module) => ({
    default: module.ArrowNarrowLeft,
  }))
);

export const ArrowNarrowLeft: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyArrowNarrowLeft {...props} />
    </Suspense>
  );
};

const LazyArrowNarrowRight = lazy(() =>
  import("./icons/arrow").then((module) => ({
    default: module.ArrowNarrowRight,
  }))
);

export const ArrowNarrowRight: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyArrowNarrowRight {...props} />
    </Suspense>
  );
};

const LazyArrowNarrowUpLeft = lazy(() =>
  import("./icons/arrow").then((module) => ({
    default: module.ArrowNarrowUpLeft,
  }))
);

export const ArrowNarrowUpLeft: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyArrowNarrowUpLeft {...props} />
    </Suspense>
  );
};

const LazyArrowNarrowUpRight = lazy(() =>
  import("./icons/arrow").then((module) => ({
    default: module.ArrowNarrowUpRight,
  }))
);

export const ArrowNarrowUpRight: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyArrowNarrowUpRight {...props} />
    </Suspense>
  );
};

const LazyArrowNarrowUp = lazy(() =>
  import("./icons/arrow").then((module) => ({ default: module.ArrowNarrowUp }))
);

export const ArrowNarrowUp: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyArrowNarrowUp {...props} />
    </Suspense>
  );
};

const LazyArrowRight = lazy(() =>
  import("./icons/arrow").then((module) => ({ default: module.ArrowRight }))
);

export const ArrowRight: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyArrowRight {...props} />
    </Suspense>
  );
};

const LazyArrowSquareDownLeft = lazy(() =>
  import("./icons/arrow").then((module) => ({
    default: module.ArrowSquareDownLeft,
  }))
);

export const ArrowSquareDownLeft: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyArrowSquareDownLeft {...props} />
    </Suspense>
  );
};

const LazyArrowSquareDownRight = lazy(() =>
  import("./icons/arrow").then((module) => ({
    default: module.ArrowSquareDownRight,
  }))
);

export const ArrowSquareDownRight: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyArrowSquareDownRight {...props} />
    </Suspense>
  );
};

const LazyArrowSquareDown = lazy(() =>
  import("./icons/arrow").then((module) => ({
    default: module.ArrowSquareDown,
  }))
);

export const ArrowSquareDown: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyArrowSquareDown {...props} />
    </Suspense>
  );
};

const LazyArrowSquareLeft = lazy(() =>
  import("./icons/arrow").then((module) => ({
    default: module.ArrowSquareLeft,
  }))
);

export const ArrowSquareLeft: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyArrowSquareLeft {...props} />
    </Suspense>
  );
};

const LazyArrowSquareRight = lazy(() =>
  import("./icons/arrow").then((module) => ({
    default: module.ArrowSquareRight,
  }))
);

export const ArrowSquareRight: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyArrowSquareRight {...props} />
    </Suspense>
  );
};

const LazyArrowSquareUpLeft = lazy(() =>
  import("./icons/arrow").then((module) => ({
    default: module.ArrowSquareUpLeft,
  }))
);

export const ArrowSquareUpLeft: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyArrowSquareUpLeft {...props} />
    </Suspense>
  );
};

const LazyArrowSquareUpRight = lazy(() =>
  import("./icons/arrow").then((module) => ({
    default: module.ArrowSquareUpRight,
  }))
);

export const ArrowSquareUpRight: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyArrowSquareUpRight {...props} />
    </Suspense>
  );
};

const LazyArrowSquareUp = lazy(() =>
  import("./icons/arrow").then((module) => ({ default: module.ArrowSquareUp }))
);

export const ArrowSquareUp: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyArrowSquareUp {...props} />
    </Suspense>
  );
};

const LazyArrowUpLeft = lazy(() =>
  import("./icons/arrow").then((module) => ({ default: module.ArrowUpLeft }))
);

export const ArrowUpLeft: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyArrowUpLeft {...props} />
    </Suspense>
  );
};

const LazyArrowUpRight = lazy(() =>
  import("./icons/arrow").then((module) => ({ default: module.ArrowUpRight }))
);

export const ArrowUpRight: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyArrowUpRight {...props} />
    </Suspense>
  );
};

const LazyArrowUp = lazy(() =>
  import("./icons/arrow").then((module) => ({ default: module.ArrowUp }))
);

export const ArrowUp: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyArrowUp {...props} />
    </Suspense>
  );
};

const LazyArrowsDown = lazy(() =>
  import("./icons/arrow").then((module) => ({ default: module.ArrowsDown }))
);

export const ArrowsDown: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyArrowsDown {...props} />
    </Suspense>
  );
};

const LazyArrowsLeft = lazy(() =>
  import("./icons/arrow").then((module) => ({ default: module.ArrowsLeft }))
);

export const ArrowsLeft: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyArrowsLeft {...props} />
    </Suspense>
  );
};

const LazyArrowsRight = lazy(() =>
  import("./icons/arrow").then((module) => ({ default: module.ArrowsRight }))
);

export const ArrowsRight: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyArrowsRight {...props} />
    </Suspense>
  );
};

const LazyArrowsTriangle = lazy(() =>
  import("./icons/arrow").then((module) => ({ default: module.ArrowsTriangle }))
);

export const ArrowsTriangle: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyArrowsTriangle {...props} />
    </Suspense>
  );
};

const LazyArrowsUp = lazy(() =>
  import("./icons/arrow").then((module) => ({ default: module.ArrowsUp }))
);

export const ArrowsUp: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyArrowsUp {...props} />
    </Suspense>
  );
};

const LazyChevronDownDouble = lazy(() =>
  import("./icons/arrow").then((module) => ({
    default: module.ChevronDownDouble,
  }))
);

export const ChevronDownDouble: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyChevronDownDouble {...props} />
    </Suspense>
  );
};

const LazyChevronDown = lazy(() =>
  import("./icons/arrow").then((module) => ({ default: module.ChevronDown }))
);

export const ChevronDown: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyChevronDown {...props} />
    </Suspense>
  );
};

const LazyChevronLeftDouble = lazy(() =>
  import("./icons/arrow").then((module) => ({
    default: module.ChevronLeftDouble,
  }))
);

export const ChevronLeftDouble: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyChevronLeftDouble {...props} />
    </Suspense>
  );
};

const LazyChevronLeft = lazy(() =>
  import("./icons/arrow").then((module) => ({ default: module.ChevronLeft }))
);

export const ChevronLeft: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyChevronLeft {...props} />
    </Suspense>
  );
};

const LazyChevronRightDouble = lazy(() =>
  import("./icons/arrow").then((module) => ({
    default: module.ChevronRightDouble,
  }))
);

export const ChevronRightDouble: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyChevronRightDouble {...props} />
    </Suspense>
  );
};

const LazyChevronRight = lazy(() =>
  import("./icons/arrow").then((module) => ({ default: module.ChevronRight }))
);

export const ChevronRight: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyChevronRight {...props} />
    </Suspense>
  );
};

const LazyChevronSelectorHorizontal = lazy(() =>
  import("./icons/arrow").then((module) => ({
    default: module.ChevronSelectorHorizontal,
  }))
);

export const ChevronSelectorHorizontal: FC<SVGComponentProps> = ({
  ...props
}) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyChevronSelectorHorizontal {...props} />
    </Suspense>
  );
};

const LazyChevronSelectorVertical = lazy(() =>
  import("./icons/arrow").then((module) => ({
    default: module.ChevronSelectorVertical,
  }))
);

export const ChevronSelectorVertical: FC<SVGComponentProps> = ({
  ...props
}) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyChevronSelectorVertical {...props} />
    </Suspense>
  );
};

const LazyChevronUpDouble = lazy(() =>
  import("./icons/arrow").then((module) => ({
    default: module.ChevronUpDouble,
  }))
);

export const ChevronUpDouble: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyChevronUpDouble {...props} />
    </Suspense>
  );
};

const LazyChevronUp = lazy(() =>
  import("./icons/arrow").then((module) => ({ default: module.ChevronUp }))
);

export const ChevronUp: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyChevronUp {...props} />
    </Suspense>
  );
};

const LazyCornerDownLeft = lazy(() =>
  import("./icons/arrow").then((module) => ({ default: module.CornerDownLeft }))
);

export const CornerDownLeft: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCornerDownLeft {...props} />
    </Suspense>
  );
};

const LazyCornerDownRight = lazy(() =>
  import("./icons/arrow").then((module) => ({
    default: module.CornerDownRight,
  }))
);

export const CornerDownRight: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCornerDownRight {...props} />
    </Suspense>
  );
};

const LazyCornerLeftDown = lazy(() =>
  import("./icons/arrow").then((module) => ({ default: module.CornerLeftDown }))
);

export const CornerLeftDown: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCornerLeftDown {...props} />
    </Suspense>
  );
};

const LazyCornerLeftUp = lazy(() =>
  import("./icons/arrow").then((module) => ({ default: module.CornerLeftUp }))
);

export const CornerLeftUp: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCornerLeftUp {...props} />
    </Suspense>
  );
};

const LazyCornerRightDown = lazy(() =>
  import("./icons/arrow").then((module) => ({
    default: module.CornerRightDown,
  }))
);

export const CornerRightDown: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCornerRightDown {...props} />
    </Suspense>
  );
};

const LazyCornerRightUp = lazy(() =>
  import("./icons/arrow").then((module) => ({ default: module.CornerRightUp }))
);

export const CornerRightUp: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCornerRightUp {...props} />
    </Suspense>
  );
};

const LazyCornerUpLeft = lazy(() =>
  import("./icons/arrow").then((module) => ({ default: module.CornerUpLeft }))
);

export const CornerUpLeft: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCornerUpLeft {...props} />
    </Suspense>
  );
};

const LazyCornerUpRight = lazy(() =>
  import("./icons/arrow").then((module) => ({ default: module.CornerUpRight }))
);

export const CornerUpRight: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCornerUpRight {...props} />
    </Suspense>
  );
};

const LazyExpand01 = lazy(() =>
  import("./icons/arrow").then((module) => ({ default: module.Expand01 }))
);

export const Expand01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyExpand01 {...props} />
    </Suspense>
  );
};

const LazyExpand02 = lazy(() =>
  import("./icons/arrow").then((module) => ({ default: module.Expand02 }))
);

export const Expand02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyExpand02 {...props} />
    </Suspense>
  );
};

const LazyExpand03 = lazy(() =>
  import("./icons/arrow").then((module) => ({ default: module.Expand03 }))
);

export const Expand03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyExpand03 {...props} />
    </Suspense>
  );
};

const LazyExpand04 = lazy(() =>
  import("./icons/arrow").then((module) => ({ default: module.Expand04 }))
);

export const Expand04: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyExpand04 {...props} />
    </Suspense>
  );
};

const LazyExpand05 = lazy(() =>
  import("./icons/arrow").then((module) => ({ default: module.Expand05 }))
);

export const Expand05: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyExpand05 {...props} />
    </Suspense>
  );
};

const LazyExpand06 = lazy(() =>
  import("./icons/arrow").then((module) => ({ default: module.Expand06 }))
);

export const Expand06: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyExpand06 {...props} />
    </Suspense>
  );
};

const LazyFlipBackward = lazy(() =>
  import("./icons/arrow").then((module) => ({ default: module.FlipBackward }))
);

export const FlipBackward: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFlipBackward {...props} />
    </Suspense>
  );
};

const LazyFlipForward = lazy(() =>
  import("./icons/arrow").then((module) => ({ default: module.FlipForward }))
);

export const FlipForward: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFlipForward {...props} />
    </Suspense>
  );
};

const LazyInfinity = lazy(() =>
  import("./icons/arrow").then((module) => ({ default: module.Infinity }))
);

export const Infinity: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyInfinity {...props} />
    </Suspense>
  );
};

const LazyRefreshCCW01 = lazy(() =>
  import("./icons/arrow").then((module) => ({ default: module.RefreshCCW01 }))
);

export const RefreshCCW01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyRefreshCCW01 {...props} />
    </Suspense>
  );
};

const LazyRefreshCCW02 = lazy(() =>
  import("./icons/arrow").then((module) => ({ default: module.RefreshCCW02 }))
);

export const RefreshCCW02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyRefreshCCW02 {...props} />
    </Suspense>
  );
};

const LazyRefreshCCW03 = lazy(() =>
  import("./icons/arrow").then((module) => ({ default: module.RefreshCCW03 }))
);

export const RefreshCCW03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyRefreshCCW03 {...props} />
    </Suspense>
  );
};

const LazyRefreshCCW04 = lazy(() =>
  import("./icons/arrow").then((module) => ({ default: module.RefreshCCW04 }))
);

export const RefreshCCW04: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyRefreshCCW04 {...props} />
    </Suspense>
  );
};

const LazyRefreshCW01 = lazy(() =>
  import("./icons/arrow").then((module) => ({ default: module.RefreshCW01 }))
);

export const RefreshCW01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyRefreshCW01 {...props} />
    </Suspense>
  );
};

const LazyRefreshCW02 = lazy(() =>
  import("./icons/arrow").then((module) => ({ default: module.RefreshCW02 }))
);

export const RefreshCW02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyRefreshCW02 {...props} />
    </Suspense>
  );
};

const LazyRefreshCW03 = lazy(() =>
  import("./icons/arrow").then((module) => ({ default: module.RefreshCW03 }))
);

export const RefreshCW03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyRefreshCW03 {...props} />
    </Suspense>
  );
};

const LazyRefreshCW04 = lazy(() =>
  import("./icons/arrow").then((module) => ({ default: module.RefreshCW04 }))
);

export const RefreshCW04: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyRefreshCW04 {...props} />
    </Suspense>
  );
};

const LazyRefreshCW05 = lazy(() =>
  import("./icons/arrow").then((module) => ({ default: module.RefreshCW05 }))
);

export const RefreshCW05: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyRefreshCW05 {...props} />
    </Suspense>
  );
};

const LazyRefreshLeft = lazy(() =>
  import("./icons/arrow").then((module) => ({ default: module.RefreshLeft }))
);

export const RefreshLeft: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyRefreshLeft {...props} />
    </Suspense>
  );
};

const LazyRefreshRight = lazy(() =>
  import("./icons/arrow").then((module) => ({ default: module.RefreshRight }))
);

export const RefreshRight: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyRefreshRight {...props} />
    </Suspense>
  );
};

const LazySwitchHorizontal01 = lazy(() =>
  import("./icons/arrow").then((module) => ({
    default: module.SwitchHorizontal01,
  }))
);

export const SwitchHorizontal01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazySwitchHorizontal01 {...props} />
    </Suspense>
  );
};

const LazySwitchHorizontal02 = lazy(() =>
  import("./icons/arrow").then((module) => ({
    default: module.SwitchHorizontal02,
  }))
);

export const SwitchHorizontal02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazySwitchHorizontal02 {...props} />
    </Suspense>
  );
};

const LazySwitchVertical01 = lazy(() =>
  import("./icons/arrow").then((module) => ({
    default: module.SwitchVertical01,
  }))
);

export const SwitchVertical01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazySwitchVertical01 {...props} />
    </Suspense>
  );
};

const LazySwitchVertical02 = lazy(() =>
  import("./icons/arrow").then((module) => ({
    default: module.SwitchVertical02,
  }))
);

export const SwitchVertical02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazySwitchVertical02 {...props} />
    </Suspense>
  );
};

const LazyBarChart01 = lazy(() =>
  import("./icons/charts").then((module) => ({ default: module.BarChart01 }))
);

export const BarChart01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBarChart01 {...props} />
    </Suspense>
  );
};

const LazyBarChart02 = lazy(() =>
  import("./icons/charts").then((module) => ({ default: module.BarChart02 }))
);

export const BarChart02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBarChart02 {...props} />
    </Suspense>
  );
};

const LazyBarChart03 = lazy(() =>
  import("./icons/charts").then((module) => ({ default: module.BarChart03 }))
);

export const BarChart03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBarChart03 {...props} />
    </Suspense>
  );
};

const LazyBarChart04 = lazy(() =>
  import("./icons/charts").then((module) => ({ default: module.BarChart04 }))
);

export const BarChart04: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBarChart04 {...props} />
    </Suspense>
  );
};

const LazyBarChart05 = lazy(() =>
  import("./icons/charts").then((module) => ({ default: module.BarChart05 }))
);

export const BarChart05: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBarChart05 {...props} />
    </Suspense>
  );
};

const LazyBarChart06 = lazy(() =>
  import("./icons/charts").then((module) => ({ default: module.BarChart06 }))
);

export const BarChart06: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBarChart06 {...props} />
    </Suspense>
  );
};

const LazyBarChart07 = lazy(() =>
  import("./icons/charts").then((module) => ({ default: module.BarChart07 }))
);

export const BarChart07: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBarChart07 {...props} />
    </Suspense>
  );
};

const LazyBarChart08 = lazy(() =>
  import("./icons/charts").then((module) => ({ default: module.BarChart08 }))
);

export const BarChart08: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBarChart08 {...props} />
    </Suspense>
  );
};

const LazyBarChart09 = lazy(() =>
  import("./icons/charts").then((module) => ({ default: module.BarChart09 }))
);

export const BarChart09: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBarChart09 {...props} />
    </Suspense>
  );
};

const LazyBarChart10 = lazy(() =>
  import("./icons/charts").then((module) => ({ default: module.BarChart10 }))
);

export const BarChart10: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBarChart10 {...props} />
    </Suspense>
  );
};

const LazyBarChart11 = lazy(() =>
  import("./icons/charts").then((module) => ({ default: module.BarChart11 }))
);

export const BarChart11: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBarChart11 {...props} />
    </Suspense>
  );
};

const LazyBarChart12 = lazy(() =>
  import("./icons/charts").then((module) => ({ default: module.BarChart12 }))
);

export const BarChart12: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBarChart12 {...props} />
    </Suspense>
  );
};

const LazyBarChartCircle01 = lazy(() =>
  import("./icons/charts").then((module) => ({
    default: module.BarChartCircle01,
  }))
);

export const BarChartCircle01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBarChartCircle01 {...props} />
    </Suspense>
  );
};

const LazyBarChartCircle02 = lazy(() =>
  import("./icons/charts").then((module) => ({
    default: module.BarChartCircle02,
  }))
);

export const BarChartCircle02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBarChartCircle02 {...props} />
    </Suspense>
  );
};

const LazyBarChartCircle03 = lazy(() =>
  import("./icons/charts").then((module) => ({
    default: module.BarChartCircle03,
  }))
);

export const BarChartCircle03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBarChartCircle03 {...props} />
    </Suspense>
  );
};

const LazyBarChartSquare01 = lazy(() =>
  import("./icons/charts").then((module) => ({
    default: module.BarChartSquare01,
  }))
);

export const BarChartSquare01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBarChartSquare01 {...props} />
    </Suspense>
  );
};

const LazyBarChartSquare02 = lazy(() =>
  import("./icons/charts").then((module) => ({
    default: module.BarChartSquare02,
  }))
);

export const BarChartSquare02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBarChartSquare02 {...props} />
    </Suspense>
  );
};

const LazyBarChartSquare03 = lazy(() =>
  import("./icons/charts").then((module) => ({
    default: module.BarChartSquare03,
  }))
);

export const BarChartSquare03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBarChartSquare03 {...props} />
    </Suspense>
  );
};

const LazyBarChartSquareDown = lazy(() =>
  import("./icons/charts").then((module) => ({
    default: module.BarChartSquareDown,
  }))
);

export const BarChartSquareDown: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBarChartSquareDown {...props} />
    </Suspense>
  );
};

const LazyBarChartSquareMinus = lazy(() =>
  import("./icons/charts").then((module) => ({
    default: module.BarChartSquareMinus,
  }))
);

export const BarChartSquareMinus: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBarChartSquareMinus {...props} />
    </Suspense>
  );
};

const LazyBarChartSquarePlus = lazy(() =>
  import("./icons/charts").then((module) => ({
    default: module.BarChartSquarePlus,
  }))
);

export const BarChartSquarePlus: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBarChartSquarePlus {...props} />
    </Suspense>
  );
};

const LazyBarChartSquareUp = lazy(() =>
  import("./icons/charts").then((module) => ({
    default: module.BarChartSquareUp,
  }))
);

export const BarChartSquareUp: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBarChartSquareUp {...props} />
    </Suspense>
  );
};

const LazyBarLineChart = lazy(() =>
  import("./icons/charts").then((module) => ({ default: module.BarLineChart }))
);

export const BarLineChart: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBarLineChart {...props} />
    </Suspense>
  );
};

const LazyChartBreakoutCircle = lazy(() =>
  import("./icons/charts").then((module) => ({
    default: module.ChartBreakoutCircle,
  }))
);

export const ChartBreakoutCircle: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyChartBreakoutCircle {...props} />
    </Suspense>
  );
};

const LazyChartBreakoutSquare = lazy(() =>
  import("./icons/charts").then((module) => ({
    default: module.ChartBreakoutSquare,
  }))
);

export const ChartBreakoutSquare: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyChartBreakoutSquare {...props} />
    </Suspense>
  );
};

const LazyHorizontalBarChart01 = lazy(() =>
  import("./icons/charts").then((module) => ({
    default: module.HorizontalBarChart01,
  }))
);

export const HorizontalBarChart01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyHorizontalBarChart01 {...props} />
    </Suspense>
  );
};

const LazyHorizontalBarChart02 = lazy(() =>
  import("./icons/charts").then((module) => ({
    default: module.HorizontalBarChart02,
  }))
);

export const HorizontalBarChart02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyHorizontalBarChart02 {...props} />
    </Suspense>
  );
};

const LazyHorizontalBarChart03 = lazy(() =>
  import("./icons/charts").then((module) => ({
    default: module.HorizontalBarChart03,
  }))
);

export const HorizontalBarChart03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyHorizontalBarChart03 {...props} />
    </Suspense>
  );
};

const LazyLineChartDown01 = lazy(() =>
  import("./icons/charts").then((module) => ({
    default: module.LineChartDown01,
  }))
);

export const LineChartDown01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLineChartDown01 {...props} />
    </Suspense>
  );
};

const LazyLineChartDown02 = lazy(() =>
  import("./icons/charts").then((module) => ({
    default: module.LineChartDown02,
  }))
);

export const LineChartDown02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLineChartDown02 {...props} />
    </Suspense>
  );
};

const LazyLineChartDown03 = lazy(() =>
  import("./icons/charts").then((module) => ({
    default: module.LineChartDown03,
  }))
);

export const LineChartDown03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLineChartDown03 {...props} />
    </Suspense>
  );
};

const LazyLineChartDown04 = lazy(() =>
  import("./icons/charts").then((module) => ({
    default: module.LineChartDown04,
  }))
);

export const LineChartDown04: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLineChartDown04 {...props} />
    </Suspense>
  );
};

const LazyLineChartDown05 = lazy(() =>
  import("./icons/charts").then((module) => ({
    default: module.LineChartDown05,
  }))
);

export const LineChartDown05: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLineChartDown05 {...props} />
    </Suspense>
  );
};

const LazyLineChartUp01 = lazy(() =>
  import("./icons/charts").then((module) => ({ default: module.LineChartUp01 }))
);

export const LineChartUp01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLineChartUp01 {...props} />
    </Suspense>
  );
};

const LazyLineChartUp02 = lazy(() =>
  import("./icons/charts").then((module) => ({ default: module.LineChartUp02 }))
);

export const LineChartUp02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLineChartUp02 {...props} />
    </Suspense>
  );
};

const LazyLineChartUp03 = lazy(() =>
  import("./icons/charts").then((module) => ({ default: module.LineChartUp03 }))
);

export const LineChartUp03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLineChartUp03 {...props} />
    </Suspense>
  );
};

const LazyLineChartUp04 = lazy(() =>
  import("./icons/charts").then((module) => ({ default: module.LineChartUp04 }))
);

export const LineChartUp04: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLineChartUp04 {...props} />
    </Suspense>
  );
};

const LazyLineChartUp05 = lazy(() =>
  import("./icons/charts").then((module) => ({ default: module.LineChartUp05 }))
);

export const LineChartUp05: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLineChartUp05 {...props} />
    </Suspense>
  );
};

const LazyPieChart01 = lazy(() =>
  import("./icons/charts").then((module) => ({ default: module.PieChart01 }))
);

export const PieChart01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPieChart01 {...props} />
    </Suspense>
  );
};

const LazyPieChart02 = lazy(() =>
  import("./icons/charts").then((module) => ({ default: module.PieChart02 }))
);

export const PieChart02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPieChart02 {...props} />
    </Suspense>
  );
};

const LazyPieChart03 = lazy(() =>
  import("./icons/charts").then((module) => ({ default: module.PieChart03 }))
);

export const PieChart03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPieChart03 {...props} />
    </Suspense>
  );
};

const LazyPieChart04 = lazy(() =>
  import("./icons/charts").then((module) => ({ default: module.PieChart04 }))
);

export const PieChart04: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPieChart04 {...props} />
    </Suspense>
  );
};

const LazyPresentationChart01 = lazy(() =>
  import("./icons/charts").then((module) => ({
    default: module.PresentationChart01,
  }))
);

export const PresentationChart01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPresentationChart01 {...props} />
    </Suspense>
  );
};

const LazyPresentationChart02 = lazy(() =>
  import("./icons/charts").then((module) => ({
    default: module.PresentationChart02,
  }))
);

export const PresentationChart02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPresentationChart02 {...props} />
    </Suspense>
  );
};

const LazyPresentationChart03 = lazy(() =>
  import("./icons/charts").then((module) => ({
    default: module.PresentationChart03,
  }))
);

export const PresentationChart03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPresentationChart03 {...props} />
    </Suspense>
  );
};

const LazyTrendDown01 = lazy(() =>
  import("./icons/charts").then((module) => ({ default: module.TrendDown01 }))
);

export const TrendDown01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyTrendDown01 {...props} />
    </Suspense>
  );
};

const LazyTrendDown02 = lazy(() =>
  import("./icons/charts").then((module) => ({ default: module.TrendDown02 }))
);

export const TrendDown02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyTrendDown02 {...props} />
    </Suspense>
  );
};

const LazyTrendUp01 = lazy(() =>
  import("./icons/charts").then((module) => ({ default: module.TrendUp01 }))
);

export const TrendUp01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyTrendUp01 {...props} />
    </Suspense>
  );
};

const LazyTrendUp02 = lazy(() =>
  import("./icons/charts").then((module) => ({ default: module.TrendUp02 }))
);

export const TrendUp02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyTrendUp02 {...props} />
    </Suspense>
  );
};

const LazyAnnotationAlert = lazy(() =>
  import("./icons/communication").then((module) => ({
    default: module.AnnotationAlert,
  }))
);

export const AnnotationAlert: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyAnnotationAlert {...props} />
    </Suspense>
  );
};

const LazyAnnotationCheck = lazy(() =>
  import("./icons/communication").then((module) => ({
    default: module.AnnotationCheck,
  }))
);

export const AnnotationCheck: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyAnnotationCheck {...props} />
    </Suspense>
  );
};

const LazyAnnotationDots = lazy(() =>
  import("./icons/communication").then((module) => ({
    default: module.AnnotationDots,
  }))
);

export const AnnotationDots: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyAnnotationDots {...props} />
    </Suspense>
  );
};

const LazyAnnotationHeart = lazy(() =>
  import("./icons/communication").then((module) => ({
    default: module.AnnotationHeart,
  }))
);

export const AnnotationHeart: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyAnnotationHeart {...props} />
    </Suspense>
  );
};

const LazyAnnotationInfo = lazy(() =>
  import("./icons/communication").then((module) => ({
    default: module.AnnotationInfo,
  }))
);

export const AnnotationInfo: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyAnnotationInfo {...props} />
    </Suspense>
  );
};

const LazyAnnotationPlus = lazy(() =>
  import("./icons/communication").then((module) => ({
    default: module.AnnotationPlus,
  }))
);

export const AnnotationPlus: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyAnnotationPlus {...props} />
    </Suspense>
  );
};

const LazyAnnotationQuestion = lazy(() =>
  import("./icons/communication").then((module) => ({
    default: module.AnnotationQuestion,
  }))
);

export const AnnotationQuestion: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyAnnotationQuestion {...props} />
    </Suspense>
  );
};

const LazyAnnotationX = lazy(() =>
  import("./icons/communication").then((module) => ({
    default: module.AnnotationX,
  }))
);

export const AnnotationX: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyAnnotationX {...props} />
    </Suspense>
  );
};

const LazyAnnotation = lazy(() =>
  import("./icons/communication").then((module) => ({
    default: module.Annotation,
  }))
);

export const Annotation: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyAnnotation {...props} />
    </Suspense>
  );
};

const LazyInbox01 = lazy(() =>
  import("./icons/communication").then((module) => ({
    default: module.Inbox01,
  }))
);

export const Inbox01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyInbox01 {...props} />
    </Suspense>
  );
};

const LazyInbox02 = lazy(() =>
  import("./icons/communication").then((module) => ({
    default: module.Inbox02,
  }))
);

export const Inbox02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyInbox02 {...props} />
    </Suspense>
  );
};

const LazyMail01 = lazy(() =>
  import("./icons/communication").then((module) => ({ default: module.Mail01 }))
);

export const Mail01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMail01 {...props} />
    </Suspense>
  );
};

const LazyMail02 = lazy(() =>
  import("./icons/communication").then((module) => ({ default: module.Mail02 }))
);

export const Mail02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMail02 {...props} />
    </Suspense>
  );
};

const LazyMail03 = lazy(() =>
  import("./icons/communication").then((module) => ({ default: module.Mail03 }))
);

export const Mail03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMail03 {...props} />
    </Suspense>
  );
};

const LazyMail04 = lazy(() =>
  import("./icons/communication").then((module) => ({ default: module.Mail04 }))
);

export const Mail04: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMail04 {...props} />
    </Suspense>
  );
};

const LazyMail05 = lazy(() =>
  import("./icons/communication").then((module) => ({ default: module.Mail05 }))
);

export const Mail05: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMail05 {...props} />
    </Suspense>
  );
};

const LazyMessageAlertCircle = lazy(() =>
  import("./icons/communication").then((module) => ({
    default: module.MessageAlertCircle,
  }))
);

export const MessageAlertCircle: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMessageAlertCircle {...props} />
    </Suspense>
  );
};

const LazyMessageChatCircle = lazy(() =>
  import("./icons/communication").then((module) => ({
    default: module.MessageChatCircle,
  }))
);

export const MessageChatCircle: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMessageChatCircle {...props} />
    </Suspense>
  );
};

const LazyMessageChatSquare = lazy(() =>
  import("./icons/communication").then((module) => ({
    default: module.MessageChatSquare,
  }))
);

export const MessageChatSquare: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMessageChatSquare {...props} />
    </Suspense>
  );
};

const LazyMessageCheckCircle = lazy(() =>
  import("./icons/communication").then((module) => ({
    default: module.MessageCheckCircle,
  }))
);

export const MessageCheckCircle: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMessageCheckCircle {...props} />
    </Suspense>
  );
};

const LazyMessageCheckSquare = lazy(() =>
  import("./icons/communication").then((module) => ({
    default: module.MessageCheckSquare,
  }))
);

export const MessageCheckSquare: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMessageCheckSquare {...props} />
    </Suspense>
  );
};

const LazyMessageCircle01 = lazy(() =>
  import("./icons/communication").then((module) => ({
    default: module.MessageCircle01,
  }))
);

export const MessageCircle01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMessageCircle01 {...props} />
    </Suspense>
  );
};

const LazyMessageCircle02 = lazy(() =>
  import("./icons/communication").then((module) => ({
    default: module.MessageCircle02,
  }))
);

export const MessageCircle02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMessageCircle02 {...props} />
    </Suspense>
  );
};

const LazyMessageDotsCircle = lazy(() =>
  import("./icons/communication").then((module) => ({
    default: module.MessageDotsCircle,
  }))
);

export const MessageDotsCircle: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMessageDotsCircle {...props} />
    </Suspense>
  );
};

const LazyMessageDotsSquare = lazy(() =>
  import("./icons/communication").then((module) => ({
    default: module.MessageDotsSquare,
  }))
);

export const MessageDotsSquare: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMessageDotsSquare {...props} />
    </Suspense>
  );
};

const LazyMessageHeartCircle = lazy(() =>
  import("./icons/communication").then((module) => ({
    default: module.MessageHeartCircle,
  }))
);

export const MessageHeartCircle: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMessageHeartCircle {...props} />
    </Suspense>
  );
};

const LazyMessageHeartSquare = lazy(() =>
  import("./icons/communication").then((module) => ({
    default: module.MessageHeartSquare,
  }))
);

export const MessageHeartSquare: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMessageHeartSquare {...props} />
    </Suspense>
  );
};

const LazyMessageNotificationCircle = lazy(() =>
  import("./icons/communication").then((module) => ({
    default: module.MessageNotificationCircle,
  }))
);

export const MessageNotificationCircle: FC<SVGComponentProps> = ({
  ...props
}) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMessageNotificationCircle {...props} />
    </Suspense>
  );
};

const LazyMessageNotificationSquare02 = lazy(() =>
  import("./icons/communication").then((module) => ({
    default: module.MessageNotificationSquare02,
  }))
);

export const MessageNotificationSquare02: FC<SVGComponentProps> = ({
  ...props
}) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMessageNotificationSquare02 {...props} />
    </Suspense>
  );
};

const LazyMessagePlusCircle = lazy(() =>
  import("./icons/communication").then((module) => ({
    default: module.MessagePlusCircle,
  }))
);

export const MessagePlusCircle: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMessagePlusCircle {...props} />
    </Suspense>
  );
};

const LazyMessagePlusSquare = lazy(() =>
  import("./icons/communication").then((module) => ({
    default: module.MessagePlusSquare,
  }))
);

export const MessagePlusSquare: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMessagePlusSquare {...props} />
    </Suspense>
  );
};

const LazyMessageQuestionCircle = lazy(() =>
  import("./icons/communication").then((module) => ({
    default: module.MessageQuestionCircle,
  }))
);

export const MessageQuestionCircle: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMessageQuestionCircle {...props} />
    </Suspense>
  );
};

const LazyMessageAlertSquare = lazy(() =>
  import("./icons/communication").then((module) => ({
    default: module.MessageAlertSquare,
  }))
);

export const MessageAlertSquare: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMessageAlertSquare {...props} />
    </Suspense>
  );
};

const LazyMessageQuestionSquare = lazy(() =>
  import("./icons/communication").then((module) => ({
    default: module.MessageQuestionSquare,
  }))
);

export const MessageQuestionSquare: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMessageQuestionSquare {...props} />
    </Suspense>
  );
};

const LazyMessageSmileCircle = lazy(() =>
  import("./icons/communication").then((module) => ({
    default: module.MessageSmileCircle,
  }))
);

export const MessageSmileCircle: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMessageSmileCircle {...props} />
    </Suspense>
  );
};

const LazyMessageSmileSquare = lazy(() =>
  import("./icons/communication").then((module) => ({
    default: module.MessageSmileSquare,
  }))
);

export const MessageSmileSquare: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMessageSmileSquare {...props} />
    </Suspense>
  );
};

const LazyMessageSquare01 = lazy(() =>
  import("./icons/communication").then((module) => ({
    default: module.MessageSquare01,
  }))
);

export const MessageSquare01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMessageSquare01 {...props} />
    </Suspense>
  );
};

const LazyMessageSquare02 = lazy(() =>
  import("./icons/communication").then((module) => ({
    default: module.MessageSquare02,
  }))
);

export const MessageSquare02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMessageSquare02 {...props} />
    </Suspense>
  );
};

const LazyMessageTextCircle01 = lazy(() =>
  import("./icons/communication").then((module) => ({
    default: module.MessageTextCircle01,
  }))
);

export const MessageTextCircle01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMessageTextCircle01 {...props} />
    </Suspense>
  );
};

const LazyMessageTextCircle02 = lazy(() =>
  import("./icons/communication").then((module) => ({
    default: module.MessageTextCircle02,
  }))
);

export const MessageTextCircle02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMessageTextCircle02 {...props} />
    </Suspense>
  );
};

const LazyMessageTextSquare01 = lazy(() =>
  import("./icons/communication").then((module) => ({
    default: module.MessageTextSquare01,
  }))
);

export const MessageTextSquare01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMessageTextSquare01 {...props} />
    </Suspense>
  );
};

const LazyMessageXCircle = lazy(() =>
  import("./icons/communication").then((module) => ({
    default: module.MessageXCircle,
  }))
);

export const MessageXCircle: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMessageXCircle {...props} />
    </Suspense>
  );
};

const LazyMessageXSquare = lazy(() =>
  import("./icons/communication").then((module) => ({
    default: module.MessageXSquare,
  }))
);

export const MessageXSquare: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMessageXSquare {...props} />
    </Suspense>
  );
};

const LazyPhoneCall01 = lazy(() =>
  import("./icons/communication").then((module) => ({
    default: module.PhoneCall01,
  }))
);

export const PhoneCall01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPhoneCall01 {...props} />
    </Suspense>
  );
};

const LazyPhoneCall02 = lazy(() =>
  import("./icons/communication").then((module) => ({
    default: module.PhoneCall02,
  }))
);

export const PhoneCall02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPhoneCall02 {...props} />
    </Suspense>
  );
};

const LazyPhoneHangUp = lazy(() =>
  import("./icons/communication").then((module) => ({
    default: module.PhoneHangUp,
  }))
);

export const PhoneHangUp: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPhoneHangUp {...props} />
    </Suspense>
  );
};

const LazyPhoneIncoming01 = lazy(() =>
  import("./icons/communication").then((module) => ({
    default: module.PhoneIncoming01,
  }))
);

export const PhoneIncoming01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPhoneIncoming01 {...props} />
    </Suspense>
  );
};

const LazyPhoneIncoming02 = lazy(() =>
  import("./icons/communication").then((module) => ({
    default: module.PhoneIncoming02,
  }))
);

export const PhoneIncoming02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPhoneIncoming02 {...props} />
    </Suspense>
  );
};

const LazyPhoneOutgoing01 = lazy(() =>
  import("./icons/communication").then((module) => ({
    default: module.PhoneOutgoing01,
  }))
);

export const PhoneOutgoing01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPhoneOutgoing01 {...props} />
    </Suspense>
  );
};

const LazyPhoneOutgoing02 = lazy(() =>
  import("./icons/communication").then((module) => ({
    default: module.PhoneOutgoing02,
  }))
);

export const PhoneOutgoing02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPhoneOutgoing02 {...props} />
    </Suspense>
  );
};

const LazyPhonePause = lazy(() =>
  import("./icons/communication").then((module) => ({
    default: module.PhonePause,
  }))
);

export const PhonePause: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPhonePause {...props} />
    </Suspense>
  );
};

const LazyPhoneX = lazy(() =>
  import("./icons/communication").then((module) => ({ default: module.PhoneX }))
);

export const PhoneX: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPhoneX {...props} />
    </Suspense>
  );
};

const LazyPhone = lazy(() =>
  import("./icons/communication").then((module) => ({ default: module.Phone }))
);

export const Phone: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPhone {...props} />
    </Suspense>
  );
};

const LazySend01 = lazy(() =>
  import("./icons/communication").then((module) => ({ default: module.Send01 }))
);

export const Send01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazySend01 {...props} />
    </Suspense>
  );
};

const LazySend02 = lazy(() =>
  import("./icons/communication").then((module) => ({ default: module.Send02 }))
);

export const Send02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazySend02 {...props} />
    </Suspense>
  );
};

const LazySend03 = lazy(() =>
  import("./icons/communication").then((module) => ({ default: module.Send03 }))
);

export const Send03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazySend03 {...props} />
    </Suspense>
  );
};

const LazyBracketsCheck = lazy(() =>
  import("./icons/development").then((module) => ({
    default: module.BracketsCheck,
  }))
);

export const BracketsCheck: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBracketsCheck {...props} />
    </Suspense>
  );
};

const LazyBracketsEllipse = lazy(() =>
  import("./icons/development").then((module) => ({
    default: module.BracketsEllipse,
  }))
);

export const BracketsEllipse: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBracketsEllipse {...props} />
    </Suspense>
  );
};

const LazyBracketsMinus = lazy(() =>
  import("./icons/development").then((module) => ({
    default: module.BracketsMinus,
  }))
);

export const BracketsMinus: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBracketsMinus {...props} />
    </Suspense>
  );
};

const LazyBracketsPlus = lazy(() =>
  import("./icons/development").then((module) => ({
    default: module.BracketsPlus,
  }))
);

export const BracketsPlus: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBracketsPlus {...props} />
    </Suspense>
  );
};

const LazyBracketsSlash = lazy(() =>
  import("./icons/development").then((module) => ({
    default: module.BracketsSlash,
  }))
);

export const BracketsSlash: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBracketsSlash {...props} />
    </Suspense>
  );
};

const LazyBracketsX = lazy(() =>
  import("./icons/development").then((module) => ({
    default: module.BracketsX,
  }))
);

export const BracketsX: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBracketsX {...props} />
    </Suspense>
  );
};

const LazyBrackets = lazy(() =>
  import("./icons/development").then((module) => ({ default: module.Brackets }))
);

export const Brackets: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBrackets {...props} />
    </Suspense>
  );
};

const LazyBrowser = lazy(() =>
  import("./icons/development").then((module) => ({ default: module.Browser }))
);

export const Browser: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBrowser {...props} />
    </Suspense>
  );
};

const LazyCode01 = lazy(() =>
  import("./icons/development").then((module) => ({ default: module.Code01 }))
);

export const Code01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCode01 {...props} />
    </Suspense>
  );
};

const LazyCode02 = lazy(() =>
  import("./icons/development").then((module) => ({ default: module.Code02 }))
);

export const Code02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCode02 {...props} />
    </Suspense>
  );
};

const LazyCodeBrowser = lazy(() =>
  import("./icons/development").then((module) => ({
    default: module.CodeBrowser,
  }))
);

export const CodeBrowser: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCodeBrowser {...props} />
    </Suspense>
  );
};

const LazyCodeCircle01 = lazy(() =>
  import("./icons/development").then((module) => ({
    default: module.CodeCircle01,
  }))
);

export const CodeCircle01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCodeCircle01 {...props} />
    </Suspense>
  );
};

const LazyCodeCircle02 = lazy(() =>
  import("./icons/development").then((module) => ({
    default: module.CodeCircle02,
  }))
);

export const CodeCircle02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCodeCircle02 {...props} />
    </Suspense>
  );
};

const LazyCodeCircle03 = lazy(() =>
  import("./icons/development").then((module) => ({
    default: module.CodeCircle03,
  }))
);

export const CodeCircle03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCodeCircle03 {...props} />
    </Suspense>
  );
};

const LazyCodeSquare01 = lazy(() =>
  import("./icons/development").then((module) => ({
    default: module.CodeSquare01,
  }))
);

export const CodeSquare01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCodeSquare01 {...props} />
    </Suspense>
  );
};

const LazyCodeSquare02 = lazy(() =>
  import("./icons/development").then((module) => ({
    default: module.CodeSquare02,
  }))
);

export const CodeSquare02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCodeSquare02 {...props} />
    </Suspense>
  );
};

const LazyCodePen = lazy(() =>
  import("./icons/development").then((module) => ({ default: module.CodePen }))
);

export const CodePen: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCodePen {...props} />
    </Suspense>
  );
};

const LazyContainer = lazy(() =>
  import("./icons/development").then((module) => ({
    default: module.Container,
  }))
);

export const Container: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyContainer {...props} />
    </Suspense>
  );
};

const LazyCPUChip01 = lazy(() =>
  import("./icons/development").then((module) => ({
    default: module.CPUChip01,
  }))
);

export const CPUChip01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCPUChip01 {...props} />
    </Suspense>
  );
};

const LazyCPUChip02 = lazy(() =>
  import("./icons/development").then((module) => ({
    default: module.CPUChip02,
  }))
);

export const CPUChip02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCPUChip02 {...props} />
    </Suspense>
  );
};

const LazyData = lazy(() =>
  import("./icons/development").then((module) => ({ default: module.Data }))
);

export const Data: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyData {...props} />
    </Suspense>
  );
};

const LazyDatabase01 = lazy(() =>
  import("./icons/development").then((module) => ({
    default: module.Database01,
  }))
);

export const Database01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyDatabase01 {...props} />
    </Suspense>
  );
};

const LazyDatabase02 = lazy(() =>
  import("./icons/development").then((module) => ({
    default: module.Database02,
  }))
);

export const Database02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyDatabase02 {...props} />
    </Suspense>
  );
};

const LazyDatabase03 = lazy(() =>
  import("./icons/development").then((module) => ({
    default: module.Database03,
  }))
);

export const Database03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyDatabase03 {...props} />
    </Suspense>
  );
};

const LazyDataflow01 = lazy(() =>
  import("./icons/development").then((module) => ({
    default: module.Dataflow01,
  }))
);

export const Dataflow01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyDataflow01 {...props} />
    </Suspense>
  );
};

const LazyDataflow02 = lazy(() =>
  import("./icons/development").then((module) => ({
    default: module.Dataflow02,
  }))
);

export const Dataflow02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyDataflow02 {...props} />
    </Suspense>
  );
};

const LazyDataflow03 = lazy(() =>
  import("./icons/development").then((module) => ({
    default: module.Dataflow03,
  }))
);

export const Dataflow03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyDataflow03 {...props} />
    </Suspense>
  );
};

const LazyDataflow04 = lazy(() =>
  import("./icons/development").then((module) => ({
    default: module.Dataflow04,
  }))
);

export const Dataflow04: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyDataflow04 {...props} />
    </Suspense>
  );
};

const LazyFileCode01 = lazy(() =>
  import("./icons/development").then((module) => ({
    default: module.FileCode01,
  }))
);

export const FileCode01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFileCode01 {...props} />
    </Suspense>
  );
};

const LazyFileCode02 = lazy(() =>
  import("./icons/development").then((module) => ({
    default: module.FileCode02,
  }))
);

export const FileCode02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFileCode02 {...props} />
    </Suspense>
  );
};

const LazyFileCode = lazy(() =>
  import("./icons/development").then((module) => ({ default: module.FileCode }))
);

export const FileCode: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFileCode {...props} />
    </Suspense>
  );
};

const LazyGitBranch01 = lazy(() =>
  import("./icons/development").then((module) => ({
    default: module.GitBranch01,
  }))
);

export const GitBranch01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyGitBranch01 {...props} />
    </Suspense>
  );
};

const LazyGitBranch02 = lazy(() =>
  import("./icons/development").then((module) => ({
    default: module.GitBranch02,
  }))
);

export const GitBranch02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyGitBranch02 {...props} />
    </Suspense>
  );
};

const LazyGitCommit = lazy(() =>
  import("./icons/development").then((module) => ({
    default: module.GitCommit,
  }))
);

export const GitCommit: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyGitCommit {...props} />
    </Suspense>
  );
};

const LazyGitMerge = lazy(() =>
  import("./icons/development").then((module) => ({ default: module.GitMerge }))
);

export const GitMerge: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyGitMerge {...props} />
    </Suspense>
  );
};

const LazyPackageCheck = lazy(() =>
  import("./icons/development").then((module) => ({
    default: module.PackageCheck,
  }))
);

export const PackageCheck: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPackageCheck {...props} />
    </Suspense>
  );
};

const LazyPackageMinus = lazy(() =>
  import("./icons/development").then((module) => ({
    default: module.PackageMinus,
  }))
);

export const PackageMinus: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPackageMinus {...props} />
    </Suspense>
  );
};

const LazyPackagePlus = lazy(() =>
  import("./icons/development").then((module) => ({
    default: module.PackagePlus,
  }))
);

export const PackagePlus: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPackagePlus {...props} />
    </Suspense>
  );
};

const LazyPackageSearch = lazy(() =>
  import("./icons/development").then((module) => ({
    default: module.PackageSearch,
  }))
);

export const PackageSearch: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPackageSearch {...props} />
    </Suspense>
  );
};

const LazyPackageX = lazy(() =>
  import("./icons/development").then((module) => ({ default: module.PackageX }))
);

export const PackageX: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPackageX {...props} />
    </Suspense>
  );
};

const LazyPackage = lazy(() =>
  import("./icons/development").then((module) => ({ default: module.Package }))
);

export const Package: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPackage {...props} />
    </Suspense>
  );
};

const LazyPuzzlePiece02 = lazy(() =>
  import("./icons/development").then((module) => ({
    default: module.PuzzlePiece02,
  }))
);

export const PuzzlePiece02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPuzzlePiece02 {...props} />
    </Suspense>
  );
};

const LazyPuzzlePiece = lazy(() =>
  import("./icons/development").then((module) => ({
    default: module.PuzzlePiece,
  }))
);

export const PuzzlePiece: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPuzzlePiece {...props} />
    </Suspense>
  );
};

const LazyQRCode01 = lazy(() =>
  import("./icons/development").then((module) => ({ default: module.QRCode01 }))
);

export const QRCode01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyQRCode01 {...props} />
    </Suspense>
  );
};

const LazyQRCode02 = lazy(() =>
  import("./icons/development").then((module) => ({ default: module.QRCode02 }))
);

export const QRCode02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyQRCode02 {...props} />
    </Suspense>
  );
};

const LazyServer01 = lazy(() =>
  import("./icons/development").then((module) => ({ default: module.Server01 }))
);

export const Server01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyServer01 {...props} />
    </Suspense>
  );
};

const LazyServer02 = lazy(() =>
  import("./icons/development").then((module) => ({ default: module.Server02 }))
);

export const Server02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyServer02 {...props} />
    </Suspense>
  );
};

const LazyServer03 = lazy(() =>
  import("./icons/development").then((module) => ({ default: module.Server03 }))
);

export const Server03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyServer03 {...props} />
    </Suspense>
  );
};

const LazyServer04 = lazy(() =>
  import("./icons/development").then((module) => ({ default: module.Server04 }))
);

export const Server04: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyServer04 {...props} />
    </Suspense>
  );
};

const LazyServer05 = lazy(() =>
  import("./icons/development").then((module) => ({ default: module.Server05 }))
);

export const Server05: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyServer05 {...props} />
    </Suspense>
  );
};

const LazyServer06 = lazy(() =>
  import("./icons/development").then((module) => ({ default: module.Server06 }))
);

export const Server06: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyServer06 {...props} />
    </Suspense>
  );
};

const LazyTerminalBrowser = lazy(() =>
  import("./icons/development").then((module) => ({
    default: module.TerminalBrowser,
  }))
);

export const TerminalBrowser: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyTerminalBrowser {...props} />
    </Suspense>
  );
};

const LazyTerminalCircle = lazy(() =>
  import("./icons/development").then((module) => ({
    default: module.TerminalCircle,
  }))
);

export const TerminalCircle: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyTerminalCircle {...props} />
    </Suspense>
  );
};

const LazyTerminalSquare = lazy(() =>
  import("./icons/development").then((module) => ({
    default: module.TerminalSquare,
  }))
);

export const TerminalSquare: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyTerminalSquare {...props} />
    </Suspense>
  );
};

const LazyTerminal = lazy(() =>
  import("./icons/development").then((module) => ({ default: module.Terminal }))
);

export const Terminal: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyTerminal {...props} />
    </Suspense>
  );
};

const LazyVariable = lazy(() =>
  import("./icons/development").then((module) => ({ default: module.Variable }))
);

export const Variable: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyVariable {...props} />
    </Suspense>
  );
};

const LazyAlignCenter = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.AlignCenter }))
);

export const AlignCenter: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyAlignCenter {...props} />
    </Suspense>
  );
};

const LazyAlignJustify = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.AlignJustify }))
);

export const AlignJustify: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyAlignJustify {...props} />
    </Suspense>
  );
};

const LazyAlignLeft = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.AlignLeft }))
);

export const AlignLeft: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyAlignLeft {...props} />
    </Suspense>
  );
};

const LazyAlignRight = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.AlignRight }))
);

export const AlignRight: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyAlignRight {...props} />
    </Suspense>
  );
};

const LazyAttachment01 = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.Attachment01 }))
);

export const Attachment01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyAttachment01 {...props} />
    </Suspense>
  );
};

const LazyAttachment02 = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.Attachment02 }))
);

export const Attachment02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyAttachment02 {...props} />
    </Suspense>
  );
};

const LazyBezierCurve01 = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.BezierCurve01 }))
);

export const BezierCurve01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBezierCurve01 {...props} />
    </Suspense>
  );
};

const LazyBezierCurve02 = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.BezierCurve02 }))
);

export const BezierCurve02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBezierCurve02 {...props} />
    </Suspense>
  );
};

const LazyBezierCurve03 = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.BezierCurve03 }))
);

export const BezierCurve03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBezierCurve03 {...props} />
    </Suspense>
  );
};

const LazyBold01 = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.Bold01 }))
);

export const Bold01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBold01 {...props} />
    </Suspense>
  );
};

const LazyBold02 = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.Bold02 }))
);

export const Bold02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBold02 {...props} />
    </Suspense>
  );
};

const LazyBoldSquare = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.BoldSquare }))
);

export const BoldSquare: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBoldSquare {...props} />
    </Suspense>
  );
};

const LazyBrush01 = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.Brush01 }))
);

export const Brush01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBrush01 {...props} />
    </Suspense>
  );
};

const LazyBrush02 = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.Brush02 }))
);

export const Brush02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBrush02 {...props} />
    </Suspense>
  );
};

const LazyBrush03 = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.Brush03 }))
);

export const Brush03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBrush03 {...props} />
    </Suspense>
  );
};

const LazyCircleCut = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.CircleCut }))
);

export const CircleCut: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCircleCut {...props} />
    </Suspense>
  );
};

const LazyCodeSnippet01 = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.CodeSnippet01 }))
);

export const CodeSnippet01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCodeSnippet01 {...props} />
    </Suspense>
  );
};

const LazyCodeSnippet02 = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.CodeSnippet02 }))
);

export const CodeSnippet02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCodeSnippet02 {...props} />
    </Suspense>
  );
};

const LazyColors = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.Colors }))
);

export const Colors: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyColors {...props} />
    </Suspense>
  );
};

const LazyCommand = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.Command }))
);

export const Command: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCommand {...props} />
    </Suspense>
  );
};

const LazyContrast01 = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.Contrast01 }))
);

export const Contrast01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyContrast01 {...props} />
    </Suspense>
  );
};

const LazyContrast02 = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.Contrast02 }))
);

export const Contrast02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyContrast02 {...props} />
    </Suspense>
  );
};

const LazyContrast03 = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.Contrast03 }))
);

export const Contrast03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyContrast03 {...props} />
    </Suspense>
  );
};

const LazyCrop01 = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.Crop01 }))
);

export const Crop01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCrop01 {...props} />
    </Suspense>
  );
};

const LazyCrop02 = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.Crop02 }))
);

export const Crop02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCrop02 {...props} />
    </Suspense>
  );
};

const LazyCursor01 = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.Cursor01 }))
);

export const Cursor01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCursor01 {...props} />
    </Suspense>
  );
};

const LazyCursor02 = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.Cursor02 }))
);

export const Cursor02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCursor02 {...props} />
    </Suspense>
  );
};

const LazyCursor03 = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.Cursor03 }))
);

export const Cursor03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCursor03 {...props} />
    </Suspense>
  );
};

const LazyCursor04 = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.Cursor04 }))
);

export const Cursor04: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCursor04 {...props} />
    </Suspense>
  );
};

const LazyCursorBox = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.CursorBox }))
);

export const CursorBox: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCursorBox {...props} />
    </Suspense>
  );
};

const LazyCursorClick01 = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.CursorClick01 }))
);

export const CursorClick01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCursorClick01 {...props} />
    </Suspense>
  );
};

const LazyCursorClick02 = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.CursorClick02 }))
);

export const CursorClick02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCursorClick02 {...props} />
    </Suspense>
  );
};

const LazyDelete = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.Delete }))
);

export const Delete: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyDelete {...props} />
    </Suspense>
  );
};

const LazyDotPoints01 = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.DotPoints01 }))
);

export const DotPoints01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyDotPoints01 {...props} />
    </Suspense>
  );
};

const LazyDotPoints02 = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.DotPoints02 }))
);

export const DotPoints02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyDotPoints02 {...props} />
    </Suspense>
  );
};

const LazyDrop = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.Drop }))
);

export const Drop: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyDrop {...props} />
    </Suspense>
  );
};

const LazyDropper = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.Dropper }))
);

export const Dropper: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyDropper {...props} />
    </Suspense>
  );
};

const LazyEraser = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.Eraser }))
);

export const Eraser: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyEraser {...props} />
    </Suspense>
  );
};

const LazyFeather = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.Feather }))
);

export const Feather: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFeather {...props} />
    </Suspense>
  );
};

const LazyFigma = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.Figma }))
);

export const Figma: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFigma {...props} />
    </Suspense>
  );
};

const LazyFramer = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.Framer }))
);

export const Framer: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFramer {...props} />
    </Suspense>
  );
};

const LazyHand = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.Hand }))
);

export const Hand: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyHand {...props} />
    </Suspense>
  );
};

const LazyHeading01 = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.Heading01 }))
);

export const Heading01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyHeading01 {...props} />
    </Suspense>
  );
};

const LazyHeading02 = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.Heading02 }))
);

export const Heading02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyHeading02 {...props} />
    </Suspense>
  );
};

const LazyHeadingSquare = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.HeadingSquare }))
);

export const HeadingSquare: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyHeadingSquare {...props} />
    </Suspense>
  );
};

const LazyImageIndentLeft = lazy(() =>
  import("./icons/editor").then((module) => ({
    default: module.ImageIndentLeft,
  }))
);

export const ImageIndentLeft: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyImageIndentLeft {...props} />
    </Suspense>
  );
};

const LazyImageIndentRight = lazy(() =>
  import("./icons/editor").then((module) => ({
    default: module.ImageIndentRight,
  }))
);

export const ImageIndentRight: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyImageIndentRight {...props} />
    </Suspense>
  );
};

const LazyItalic01 = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.Italic01 }))
);

export const Italic01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyItalic01 {...props} />
    </Suspense>
  );
};

const LazyItalic02 = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.Italic02 }))
);

export const Italic02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyItalic02 {...props} />
    </Suspense>
  );
};

const LazyItalicSquare = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.ItalicSquare }))
);

export const ItalicSquare: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyItalicSquare {...props} />
    </Suspense>
  );
};

const LazyLeftIndent01 = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.LeftIndent01 }))
);

export const LeftIndent01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLeftIndent01 {...props} />
    </Suspense>
  );
};

const LazyLeftIndent02 = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.LeftIndent02 }))
);

export const LeftIndent02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLeftIndent02 {...props} />
    </Suspense>
  );
};

const LazyLetterSpacing01 = lazy(() =>
  import("./icons/editor").then((module) => ({
    default: module.LetterSpacing01,
  }))
);

export const LetterSpacing01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLetterSpacing01 {...props} />
    </Suspense>
  );
};

const LazyLetterSpacing02 = lazy(() =>
  import("./icons/editor").then((module) => ({
    default: module.LetterSpacing02,
  }))
);

export const LetterSpacing02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLetterSpacing02 {...props} />
    </Suspense>
  );
};

const LazyLineHeight = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.LineHeight }))
);

export const LineHeight: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLineHeight {...props} />
    </Suspense>
  );
};

const LazyMagicWand01 = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.MagicWand01 }))
);

export const MagicWand01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMagicWand01 {...props} />
    </Suspense>
  );
};

const LazyMagicWand02 = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.MagicWand02 }))
);

export const MagicWand02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMagicWand02 {...props} />
    </Suspense>
  );
};

const LazyMove = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.Move }))
);

export const Move: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMove {...props} />
    </Suspense>
  );
};

const LazyPaintPour = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.PaintPour }))
);

export const PaintPour: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPaintPour {...props} />
    </Suspense>
  );
};

const LazyPaint = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.Paint }))
);

export const Paint: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPaint {...props} />
    </Suspense>
  );
};

const LazyPalette = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.Palette }))
);

export const Palette: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPalette {...props} />
    </Suspense>
  );
};

const LazyParagraphSpacing = lazy(() =>
  import("./icons/editor").then((module) => ({
    default: module.ParagraphSpacing,
  }))
);

export const ParagraphSpacing: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyParagraphSpacing {...props} />
    </Suspense>
  );
};

const LazyParagraphWrap = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.ParagraphWrap }))
);

export const ParagraphWrap: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyParagraphWrap {...props} />
    </Suspense>
  );
};

const LazyPenTool01 = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.PenTool01 }))
);

export const PenTool01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPenTool01 {...props} />
    </Suspense>
  );
};

const LazyPenTool02 = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.PenTool02 }))
);

export const PenTool02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPenTool02 {...props} />
    </Suspense>
  );
};

const LazyPenToolMinus = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.PenToolMinus }))
);

export const PenToolMinus: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPenToolMinus {...props} />
    </Suspense>
  );
};

const LazyPenToolPlus = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.PenToolPlus }))
);

export const PenToolPlus: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPenToolPlus {...props} />
    </Suspense>
  );
};

const LazyPencil01 = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.Pencil01 }))
);

export const Pencil01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPencil01 {...props} />
    </Suspense>
  );
};

const LazyPencil02 = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.Pencil02 }))
);

export const Pencil02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPencil02 {...props} />
    </Suspense>
  );
};

const LazyPencilLine = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.PencilLine }))
);

export const PencilLine: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPencilLine {...props} />
    </Suspense>
  );
};

const LazyPerspective01 = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.Perspective01 }))
);

export const Perspective01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPerspective01 {...props} />
    </Suspense>
  );
};

const LazyPerspective02 = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.Perspective02 }))
);

export const Perspective02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPerspective02 {...props} />
    </Suspense>
  );
};

const LazyPilcrow01 = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.Pilcrow01 }))
);

export const Pilcrow01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPilcrow01 {...props} />
    </Suspense>
  );
};

const LazyPilcrow02 = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.Pilcrow02 }))
);

export const Pilcrow02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPilcrow02 {...props} />
    </Suspense>
  );
};

const LazyPilcrowSquare = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.PilcrowSquare }))
);

export const PilcrowSquare: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPilcrowSquare {...props} />
    </Suspense>
  );
};

const LazyReflect01 = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.Reflect01 }))
);

export const Reflect01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyReflect01 {...props} />
    </Suspense>
  );
};

const LazyReflect02 = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.Reflect02 }))
);

export const Reflect02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyReflect02 {...props} />
    </Suspense>
  );
};

const LazyRightIndent01 = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.RightIndent01 }))
);

export const RightIndent01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyRightIndent01 {...props} />
    </Suspense>
  );
};

const LazyRightIndent02 = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.RightIndent02 }))
);

export const RightIndent02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyRightIndent02 {...props} />
    </Suspense>
  );
};

const LazyRollerBrush = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.RollerBrush }))
);

export const RollerBrush: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyRollerBrush {...props} />
    </Suspense>
  );
};

const LazyScale01 = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.Scale01 }))
);

export const Scale01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyScale01 {...props} />
    </Suspense>
  );
};

const LazyScale02 = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.Scale02 }))
);

export const Scale02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyScale02 {...props} />
    </Suspense>
  );
};

const LazyScale03 = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.Scale03 }))
);

export const Scale03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyScale03 {...props} />
    </Suspense>
  );
};

const LazyScissors01 = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.Scissors01 }))
);

export const Scissors01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyScissors01 {...props} />
    </Suspense>
  );
};

const LazyScissors02 = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.Scissors02 }))
);

export const Scissors02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyScissors02 {...props} />
    </Suspense>
  );
};

const LazyScissorsCut01 = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.ScissorsCut01 }))
);

export const ScissorsCut01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyScissorsCut01 {...props} />
    </Suspense>
  );
};

const LazyScissorsCut02 = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.ScissorsCut02 }))
);

export const ScissorsCut02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyScissorsCut02 {...props} />
    </Suspense>
  );
};

const LazySkew = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.Skew }))
);

export const Skew: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazySkew {...props} />
    </Suspense>
  );
};

const LazyStrikeThrough01 = lazy(() =>
  import("./icons/editor").then((module) => ({
    default: module.StrikeThrough01,
  }))
);

export const StrikeThrough01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyStrikeThrough01 {...props} />
    </Suspense>
  );
};

const LazyStrikeThrough02 = lazy(() =>
  import("./icons/editor").then((module) => ({
    default: module.StrikeThrough02,
  }))
);

export const StrikeThrough02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyStrikeThrough02 {...props} />
    </Suspense>
  );
};

const LazyStrikeThroughSquare = lazy(() =>
  import("./icons/editor").then((module) => ({
    default: module.StrikeThroughSquare,
  }))
);

export const StrikeThroughSquare: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyStrikeThroughSquare {...props} />
    </Suspense>
  );
};

const LazySubscript = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.Subscript }))
);

export const Subscript: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazySubscript {...props} />
    </Suspense>
  );
};

const LazyTextInput = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.TextInput }))
);

export const TextInput: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyTextInput {...props} />
    </Suspense>
  );
};

const LazyTransform = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.Transform }))
);

export const Transform: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyTransform {...props} />
    </Suspense>
  );
};

const LazyType01 = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.Type01 }))
);

export const Type01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyType01 {...props} />
    </Suspense>
  );
};

const LazyType02 = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.Type02 }))
);

export const Type02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyType02 {...props} />
    </Suspense>
  );
};

const LazyTypeSquare = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.TypeSquare }))
);

export const TypeSquare: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyTypeSquare {...props} />
    </Suspense>
  );
};

const LazyTypeStrikeThrough01 = lazy(() =>
  import("./icons/editor").then((module) => ({
    default: module.TypeStrikeThrough01,
  }))
);

export const TypeStrikeThrough01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyTypeStrikeThrough01 {...props} />
    </Suspense>
  );
};

const LazyTypeStrikeThrough02 = lazy(() =>
  import("./icons/editor").then((module) => ({
    default: module.TypeStrikeThrough02,
  }))
);

export const TypeStrikeThrough02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyTypeStrikeThrough02 {...props} />
    </Suspense>
  );
};

const LazyUnderline01 = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.Underline01 }))
);

export const Underline01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyUnderline01 {...props} />
    </Suspense>
  );
};

const LazyUnderline02 = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.Underline02 }))
);

export const Underline02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyUnderline02 {...props} />
    </Suspense>
  );
};

const LazyUnderlineSquare = lazy(() =>
  import("./icons/editor").then((module) => ({
    default: module.UnderlineSquare,
  }))
);

export const UnderlineSquare: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyUnderlineSquare {...props} />
    </Suspense>
  );
};

const LazyZoomIn = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.ZoomIn }))
);

export const ZoomIn: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyZoomIn {...props} />
    </Suspense>
  );
};

const LazyZoomOut = lazy(() =>
  import("./icons/editor").then((module) => ({ default: module.ZoomOut }))
);

export const ZoomOut: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyZoomOut {...props} />
    </Suspense>
  );
};

const LazyAtom01 = lazy(() =>
  import("./icons/education").then((module) => ({ default: module.Atom01 }))
);

export const Atom01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyAtom01 {...props} />
    </Suspense>
  );
};

const LazyAtom02 = lazy(() =>
  import("./icons/education").then((module) => ({ default: module.Atom02 }))
);

export const Atom02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyAtom02 {...props} />
    </Suspense>
  );
};

const LazyAward01 = lazy(() =>
  import("./icons/education").then((module) => ({ default: module.Award01 }))
);

export const Award01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyAward01 {...props} />
    </Suspense>
  );
};

const LazyAward02 = lazy(() =>
  import("./icons/education").then((module) => ({ default: module.Award02 }))
);

export const Award02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyAward02 {...props} />
    </Suspense>
  );
};

const LazyAward03 = lazy(() =>
  import("./icons/education").then((module) => ({ default: module.Award03 }))
);

export const Award03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyAward03 {...props} />
    </Suspense>
  );
};

const LazyAward04 = lazy(() =>
  import("./icons/education").then((module) => ({ default: module.Award04 }))
);

export const Award04: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyAward04 {...props} />
    </Suspense>
  );
};

const LazyAward05 = lazy(() =>
  import("./icons/education").then((module) => ({ default: module.Award05 }))
);

export const Award05: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyAward05 {...props} />
    </Suspense>
  );
};

const LazyBackpack = lazy(() =>
  import("./icons/education").then((module) => ({ default: module.Backpack }))
);

export const Backpack: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBackpack {...props} />
    </Suspense>
  );
};

const LazyBeaker01 = lazy(() =>
  import("./icons/education").then((module) => ({ default: module.Beaker01 }))
);

export const Beaker01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBeaker01 {...props} />
    </Suspense>
  );
};

const LazyBeaker02 = lazy(() =>
  import("./icons/education").then((module) => ({ default: module.Beaker02 }))
);

export const Beaker02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBeaker02 {...props} />
    </Suspense>
  );
};

const LazyBookClosed = lazy(() =>
  import("./icons/education").then((module) => ({ default: module.BookClosed }))
);

export const BookClosed: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBookClosed {...props} />
    </Suspense>
  );
};

const LazyBookOpen01 = lazy(() =>
  import("./icons/education").then((module) => ({ default: module.BookOpen01 }))
);

export const BookOpen01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBookOpen01 {...props} />
    </Suspense>
  );
};

const LazyBookOpen02 = lazy(() =>
  import("./icons/education").then((module) => ({ default: module.BookOpen02 }))
);

export const BookOpen02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBookOpen02 {...props} />
    </Suspense>
  );
};

const LazyBriefCase01 = lazy(() =>
  import("./icons/education").then((module) => ({
    default: module.BriefCase01,
  }))
);

export const BriefCase01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBriefCase01 {...props} />
    </Suspense>
  );
};

const LazyBriefCase02 = lazy(() =>
  import("./icons/education").then((module) => ({
    default: module.BriefCase02,
  }))
);

export const BriefCase02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBriefCase02 {...props} />
    </Suspense>
  );
};

const LazyCalculator = lazy(() =>
  import("./icons/education").then((module) => ({ default: module.Calculator }))
);

export const Calculator: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCalculator {...props} />
    </Suspense>
  );
};

const LazyCertificate01 = lazy(() =>
  import("./icons/education").then((module) => ({
    default: module.Certificate01,
  }))
);

export const Certificate01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCertificate01 {...props} />
    </Suspense>
  );
};

const LazyCertificate02 = lazy(() =>
  import("./icons/education").then((module) => ({
    default: module.Certificate02,
  }))
);

export const Certificate02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCertificate02 {...props} />
    </Suspense>
  );
};

const LazyCompass = lazy(() =>
  import("./icons/education").then((module) => ({ default: module.Compass }))
);

export const Compass: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCompass {...props} />
    </Suspense>
  );
};

const LazyGlasses01 = lazy(() =>
  import("./icons/education").then((module) => ({ default: module.Glasses01 }))
);

export const Glasses01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyGlasses01 {...props} />
    </Suspense>
  );
};

const LazyGlasses02 = lazy(() =>
  import("./icons/education").then((module) => ({ default: module.Glasses02 }))
);

export const Glasses02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyGlasses02 {...props} />
    </Suspense>
  );
};

const LazyGlobe07 = lazy(() =>
  import("./icons/education").then((module) => ({ default: module.Globe07 }))
);

export const Globe07: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyGlobe07 {...props} />
    </Suspense>
  );
};

const LazyGraduationHat01 = lazy(() =>
  import("./icons/education").then((module) => ({
    default: module.GraduationHat01,
  }))
);

export const GraduationHat01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyGraduationHat01 {...props} />
    </Suspense>
  );
};

const LazyGraduationHat02 = lazy(() =>
  import("./icons/education").then((module) => ({
    default: module.GraduationHat02,
  }))
);

export const GraduationHat02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyGraduationHat02 {...props} />
    </Suspense>
  );
};

const LazyMicroscope = lazy(() =>
  import("./icons/education").then((module) => ({ default: module.Microscope }))
);

export const Microscope: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMicroscope {...props} />
    </Suspense>
  );
};

const LazyRuler = lazy(() =>
  import("./icons/education").then((module) => ({ default: module.Ruler }))
);

export const Ruler: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyRuler {...props} />
    </Suspense>
  );
};

const LazyStand = lazy(() =>
  import("./icons/education").then((module) => ({ default: module.Stand }))
);

export const Stand: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyStand {...props} />
    </Suspense>
  );
};

const LazyTelescope = lazy(() =>
  import("./icons/education").then((module) => ({ default: module.Telescope }))
);

export const Telescope: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyTelescope {...props} />
    </Suspense>
  );
};

const LazyTrophy01 = lazy(() =>
  import("./icons/education").then((module) => ({ default: module.Trophy01 }))
);

export const Trophy01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyTrophy01 {...props} />
    </Suspense>
  );
};

const LazyTrophy02 = lazy(() =>
  import("./icons/education").then((module) => ({ default: module.Trophy02 }))
);

export const Trophy02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyTrophy02 {...props} />
    </Suspense>
  );
};

const LazyBox = lazy(() =>
  import("./icons/files").then((module) => ({ default: module.Box }))
);

export const Box: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBox {...props} />
    </Suspense>
  );
};

const LazyClipboardAttachment = lazy(() =>
  import("./icons/files").then((module) => ({
    default: module.ClipboardAttachment,
  }))
);

export const ClipboardAttachment: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyClipboardAttachment {...props} />
    </Suspense>
  );
};

const LazyClipboardCheck = lazy(() =>
  import("./icons/files").then((module) => ({ default: module.ClipboardCheck }))
);

export const ClipboardCheck: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyClipboardCheck {...props} />
    </Suspense>
  );
};

const LazyClipboardDownload = lazy(() =>
  import("./icons/files").then((module) => ({
    default: module.ClipboardDownload,
  }))
);

export const ClipboardDownload: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyClipboardDownload {...props} />
    </Suspense>
  );
};

const LazyClipboardMinus = lazy(() =>
  import("./icons/files").then((module) => ({ default: module.ClipboardMinus }))
);

export const ClipboardMinus: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyClipboardMinus {...props} />
    </Suspense>
  );
};

const LazyClipboardPlus = lazy(() =>
  import("./icons/files").then((module) => ({ default: module.ClipboardPlus }))
);

export const ClipboardPlus: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyClipboardPlus {...props} />
    </Suspense>
  );
};

const LazyClipboardX = lazy(() =>
  import("./icons/files").then((module) => ({ default: module.ClipboardX }))
);

export const ClipboardX: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyClipboardX {...props} />
    </Suspense>
  );
};

const LazyClipboard = lazy(() =>
  import("./icons/files").then((module) => ({ default: module.Clipboard }))
);

export const Clipboard: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyClipboard {...props} />
    </Suspense>
  );
};

const LazyFile01 = lazy(() =>
  import("./icons/files").then((module) => ({ default: module.File01 }))
);

export const File01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFile01 {...props} />
    </Suspense>
  );
};

const LazyFile02 = lazy(() =>
  import("./icons/files").then((module) => ({ default: module.File02 }))
);

export const File02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFile02 {...props} />
    </Suspense>
  );
};

const LazyFile03 = lazy(() =>
  import("./icons/files").then((module) => ({ default: module.File03 }))
);

export const File03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFile03 {...props} />
    </Suspense>
  );
};

const LazyFile04 = lazy(() =>
  import("./icons/files").then((module) => ({ default: module.File04 }))
);

export const File04: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFile04 {...props} />
    </Suspense>
  );
};

const LazyFile05 = lazy(() =>
  import("./icons/files").then((module) => ({ default: module.File05 }))
);

export const File05: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFile05 {...props} />
    </Suspense>
  );
};

const LazyFile06 = lazy(() =>
  import("./icons/files").then((module) => ({ default: module.File06 }))
);

export const File06: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFile06 {...props} />
    </Suspense>
  );
};

const LazyFile07 = lazy(() =>
  import("./icons/files").then((module) => ({ default: module.File07 }))
);

export const File07: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFile07 {...props} />
    </Suspense>
  );
};

const LazyFileAttachment01 = lazy(() =>
  import("./icons/files").then((module) => ({
    default: module.FileAttachment01,
  }))
);

export const FileAttachment01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFileAttachment01 {...props} />
    </Suspense>
  );
};

const LazyFileAttachment02 = lazy(() =>
  import("./icons/files").then((module) => ({
    default: module.FileAttachment02,
  }))
);

export const FileAttachment02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFileAttachment02 {...props} />
    </Suspense>
  );
};

const LazyFileAttachment03 = lazy(() =>
  import("./icons/files").then((module) => ({
    default: module.FileAttachment03,
  }))
);

export const FileAttachment03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFileAttachment03 {...props} />
    </Suspense>
  );
};

const LazyFileAttachment04 = lazy(() =>
  import("./icons/files").then((module) => ({
    default: module.FileAttachment04,
  }))
);

export const FileAttachment04: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFileAttachment04 {...props} />
    </Suspense>
  );
};

const LazyFileAttachment05 = lazy(() =>
  import("./icons/files").then((module) => ({
    default: module.FileAttachment05,
  }))
);

export const FileAttachment05: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFileAttachment05 {...props} />
    </Suspense>
  );
};

const LazyFileCheck01 = lazy(() =>
  import("./icons/files").then((module) => ({ default: module.FileCheck01 }))
);

export const FileCheck01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFileCheck01 {...props} />
    </Suspense>
  );
};

const LazyFileCheck02 = lazy(() =>
  import("./icons/files").then((module) => ({ default: module.FileCheck02 }))
);

export const FileCheck02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFileCheck02 {...props} />
    </Suspense>
  );
};

const LazyFileCheck03 = lazy(() =>
  import("./icons/files").then((module) => ({ default: module.FileCheck03 }))
);

export const FileCheck03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFileCheck03 {...props} />
    </Suspense>
  );
};

const LazyFileDownload01 = lazy(() =>
  import("./icons/files").then((module) => ({ default: module.FileDownload01 }))
);

export const FileDownload01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFileDownload01 {...props} />
    </Suspense>
  );
};

const LazyFileDownload02 = lazy(() =>
  import("./icons/files").then((module) => ({ default: module.FileDownload02 }))
);

export const FileDownload02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFileDownload02 {...props} />
    </Suspense>
  );
};

const LazyFileDownload03 = lazy(() =>
  import("./icons/files").then((module) => ({ default: module.FileDownload03 }))
);

export const FileDownload03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFileDownload03 {...props} />
    </Suspense>
  );
};

const LazyFileHeart01 = lazy(() =>
  import("./icons/files").then((module) => ({ default: module.FileHeart01 }))
);

export const FileHeart01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFileHeart01 {...props} />
    </Suspense>
  );
};

const LazyFileHeart02 = lazy(() =>
  import("./icons/files").then((module) => ({ default: module.FileHeart02 }))
);

export const FileHeart02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFileHeart02 {...props} />
    </Suspense>
  );
};

const LazyFileHeart03 = lazy(() =>
  import("./icons/files").then((module) => ({ default: module.FileHeart03 }))
);

export const FileHeart03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFileHeart03 {...props} />
    </Suspense>
  );
};

const LazyFileMinus01 = lazy(() =>
  import("./icons/files").then((module) => ({ default: module.FileMinus01 }))
);

export const FileMinus01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFileMinus01 {...props} />
    </Suspense>
  );
};

const LazyFileMinus02 = lazy(() =>
  import("./icons/files").then((module) => ({ default: module.FileMinus02 }))
);

export const FileMinus02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFileMinus02 {...props} />
    </Suspense>
  );
};

const LazyFileMinus03 = lazy(() =>
  import("./icons/files").then((module) => ({ default: module.FileMinus03 }))
);

export const FileMinus03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFileMinus03 {...props} />
    </Suspense>
  );
};

const LazyFilePlus01 = lazy(() =>
  import("./icons/files").then((module) => ({ default: module.FilePlus01 }))
);

export const FilePlus01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFilePlus01 {...props} />
    </Suspense>
  );
};

const LazyFilePlus02 = lazy(() =>
  import("./icons/files").then((module) => ({ default: module.FilePlus02 }))
);

export const FilePlus02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFilePlus02 {...props} />
    </Suspense>
  );
};

const LazyFilePlus03 = lazy(() =>
  import("./icons/files").then((module) => ({ default: module.FilePlus03 }))
);

export const FilePlus03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFilePlus03 {...props} />
    </Suspense>
  );
};

const LazyFileQuestion01 = lazy(() =>
  import("./icons/files").then((module) => ({ default: module.FileQuestion01 }))
);

export const FileQuestion01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFileQuestion01 {...props} />
    </Suspense>
  );
};

const LazyFileQuestion02 = lazy(() =>
  import("./icons/files").then((module) => ({ default: module.FileQuestion02 }))
);

export const FileQuestion02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFileQuestion02 {...props} />
    </Suspense>
  );
};

const LazyFileQuestion03 = lazy(() =>
  import("./icons/files").then((module) => ({ default: module.FileQuestion03 }))
);

export const FileQuestion03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFileQuestion03 {...props} />
    </Suspense>
  );
};

const LazyFileSearch01 = lazy(() =>
  import("./icons/files").then((module) => ({ default: module.FileSearch01 }))
);

export const FileSearch01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFileSearch01 {...props} />
    </Suspense>
  );
};

const LazyFileSearch02 = lazy(() =>
  import("./icons/files").then((module) => ({ default: module.FileSearch02 }))
);

export const FileSearch02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFileSearch02 {...props} />
    </Suspense>
  );
};

const LazyFileSearch03 = lazy(() =>
  import("./icons/files").then((module) => ({ default: module.FileSearch03 }))
);

export const FileSearch03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFileSearch03 {...props} />
    </Suspense>
  );
};

const LazyFileX01 = lazy(() =>
  import("./icons/files").then((module) => ({ default: module.FileX01 }))
);

export const FileX01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFileX01 {...props} />
    </Suspense>
  );
};

const LazyFileX02 = lazy(() =>
  import("./icons/files").then((module) => ({ default: module.FileX02 }))
);

export const FileX02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFileX02 {...props} />
    </Suspense>
  );
};

const LazyFileX03 = lazy(() =>
  import("./icons/files").then((module) => ({ default: module.FileX03 }))
);

export const FileX03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFileX03 {...props} />
    </Suspense>
  );
};

const LazyFolderCheck = lazy(() =>
  import("./icons/files").then((module) => ({ default: module.FolderCheck }))
);

export const FolderCheck: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFolderCheck {...props} />
    </Suspense>
  );
};

const LazyFolderClosed = lazy(() =>
  import("./icons/files").then((module) => ({ default: module.FolderClosed }))
);

export const FolderClosed: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFolderClosed {...props} />
    </Suspense>
  );
};

const LazyFolderDownload = lazy(() =>
  import("./icons/files").then((module) => ({ default: module.FolderDownload }))
);

export const FolderDownload: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFolderDownload {...props} />
    </Suspense>
  );
};

const LazyFolderLock = lazy(() =>
  import("./icons/files").then((module) => ({ default: module.FolderLock }))
);

export const FolderLock: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFolderLock {...props} />
    </Suspense>
  );
};

const LazyFolderMinus = lazy(() =>
  import("./icons/files").then((module) => ({ default: module.FolderMinus }))
);

export const FolderMinus: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFolderMinus {...props} />
    </Suspense>
  );
};

const LazyFolderPlus = lazy(() =>
  import("./icons/files").then((module) => ({ default: module.FolderPlus }))
);

export const FolderPlus: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFolderPlus {...props} />
    </Suspense>
  );
};

const LazyFolderQuestion = lazy(() =>
  import("./icons/files").then((module) => ({ default: module.FolderQuestion }))
);

export const FolderQuestion: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFolderQuestion {...props} />
    </Suspense>
  );
};

const LazyFolderSearch = lazy(() =>
  import("./icons/files").then((module) => ({ default: module.FolderSearch }))
);

export const FolderSearch: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFolderSearch {...props} />
    </Suspense>
  );
};

const LazyFolderX = lazy(() =>
  import("./icons/files").then((module) => ({ default: module.FolderX }))
);

export const FolderX: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFolderX {...props} />
    </Suspense>
  );
};

const LazyFolder = lazy(() =>
  import("./icons/files").then((module) => ({ default: module.Folder }))
);

export const Folder: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFolder {...props} />
    </Suspense>
  );
};

const LazyPaperClip = lazy(() =>
  import("./icons/files").then((module) => ({ default: module.PaperClip }))
);

export const PaperClip: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPaperClip {...props} />
    </Suspense>
  );
};

const LazyStickerCircle = lazy(() =>
  import("./icons/files").then((module) => ({ default: module.StickerCircle }))
);

export const StickerCircle: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyStickerCircle {...props} />
    </Suspense>
  );
};

const LazyStickerSquare = lazy(() =>
  import("./icons/files").then((module) => ({ default: module.StickerSquare }))
);

export const StickerSquare: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyStickerSquare {...props} />
    </Suspense>
  );
};

const LazyBankNote01 = lazy(() =>
  import("./icons/finance").then((module) => ({ default: module.BankNote01 }))
);

export const BankNote01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBankNote01 {...props} />
    </Suspense>
  );
};

const LazyBankNote02 = lazy(() =>
  import("./icons/finance").then((module) => ({ default: module.BankNote02 }))
);

export const BankNote02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBankNote02 {...props} />
    </Suspense>
  );
};

const LazyBankNote03 = lazy(() =>
  import("./icons/finance").then((module) => ({ default: module.BankNote03 }))
);

export const BankNote03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBankNote03 {...props} />
    </Suspense>
  );
};

const LazyBank = lazy(() =>
  import("./icons/finance").then((module) => ({ default: module.Bank }))
);

export const Bank: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBank {...props} />
    </Suspense>
  );
};

const LazyCoins01 = lazy(() =>
  import("./icons/finance").then((module) => ({ default: module.Coins01 }))
);

export const Coins01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCoins01 {...props} />
    </Suspense>
  );
};

const LazyCoins02 = lazy(() =>
  import("./icons/finance").then((module) => ({ default: module.Coins02 }))
);

export const Coins02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCoins02 {...props} />
    </Suspense>
  );
};

const LazyCoins03 = lazy(() =>
  import("./icons/finance").then((module) => ({ default: module.Coins03 }))
);

export const Coins03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCoins03 {...props} />
    </Suspense>
  );
};

const LazyCoins04 = lazy(() =>
  import("./icons/finance").then((module) => ({ default: module.Coins04 }))
);

export const Coins04: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCoins04 {...props} />
    </Suspense>
  );
};

const LazyCoinsHand = lazy(() =>
  import("./icons/finance").then((module) => ({ default: module.CoinsHand }))
);

export const CoinsHand: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCoinsHand {...props} />
    </Suspense>
  );
};

const LazyCoinsStacked01 = lazy(() =>
  import("./icons/finance").then((module) => ({
    default: module.CoinsStacked01,
  }))
);

export const CoinsStacked01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCoinsStacked01 {...props} />
    </Suspense>
  );
};

const LazyCoinsStacked02 = lazy(() =>
  import("./icons/finance").then((module) => ({
    default: module.CoinsStacked02,
  }))
);

export const CoinsStacked02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCoinsStacked02 {...props} />
    </Suspense>
  );
};

const LazyCoinsStacked03 = lazy(() =>
  import("./icons/finance").then((module) => ({
    default: module.CoinsStacked03,
  }))
);

export const CoinsStacked03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCoinsStacked03 {...props} />
    </Suspense>
  );
};

const LazyCoinsStacked04 = lazy(() =>
  import("./icons/finance").then((module) => ({
    default: module.CoinsStacked04,
  }))
);

export const CoinsStacked04: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCoinsStacked04 {...props} />
    </Suspense>
  );
};

const LazyCoinSwap01 = lazy(() =>
  import("./icons/finance").then((module) => ({ default: module.CoinSwap01 }))
);

export const CoinSwap01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCoinSwap01 {...props} />
    </Suspense>
  );
};

const LazyCoinSwap02 = lazy(() =>
  import("./icons/finance").then((module) => ({ default: module.CoinSwap02 }))
);

export const CoinSwap02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCoinSwap02 {...props} />
    </Suspense>
  );
};

const LazyCreditCard01 = lazy(() =>
  import("./icons/finance").then((module) => ({ default: module.CreditCard01 }))
);

export const CreditCard01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCreditCard01 {...props} />
    </Suspense>
  );
};

const LazyCreditCard02 = lazy(() =>
  import("./icons/finance").then((module) => ({ default: module.CreditCard02 }))
);

export const CreditCard02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCreditCard02 {...props} />
    </Suspense>
  );
};

const LazyCreditCardCheck = lazy(() =>
  import("./icons/finance").then((module) => ({
    default: module.CreditCardCheck,
  }))
);

export const CreditCardCheck: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCreditCardCheck {...props} />
    </Suspense>
  );
};

const LazyCreditCardDown = lazy(() =>
  import("./icons/finance").then((module) => ({
    default: module.CreditCardDown,
  }))
);

export const CreditCardDown: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCreditCardDown {...props} />
    </Suspense>
  );
};

const LazyCreditCardDownload = lazy(() =>
  import("./icons/finance").then((module) => ({
    default: module.CreditCardDownload,
  }))
);

export const CreditCardDownload: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCreditCardDownload {...props} />
    </Suspense>
  );
};

const LazyCreditCardEdit = lazy(() =>
  import("./icons/finance").then((module) => ({
    default: module.CreditCardEdit,
  }))
);

export const CreditCardEdit: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCreditCardEdit {...props} />
    </Suspense>
  );
};

const LazyCreditCardLock = lazy(() =>
  import("./icons/finance").then((module) => ({
    default: module.CreditCardLock,
  }))
);

export const CreditCardLock: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCreditCardLock {...props} />
    </Suspense>
  );
};

const LazyCreditCardMinus = lazy(() =>
  import("./icons/finance").then((module) => ({
    default: module.CreditCardMinus,
  }))
);

export const CreditCardMinus: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCreditCardMinus {...props} />
    </Suspense>
  );
};

const LazyCreditCardPlus = lazy(() =>
  import("./icons/finance").then((module) => ({
    default: module.CreditCardPlus,
  }))
);

export const CreditCardPlus: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCreditCardPlus {...props} />
    </Suspense>
  );
};

const LazyCreditCardRefresh = lazy(() =>
  import("./icons/finance").then((module) => ({
    default: module.CreditCardRefresh,
  }))
);

export const CreditCardRefresh: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCreditCardRefresh {...props} />
    </Suspense>
  );
};

const LazyCreditCardSearch = lazy(() =>
  import("./icons/finance").then((module) => ({
    default: module.CreditCardSearch,
  }))
);

export const CreditCardSearch: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCreditCardSearch {...props} />
    </Suspense>
  );
};

const LazyCreditCardShield = lazy(() =>
  import("./icons/finance").then((module) => ({
    default: module.CreditCardShield,
  }))
);

export const CreditCardShield: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCreditCardShield {...props} />
    </Suspense>
  );
};

const LazyCreditCardUp = lazy(() =>
  import("./icons/finance").then((module) => ({ default: module.CreditCardUp }))
);

export const CreditCardUp: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCreditCardUp {...props} />
    </Suspense>
  );
};

const LazyCreditCardUpload = lazy(() =>
  import("./icons/finance").then((module) => ({
    default: module.CreditCardUpload,
  }))
);

export const CreditCardUpload: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCreditCardUpload {...props} />
    </Suspense>
  );
};

const LazyCreditCardX = lazy(() =>
  import("./icons/finance").then((module) => ({ default: module.CreditCardX }))
);

export const CreditCardX: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCreditCardX {...props} />
    </Suspense>
  );
};

const LazyCryptocurrency01 = lazy(() =>
  import("./icons/finance").then((module) => ({
    default: module.Cryptocurrency01,
  }))
);

export const Cryptocurrency01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCryptocurrency01 {...props} />
    </Suspense>
  );
};

const LazyCryptocurrency02 = lazy(() =>
  import("./icons/finance").then((module) => ({
    default: module.Cryptocurrency02,
  }))
);

export const Cryptocurrency02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCryptocurrency02 {...props} />
    </Suspense>
  );
};

const LazyCryptocurrency03 = lazy(() =>
  import("./icons/finance").then((module) => ({
    default: module.Cryptocurrency03,
  }))
);

export const Cryptocurrency03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCryptocurrency03 {...props} />
    </Suspense>
  );
};

const LazyCryptocurrency04 = lazy(() =>
  import("./icons/finance").then((module) => ({
    default: module.Cryptocurrency04,
  }))
);

export const Cryptocurrency04: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCryptocurrency04 {...props} />
    </Suspense>
  );
};

const LazyCurrencyBitcoinCircle = lazy(() =>
  import("./icons/finance").then((module) => ({
    default: module.CurrencyBitcoinCircle,
  }))
);

export const CurrencyBitcoinCircle: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCurrencyBitcoinCircle {...props} />
    </Suspense>
  );
};

const LazyCurrencyBitcoin = lazy(() =>
  import("./icons/finance").then((module) => ({
    default: module.CurrencyBitcoin,
  }))
);

export const CurrencyBitcoin: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCurrencyBitcoin {...props} />
    </Suspense>
  );
};

const LazyCurrencyDollarCircle = lazy(() =>
  import("./icons/finance").then((module) => ({
    default: module.CurrencyDollarCircle,
  }))
);

export const CurrencyDollarCircle: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCurrencyDollarCircle {...props} />
    </Suspense>
  );
};

const LazyCurrencyDollar = lazy(() =>
  import("./icons/finance").then((module) => ({
    default: module.CurrencyDollar,
  }))
);

export const CurrencyDollar: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCurrencyDollar {...props} />
    </Suspense>
  );
};

const LazyCurrencyEthereumCircle = lazy(() =>
  import("./icons/finance").then((module) => ({
    default: module.CurrencyEthereumCircle,
  }))
);

export const CurrencyEthereumCircle: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCurrencyEthereumCircle {...props} />
    </Suspense>
  );
};

const LazyCurrencyEthereum = lazy(() =>
  import("./icons/finance").then((module) => ({
    default: module.CurrencyEthereum,
  }))
);

export const CurrencyEthereum: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCurrencyEthereum {...props} />
    </Suspense>
  );
};

const LazyCurrencyEuroCircle = lazy(() =>
  import("./icons/finance").then((module) => ({
    default: module.CurrencyEuroCircle,
  }))
);

export const CurrencyEuroCircle: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCurrencyEuroCircle {...props} />
    </Suspense>
  );
};

const LazyCurrencyEuro = lazy(() =>
  import("./icons/finance").then((module) => ({ default: module.CurrencyEuro }))
);

export const CurrencyEuro: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCurrencyEuro {...props} />
    </Suspense>
  );
};

const LazyCurrencyPoundCircle = lazy(() =>
  import("./icons/finance").then((module) => ({
    default: module.CurrencyPoundCircle,
  }))
);

export const CurrencyPoundCircle: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCurrencyPoundCircle {...props} />
    </Suspense>
  );
};

const LazyCurrencyPound = lazy(() =>
  import("./icons/finance").then((module) => ({
    default: module.CurrencyPound,
  }))
);

export const CurrencyPound: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCurrencyPound {...props} />
    </Suspense>
  );
};

const LazyCurrencyRubleCircle = lazy(() =>
  import("./icons/finance").then((module) => ({
    default: module.CurrencyRubleCircle,
  }))
);

export const CurrencyRubleCircle: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCurrencyRubleCircle {...props} />
    </Suspense>
  );
};

const LazyCurrencyRuble = lazy(() =>
  import("./icons/finance").then((module) => ({
    default: module.CurrencyRuble,
  }))
);

export const CurrencyRuble: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCurrencyRuble {...props} />
    </Suspense>
  );
};

const LazyCurrencyRupeeCircle = lazy(() =>
  import("./icons/finance").then((module) => ({
    default: module.CurrencyRupeeCircle,
  }))
);

export const CurrencyRupeeCircle: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCurrencyRupeeCircle {...props} />
    </Suspense>
  );
};

const LazyCurrencyRupee = lazy(() =>
  import("./icons/finance").then((module) => ({
    default: module.CurrencyRupee,
  }))
);

export const CurrencyRupee: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCurrencyRupee {...props} />
    </Suspense>
  );
};

const LazyCurrencyYenCircle = lazy(() =>
  import("./icons/finance").then((module) => ({
    default: module.CurrencyYenCircle,
  }))
);

export const CurrencyYenCircle: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCurrencyYenCircle {...props} />
    </Suspense>
  );
};

const LazyCurrencyYen = lazy(() =>
  import("./icons/finance").then((module) => ({ default: module.CurrencyYen }))
);

export const CurrencyYen: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCurrencyYen {...props} />
    </Suspense>
  );
};

const LazyDiamond01 = lazy(() =>
  import("./icons/finance").then((module) => ({ default: module.Diamond01 }))
);

export const Diamond01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyDiamond01 {...props} />
    </Suspense>
  );
};

const LazyDiamond02 = lazy(() =>
  import("./icons/finance").then((module) => ({ default: module.Diamond02 }))
);

export const Diamond02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyDiamond02 {...props} />
    </Suspense>
  );
};

const LazyGift01 = lazy(() =>
  import("./icons/finance").then((module) => ({ default: module.Gift01 }))
);

export const Gift01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyGift01 {...props} />
    </Suspense>
  );
};

const LazyGift02 = lazy(() =>
  import("./icons/finance").then((module) => ({ default: module.Gift02 }))
);

export const Gift02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyGift02 {...props} />
    </Suspense>
  );
};

const LazyPiggyBank01 = lazy(() =>
  import("./icons/finance").then((module) => ({ default: module.PiggyBank01 }))
);

export const PiggyBank01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPiggyBank01 {...props} />
    </Suspense>
  );
};

const LazyPiggyBank02 = lazy(() =>
  import("./icons/finance").then((module) => ({ default: module.PiggyBank02 }))
);

export const PiggyBank02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPiggyBank02 {...props} />
    </Suspense>
  );
};

const LazyReceiptCheck = lazy(() =>
  import("./icons/finance").then((module) => ({ default: module.ReceiptCheck }))
);

export const ReceiptCheck: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyReceiptCheck {...props} />
    </Suspense>
  );
};

const LazyReceipt = lazy(() =>
  import("./icons/finance").then((module) => ({ default: module.Receipt }))
);

export const Receipt: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyReceipt {...props} />
    </Suspense>
  );
};

const LazySafe = lazy(() =>
  import("./icons/finance").then((module) => ({ default: module.Safe }))
);

export const Safe: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazySafe {...props} />
    </Suspense>
  );
};

const LazySale01 = lazy(() =>
  import("./icons/finance").then((module) => ({ default: module.Sale01 }))
);

export const Sale01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazySale01 {...props} />
    </Suspense>
  );
};

const LazySale02 = lazy(() =>
  import("./icons/finance").then((module) => ({ default: module.Sale02 }))
);

export const Sale02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazySale02 {...props} />
    </Suspense>
  );
};

const LazySale03 = lazy(() =>
  import("./icons/finance").then((module) => ({ default: module.Sale03 }))
);

export const Sale03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazySale03 {...props} />
    </Suspense>
  );
};

const LazySale04 = lazy(() =>
  import("./icons/finance").then((module) => ({ default: module.Sale04 }))
);

export const Sale04: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazySale04 {...props} />
    </Suspense>
  );
};

const LazyScales01 = lazy(() =>
  import("./icons/finance").then((module) => ({ default: module.Scales01 }))
);

export const Scales01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyScales01 {...props} />
    </Suspense>
  );
};

const LazyScales02 = lazy(() =>
  import("./icons/finance").then((module) => ({ default: module.Scales02 }))
);

export const Scales02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyScales02 {...props} />
    </Suspense>
  );
};

const LazyShoppingBag01 = lazy(() =>
  import("./icons/finance").then((module) => ({
    default: module.ShoppingBag01,
  }))
);

export const ShoppingBag01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyShoppingBag01 {...props} />
    </Suspense>
  );
};

const LazyShoppingBag02 = lazy(() =>
  import("./icons/finance").then((module) => ({
    default: module.ShoppingBag02,
  }))
);

export const ShoppingBag02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyShoppingBag02 {...props} />
    </Suspense>
  );
};

const LazyShoppingBag03 = lazy(() =>
  import("./icons/finance").then((module) => ({
    default: module.ShoppingBag03,
  }))
);

export const ShoppingBag03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyShoppingBag03 {...props} />
    </Suspense>
  );
};

const LazyShoppingCart01 = lazy(() =>
  import("./icons/finance").then((module) => ({
    default: module.ShoppingCart01,
  }))
);

export const ShoppingCart01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyShoppingCart01 {...props} />
    </Suspense>
  );
};

const LazyShoppingCart02 = lazy(() =>
  import("./icons/finance").then((module) => ({
    default: module.ShoppingCart02,
  }))
);

export const ShoppingCart02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyShoppingCart02 {...props} />
    </Suspense>
  );
};

const LazyShoppingCart03 = lazy(() =>
  import("./icons/finance").then((module) => ({
    default: module.ShoppingCart03,
  }))
);

export const ShoppingCart03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyShoppingCart03 {...props} />
    </Suspense>
  );
};

const LazyTag01 = lazy(() =>
  import("./icons/finance").then((module) => ({ default: module.Tag01 }))
);

export const Tag01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyTag01 {...props} />
    </Suspense>
  );
};

const LazyTag02 = lazy(() =>
  import("./icons/finance").then((module) => ({ default: module.Tag02 }))
);

export const Tag02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyTag02 {...props} />
    </Suspense>
  );
};

const LazyTag03 = lazy(() =>
  import("./icons/finance").then((module) => ({ default: module.Tag03 }))
);

export const Tag03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyTag03 {...props} />
    </Suspense>
  );
};

const LazyWallet01 = lazy(() =>
  import("./icons/finance").then((module) => ({ default: module.Wallet01 }))
);

export const Wallet01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyWallet01 {...props} />
    </Suspense>
  );
};

const LazyWallet02 = lazy(() =>
  import("./icons/finance").then((module) => ({ default: module.Wallet02 }))
);

export const Wallet02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyWallet02 {...props} />
    </Suspense>
  );
};

const LazyWallet03 = lazy(() =>
  import("./icons/finance").then((module) => ({ default: module.Wallet03 }))
);

export const Wallet03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyWallet03 {...props} />
    </Suspense>
  );
};

const LazyWallet04 = lazy(() =>
  import("./icons/finance").then((module) => ({ default: module.Wallet04 }))
);

export const Wallet04: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyWallet04 {...props} />
    </Suspense>
  );
};

const LazyWallet05 = lazy(() =>
  import("./icons/finance").then((module) => ({ default: module.Wallet05 }))
);

export const Wallet05: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyWallet05 {...props} />
    </Suspense>
  );
};

const LazyActivityHeart = lazy(() =>
  import("./icons/general").then((module) => ({
    default: module.ActivityHeart,
  }))
);

export const ActivityHeart: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyActivityHeart {...props} />
    </Suspense>
  );
};

const LazyActivity = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Activity }))
);

export const Activity: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyActivity {...props} />
    </Suspense>
  );
};

const LazyArchive = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Archive }))
);

export const Archive: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyArchive {...props} />
    </Suspense>
  );
};

const LazyAsterisk01 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Asterisk01 }))
);

export const Asterisk01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyAsterisk01 {...props} />
    </Suspense>
  );
};

const LazyAsterisk02 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Asterisk02 }))
);

export const Asterisk02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyAsterisk02 {...props} />
    </Suspense>
  );
};

const LazyAtSign = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.AtSign }))
);

export const AtSign: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyAtSign {...props} />
    </Suspense>
  );
};

const LazyBookmarkAdd = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.BookmarkAdd }))
);

export const BookmarkAdd: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBookmarkAdd {...props} />
    </Suspense>
  );
};

const LazyBookmarkCheck = lazy(() =>
  import("./icons/general").then((module) => ({
    default: module.BookmarkCheck,
  }))
);

export const BookmarkCheck: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBookmarkCheck {...props} />
    </Suspense>
  );
};

const LazyBookmarkMinus = lazy(() =>
  import("./icons/general").then((module) => ({
    default: module.BookmarkMinus,
  }))
);

export const BookmarkMinus: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBookmarkMinus {...props} />
    </Suspense>
  );
};

const LazyBookmarkX = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.BookmarkX }))
);

export const BookmarkX: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBookmarkX {...props} />
    </Suspense>
  );
};

const LazyBookmark = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Bookmark }))
);

export const Bookmark: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBookmark {...props} />
    </Suspense>
  );
};

const LazyBuilding01 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Building01 }))
);

export const Building01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBuilding01 {...props} />
    </Suspense>
  );
};

const LazyBuilding02 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Building02 }))
);

export const Building02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBuilding02 {...props} />
    </Suspense>
  );
};

const LazyBuilding03 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Building03 }))
);

export const Building03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBuilding03 {...props} />
    </Suspense>
  );
};

const LazyBuilding04 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Building04 }))
);

export const Building04: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBuilding04 {...props} />
    </Suspense>
  );
};

const LazyBuilding05 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Building05 }))
);

export const Building05: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBuilding05 {...props} />
    </Suspense>
  );
};

const LazyBuilding06 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Building06 }))
);

export const Building06: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBuilding06 {...props} />
    </Suspense>
  );
};

const LazyBuilding07 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Building07 }))
);

export const Building07: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBuilding07 {...props} />
    </Suspense>
  );
};

const LazyBuilding08 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Building08 }))
);

export const Building08: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBuilding08 {...props} />
    </Suspense>
  );
};

const LazyCheckCircleBroken = lazy(() =>
  import("./icons/general").then((module) => ({
    default: module.CheckCircleBroken,
  }))
);

export const CheckCircleBroken: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCheckCircleBroken {...props} />
    </Suspense>
  );
};

const LazyCheckCircle = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.CheckCircle }))
);

export const CheckCircle: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCheckCircle {...props} />
    </Suspense>
  );
};

const LazyCheckDone01 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.CheckDone01 }))
);

export const CheckDone01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCheckDone01 {...props} />
    </Suspense>
  );
};

const LazyCheckDone02 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.CheckDone02 }))
);

export const CheckDone02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCheckDone02 {...props} />
    </Suspense>
  );
};

const LazyCheckHeart = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.CheckHeart }))
);

export const CheckHeart: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCheckHeart {...props} />
    </Suspense>
  );
};

const LazyCheckSquareBroken = lazy(() =>
  import("./icons/general").then((module) => ({
    default: module.CheckSquareBroken,
  }))
);

export const CheckSquareBroken: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCheckSquareBroken {...props} />
    </Suspense>
  );
};

const LazyCheckSquare = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.CheckSquare }))
);

export const CheckSquare: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCheckSquare {...props} />
    </Suspense>
  );
};

const LazyCheckVerified01 = lazy(() =>
  import("./icons/general").then((module) => ({
    default: module.CheckVerified01,
  }))
);

export const CheckVerified01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCheckVerified01 {...props} />
    </Suspense>
  );
};

const LazyCheckVerified02 = lazy(() =>
  import("./icons/general").then((module) => ({
    default: module.CheckVerified02,
  }))
);

export const CheckVerified02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCheckVerified02 {...props} />
    </Suspense>
  );
};

const LazyCheckVerified03 = lazy(() =>
  import("./icons/general").then((module) => ({
    default: module.CheckVerified03,
  }))
);

export const CheckVerified03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCheckVerified03 {...props} />
    </Suspense>
  );
};

const LazyCheck = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Check }))
);

export const Check: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCheck {...props} />
    </Suspense>
  );
};

const LazyCloudBank01 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.CloudBank01 }))
);

export const CloudBank01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCloudBank01 {...props} />
    </Suspense>
  );
};

const LazyCloudBank02 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.CloudBank02 }))
);

export const CloudBank02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCloudBank02 {...props} />
    </Suspense>
  );
};

const LazyCopy01 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Copy01 }))
);

export const Copy01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCopy01 {...props} />
    </Suspense>
  );
};

const LazyCopy02 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Copy02 }))
);

export const Copy02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCopy02 {...props} />
    </Suspense>
  );
};

const LazyCopy03 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Copy03 }))
);

export const Copy03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCopy03 {...props} />
    </Suspense>
  );
};

const LazyCopy04 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Copy04 }))
);

export const Copy04: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCopy04 {...props} />
    </Suspense>
  );
};

const LazyCopy05 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Copy05 }))
);

export const Copy05: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCopy05 {...props} />
    </Suspense>
  );
};

const LazyCopy06 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Copy06 }))
);

export const Copy06: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCopy06 {...props} />
    </Suspense>
  );
};

const LazyCopy07 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Copy07 }))
);

export const Copy07: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCopy07 {...props} />
    </Suspense>
  );
};

const LazyDivide01 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Divide01 }))
);

export const Divide01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyDivide01 {...props} />
    </Suspense>
  );
};

const LazyDivide02 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Divide02 }))
);

export const Divide02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyDivide02 {...props} />
    </Suspense>
  );
};

const LazyDivide03 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Divide03 }))
);

export const Divide03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyDivide03 {...props} />
    </Suspense>
  );
};

const LazyDotsGrid = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.DotsGrid }))
);

export const DotsGrid: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyDotsGrid {...props} />
    </Suspense>
  );
};

const LazyDotsHorizontal = lazy(() =>
  import("./icons/general").then((module) => ({
    default: module.DotsHorizontal,
  }))
);

export const DotsHorizontal: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyDotsHorizontal {...props} />
    </Suspense>
  );
};

const LazyDotsVertical = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.DotsVertical }))
);

export const DotsVertical: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyDotsVertical {...props} />
    </Suspense>
  );
};

const LazyDownload01 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Download01 }))
);

export const Download01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyDownload01 {...props} />
    </Suspense>
  );
};

const LazyDownload02 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Download02 }))
);

export const Download02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyDownload02 {...props} />
    </Suspense>
  );
};

const LazyDownload04 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Download04 }))
);

export const Download04: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyDownload04 {...props} />
    </Suspense>
  );
};

const LazyDownloadCloud01 = lazy(() =>
  import("./icons/general").then((module) => ({
    default: module.DownloadCloud01,
  }))
);

export const DownloadCloud01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyDownloadCloud01 {...props} />
    </Suspense>
  );
};

const LazyDownloadCloud02 = lazy(() =>
  import("./icons/general").then((module) => ({
    default: module.DownloadCloud02,
  }))
);

export const DownloadCloud02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyDownloadCloud02 {...props} />
    </Suspense>
  );
};

const LazyEdit01 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Edit01 }))
);

export const Edit01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyEdit01 {...props} />
    </Suspense>
  );
};

const LazyEdit02 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Edit02 }))
);

export const Edit02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyEdit02 {...props} />
    </Suspense>
  );
};

const LazyEdit03 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Edit03 }))
);

export const Edit03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyEdit03 {...props} />
    </Suspense>
  );
};

const LazyEdit04 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Edit04 }))
);

export const Edit04: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyEdit04 {...props} />
    </Suspense>
  );
};

const LazyEdit05 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Edit05 }))
);

export const Edit05: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyEdit05 {...props} />
    </Suspense>
  );
};

const LazyEqualNot = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.EqualNot }))
);

export const EqualNot: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyEqualNot {...props} />
    </Suspense>
  );
};

const LazyEqual = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Equal }))
);

export const Equal: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyEqual {...props} />
    </Suspense>
  );
};

const LazyEyeOff = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.EyeOff }))
);

export const EyeOff: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyEyeOff {...props} />
    </Suspense>
  );
};

const LazyEye = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Eye }))
);

export const Eye: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyEye {...props} />
    </Suspense>
  );
};

const LazyFilterFunnel01 = lazy(() =>
  import("./icons/general").then((module) => ({
    default: module.FilterFunnel01,
  }))
);

export const FilterFunnel01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFilterFunnel01 {...props} />
    </Suspense>
  );
};

const LazyFilterFunnel02 = lazy(() =>
  import("./icons/general").then((module) => ({
    default: module.FilterFunnel02,
  }))
);

export const FilterFunnel02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFilterFunnel02 {...props} />
    </Suspense>
  );
};

const LazyFilterLines = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.FilterLines }))
);

export const FilterLines: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFilterLines {...props} />
    </Suspense>
  );
};

const LazyGoogleChrome = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.GoogleChrome }))
);

export const GoogleChrome: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyGoogleChrome {...props} />
    </Suspense>
  );
};

const LazyHome01 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Home01 }))
);

export const Home01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyHome01 {...props} />
    </Suspense>
  );
};

const LazyHome02 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Home02 }))
);

export const Home02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyHome02 {...props} />
    </Suspense>
  );
};

const LazyHome03 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Home03 }))
);

export const Home03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyHome03 {...props} />
    </Suspense>
  );
};

const LazyHome04 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Home04 }))
);

export const Home04: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyHome04 {...props} />
    </Suspense>
  );
};

const LazyHome05 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Home05 }))
);

export const Home05: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyHome05 {...props} />
    </Suspense>
  );
};

const LazyHomeLine = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.HomeLine }))
);

export const HomeLine: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyHomeLine {...props} />
    </Suspense>
  );
};

const LazyHomeSmile = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.HomeSmile }))
);

export const HomeSmile: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyHomeSmile {...props} />
    </Suspense>
  );
};

const LazyHash01 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Hash01 }))
);

export const Hash01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyHash01 {...props} />
    </Suspense>
  );
};

const LazyHash02 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Hash02 }))
);

export const Hash02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyHash02 {...props} />
    </Suspense>
  );
};

const LazyHeartCircle = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.HeartCircle }))
);

export const HeartCircle: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyHeartCircle {...props} />
    </Suspense>
  );
};

const LazyHeartHand = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.HeartHand }))
);

export const HeartHand: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyHeartHand {...props} />
    </Suspense>
  );
};

const LazyHeartOctagon = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.HeartOctagon }))
);

export const HeartOctagon: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyHeartOctagon {...props} />
    </Suspense>
  );
};

const LazyHeartRounded = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.HeartRounded }))
);

export const HeartRounded: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyHeartRounded {...props} />
    </Suspense>
  );
};

const LazyHeartSquare = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.HeartSquare }))
);

export const HeartSquare: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyHeartSquare {...props} />
    </Suspense>
  );
};

const LazyHeart = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Heart }))
);

export const Heart: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyHeart {...props} />
    </Suspense>
  );
};

const LazyHearts = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Hearts }))
);

export const Hearts: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyHearts {...props} />
    </Suspense>
  );
};

const LazyHelpCircle = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.HelpCircle }))
);

export const HelpCircle: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyHelpCircle {...props} />
    </Suspense>
  );
};

const LazyHelpHexagon = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.HelpHexagon }))
);

export const HelpHexagon: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyHelpHexagon {...props} />
    </Suspense>
  );
};

const LazyHelpOctagon1 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.HelpOctagon1 }))
);

export const HelpOctagon1: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyHelpOctagon1 {...props} />
    </Suspense>
  );
};

const LazyHelpOctagon = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.HelpOctagon }))
);

export const HelpOctagon: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyHelpOctagon {...props} />
    </Suspense>
  );
};

const LazyHelpSquare = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.HelpSquare }))
);

export const HelpSquare: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyHelpSquare {...props} />
    </Suspense>
  );
};

const LazyInfoCircle = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.InfoCircle }))
);

export const InfoCircle: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyInfoCircle {...props} />
    </Suspense>
  );
};

const LazyInfoHexagon = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.InfoHexagon }))
);

export const InfoHexagon: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyInfoHexagon {...props} />
    </Suspense>
  );
};

const LazyInfoOctagon = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.InfoOctagon }))
);

export const InfoOctagon: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyInfoOctagon {...props} />
    </Suspense>
  );
};

const LazyInfoSquare = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.InfoSquare }))
);

export const InfoSquare: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyInfoSquare {...props} />
    </Suspense>
  );
};

const LazyLifeBuoy01 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.LifeBuoy01 }))
);

export const LifeBuoy01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLifeBuoy01 {...props} />
    </Suspense>
  );
};

const LazyLifeBuoy02 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.LifeBuoy02 }))
);

export const LifeBuoy02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLifeBuoy02 {...props} />
    </Suspense>
  );
};

const LazyLink01 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Link01 }))
);

export const Link01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLink01 {...props} />
    </Suspense>
  );
};

const LazyLink02 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Link02 }))
);

export const Link02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLink02 {...props} />
    </Suspense>
  );
};

const LazyLink03 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Link03 }))
);

export const Link03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLink03 {...props} />
    </Suspense>
  );
};

const LazyLink04 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Link04 }))
);

export const Link04: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLink04 {...props} />
    </Suspense>
  );
};

const LazyLink05 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Link05 }))
);

export const Link05: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLink05 {...props} />
    </Suspense>
  );
};

const LazyLinkBroken01 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.LinkBroken01 }))
);

export const LinkBroken01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLinkBroken01 {...props} />
    </Suspense>
  );
};

const LazyLinkBroken02 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.LinkBroken02 }))
);

export const LinkBroken02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLinkBroken02 {...props} />
    </Suspense>
  );
};

const LazyLinkExternal01 = lazy(() =>
  import("./icons/general").then((module) => ({
    default: module.LinkExternal01,
  }))
);

export const LinkExternal01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLinkExternal01 {...props} />
    </Suspense>
  );
};

const LazyLinkExternal02 = lazy(() =>
  import("./icons/general").then((module) => ({
    default: module.LinkExternal02,
  }))
);

export const LinkExternal02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLinkExternal02 {...props} />
    </Suspense>
  );
};

const LazyLoading01 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Loading01 }))
);

export const Loading01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLoading01 {...props} />
    </Suspense>
  );
};

const LazyLoading02 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Loading02 }))
);

export const Loading02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLoading02 {...props} />
    </Suspense>
  );
};

const LazyLoading03 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Loading03 }))
);

export const Loading03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLoading03 {...props} />
    </Suspense>
  );
};

const LazyLogin01 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Login01 }))
);

export const Login01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLogin01 {...props} />
    </Suspense>
  );
};

const LazyLogin02 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Login02 }))
);

export const Login02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLogin02 {...props} />
    </Suspense>
  );
};

const LazyLogin03 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Login03 }))
);

export const Login03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLogin03 {...props} />
    </Suspense>
  );
};

const LazyLogin04 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Login04 }))
);

export const Login04: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLogin04 {...props} />
    </Suspense>
  );
};

const LazyLogout01 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Logout01 }))
);

export const Logout01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLogout01 {...props} />
    </Suspense>
  );
};

const LazyLogout02 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Logout02 }))
);

export const Logout02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLogout02 {...props} />
    </Suspense>
  );
};

const LazyLogout03 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Logout03 }))
);

export const Logout03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLogout03 {...props} />
    </Suspense>
  );
};

const LazyLogout04 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Logout04 }))
);

export const Logout04: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLogout04 {...props} />
    </Suspense>
  );
};

const LazyMedicalCircle = lazy(() =>
  import("./icons/general").then((module) => ({
    default: module.MedicalCircle,
  }))
);

export const MedicalCircle: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMedicalCircle {...props} />
    </Suspense>
  );
};

const LazyMedicalCross = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.MedicalCross }))
);

export const MedicalCross: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMedicalCross {...props} />
    </Suspense>
  );
};

const LazyMedicalSquare = lazy(() =>
  import("./icons/general").then((module) => ({
    default: module.MedicalSquare,
  }))
);

export const MedicalSquare: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMedicalSquare {...props} />
    </Suspense>
  );
};

const LazyMenu01 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Menu01 }))
);

export const Menu01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMenu01 {...props} />
    </Suspense>
  );
};

const LazyMenu02 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Menu02 }))
);

export const Menu02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMenu02 {...props} />
    </Suspense>
  );
};

const LazyMenu03 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Menu03 }))
);

export const Menu03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMenu03 {...props} />
    </Suspense>
  );
};

const LazyMenu04 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Menu04 }))
);

export const Menu04: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMenu04 {...props} />
    </Suspense>
  );
};

const LazyMenu05 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Menu05 }))
);

export const Menu05: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMenu05 {...props} />
    </Suspense>
  );
};

const LazyMinusCircle = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.MinusCircle }))
);

export const MinusCircle: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMinusCircle {...props} />
    </Suspense>
  );
};

const LazyMinusSquare = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.MinusSquare }))
);

export const MinusSquare: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMinusSquare {...props} />
    </Suspense>
  );
};

const LazyMinus = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Minus }))
);

export const Minus: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMinus {...props} />
    </Suspense>
  );
};

const LazyPercent01 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Percent01 }))
);

export const Percent01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPercent01 {...props} />
    </Suspense>
  );
};

const LazyPercent02 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Percent02 }))
);

export const Percent02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPercent02 {...props} />
    </Suspense>
  );
};

const LazyPercent03 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Percent03 }))
);

export const Percent03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPercent03 {...props} />
    </Suspense>
  );
};

const LazyPin01 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Pin01 }))
);

export const Pin01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPin01 {...props} />
    </Suspense>
  );
};

const LazyPin02 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Pin02 }))
);

export const Pin02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPin02 {...props} />
    </Suspense>
  );
};

const LazyPlaceholder = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Placeholder }))
);

export const Placeholder: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPlaceholder {...props} />
    </Suspense>
  );
};

const LazyPlusCircle = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.PlusCircle }))
);

export const PlusCircle: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPlusCircle {...props} />
    </Suspense>
  );
};

const LazyPlusSquare = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.PlusSquare }))
);

export const PlusSquare: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPlusSquare {...props} />
    </Suspense>
  );
};

const LazyPlus = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Plus }))
);

export const Plus: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPlus {...props} />
    </Suspense>
  );
};

const LazySave01 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Save01 }))
);

export const Save01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazySave01 {...props} />
    </Suspense>
  );
};

const LazySave02 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Save02 }))
);

export const Save02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazySave02 {...props} />
    </Suspense>
  );
};

const LazySave03 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Save03 }))
);

export const Save03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazySave03 {...props} />
    </Suspense>
  );
};

const LazySearchLG = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.SearchLG }))
);

export const SearchLG: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazySearchLG {...props} />
    </Suspense>
  );
};

const LazySearchMD = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.SearchMD }))
);

export const SearchMD: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazySearchMD {...props} />
    </Suspense>
  );
};

const LazySearchRefraction = lazy(() =>
  import("./icons/general").then((module) => ({
    default: module.SearchRefraction,
  }))
);

export const SearchRefraction: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazySearchRefraction {...props} />
    </Suspense>
  );
};

const LazySearchSM = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.SearchSM }))
);

export const SearchSM: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazySearchSM {...props} />
    </Suspense>
  );
};

const LazySettings01 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Settings01 }))
);

export const Settings01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazySettings01 {...props} />
    </Suspense>
  );
};

const LazySettings02 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Settings02 }))
);

export const Settings02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazySettings02 {...props} />
    </Suspense>
  );
};

const LazySettings03 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Settings03 }))
);

export const Settings03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazySettings03 {...props} />
    </Suspense>
  );
};

const LazySettings04 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Settings04 }))
);

export const Settings04: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazySettings04 {...props} />
    </Suspense>
  );
};

const LazyShare01 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Share01 }))
);

export const Share01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyShare01 {...props} />
    </Suspense>
  );
};

const LazyShare02 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Share02 }))
);

export const Share02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyShare02 {...props} />
    </Suspense>
  );
};

const LazyShare03 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Share03 }))
);

export const Share03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyShare03 {...props} />
    </Suspense>
  );
};

const LazyShare04 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Share04 }))
);

export const Share04: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyShare04 {...props} />
    </Suspense>
  );
};

const LazyShare05 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Share05 }))
);

export const Share05: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyShare05 {...props} />
    </Suspense>
  );
};

const LazyShare06 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Share06 }))
);

export const Share06: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyShare06 {...props} />
    </Suspense>
  );
};

const LazyShare07 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Share07 }))
);

export const Share07: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyShare07 {...props} />
    </Suspense>
  );
};

const LazySlashCircle01 = lazy(() =>
  import("./icons/general").then((module) => ({
    default: module.SlashCircle01,
  }))
);

export const SlashCircle01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazySlashCircle01 {...props} />
    </Suspense>
  );
};

const LazySlashCircle02 = lazy(() =>
  import("./icons/general").then((module) => ({
    default: module.SlashCircle02,
  }))
);

export const SlashCircle02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazySlashCircle02 {...props} />
    </Suspense>
  );
};

const LazySlashDivider = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.SlashDivider }))
);

export const SlashDivider: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazySlashDivider {...props} />
    </Suspense>
  );
};

const LazySlashOctagon = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.SlashOctagon }))
);

export const SlashOctagon: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazySlashOctagon {...props} />
    </Suspense>
  );
};

const LazySpeedometer01 = lazy(() =>
  import("./icons/general").then((module) => ({
    default: module.Speedometer01,
  }))
);

export const Speedometer01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazySpeedometer01 {...props} />
    </Suspense>
  );
};

const LazySpeedometer02 = lazy(() =>
  import("./icons/general").then((module) => ({
    default: module.Speedometer02,
  }))
);

export const Speedometer02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazySpeedometer02 {...props} />
    </Suspense>
  );
};

const LazySpeedometer03 = lazy(() =>
  import("./icons/general").then((module) => ({
    default: module.Speedometer03,
  }))
);

export const Speedometer03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazySpeedometer03 {...props} />
    </Suspense>
  );
};

const LazySpeedometer04 = lazy(() =>
  import("./icons/general").then((module) => ({
    default: module.Speedometer04,
  }))
);

export const Speedometer04: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazySpeedometer04 {...props} />
    </Suspense>
  );
};

const LazyTarget01 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Target01 }))
);

export const Target01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyTarget01 {...props} />
    </Suspense>
  );
};

const LazyTarget02 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Target02 }))
);

export const Target02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyTarget02 {...props} />
    </Suspense>
  );
};

const LazyTarget03 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Target03 }))
);

export const Target03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyTarget03 {...props} />
    </Suspense>
  );
};

const LazyTarget04 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Target04 }))
);

export const Target04: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyTarget04 {...props} />
    </Suspense>
  );
};

const LazyTarget05 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Target05 }))
);

export const Target05: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyTarget05 {...props} />
    </Suspense>
  );
};

const LazyToggle01Left = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Toggle01Left }))
);

export const Toggle01Left: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyToggle01Left {...props} />
    </Suspense>
  );
};

const LazyToggle01Right = lazy(() =>
  import("./icons/general").then((module) => ({
    default: module.Toggle01Right,
  }))
);

export const Toggle01Right: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyToggle01Right {...props} />
    </Suspense>
  );
};

const LazyToggle02Left = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Toggle02Left }))
);

export const Toggle02Left: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyToggle02Left {...props} />
    </Suspense>
  );
};

const LazyToggle02Right = lazy(() =>
  import("./icons/general").then((module) => ({
    default: module.Toggle02Right,
  }))
);

export const Toggle02Right: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyToggle02Right {...props} />
    </Suspense>
  );
};

const LazyToggle03Left = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Toggle03Left }))
);

export const Toggle03Left: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyToggle03Left {...props} />
    </Suspense>
  );
};

const LazyToggle03Right = lazy(() =>
  import("./icons/general").then((module) => ({
    default: module.Toggle03Right,
  }))
);

export const Toggle03Right: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyToggle03Right {...props} />
    </Suspense>
  );
};

const LazyTool01 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Tool01 }))
);

export const Tool01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyTool01 {...props} />
    </Suspense>
  );
};

const LazyTool02 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Tool02 }))
);

export const Tool02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyTool02 {...props} />
    </Suspense>
  );
};

const LazyTranslate01 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Translate01 }))
);

export const Translate01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyTranslate01 {...props} />
    </Suspense>
  );
};

const LazyTranslate02 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Translate02 }))
);

export const Translate02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyTranslate02 {...props} />
    </Suspense>
  );
};

const LazyTrash01 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Trash01 }))
);

export const Trash01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyTrash01 {...props} />
    </Suspense>
  );
};

const LazyTrash02 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Trash02 }))
);

export const Trash02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyTrash02 {...props} />
    </Suspense>
  );
};

const LazyTrash03 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Trash03 }))
);

export const Trash03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyTrash03 {...props} />
    </Suspense>
  );
};

const LazyTrash04 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Trash04 }))
);

export const Trash04: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyTrash04 {...props} />
    </Suspense>
  );
};

const LazyUpload01 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Upload01 }))
);

export const Upload01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyUpload01 {...props} />
    </Suspense>
  );
};

const LazyUpload02 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Upload02 }))
);

export const Upload02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyUpload02 {...props} />
    </Suspense>
  );
};

const LazyUpload03 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Upload03 }))
);

export const Upload03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyUpload03 {...props} />
    </Suspense>
  );
};

const LazyUpload04 = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Upload04 }))
);

export const Upload04: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyUpload04 {...props} />
    </Suspense>
  );
};

const LazyUploadCloud01 = lazy(() =>
  import("./icons/general").then((module) => ({
    default: module.UploadCloud01,
  }))
);

export const UploadCloud01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyUploadCloud01 {...props} />
    </Suspense>
  );
};

const LazyUploadCloud02 = lazy(() =>
  import("./icons/general").then((module) => ({
    default: module.UploadCloud02,
  }))
);

export const UploadCloud02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyUploadCloud02 {...props} />
    </Suspense>
  );
};

const LazyVirus = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Virus }))
);

export const Virus: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyVirus {...props} />
    </Suspense>
  );
};

const LazyXCircle = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.XCircle }))
);

export const XCircle: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyXCircle {...props} />
    </Suspense>
  );
};

const LazyXClose = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.XClose }))
);

export const XClose: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyXClose {...props} />
    </Suspense>
  );
};

const LazyXSquare = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.XSquare }))
);

export const XSquare: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyXSquare {...props} />
    </Suspense>
  );
};

const LazyX = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.X }))
);

export const X: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyX {...props} />
    </Suspense>
  );
};

const LazyZapCircle = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.ZapCircle }))
);

export const ZapCircle: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyZapCircle {...props} />
    </Suspense>
  );
};

const LazyZapFast = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.ZapFast }))
);

export const ZapFast: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyZapFast {...props} />
    </Suspense>
  );
};

const LazyZapOff = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.ZapOff }))
);

export const ZapOff: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyZapOff {...props} />
    </Suspense>
  );
};

const LazyZap = lazy(() =>
  import("./icons/general").then((module) => ({ default: module.Zap }))
);

export const Zap: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyZap {...props} />
    </Suspense>
  );
};

const LazyAlignBottom01 = lazy(() =>
  import("./icons/layout").then((module) => ({ default: module.AlignBottom01 }))
);

export const AlignBottom01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyAlignBottom01 {...props} />
    </Suspense>
  );
};

const LazyAlignBottom02 = lazy(() =>
  import("./icons/layout").then((module) => ({ default: module.AlignBottom02 }))
);

export const AlignBottom02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyAlignBottom02 {...props} />
    </Suspense>
  );
};

const LazyAlignHorizontalCenter02 = lazy(() =>
  import("./icons/layout").then((module) => ({
    default: module.AlignHorizontalCenter02,
  }))
);

export const AlignHorizontalCenter02: FC<SVGComponentProps> = ({
  ...props
}) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyAlignHorizontalCenter02 {...props} />
    </Suspense>
  );
};

const LazyAlignLeft01 = lazy(() =>
  import("./icons/layout").then((module) => ({ default: module.AlignLeft01 }))
);

export const AlignLeft01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyAlignLeft01 {...props} />
    </Suspense>
  );
};

const LazyAlignLeft02 = lazy(() =>
  import("./icons/layout").then((module) => ({ default: module.AlignLeft02 }))
);

export const AlignLeft02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyAlignLeft02 {...props} />
    </Suspense>
  );
};

const LazyAlertRight01 = lazy(() =>
  import("./icons/layout").then((module) => ({ default: module.AlertRight01 }))
);

export const AlertRight01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyAlertRight01 {...props} />
    </Suspense>
  );
};

const LazyAlignRight02 = lazy(() =>
  import("./icons/layout").then((module) => ({ default: module.AlignRight02 }))
);

export const AlignRight02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyAlignRight02 {...props} />
    </Suspense>
  );
};

const LazyAlignTopArrow01 = lazy(() =>
  import("./icons/layout").then((module) => ({
    default: module.AlignTopArrow01,
  }))
);

export const AlignTopArrow01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyAlignTopArrow01 {...props} />
    </Suspense>
  );
};

const LazyAlignTopArrow02 = lazy(() =>
  import("./icons/layout").then((module) => ({
    default: module.AlignTopArrow02,
  }))
);

export const AlignTopArrow02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyAlignTopArrow02 {...props} />
    </Suspense>
  );
};

const LazyAlignVerticalCenter01 = lazy(() =>
  import("./icons/layout").then((module) => ({
    default: module.AlignVerticalCenter01,
  }))
);

export const AlignVerticalCenter01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyAlignVerticalCenter01 {...props} />
    </Suspense>
  );
};

const LazyAlignVerticalCenter02 = lazy(() =>
  import("./icons/layout").then((module) => ({
    default: module.AlignVerticalCenter02,
  }))
);

export const AlignVerticalCenter02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyAlignVerticalCenter02 {...props} />
    </Suspense>
  );
};

const LazyColumns02 = lazy(() =>
  import("./icons/layout").then((module) => ({ default: module.Columns02 }))
);

export const Columns02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyColumns02 {...props} />
    </Suspense>
  );
};

const LazyColumns03 = lazy(() =>
  import("./icons/layout").then((module) => ({ default: module.Columns03 }))
);

export const Columns03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyColumns03 {...props} />
    </Suspense>
  );
};

const LazyDistributeSpacingHorizontally = lazy(() =>
  import("./icons/layout").then((module) => ({
    default: module.DistributeSpacingHorizontally,
  }))
);

export const DistributeSpacingHorizontally: FC<SVGComponentProps> = ({
  ...props
}) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyDistributeSpacingHorizontally {...props} />
    </Suspense>
  );
};

const LazyDistributeSpacingVertical = lazy(() =>
  import("./icons/layout").then((module) => ({
    default: module.DistributeSpacingVertical,
  }))
);

export const DistributeSpacingVertical: FC<SVGComponentProps> = ({
  ...props
}) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyDistributeSpacingVertical {...props} />
    </Suspense>
  );
};

const LazyDivider = lazy(() =>
  import("./icons/layout").then((module) => ({ default: module.Divider }))
);

export const Divider: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyDivider {...props} />
    </Suspense>
  );
};

const LazyFlexAlignBottom = lazy(() =>
  import("./icons/layout").then((module) => ({
    default: module.FlexAlignBottom,
  }))
);

export const FlexAlignBottom: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFlexAlignBottom {...props} />
    </Suspense>
  );
};

const LazyFlexAlignLeft = lazy(() =>
  import("./icons/layout").then((module) => ({ default: module.FlexAlignLeft }))
);

export const FlexAlignLeft: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFlexAlignLeft {...props} />
    </Suspense>
  );
};

const LazyFlexAlignRight = lazy(() =>
  import("./icons/layout").then((module) => ({
    default: module.FlexAlignRight,
  }))
);

export const FlexAlignRight: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFlexAlignRight {...props} />
    </Suspense>
  );
};

const LazyFlexAlignTop = lazy(() =>
  import("./icons/layout").then((module) => ({ default: module.FlexAlignTop }))
);

export const FlexAlignTop: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFlexAlignTop {...props} />
    </Suspense>
  );
};

const LazyGrid01 = lazy(() =>
  import("./icons/layout").then((module) => ({ default: module.Grid01 }))
);

export const Grid01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyGrid01 {...props} />
    </Suspense>
  );
};

const LazyGrid02 = lazy(() =>
  import("./icons/layout").then((module) => ({ default: module.Grid02 }))
);

export const Grid02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyGrid02 {...props} />
    </Suspense>
  );
};

const LazyGrid03 = lazy(() =>
  import("./icons/layout").then((module) => ({ default: module.Grid03 }))
);

export const Grid03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyGrid03 {...props} />
    </Suspense>
  );
};

const LazyGridDotsBlank = lazy(() =>
  import("./icons/layout").then((module) => ({ default: module.GridDotsBlank }))
);

export const GridDotsBlank: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyGridDotsBlank {...props} />
    </Suspense>
  );
};

const LazyGridDotsBottom = lazy(() =>
  import("./icons/layout").then((module) => ({
    default: module.GridDotsBottom,
  }))
);

export const GridDotsBottom: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyGridDotsBottom {...props} />
    </Suspense>
  );
};

const LazyGridDotsHorizontalCenter = lazy(() =>
  import("./icons/layout").then((module) => ({
    default: module.GridDotsHorizontalCenter,
  }))
);

export const GridDotsHorizontalCenter: FC<SVGComponentProps> = ({
  ...props
}) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyGridDotsHorizontalCenter {...props} />
    </Suspense>
  );
};

const LazyGridDotsLeft = lazy(() =>
  import("./icons/layout").then((module) => ({ default: module.GridDotsLeft }))
);

export const GridDotsLeft: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyGridDotsLeft {...props} />
    </Suspense>
  );
};

const LazyGridDotsOuter = lazy(() =>
  import("./icons/layout").then((module) => ({ default: module.GridDotsOuter }))
);

export const GridDotsOuter: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyGridDotsOuter {...props} />
    </Suspense>
  );
};

const LazyGridDotsRight = lazy(() =>
  import("./icons/layout").then((module) => ({ default: module.GridDotsRight }))
);

export const GridDotsRight: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyGridDotsRight {...props} />
    </Suspense>
  );
};

const LazyGridDotsTop = lazy(() =>
  import("./icons/layout").then((module) => ({ default: module.GridDotsTop }))
);

export const GridDotsTop: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyGridDotsTop {...props} />
    </Suspense>
  );
};

const LazyGridDotsVerticalCenter = lazy(() =>
  import("./icons/layout").then((module) => ({
    default: module.GridDotsVerticalCenter,
  }))
);

export const GridDotsVerticalCenter: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyGridDotsVerticalCenter {...props} />
    </Suspense>
  );
};

const LazyGrid = lazy(() =>
  import("./icons/layout").then((module) => ({ default: module.Grid }))
);

export const Grid: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyGrid {...props} />
    </Suspense>
  );
};

const LazyIntersectCircle = lazy(() =>
  import("./icons/layout").then((module) => ({
    default: module.IntersectCircle,
  }))
);

export const IntersectCircle: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyIntersectCircle {...props} />
    </Suspense>
  );
};

const LazyIntersectSquare = lazy(() =>
  import("./icons/layout").then((module) => ({
    default: module.IntersectSquare,
  }))
);

export const IntersectSquare: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyIntersectSquare {...props} />
    </Suspense>
  );
};

const LazyLayerSingle = lazy(() =>
  import("./icons/layout").then((module) => ({ default: module.LayerSingle }))
);

export const LayerSingle: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLayerSingle {...props} />
    </Suspense>
  );
};

const LazyLayersThree01 = lazy(() =>
  import("./icons/layout").then((module) => ({ default: module.LayersThree01 }))
);

export const LayersThree01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLayersThree01 {...props} />
    </Suspense>
  );
};

const LazyLayersThree02 = lazy(() =>
  import("./icons/layout").then((module) => ({ default: module.LayersThree02 }))
);

export const LayersThree02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLayersThree02 {...props} />
    </Suspense>
  );
};

const LazyLayersTwo01 = lazy(() =>
  import("./icons/layout").then((module) => ({ default: module.LayersTwo01 }))
);

export const LayersTwo01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLayersTwo01 {...props} />
    </Suspense>
  );
};

const LazyLayersTwo02 = lazy(() =>
  import("./icons/layout").then((module) => ({ default: module.LayersTwo02 }))
);

export const LayersTwo02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLayersTwo02 {...props} />
    </Suspense>
  );
};

const LazyLayerAlt01 = lazy(() =>
  import("./icons/layout").then((module) => ({ default: module.LayerAlt01 }))
);

export const LayerAlt01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLayerAlt01 {...props} />
    </Suspense>
  );
};

const LazyLayerAlt02 = lazy(() =>
  import("./icons/layout").then((module) => ({ default: module.LayerAlt02 }))
);

export const LayerAlt02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLayerAlt02 {...props} />
    </Suspense>
  );
};

const LazyLayerAlt03 = lazy(() =>
  import("./icons/layout").then((module) => ({ default: module.LayerAlt03 }))
);

export const LayerAlt03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLayerAlt03 {...props} />
    </Suspense>
  );
};

const LazyLayerAlt04 = lazy(() =>
  import("./icons/layout").then((module) => ({ default: module.LayerAlt04 }))
);

export const LayerAlt04: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLayerAlt04 {...props} />
    </Suspense>
  );
};

const LazyLayoutBottom = lazy(() =>
  import("./icons/layout").then((module) => ({ default: module.LayoutBottom }))
);

export const LayoutBottom: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLayoutBottom {...props} />
    </Suspense>
  );
};

const LazyLayoutGrid01 = lazy(() =>
  import("./icons/layout").then((module) => ({ default: module.LayoutGrid01 }))
);

export const LayoutGrid01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLayoutGrid01 {...props} />
    </Suspense>
  );
};

const LazyLayoutGrid02 = lazy(() =>
  import("./icons/layout").then((module) => ({ default: module.LayoutGrid02 }))
);

export const LayoutGrid02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLayoutGrid02 {...props} />
    </Suspense>
  );
};

const LazyLayoutLeft = lazy(() =>
  import("./icons/layout").then((module) => ({ default: module.LayoutLeft }))
);

export const LayoutLeft: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLayoutLeft {...props} />
    </Suspense>
  );
};

const LazyLayoutRight = lazy(() =>
  import("./icons/layout").then((module) => ({ default: module.LayoutRight }))
);

export const LayoutRight: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLayoutRight {...props} />
    </Suspense>
  );
};

const LazyLayoutTop = lazy(() =>
  import("./icons/layout").then((module) => ({ default: module.LayoutTop }))
);

export const LayoutTop: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLayoutTop {...props} />
    </Suspense>
  );
};

const LazyList = lazy(() =>
  import("./icons/layout").then((module) => ({ default: module.List }))
);

export const List: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyList {...props} />
    </Suspense>
  );
};

const LazyMaximize01 = lazy(() =>
  import("./icons/layout").then((module) => ({ default: module.Maximize01 }))
);

export const Maximize01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMaximize01 {...props} />
    </Suspense>
  );
};

const LazyMaximize02 = lazy(() =>
  import("./icons/layout").then((module) => ({ default: module.Maximize02 }))
);

export const Maximize02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMaximize02 {...props} />
    </Suspense>
  );
};

const LazyMinimize01 = lazy(() =>
  import("./icons/layout").then((module) => ({ default: module.Minimize01 }))
);

export const Minimize01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMinimize01 {...props} />
    </Suspense>
  );
};

const LazyMinimize02 = lazy(() =>
  import("./icons/layout").then((module) => ({ default: module.Minimize02 }))
);

export const Minimize02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMinimize02 {...props} />
    </Suspense>
  );
};

const LazyRows01 = lazy(() =>
  import("./icons/layout").then((module) => ({ default: module.Rows01 }))
);

export const Rows01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyRows01 {...props} />
    </Suspense>
  );
};

const LazyRows02 = lazy(() =>
  import("./icons/layout").then((module) => ({ default: module.Rows02 }))
);

export const Rows02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyRows02 {...props} />
    </Suspense>
  );
};

const LazyRows03 = lazy(() =>
  import("./icons/layout").then((module) => ({ default: module.Rows03 }))
);

export const Rows03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyRows03 {...props} />
    </Suspense>
  );
};

const LazySpacingHeight01 = lazy(() =>
  import("./icons/layout").then((module) => ({
    default: module.SpacingHeight01,
  }))
);

export const SpacingHeight01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazySpacingHeight01 {...props} />
    </Suspense>
  );
};

const LazySpacingHeight02 = lazy(() =>
  import("./icons/layout").then((module) => ({
    default: module.SpacingHeight02,
  }))
);

export const SpacingHeight02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazySpacingHeight02 {...props} />
    </Suspense>
  );
};

const LazySpacingWidth01 = lazy(() =>
  import("./icons/layout").then((module) => ({
    default: module.SpacingWidth01,
  }))
);

export const SpacingWidth01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazySpacingWidth01 {...props} />
    </Suspense>
  );
};

const LazySpacingWidth02 = lazy(() =>
  import("./icons/layout").then((module) => ({
    default: module.SpacingWidth02,
  }))
);

export const SpacingWidth02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazySpacingWidth02 {...props} />
    </Suspense>
  );
};

const LazyTable = lazy(() =>
  import("./icons/layout").then((module) => ({ default: module.Table }))
);

export const Table: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyTable {...props} />
    </Suspense>
  );
};

const LazyBus = lazy(() =>
  import("./icons/maps").then((module) => ({ default: module.Bus }))
);

export const Bus: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBus {...props} />
    </Suspense>
  );
};

const LazyCompass01 = lazy(() =>
  import("./icons/maps").then((module) => ({ default: module.Compass01 }))
);

export const Compass01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCompass01 {...props} />
    </Suspense>
  );
};

const LazyCompass02 = lazy(() =>
  import("./icons/maps").then((module) => ({ default: module.Compass02 }))
);

export const Compass02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCompass02 {...props} />
    </Suspense>
  );
};

const LazyCompass03 = lazy(() =>
  import("./icons/maps").then((module) => ({ default: module.Compass03 }))
);

export const Compass03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCompass03 {...props} />
    </Suspense>
  );
};

const LazyFlag01 = lazy(() =>
  import("./icons/maps").then((module) => ({ default: module.Flag01 }))
);

export const Flag01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFlag01 {...props} />
    </Suspense>
  );
};

const LazyFlag02 = lazy(() =>
  import("./icons/maps").then((module) => ({ default: module.Flag02 }))
);

export const Flag02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFlag02 {...props} />
    </Suspense>
  );
};

const LazyFlag03 = lazy(() =>
  import("./icons/maps").then((module) => ({ default: module.Flag03 }))
);

export const Flag03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFlag03 {...props} />
    </Suspense>
  );
};

const LazyFlag04 = lazy(() =>
  import("./icons/maps").then((module) => ({ default: module.Flag04 }))
);

export const Flag04: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFlag04 {...props} />
    </Suspense>
  );
};

const LazyFlag05 = lazy(() =>
  import("./icons/maps").then((module) => ({ default: module.Flag05 }))
);

export const Flag05: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFlag05 {...props} />
    </Suspense>
  );
};

const LazyFlag06 = lazy(() =>
  import("./icons/maps").then((module) => ({ default: module.Flag06 }))
);

export const Flag06: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFlag06 {...props} />
    </Suspense>
  );
};

const LazyGlobe01 = lazy(() =>
  import("./icons/maps").then((module) => ({ default: module.Globe01 }))
);

export const Globe01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyGlobe01 {...props} />
    </Suspense>
  );
};

const LazyGlobe02 = lazy(() =>
  import("./icons/maps").then((module) => ({ default: module.Globe02 }))
);

export const Globe02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyGlobe02 {...props} />
    </Suspense>
  );
};

const LazyGlobe03 = lazy(() =>
  import("./icons/maps").then((module) => ({ default: module.Globe03 }))
);

export const Globe03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyGlobe03 {...props} />
    </Suspense>
  );
};

const LazyGlobe04 = lazy(() =>
  import("./icons/maps").then((module) => ({ default: module.Globe04 }))
);

export const Globe04: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyGlobe04 {...props} />
    </Suspense>
  );
};

const LazyGlobe05 = lazy(() =>
  import("./icons/maps").then((module) => ({ default: module.Globe05 }))
);

export const Globe05: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyGlobe05 {...props} />
    </Suspense>
  );
};

const LazyGlobe06 = lazy(() =>
  import("./icons/maps").then((module) => ({ default: module.Globe06 }))
);

export const Globe06: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyGlobe06 {...props} />
    </Suspense>
  );
};

const LazyLuggage01 = lazy(() =>
  import("./icons/maps").then((module) => ({ default: module.Luggage01 }))
);

export const Luggage01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLuggage01 {...props} />
    </Suspense>
  );
};

const LazyLuggage02 = lazy(() =>
  import("./icons/maps").then((module) => ({ default: module.Luggage02 }))
);

export const Luggage02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLuggage02 {...props} />
    </Suspense>
  );
};

const LazyLuggage03 = lazy(() =>
  import("./icons/maps").then((module) => ({ default: module.Luggage03 }))
);

export const Luggage03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLuggage03 {...props} />
    </Suspense>
  );
};

const LazyMap01 = lazy(() =>
  import("./icons/maps").then((module) => ({ default: module.Map01 }))
);

export const Map01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMap01 {...props} />
    </Suspense>
  );
};

const LazyMap02 = lazy(() =>
  import("./icons/maps").then((module) => ({ default: module.Map02 }))
);

export const Map02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMap02 {...props} />
    </Suspense>
  );
};

const LazyMark = lazy(() =>
  import("./icons/maps").then((module) => ({ default: module.Mark }))
);

export const Mark: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMark {...props} />
    </Suspense>
  );
};

const LazyMarkerPin01 = lazy(() =>
  import("./icons/maps").then((module) => ({ default: module.MarkerPin01 }))
);

export const MarkerPin01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMarkerPin01 {...props} />
    </Suspense>
  );
};

const LazyMarkerPin02 = lazy(() =>
  import("./icons/maps").then((module) => ({ default: module.MarkerPin02 }))
);

export const MarkerPin02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMarkerPin02 {...props} />
    </Suspense>
  );
};

const LazyMarkerPin03 = lazy(() =>
  import("./icons/maps").then((module) => ({ default: module.MarkerPin03 }))
);

export const MarkerPin03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMarkerPin03 {...props} />
    </Suspense>
  );
};

const LazyMarkerPin04 = lazy(() =>
  import("./icons/maps").then((module) => ({ default: module.MarkerPin04 }))
);

export const MarkerPin04: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMarkerPin04 {...props} />
    </Suspense>
  );
};

const LazyMarkerPin05 = lazy(() =>
  import("./icons/maps").then((module) => ({ default: module.MarkerPin05 }))
);

export const MarkerPin05: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMarkerPin05 {...props} />
    </Suspense>
  );
};

const LazyMarkerPin06 = lazy(() =>
  import("./icons/maps").then((module) => ({ default: module.MarkerPin06 }))
);

export const MarkerPin06: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMarkerPin06 {...props} />
    </Suspense>
  );
};

const LazyNavigationPointer01 = lazy(() =>
  import("./icons/maps").then((module) => ({
    default: module.NavigationPointer01,
  }))
);

export const NavigationPointer01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyNavigationPointer01 {...props} />
    </Suspense>
  );
};

const LazyNavigationPointer02 = lazy(() =>
  import("./icons/maps").then((module) => ({
    default: module.NavigationPointer02,
  }))
);

export const NavigationPointer02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyNavigationPointer02 {...props} />
    </Suspense>
  );
};

const LazyNavigationPointerOff01 = lazy(() =>
  import("./icons/maps").then((module) => ({
    default: module.NavigationPointerOff01,
  }))
);

export const NavigationPointerOff01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyNavigationPointerOff01 {...props} />
    </Suspense>
  );
};

const LazyNavigationPointerOff02 = lazy(() =>
  import("./icons/maps").then((module) => ({
    default: module.NavigationPointerOff02,
  }))
);

export const NavigationPointerOff02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyNavigationPointerOff02 {...props} />
    </Suspense>
  );
};

const LazyPassport = lazy(() =>
  import("./icons/maps").then((module) => ({ default: module.Passport }))
);

export const Passport: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPassport {...props} />
    </Suspense>
  );
};

const LazyRocket01 = lazy(() =>
  import("./icons/maps").then((module) => ({ default: module.Rocket01 }))
);

export const Rocket01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyRocket01 {...props} />
    </Suspense>
  );
};

const LazyRocket02 = lazy(() =>
  import("./icons/maps").then((module) => ({ default: module.Rocket02 }))
);

export const Rocket02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyRocket02 {...props} />
    </Suspense>
  );
};

const LazyRoute = lazy(() =>
  import("./icons/maps").then((module) => ({ default: module.Route }))
);

export const Route: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyRoute {...props} />
    </Suspense>
  );
};

const LazyTicket01 = lazy(() =>
  import("./icons/maps").then((module) => ({ default: module.Ticket01 }))
);

export const Ticket01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyTicket01 {...props} />
    </Suspense>
  );
};

const LazyTicket02 = lazy(() =>
  import("./icons/maps").then((module) => ({ default: module.Ticket02 }))
);

export const Ticket02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyTicket02 {...props} />
    </Suspense>
  );
};

const LazyTrain = lazy(() =>
  import("./icons/maps").then((module) => ({ default: module.Train }))
);

export const Train: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyTrain {...props} />
    </Suspense>
  );
};

const LazyTram = lazy(() =>
  import("./icons/maps").then((module) => ({ default: module.Tram }))
);

export const Tram: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyTram {...props} />
    </Suspense>
  );
};

const LazyTruck01 = lazy(() =>
  import("./icons/maps").then((module) => ({ default: module.Truck01 }))
);

export const Truck01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyTruck01 {...props} />
    </Suspense>
  );
};

const LazyTruck02 = lazy(() =>
  import("./icons/maps").then((module) => ({ default: module.Truck02 }))
);

export const Truck02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyTruck02 {...props} />
    </Suspense>
  );
};

const LazyAirplay = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.Airplay,
  }))
);

export const Airplay: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyAirplay {...props} />
    </Suspense>
  );
};

const LazyAirpods = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.Airpods,
  }))
);

export const Airpods: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyAirpods {...props} />
    </Suspense>
  );
};

const LazyBatteryCharging01 = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.BatteryCharging01,
  }))
);

export const BatteryCharging01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBatteryCharging01 {...props} />
    </Suspense>
  );
};

const LazyBatteryCharging02 = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.BatteryCharging02,
  }))
);

export const BatteryCharging02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBatteryCharging02 {...props} />
    </Suspense>
  );
};

const LazyBatteryEmpty = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.BatteryEmpty,
  }))
);

export const BatteryEmpty: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBatteryEmpty {...props} />
    </Suspense>
  );
};

const LazyBatteryFull = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.BatteryFull,
  }))
);

export const BatteryFull: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBatteryFull {...props} />
    </Suspense>
  );
};

const LazyBatteryLow = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.BatteryLow,
  }))
);

export const BatteryLow: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBatteryLow {...props} />
    </Suspense>
  );
};

const LazyBatteryMid = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.BatteryMid,
  }))
);

export const BatteryMid: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBatteryMid {...props} />
    </Suspense>
  );
};

const LazyBluetoothConnect = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.BluetoothConnect,
  }))
);

export const BluetoothConnect: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBluetoothConnect {...props} />
    </Suspense>
  );
};

const LazyBatteryOn = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.BatteryOn,
  }))
);

export const BatteryOn: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBatteryOn {...props} />
    </Suspense>
  );
};

const LazyBluetoothSignal = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.BluetoothSignal,
  }))
);

export const BluetoothSignal: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBluetoothSignal {...props} />
    </Suspense>
  );
};

const LazyBluetooth = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.Bluetooth,
  }))
);

export const Bluetooth: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyBluetooth {...props} />
    </Suspense>
  );
};

const LazyChromeCast = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.ChromeCast,
  }))
);

export const ChromeCast: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyChromeCast {...props} />
    </Suspense>
  );
};

const LazyClapperBoard = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.ClapperBoard,
  }))
);

export const ClapperBoard: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyClapperBoard {...props} />
    </Suspense>
  );
};

const LazyDisc01 = lazy(() =>
  import("./icons/media-devices").then((module) => ({ default: module.Disc01 }))
);

export const Disc01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyDisc01 {...props} />
    </Suspense>
  );
};

const LazyDisc02 = lazy(() =>
  import("./icons/media-devices").then((module) => ({ default: module.Disc02 }))
);

export const Disc02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyDisc02 {...props} />
    </Suspense>
  );
};

const LazyFastBackward = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.FastBackward,
  }))
);

export const FastBackward: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFastBackward {...props} />
    </Suspense>
  );
};

const LazyFastForward = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.FastForward,
  }))
);

export const FastForward: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFastForward {...props} />
    </Suspense>
  );
};

const LazyFilm01 = lazy(() =>
  import("./icons/media-devices").then((module) => ({ default: module.Film01 }))
);

export const Film01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFilm01 {...props} />
    </Suspense>
  );
};

const LazyFilm02 = lazy(() =>
  import("./icons/media-devices").then((module) => ({ default: module.Film02 }))
);

export const Film02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFilm02 {...props} />
    </Suspense>
  );
};

const LazyFilm03 = lazy(() =>
  import("./icons/media-devices").then((module) => ({ default: module.Film03 }))
);

export const Film03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFilm03 {...props} />
    </Suspense>
  );
};

const LazyGamingPad01 = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.GamingPad01,
  }))
);

export const GamingPad01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyGamingPad01 {...props} />
    </Suspense>
  );
};

const LazyGamingPad02 = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.GamingPad02,
  }))
);

export const GamingPad02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyGamingPad02 {...props} />
    </Suspense>
  );
};

const LazyHardDrive = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.HardDrive,
  }))
);

export const HardDrive: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyHardDrive {...props} />
    </Suspense>
  );
};

const LazyHeadphones01 = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.Headphones01,
  }))
);

export const Headphones01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyHeadphones01 {...props} />
    </Suspense>
  );
};

const LazyHeadphones02 = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.Headphones02,
  }))
);

export const Headphones02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyHeadphones02 {...props} />
    </Suspense>
  );
};

const LazyKeyboard01 = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.Keyboard01,
  }))
);

export const Keyboard01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyKeyboard01 {...props} />
    </Suspense>
  );
};

const LazyKeyboard02 = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.Keyboard02,
  }))
);

export const Keyboard02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyKeyboard02 {...props} />
    </Suspense>
  );
};

const LazyLaptop01 = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.Laptop01,
  }))
);

export const Laptop01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLaptop01 {...props} />
    </Suspense>
  );
};

const LazyLaptop02 = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.Laptop02,
  }))
);

export const Laptop02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLaptop02 {...props} />
    </Suspense>
  );
};

const LazyLightBulb01 = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.LightBulb01,
  }))
);

export const LightBulb01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLightBulb01 {...props} />
    </Suspense>
  );
};

const LazyLightBulb02 = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.LightBulb02,
  }))
);

export const LightBulb02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLightBulb02 {...props} />
    </Suspense>
  );
};

const LazyLightBulb03 = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.LightBulb03,
  }))
);

export const LightBulb03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLightBulb03 {...props} />
    </Suspense>
  );
};

const LazyLightBulb04 = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.LightBulb04,
  }))
);

export const LightBulb04: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLightBulb04 {...props} />
    </Suspense>
  );
};

const LazyLightBulb05 = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.LightBulb05,
  }))
);

export const LightBulb05: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLightBulb05 {...props} />
    </Suspense>
  );
};

const LazyMicrophone01 = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.Microphone01,
  }))
);

export const Microphone01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMicrophone01 {...props} />
    </Suspense>
  );
};

const LazyMicrophone02 = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.Microphone02,
  }))
);

export const Microphone02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMicrophone02 {...props} />
    </Suspense>
  );
};

const LazyMicrophoneOff01 = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.MicrophoneOff01,
  }))
);

export const MicrophoneOff01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMicrophoneOff01 {...props} />
    </Suspense>
  );
};

const LazyMicrophoneOff02 = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.MicrophoneOff02,
  }))
);

export const MicrophoneOff02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMicrophoneOff02 {...props} />
    </Suspense>
  );
};

const LazyModem01 = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.Modem01,
  }))
);

export const Modem01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyModem01 {...props} />
    </Suspense>
  );
};

const LazyModem02 = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.Modem02,
  }))
);

export const Modem02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyModem02 {...props} />
    </Suspense>
  );
};

const LazyMonitor01 = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.Monitor01,
  }))
);

export const Monitor01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMonitor01 {...props} />
    </Suspense>
  );
};

const LazyMonitor02 = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.Monitor02,
  }))
);

export const Monitor02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMonitor02 {...props} />
    </Suspense>
  );
};

const LazyMonitor03 = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.Monitor03,
  }))
);

export const Monitor03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMonitor03 {...props} />
    </Suspense>
  );
};

const LazyMonitor04 = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.Monitor04,
  }))
);

export const Monitor04: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMonitor04 {...props} />
    </Suspense>
  );
};

const LazyMonitor05 = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.Monitor05,
  }))
);

export const Monitor05: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMonitor05 {...props} />
    </Suspense>
  );
};

const LazyMouse = lazy(() =>
  import("./icons/media-devices").then((module) => ({ default: module.Mouse }))
);

export const Mouse: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMouse {...props} />
    </Suspense>
  );
};

const LazyMusicNote01 = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.MusicNote01,
  }))
);

export const MusicNote01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMusicNote01 {...props} />
    </Suspense>
  );
};

const LazyMusicNote02 = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.MusicNote02,
  }))
);

export const MusicNote02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMusicNote02 {...props} />
    </Suspense>
  );
};

const LazyMusic = lazy(() =>
  import("./icons/media-devices").then((module) => ({ default: module.Music }))
);

export const Music: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMusic {...props} />
    </Suspense>
  );
};

const LazyPauseCircle = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.PauseCircle,
  }))
);

export const PauseCircle: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPauseCircle {...props} />
    </Suspense>
  );
};

const LazyPauseSquare = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.PauseSquare,
  }))
);

export const PauseSquare: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPauseSquare {...props} />
    </Suspense>
  );
};

const LazyPhone01 = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.Phone01,
  }))
);

export const Phone01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPhone01 {...props} />
    </Suspense>
  );
};

const LazyPhone02 = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.Phone02,
  }))
);

export const Phone02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPhone02 {...props} />
    </Suspense>
  );
};

const LazyPlayCircle = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.PlayCircle,
  }))
);

export const PlayCircle: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPlayCircle {...props} />
    </Suspense>
  );
};

const LazyPlaySquare = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.PlaySquare,
  }))
);

export const PlaySquare: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPlaySquare {...props} />
    </Suspense>
  );
};

const LazyPlay = lazy(() =>
  import("./icons/media-devices").then((module) => ({ default: module.Play }))
);

export const Play: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPlay {...props} />
    </Suspense>
  );
};

const LazyPodcast = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.Podcast,
  }))
);

export const Podcast: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPodcast {...props} />
    </Suspense>
  );
};

const LazyPower01 = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.Power01,
  }))
);

export const Power01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPower01 {...props} />
    </Suspense>
  );
};

const LazyPower02 = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.Power02,
  }))
);

export const Power02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPower02 {...props} />
    </Suspense>
  );
};

const LazyPower03 = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.Power03,
  }))
);

export const Power03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPower03 {...props} />
    </Suspense>
  );
};

const LazyPrinter = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.Printer,
  }))
);

export const Printer: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPrinter {...props} />
    </Suspense>
  );
};

const LazyRecording01 = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.Recording01,
  }))
);

export const Recording01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyRecording01 {...props} />
    </Suspense>
  );
};

const LazyRecording02 = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.Recording02,
  }))
);

export const Recording02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyRecording02 {...props} />
    </Suspense>
  );
};

const LazyRecording03 = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.Recording03,
  }))
);

export const Recording03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyRecording03 {...props} />
    </Suspense>
  );
};

const LazyRepeat01 = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.Repeat01,
  }))
);

export const Repeat01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyRepeat01 {...props} />
    </Suspense>
  );
};

const LazyRepeat02 = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.Repeat02,
  }))
);

export const Repeat02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyRepeat02 {...props} />
    </Suspense>
  );
};

const LazyRepeat03 = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.Repeat03,
  }))
);

export const Repeat03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyRepeat03 {...props} />
    </Suspense>
  );
};

const LazyRepeat04 = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.Repeat04,
  }))
);

export const Repeat04: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyRepeat04 {...props} />
    </Suspense>
  );
};

const LazyRSS01 = lazy(() =>
  import("./icons/media-devices").then((module) => ({ default: module.RSS01 }))
);

export const RSS01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyRSS01 {...props} />
    </Suspense>
  );
};

const LazyRSS02 = lazy(() =>
  import("./icons/media-devices").then((module) => ({ default: module.RSS02 }))
);

export const RSS02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyRSS02 {...props} />
    </Suspense>
  );
};

const LazyShuffle01 = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.Shuffle01,
  }))
);

export const Shuffle01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyShuffle01 {...props} />
    </Suspense>
  );
};

const LazyShuffle02 = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.Shuffle02,
  }))
);

export const Shuffle02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyShuffle02 {...props} />
    </Suspense>
  );
};

const LazySignal01 = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.Signal01,
  }))
);

export const Signal01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazySignal01 {...props} />
    </Suspense>
  );
};

const LazySignal02 = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.Signal02,
  }))
);

export const Signal02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazySignal02 {...props} />
    </Suspense>
  );
};

const LazySignal03 = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.Signal03,
  }))
);

export const Signal03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazySignal03 {...props} />
    </Suspense>
  );
};

const LazySimCard = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.SimCard,
  }))
);

export const SimCard: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazySimCard {...props} />
    </Suspense>
  );
};

const LazySkipBack = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.SkipBack,
  }))
);

export const SkipBack: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazySkipBack {...props} />
    </Suspense>
  );
};

const LazySkipForward = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.SkipForward,
  }))
);

export const SkipForward: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazySkipForward {...props} />
    </Suspense>
  );
};

const LazySliders01 = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.Sliders01,
  }))
);

export const Sliders01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazySliders01 {...props} />
    </Suspense>
  );
};

const LazySliders02 = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.Sliders02,
  }))
);

export const Sliders02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazySliders02 {...props} />
    </Suspense>
  );
};

const LazySliders03 = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.Sliders03,
  }))
);

export const Sliders03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazySliders03 {...props} />
    </Suspense>
  );
};

const LazySliders04 = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.Sliders04,
  }))
);

export const Sliders04: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazySliders04 {...props} />
    </Suspense>
  );
};

const LazySpeakers01 = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.Speakers01,
  }))
);

export const Speakers01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazySpeakers01 {...props} />
    </Suspense>
  );
};

const LazySpeakers02 = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.Speakers02,
  }))
);

export const Speakers02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazySpeakers02 {...props} />
    </Suspense>
  );
};

const LazySpeakers03 = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.Speakers03,
  }))
);

export const Speakers03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazySpeakers03 {...props} />
    </Suspense>
  );
};

const LazyStopCircle = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.StopCircle,
  }))
);

export const StopCircle: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyStopCircle {...props} />
    </Suspense>
  );
};

const LazyStopSquare = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.StopSquare,
  }))
);

export const StopSquare: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyStopSquare {...props} />
    </Suspense>
  );
};

const LazyStop = lazy(() =>
  import("./icons/media-devices").then((module) => ({ default: module.Stop }))
);

export const Stop: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyStop {...props} />
    </Suspense>
  );
};

const LazyTablet01 = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.Tablet01,
  }))
);

export const Tablet01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyTablet01 {...props} />
    </Suspense>
  );
};

const LazyTablet02 = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.Tablet02,
  }))
);

export const Tablet02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyTablet02 {...props} />
    </Suspense>
  );
};

const LazyTV01 = lazy(() =>
  import("./icons/media-devices").then((module) => ({ default: module.TV01 }))
);

export const TV01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyTV01 {...props} />
    </Suspense>
  );
};

const LazyTV02 = lazy(() =>
  import("./icons/media-devices").then((module) => ({ default: module.TV02 }))
);

export const TV02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyTV02 {...props} />
    </Suspense>
  );
};

const LazyTV03 = lazy(() =>
  import("./icons/media-devices").then((module) => ({ default: module.TV03 }))
);

export const TV03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyTV03 {...props} />
    </Suspense>
  );
};

const LazyUSBFlashDrive = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.USBFlashDrive,
  }))
);

export const USBFlashDrive: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyUSBFlashDrive {...props} />
    </Suspense>
  );
};

const LazyVideoRecorderOff = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.VideoRecorderOff,
  }))
);

export const VideoRecorderOff: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyVideoRecorderOff {...props} />
    </Suspense>
  );
};

const LazyVideoRecorder = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.VideoRecorder,
  }))
);

export const VideoRecorder: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyVideoRecorder {...props} />
    </Suspense>
  );
};

const LazyVoiceMail = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.VoiceMail,
  }))
);

export const VoiceMail: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyVoiceMail {...props} />
    </Suspense>
  );
};

const LazyVolumeMax = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.VolumeMax,
  }))
);

export const VolumeMax: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyVolumeMax {...props} />
    </Suspense>
  );
};

const LazyVolumeMin = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.VolumeMin,
  }))
);

export const VolumeMin: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyVolumeMin {...props} />
    </Suspense>
  );
};

const LazyVolumeMinus = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.VolumeMinus,
  }))
);

export const VolumeMinus: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyVolumeMinus {...props} />
    </Suspense>
  );
};

const LazyVolumePlus = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.VolumePlus,
  }))
);

export const VolumePlus: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyVolumePlus {...props} />
    </Suspense>
  );
};

const LazyVolumeX = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.VolumeX,
  }))
);

export const VolumeX: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyVolumeX {...props} />
    </Suspense>
  );
};

const LazyWebCam01 = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.WebCam01,
  }))
);

export const WebCam01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyWebCam01 {...props} />
    </Suspense>
  );
};

const LazyWebCam02 = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.WebCam02,
  }))
);

export const WebCam02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyWebCam02 {...props} />
    </Suspense>
  );
};

const LazyWiFiOff = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.WiFiOff,
  }))
);

export const WiFiOff: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyWiFiOff {...props} />
    </Suspense>
  );
};

const LazyWiFi = lazy(() =>
  import("./icons/media-devices").then((module) => ({ default: module.WiFi }))
);

export const WiFi: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyWiFi {...props} />
    </Suspense>
  );
};

const LazyYouTube = lazy(() =>
  import("./icons/media-devices").then((module) => ({
    default: module.YouTube,
  }))
);

export const YouTube: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyYouTube {...props} />
    </Suspense>
  );
};

const LazyFaceIDSquare = lazy(() =>
  import("./icons/security").then((module) => ({
    default: module.FaceIDSquare,
  }))
);

export const FaceIDSquare: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFaceIDSquare {...props} />
    </Suspense>
  );
};

const LazyFaceID = lazy(() =>
  import("./icons/security").then((module) => ({ default: module.FaceID }))
);

export const FaceID: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFaceID {...props} />
    </Suspense>
  );
};

const LazyFileLock01 = lazy(() =>
  import("./icons/security").then((module) => ({ default: module.FileLock01 }))
);

export const FileLock01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFileLock01 {...props} />
    </Suspense>
  );
};

const LazyFileLock02 = lazy(() =>
  import("./icons/security").then((module) => ({ default: module.FileLock02 }))
);

export const FileLock02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFileLock02 {...props} />
    </Suspense>
  );
};

const LazyFileLock03 = lazy(() =>
  import("./icons/security").then((module) => ({ default: module.FileLock03 }))
);

export const FileLock03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFileLock03 {...props} />
    </Suspense>
  );
};

const LazyFileShield01 = lazy(() =>
  import("./icons/security").then((module) => ({
    default: module.FileShield01,
  }))
);

export const FileShield01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFileShield01 {...props} />
    </Suspense>
  );
};

const LazyFileShield02 = lazy(() =>
  import("./icons/security").then((module) => ({
    default: module.FileShield02,
  }))
);

export const FileShield02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFileShield02 {...props} />
    </Suspense>
  );
};

const LazyFileShield03 = lazy(() =>
  import("./icons/security").then((module) => ({
    default: module.FileShield03,
  }))
);

export const FileShield03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFileShield03 {...props} />
    </Suspense>
  );
};

const LazyFingerprint01 = lazy(() =>
  import("./icons/security").then((module) => ({
    default: module.Fingerprint01,
  }))
);

export const Fingerprint01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFingerprint01 {...props} />
    </Suspense>
  );
};

const LazyFingerprint02 = lazy(() =>
  import("./icons/security").then((module) => ({
    default: module.Fingerprint02,
  }))
);

export const Fingerprint02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFingerprint02 {...props} />
    </Suspense>
  );
};

const LazyFingerprint03 = lazy(() =>
  import("./icons/security").then((module) => ({
    default: module.Fingerprint03,
  }))
);

export const Fingerprint03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFingerprint03 {...props} />
    </Suspense>
  );
};

const LazyFingerprint04 = lazy(() =>
  import("./icons/security").then((module) => ({
    default: module.Fingerprint04,
  }))
);

export const Fingerprint04: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFingerprint04 {...props} />
    </Suspense>
  );
};

const LazyFolderShield = lazy(() =>
  import("./icons/security").then((module) => ({
    default: module.FolderShield,
  }))
);

export const FolderShield: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFolderShield {...props} />
    </Suspense>
  );
};

const LazyKey01 = lazy(() =>
  import("./icons/security").then((module) => ({ default: module.Key01 }))
);

export const Key01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyKey01 {...props} />
    </Suspense>
  );
};

const LazyKey02 = lazy(() =>
  import("./icons/security").then((module) => ({ default: module.Key02 }))
);

export const Key02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyKey02 {...props} />
    </Suspense>
  );
};

const LazyLock01 = lazy(() =>
  import("./icons/security").then((module) => ({ default: module.Lock01 }))
);

export const Lock01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLock01 {...props} />
    </Suspense>
  );
};

const LazyLock02 = lazy(() =>
  import("./icons/security").then((module) => ({ default: module.Lock02 }))
);

export const Lock02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLock02 {...props} />
    </Suspense>
  );
};

const LazyLock03 = lazy(() =>
  import("./icons/security").then((module) => ({ default: module.Lock03 }))
);

export const Lock03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLock03 {...props} />
    </Suspense>
  );
};

const LazyLock04 = lazy(() =>
  import("./icons/security").then((module) => ({ default: module.Lock04 }))
);

export const Lock04: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLock04 {...props} />
    </Suspense>
  );
};

const LazyLockKeyholeCircle = lazy(() =>
  import("./icons/security").then((module) => ({
    default: module.LockKeyholeCircle,
  }))
);

export const LockKeyholeCircle: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLockKeyholeCircle {...props} />
    </Suspense>
  );
};

const LazyLockKeyholeSquare = lazy(() =>
  import("./icons/security").then((module) => ({
    default: module.LockKeyholeSquare,
  }))
);

export const LockKeyholeSquare: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLockKeyholeSquare {...props} />
    </Suspense>
  );
};

const LazyLockUnlocked01 = lazy(() =>
  import("./icons/security").then((module) => ({
    default: module.LockUnlocked01,
  }))
);

export const LockUnlocked01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLockUnlocked01 {...props} />
    </Suspense>
  );
};

const LazyLockUnlocked02 = lazy(() =>
  import("./icons/security").then((module) => ({
    default: module.LockUnlocked02,
  }))
);

export const LockUnlocked02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLockUnlocked02 {...props} />
    </Suspense>
  );
};

const LazyLockUnlocked03 = lazy(() =>
  import("./icons/security").then((module) => ({
    default: module.LockUnlocked03,
  }))
);

export const LockUnlocked03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLockUnlocked03 {...props} />
    </Suspense>
  );
};

const LazyLockUnlocked04 = lazy(() =>
  import("./icons/security").then((module) => ({
    default: module.LockUnlocked04,
  }))
);

export const LockUnlocked04: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLockUnlocked04 {...props} />
    </Suspense>
  );
};

const LazyPasscodeLock = lazy(() =>
  import("./icons/security").then((module) => ({
    default: module.PasscodeLock,
  }))
);

export const PasscodeLock: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPasscodeLock {...props} />
    </Suspense>
  );
};

const LazyPasscode = lazy(() =>
  import("./icons/security").then((module) => ({ default: module.Passcode }))
);

export const Passcode: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyPasscode {...props} />
    </Suspense>
  );
};

const LazyScan = lazy(() =>
  import("./icons/security").then((module) => ({ default: module.Scan }))
);

export const Scan: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyScan {...props} />
    </Suspense>
  );
};

const LazyShield01 = lazy(() =>
  import("./icons/security").then((module) => ({ default: module.Shield01 }))
);

export const Shield01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyShield01 {...props} />
    </Suspense>
  );
};

const LazyShield02 = lazy(() =>
  import("./icons/security").then((module) => ({ default: module.Shield02 }))
);

export const Shield02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyShield02 {...props} />
    </Suspense>
  );
};

const LazyShield03 = lazy(() =>
  import("./icons/security").then((module) => ({ default: module.Shield03 }))
);

export const Shield03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyShield03 {...props} />
    </Suspense>
  );
};

const LazyShieldDollar = lazy(() =>
  import("./icons/security").then((module) => ({
    default: module.ShieldDollar,
  }))
);

export const ShieldDollar: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyShieldDollar {...props} />
    </Suspense>
  );
};

const LazyShieldPlus = lazy(() =>
  import("./icons/security").then((module) => ({ default: module.ShieldPlus }))
);

export const ShieldPlus: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyShieldPlus {...props} />
    </Suspense>
  );
};

const LazyShieldTick = lazy(() =>
  import("./icons/security").then((module) => ({ default: module.ShieldTick }))
);

export const ShieldTick: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyShieldTick {...props} />
    </Suspense>
  );
};

const LazyShieldZap = lazy(() =>
  import("./icons/security").then((module) => ({ default: module.ShieldZap }))
);

export const ShieldZap: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyShieldZap {...props} />
    </Suspense>
  );
};

const LazyCircle = lazy(() =>
  import("./icons/shapes").then((module) => ({ default: module.Circle }))
);

export const Circle: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCircle {...props} />
    </Suspense>
  );
};

const LazyCube01 = lazy(() =>
  import("./icons/shapes").then((module) => ({ default: module.Cube01 }))
);

export const Cube01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCube01 {...props} />
    </Suspense>
  );
};

const LazyCube02 = lazy(() =>
  import("./icons/shapes").then((module) => ({ default: module.Cube02 }))
);

export const Cube02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCube02 {...props} />
    </Suspense>
  );
};

const LazyCube03 = lazy(() =>
  import("./icons/shapes").then((module) => ({ default: module.Cube03 }))
);

export const Cube03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCube03 {...props} />
    </Suspense>
  );
};

const LazyCube04 = lazy(() =>
  import("./icons/shapes").then((module) => ({ default: module.Cube04 }))
);

export const Cube04: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCube04 {...props} />
    </Suspense>
  );
};

const LazyCubeOutline = lazy(() =>
  import("./icons/shapes").then((module) => ({ default: module.CubeOutline }))
);

export const CubeOutline: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCubeOutline {...props} />
    </Suspense>
  );
};

const LazyDice01 = lazy(() =>
  import("./icons/shapes").then((module) => ({ default: module.Dice01 }))
);

export const Dice01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyDice01 {...props} />
    </Suspense>
  );
};

const LazyDice02 = lazy(() =>
  import("./icons/shapes").then((module) => ({ default: module.Dice02 }))
);

export const Dice02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyDice02 {...props} />
    </Suspense>
  );
};

const LazyDice03 = lazy(() =>
  import("./icons/shapes").then((module) => ({ default: module.Dice03 }))
);

export const Dice03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyDice03 {...props} />
    </Suspense>
  );
};

const LazyDice04 = lazy(() =>
  import("./icons/shapes").then((module) => ({ default: module.Dice04 }))
);

export const Dice04: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyDice04 {...props} />
    </Suspense>
  );
};

const LazyDice05 = lazy(() =>
  import("./icons/shapes").then((module) => ({ default: module.Dice05 }))
);

export const Dice05: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyDice05 {...props} />
    </Suspense>
  );
};

const LazyDice06 = lazy(() =>
  import("./icons/shapes").then((module) => ({ default: module.Dice06 }))
);

export const Dice06: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyDice06 {...props} />
    </Suspense>
  );
};

const LazyHexagon01 = lazy(() =>
  import("./icons/shapes").then((module) => ({ default: module.Hexagon01 }))
);

export const Hexagon01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyHexagon01 {...props} />
    </Suspense>
  );
};

const LazyHexagon02 = lazy(() =>
  import("./icons/shapes").then((module) => ({ default: module.Hexagon02 }))
);

export const Hexagon02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyHexagon02 {...props} />
    </Suspense>
  );
};

const LazyOctagon = lazy(() =>
  import("./icons/shapes").then((module) => ({ default: module.Octagon }))
);

export const Octagon: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyOctagon {...props} />
    </Suspense>
  );
};

const LazySquare = lazy(() =>
  import("./icons/shapes").then((module) => ({ default: module.Square }))
);

export const Square: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazySquare {...props} />
    </Suspense>
  );
};

const LazyStar01 = lazy(() =>
  import("./icons/shapes").then((module) => ({ default: module.Star01 }))
);

export const Star01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyStar01 {...props} />
    </Suspense>
  );
};

const LazyStar02 = lazy(() =>
  import("./icons/shapes").then((module) => ({ default: module.Star02 }))
);

export const Star02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyStar02 {...props} />
    </Suspense>
  );
};

const LazyStar03 = lazy(() =>
  import("./icons/shapes").then((module) => ({ default: module.Star03 }))
);

export const Star03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyStar03 {...props} />
    </Suspense>
  );
};

const LazyStar04 = lazy(() =>
  import("./icons/shapes").then((module) => ({ default: module.Star04 }))
);

export const Star04: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyStar04 {...props} />
    </Suspense>
  );
};

const LazyStar05 = lazy(() =>
  import("./icons/shapes").then((module) => ({ default: module.Star05 }))
);

export const Star05: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyStar05 {...props} />
    </Suspense>
  );
};

const LazyStar06 = lazy(() =>
  import("./icons/shapes").then((module) => ({ default: module.Star06 }))
);

export const Star06: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyStar06 {...props} />
    </Suspense>
  );
};

const LazyStar07 = lazy(() =>
  import("./icons/shapes").then((module) => ({ default: module.Star07 }))
);

export const Star07: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyStar07 {...props} />
    </Suspense>
  );
};

const LazyTriangle = lazy(() =>
  import("./icons/shapes").then((module) => ({ default: module.Triangle }))
);

export const Triangle: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyTriangle {...props} />
    </Suspense>
  );
};

const LazyAlarmClockCheck = lazy(() =>
  import("./icons/time").then((module) => ({ default: module.AlarmClockCheck }))
);

export const AlarmClockCheck: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyAlarmClockCheck {...props} />
    </Suspense>
  );
};

const LazyAlarmClockMinus = lazy(() =>
  import("./icons/time").then((module) => ({ default: module.AlarmClockMinus }))
);

export const AlarmClockMinus: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyAlarmClockMinus {...props} />
    </Suspense>
  );
};

const LazyAlarmClockOff = lazy(() =>
  import("./icons/time").then((module) => ({ default: module.AlarmClockOff }))
);

export const AlarmClockOff: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyAlarmClockOff {...props} />
    </Suspense>
  );
};

const LazyAlarmClockPlus = lazy(() =>
  import("./icons/time").then((module) => ({ default: module.AlarmClockPlus }))
);

export const AlarmClockPlus: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyAlarmClockPlus {...props} />
    </Suspense>
  );
};

const LazyAlarmClock = lazy(() =>
  import("./icons/time").then((module) => ({ default: module.AlarmClock }))
);

export const AlarmClock: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyAlarmClock {...props} />
    </Suspense>
  );
};

const LazyCalenderCheck01 = lazy(() =>
  import("./icons/time").then((module) => ({ default: module.CalenderCheck01 }))
);

export const CalenderCheck01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCalenderCheck01 {...props} />
    </Suspense>
  );
};

const LazyCalenderCheck02 = lazy(() =>
  import("./icons/time").then((module) => ({ default: module.CalenderCheck02 }))
);

export const CalenderCheck02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCalenderCheck02 {...props} />
    </Suspense>
  );
};

const LazyCalenderDate = lazy(() =>
  import("./icons/time").then((module) => ({ default: module.CalenderDate }))
);

export const CalenderDate: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCalenderDate {...props} />
    </Suspense>
  );
};

const LazyCalenderHeart01 = lazy(() =>
  import("./icons/time").then((module) => ({ default: module.CalenderHeart01 }))
);

export const CalenderHeart01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCalenderHeart01 {...props} />
    </Suspense>
  );
};

const LazyCalenderHeart02 = lazy(() =>
  import("./icons/time").then((module) => ({ default: module.CalenderHeart02 }))
);

export const CalenderHeart02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCalenderHeart02 {...props} />
    </Suspense>
  );
};

const LazyCalenderMinus01 = lazy(() =>
  import("./icons/time").then((module) => ({ default: module.CalenderMinus01 }))
);

export const CalenderMinus01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCalenderMinus01 {...props} />
    </Suspense>
  );
};

const LazyCalendarMinus02 = lazy(() =>
  import("./icons/time").then((module) => ({ default: module.CalendarMinus02 }))
);

export const CalendarMinus02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCalendarMinus02 {...props} />
    </Suspense>
  );
};

const LazyCalenderPlus01 = lazy(() =>
  import("./icons/time").then((module) => ({ default: module.CalenderPlus01 }))
);

export const CalenderPlus01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCalenderPlus01 {...props} />
    </Suspense>
  );
};

const LazyCalenderPlus02 = lazy(() =>
  import("./icons/time").then((module) => ({ default: module.CalenderPlus02 }))
);

export const CalenderPlus02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCalenderPlus02 {...props} />
    </Suspense>
  );
};

const LazyCalender = lazy(() =>
  import("./icons/time").then((module) => ({ default: module.Calender }))
);

export const Calender: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCalender {...props} />
    </Suspense>
  );
};

const LazyClockCheck = lazy(() =>
  import("./icons/time").then((module) => ({ default: module.ClockCheck }))
);

export const ClockCheck: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyClockCheck {...props} />
    </Suspense>
  );
};

const LazyClockFastForward = lazy(() =>
  import("./icons/time").then((module) => ({
    default: module.ClockFastForward,
  }))
);

export const ClockFastForward: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyClockFastForward {...props} />
    </Suspense>
  );
};

const LazyClockPlus = lazy(() =>
  import("./icons/time").then((module) => ({ default: module.ClockPlus }))
);

export const ClockPlus: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyClockPlus {...props} />
    </Suspense>
  );
};

const LazyClockRefresh = lazy(() =>
  import("./icons/time").then((module) => ({ default: module.ClockRefresh }))
);

export const ClockRefresh: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyClockRefresh {...props} />
    </Suspense>
  );
};

const LazyClockRewind = lazy(() =>
  import("./icons/time").then((module) => ({ default: module.ClockRewind }))
);

export const ClockRewind: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyClockRewind {...props} />
    </Suspense>
  );
};

const LazyClockSnooze = lazy(() =>
  import("./icons/time").then((module) => ({ default: module.ClockSnooze }))
);

export const ClockSnooze: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyClockSnooze {...props} />
    </Suspense>
  );
};

const LazyClockStopWatch = lazy(() =>
  import("./icons/time").then((module) => ({ default: module.ClockStopWatch }))
);

export const ClockStopWatch: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyClockStopWatch {...props} />
    </Suspense>
  );
};

const LazyClock = lazy(() =>
  import("./icons/time").then((module) => ({ default: module.Clock }))
);

export const Clock: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyClock {...props} />
    </Suspense>
  );
};

const LazyHourGlass01 = lazy(() =>
  import("./icons/time").then((module) => ({ default: module.HourGlass01 }))
);

export const HourGlass01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyHourGlass01 {...props} />
    </Suspense>
  );
};

const LazyHourGlass02 = lazy(() =>
  import("./icons/time").then((module) => ({ default: module.HourGlass02 }))
);

export const HourGlass02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyHourGlass02 {...props} />
    </Suspense>
  );
};

const LazyHourGlass03 = lazy(() =>
  import("./icons/time").then((module) => ({ default: module.HourGlass03 }))
);

export const HourGlass03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyHourGlass03 {...props} />
    </Suspense>
  );
};

const LazyWatchCircle = lazy(() =>
  import("./icons/time").then((module) => ({ default: module.WatchCircle }))
);

export const WatchCircle: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyWatchCircle {...props} />
    </Suspense>
  );
};

const LazyWatchSquare = lazy(() =>
  import("./icons/time").then((module) => ({ default: module.WatchSquare }))
);

export const WatchSquare: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyWatchSquare {...props} />
    </Suspense>
  );
};

const LazyFaceContent = lazy(() =>
  import("./icons/users").then((module) => ({ default: module.FaceContent }))
);

export const FaceContent: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFaceContent {...props} />
    </Suspense>
  );
};

const LazyFaceFrown = lazy(() =>
  import("./icons/users").then((module) => ({ default: module.FaceFrown }))
);

export const FaceFrown: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFaceFrown {...props} />
    </Suspense>
  );
};

const LazyFaceHappy = lazy(() =>
  import("./icons/users").then((module) => ({ default: module.FaceHappy }))
);

export const FaceHappy: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFaceHappy {...props} />
    </Suspense>
  );
};

const LazyFaceNeutral = lazy(() =>
  import("./icons/users").then((module) => ({ default: module.FaceNeutral }))
);

export const FaceNeutral: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFaceNeutral {...props} />
    </Suspense>
  );
};

const LazyFaceSad = lazy(() =>
  import("./icons/users").then((module) => ({ default: module.FaceSad }))
);

export const FaceSad: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFaceSad {...props} />
    </Suspense>
  );
};

const LazyFaceSmile = lazy(() =>
  import("./icons/users").then((module) => ({ default: module.FaceSmile }))
);

export const FaceSmile: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFaceSmile {...props} />
    </Suspense>
  );
};

const LazyFaceWink = lazy(() =>
  import("./icons/users").then((module) => ({ default: module.FaceWink }))
);

export const FaceWink: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyFaceWink {...props} />
    </Suspense>
  );
};

const LazyUser01 = lazy(() =>
  import("./icons/users").then((module) => ({ default: module.User01 }))
);

export const User01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyUser01 {...props} />
    </Suspense>
  );
};

const LazyUser02 = lazy(() =>
  import("./icons/users").then((module) => ({ default: module.User02 }))
);

export const User02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyUser02 {...props} />
    </Suspense>
  );
};

const LazyUser03 = lazy(() =>
  import("./icons/users").then((module) => ({ default: module.User03 }))
);

export const User03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyUser03 {...props} />
    </Suspense>
  );
};

const LazyUserCheck01 = lazy(() =>
  import("./icons/users").then((module) => ({ default: module.UserCheck01 }))
);

export const UserCheck01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyUserCheck01 {...props} />
    </Suspense>
  );
};

const LazyUserCheck02 = lazy(() =>
  import("./icons/users").then((module) => ({ default: module.UserCheck02 }))
);

export const UserCheck02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyUserCheck02 {...props} />
    </Suspense>
  );
};

const LazyUserCircle = lazy(() =>
  import("./icons/users").then((module) => ({ default: module.UserCircle }))
);

export const UserCircle: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyUserCircle {...props} />
    </Suspense>
  );
};

const LazyUserDown01 = lazy(() =>
  import("./icons/users").then((module) => ({ default: module.UserDown01 }))
);

export const UserDown01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyUserDown01 {...props} />
    </Suspense>
  );
};

const LazyUserDown02 = lazy(() =>
  import("./icons/users").then((module) => ({ default: module.UserDown02 }))
);

export const UserDown02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyUserDown02 {...props} />
    </Suspense>
  );
};

const LazyUserEdit = lazy(() =>
  import("./icons/users").then((module) => ({ default: module.UserEdit }))
);

export const UserEdit: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyUserEdit {...props} />
    </Suspense>
  );
};

const LazyUserLeft01 = lazy(() =>
  import("./icons/users").then((module) => ({ default: module.UserLeft01 }))
);

export const UserLeft01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyUserLeft01 {...props} />
    </Suspense>
  );
};

const LazyUserLeft02 = lazy(() =>
  import("./icons/users").then((module) => ({ default: module.UserLeft02 }))
);

export const UserLeft02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyUserLeft02 {...props} />
    </Suspense>
  );
};

const LazyUserMinus01 = lazy(() =>
  import("./icons/users").then((module) => ({ default: module.UserMinus01 }))
);

export const UserMinus01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyUserMinus01 {...props} />
    </Suspense>
  );
};

const LazyUserMinus02 = lazy(() =>
  import("./icons/users").then((module) => ({ default: module.UserMinus02 }))
);

export const UserMinus02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyUserMinus02 {...props} />
    </Suspense>
  );
};

const LazyUserPlus01 = lazy(() =>
  import("./icons/users").then((module) => ({ default: module.UserPlus01 }))
);

export const UserPlus01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyUserPlus01 {...props} />
    </Suspense>
  );
};

const LazyUserPlus02 = lazy(() =>
  import("./icons/users").then((module) => ({ default: module.UserPlus02 }))
);

export const UserPlus02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyUserPlus02 {...props} />
    </Suspense>
  );
};

const LazyUserRight01 = lazy(() =>
  import("./icons/users").then((module) => ({ default: module.UserRight01 }))
);

export const UserRight01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyUserRight01 {...props} />
    </Suspense>
  );
};

const LazyUserRight02 = lazy(() =>
  import("./icons/users").then((module) => ({ default: module.UserRight02 }))
);

export const UserRight02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyUserRight02 {...props} />
    </Suspense>
  );
};

const LazyUserSquare = lazy(() =>
  import("./icons/users").then((module) => ({ default: module.UserSquare }))
);

export const UserSquare: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyUserSquare {...props} />
    </Suspense>
  );
};

const LazyUserUp01 = lazy(() =>
  import("./icons/users").then((module) => ({ default: module.UserUp01 }))
);

export const UserUp01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyUserUp01 {...props} />
    </Suspense>
  );
};

const LazyUserUp02 = lazy(() =>
  import("./icons/users").then((module) => ({ default: module.UserUp02 }))
);

export const UserUp02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyUserUp02 {...props} />
    </Suspense>
  );
};

const LazyUserX01 = lazy(() =>
  import("./icons/users").then((module) => ({ default: module.UserX01 }))
);

export const UserX01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyUserX01 {...props} />
    </Suspense>
  );
};

const LazyUserX02 = lazy(() =>
  import("./icons/users").then((module) => ({ default: module.UserX02 }))
);

export const UserX02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyUserX02 {...props} />
    </Suspense>
  );
};

const LazyUsers01 = lazy(() =>
  import("./icons/users").then((module) => ({ default: module.Users01 }))
);

export const Users01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyUsers01 {...props} />
    </Suspense>
  );
};

const LazyUsers02 = lazy(() =>
  import("./icons/users").then((module) => ({ default: module.Users02 }))
);

export const Users02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyUsers02 {...props} />
    </Suspense>
  );
};

const LazyUsers03 = lazy(() =>
  import("./icons/users").then((module) => ({ default: module.Users03 }))
);

export const Users03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyUsers03 {...props} />
    </Suspense>
  );
};

const LazyUsersCheck = lazy(() =>
  import("./icons/users").then((module) => ({ default: module.UsersCheck }))
);

export const UsersCheck: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyUsersCheck {...props} />
    </Suspense>
  );
};

const LazyUsersDown = lazy(() =>
  import("./icons/users").then((module) => ({ default: module.UsersDown }))
);

export const UsersDown: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyUsersDown {...props} />
    </Suspense>
  );
};

const LazyUsersEdit = lazy(() =>
  import("./icons/users").then((module) => ({ default: module.UsersEdit }))
);

export const UsersEdit: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyUsersEdit {...props} />
    </Suspense>
  );
};

const LazyUsersLeft = lazy(() =>
  import("./icons/users").then((module) => ({ default: module.UsersLeft }))
);

export const UsersLeft: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyUsersLeft {...props} />
    </Suspense>
  );
};

const LazyUsersMinus = lazy(() =>
  import("./icons/users").then((module) => ({ default: module.UsersMinus }))
);

export const UsersMinus: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyUsersMinus {...props} />
    </Suspense>
  );
};

const LazyUsersPlus = lazy(() =>
  import("./icons/users").then((module) => ({ default: module.UsersPlus }))
);

export const UsersPlus: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyUsersPlus {...props} />
    </Suspense>
  );
};

const LazyUsersRight = lazy(() =>
  import("./icons/users").then((module) => ({ default: module.UsersRight }))
);

export const UsersRight: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyUsersRight {...props} />
    </Suspense>
  );
};

const LazyUsersUp = lazy(() =>
  import("./icons/users").then((module) => ({ default: module.UsersUp }))
);

export const UsersUp: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyUsersUp {...props} />
    </Suspense>
  );
};

const LazyUsersX = lazy(() =>
  import("./icons/users").then((module) => ({ default: module.UsersX }))
);

export const UsersX: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyUsersX {...props} />
    </Suspense>
  );
};

const LazyCloud01 = lazy(() =>
  import("./icons/weather").then((module) => ({ default: module.Cloud01 }))
);

export const Cloud01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCloud01 {...props} />
    </Suspense>
  );
};

const LazyCloud02 = lazy(() =>
  import("./icons/weather").then((module) => ({ default: module.Cloud02 }))
);

export const Cloud02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCloud02 {...props} />
    </Suspense>
  );
};

const LazyCloud03 = lazy(() =>
  import("./icons/weather").then((module) => ({ default: module.Cloud03 }))
);

export const Cloud03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCloud03 {...props} />
    </Suspense>
  );
};

const LazyCloudLightning = lazy(() =>
  import("./icons/weather").then((module) => ({
    default: module.CloudLightning,
  }))
);

export const CloudLightning: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCloudLightning {...props} />
    </Suspense>
  );
};

const LazyCloudMoon = lazy(() =>
  import("./icons/weather").then((module) => ({ default: module.CloudMoon }))
);

export const CloudMoon: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCloudMoon {...props} />
    </Suspense>
  );
};

const LazyCloudOff = lazy(() =>
  import("./icons/weather").then((module) => ({ default: module.CloudOff }))
);

export const CloudOff: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCloudOff {...props} />
    </Suspense>
  );
};

const LazyCloudRaining01 = lazy(() =>
  import("./icons/weather").then((module) => ({
    default: module.CloudRaining01,
  }))
);

export const CloudRaining01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCloudRaining01 {...props} />
    </Suspense>
  );
};

const LazyCloudRaining02 = lazy(() =>
  import("./icons/weather").then((module) => ({
    default: module.CloudRaining02,
  }))
);

export const CloudRaining02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCloudRaining02 {...props} />
    </Suspense>
  );
};

const LazyCloudRaining03 = lazy(() =>
  import("./icons/weather").then((module) => ({
    default: module.CloudRaining03,
  }))
);

export const CloudRaining03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCloudRaining03 {...props} />
    </Suspense>
  );
};

const LazyCloudRaining04 = lazy(() =>
  import("./icons/weather").then((module) => ({
    default: module.CloudRaining04,
  }))
);

export const CloudRaining04: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCloudRaining04 {...props} />
    </Suspense>
  );
};

const LazyCloudRaining05 = lazy(() =>
  import("./icons/weather").then((module) => ({
    default: module.CloudRaining05,
  }))
);

export const CloudRaining05: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCloudRaining05 {...props} />
    </Suspense>
  );
};

const LazyCloudRaining06 = lazy(() =>
  import("./icons/weather").then((module) => ({
    default: module.CloudRaining06,
  }))
);

export const CloudRaining06: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCloudRaining06 {...props} />
    </Suspense>
  );
};

const LazyCloudSnowing01 = lazy(() =>
  import("./icons/weather").then((module) => ({
    default: module.CloudSnowing01,
  }))
);

export const CloudSnowing01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCloudSnowing01 {...props} />
    </Suspense>
  );
};

const LazyCloudSnowing02 = lazy(() =>
  import("./icons/weather").then((module) => ({
    default: module.CloudSnowing02,
  }))
);

export const CloudSnowing02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCloudSnowing02 {...props} />
    </Suspense>
  );
};

const LazyCloudSun01 = lazy(() =>
  import("./icons/weather").then((module) => ({ default: module.CloudSun01 }))
);

export const CloudSun01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCloudSun01 {...props} />
    </Suspense>
  );
};

const LazyCloudSun02 = lazy(() =>
  import("./icons/weather").then((module) => ({ default: module.CloudSun02 }))
);

export const CloudSun02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCloudSun02 {...props} />
    </Suspense>
  );
};

const LazyCloudSun03 = lazy(() =>
  import("./icons/weather").then((module) => ({ default: module.CloudSun03 }))
);

export const CloudSun03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyCloudSun03 {...props} />
    </Suspense>
  );
};

const LazyDroplets01 = lazy(() =>
  import("./icons/weather").then((module) => ({ default: module.Droplets01 }))
);

export const Droplets01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyDroplets01 {...props} />
    </Suspense>
  );
};

const LazyDroplets02 = lazy(() =>
  import("./icons/weather").then((module) => ({ default: module.Droplets02 }))
);

export const Droplets02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyDroplets02 {...props} />
    </Suspense>
  );
};

const LazyDroplets03 = lazy(() =>
  import("./icons/weather").then((module) => ({ default: module.Droplets03 }))
);

export const Droplets03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyDroplets03 {...props} />
    </Suspense>
  );
};

const LazyHurricane01 = lazy(() =>
  import("./icons/weather").then((module) => ({ default: module.Hurricane01 }))
);

export const Hurricane01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyHurricane01 {...props} />
    </Suspense>
  );
};

const LazyHurricane02 = lazy(() =>
  import("./icons/weather").then((module) => ({ default: module.Hurricane02 }))
);

export const Hurricane02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyHurricane02 {...props} />
    </Suspense>
  );
};

const LazyHurricane03 = lazy(() =>
  import("./icons/weather").then((module) => ({ default: module.Hurricane03 }))
);

export const Hurricane03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyHurricane03 {...props} />
    </Suspense>
  );
};

const LazyLightning01 = lazy(() =>
  import("./icons/weather").then((module) => ({ default: module.Lightning01 }))
);

export const Lightning01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLightning01 {...props} />
    </Suspense>
  );
};

const LazyLightning02 = lazy(() =>
  import("./icons/weather").then((module) => ({ default: module.Lightning02 }))
);

export const Lightning02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyLightning02 {...props} />
    </Suspense>
  );
};

const LazyMoon01 = lazy(() =>
  import("./icons/weather").then((module) => ({ default: module.Moon01 }))
);

export const Moon01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMoon01 {...props} />
    </Suspense>
  );
};

const LazyMoon02 = lazy(() =>
  import("./icons/weather").then((module) => ({ default: module.Moon02 }))
);

export const Moon02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMoon02 {...props} />
    </Suspense>
  );
};

const LazyMoonEclipse = lazy(() =>
  import("./icons/weather").then((module) => ({ default: module.MoonEclipse }))
);

export const MoonEclipse: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMoonEclipse {...props} />
    </Suspense>
  );
};

const LazyMoonStar = lazy(() =>
  import("./icons/weather").then((module) => ({ default: module.MoonStar }))
);

export const MoonStar: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyMoonStar {...props} />
    </Suspense>
  );
};

const LazySnowFlake01 = lazy(() =>
  import("./icons/weather").then((module) => ({ default: module.SnowFlake01 }))
);

export const SnowFlake01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazySnowFlake01 {...props} />
    </Suspense>
  );
};

const LazySnowFlake02 = lazy(() =>
  import("./icons/weather").then((module) => ({ default: module.SnowFlake02 }))
);

export const SnowFlake02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazySnowFlake02 {...props} />
    </Suspense>
  );
};

const LazyStarW01 = lazy(() =>
  import("./icons/weather").then((module) => ({ default: module.StarW01 }))
);

export const StarW01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyStarW01 {...props} />
    </Suspense>
  );
};

const LazyStarW02 = lazy(() =>
  import("./icons/weather").then((module) => ({ default: module.StarW02 }))
);

export const StarW02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyStarW02 {...props} />
    </Suspense>
  );
};

const LazyStarW03 = lazy(() =>
  import("./icons/weather").then((module) => ({ default: module.StarW03 }))
);

export const StarW03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyStarW03 {...props} />
    </Suspense>
  );
};

const LazySunSetting01 = lazy(() =>
  import("./icons/weather").then((module) => ({ default: module.SunSetting01 }))
);

export const SunSetting01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazySunSetting01 {...props} />
    </Suspense>
  );
};

const LazySunSetting02 = lazy(() =>
  import("./icons/weather").then((module) => ({ default: module.SunSetting02 }))
);

export const SunSetting02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazySunSetting02 {...props} />
    </Suspense>
  );
};

const LazySunSetting03 = lazy(() =>
  import("./icons/weather").then((module) => ({ default: module.SunSetting03 }))
);

export const SunSetting03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazySunSetting03 {...props} />
    </Suspense>
  );
};

const LazySun = lazy(() =>
  import("./icons/weather").then((module) => ({ default: module.Sun }))
);

export const Sun: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazySun {...props} />
    </Suspense>
  );
};

const LazySunrise = lazy(() =>
  import("./icons/weather").then((module) => ({ default: module.Sunrise }))
);

export const Sunrise: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazySunrise {...props} />
    </Suspense>
  );
};

const LazySunset = lazy(() =>
  import("./icons/weather").then((module) => ({ default: module.Sunset }))
);

export const Sunset: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazySunset {...props} />
    </Suspense>
  );
};

const LazyThermometer01 = lazy(() =>
  import("./icons/weather").then((module) => ({
    default: module.Thermometer01,
  }))
);

export const Thermometer01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyThermometer01 {...props} />
    </Suspense>
  );
};

const LazyThermometer02 = lazy(() =>
  import("./icons/weather").then((module) => ({
    default: module.Thermometer02,
  }))
);

export const Thermometer02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyThermometer02 {...props} />
    </Suspense>
  );
};

const LazyThermometer03 = lazy(() =>
  import("./icons/weather").then((module) => ({
    default: module.Thermometer03,
  }))
);

export const Thermometer03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyThermometer03 {...props} />
    </Suspense>
  );
};

const LazyThermometerCold = lazy(() =>
  import("./icons/weather").then((module) => ({
    default: module.ThermometerCold,
  }))
);

export const ThermometerCold: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyThermometerCold {...props} />
    </Suspense>
  );
};

const LazyThermometerWarm = lazy(() =>
  import("./icons/weather").then((module) => ({
    default: module.ThermometerWarm,
  }))
);

export const ThermometerWarm: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyThermometerWarm {...props} />
    </Suspense>
  );
};

const LazyUmbrella01 = lazy(() =>
  import("./icons/weather").then((module) => ({ default: module.Umbrella01 }))
);

export const Umbrella01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyUmbrella01 {...props} />
    </Suspense>
  );
};

const LazyUmbrella02 = lazy(() =>
  import("./icons/weather").then((module) => ({ default: module.Umbrella02 }))
);

export const Umbrella02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyUmbrella02 {...props} />
    </Suspense>
  );
};

const LazyUmbrella03 = lazy(() =>
  import("./icons/weather").then((module) => ({ default: module.Umbrella03 }))
);

export const Umbrella03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyUmbrella03 {...props} />
    </Suspense>
  );
};

const LazyWaves = lazy(() =>
  import("./icons/weather").then((module) => ({ default: module.Waves }))
);

export const Waves: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyWaves {...props} />
    </Suspense>
  );
};

const LazyWind01 = lazy(() =>
  import("./icons/weather").then((module) => ({ default: module.Wind01 }))
);

export const Wind01: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyWind01 {...props} />
    </Suspense>
  );
};

const LazyWind02 = lazy(() =>
  import("./icons/weather").then((module) => ({ default: module.Wind02 }))
);

export const Wind02: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyWind02 {...props} />
    </Suspense>
  );
};

const LazyWind03 = lazy(() =>
  import("./icons/weather").then((module) => ({ default: module.Wind03 }))
);

export const Wind03: FC<SVGComponentProps> = ({ ...props }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <LazyWind03 {...props} />
    </Suspense>
  );
};
