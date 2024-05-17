"use client"

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../../template";


export const ArrowBlockDown: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M9 3.8C9 3.51997 9 3.37996 9.0545 3.273C9.10243 3.17892 9.17892 3.10243 9.273 3.0545C9.37996 3 9.51997 3 9.8 3H14.2C14.48 3 14.62 3 14.727 3.0545C14.8211 3.10243 14.8976 3.17892 14.9455 3.273C15 3.37996 15 3.51997 15 3.8V14H19L12 21L5 14H9V3.8Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const ArrowBlockRight: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M21 12L14 5V9H3.8C3.51997 9 3.37996 9 3.273 9.0545C3.17892 9.10243 3.10243 9.17892 3.0545 9.273C3 9.37996 3 9.51997 3 9.8V14.2C3 14.48 3 14.62 3.0545 14.727C3.10243 14.8211 3.17892 14.8976 3.273 14.9455C3.37996 15 3.51997 15 3.8 15H14V19L21 12Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const ArrowBlockLeft: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M3 12L10 5V9H20.2C20.48 9 20.62 9 20.727 9.0545C20.8211 9.10243 20.8976 9.17892 20.9455 9.273C21 9.37996 21 9.51997 21 9.8V14.2C21 14.48 21 14.62 20.9455 14.727C20.8976 14.8211 20.8211 14.8976 20.727 14.9455C20.62 15 20.48 15 20.2 15H10V19L3 12Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const ArrowBlockUp: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M9.8 21C9.51997 21 9.37996 21 9.273 20.9455C9.17892 20.8976 9.10243 20.8211 9.0545 20.727C9 20.62 9 20.48 9 20.2V10H5L12 3L19 10H15V20.2C15 20.48 15 20.62 14.9455 20.727C14.8976 20.8211 14.8211 20.8976 14.727 20.9455C14.62 21 14.48 21 14.2 21H9.8Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const ArrowCircleBrokenDownLeft: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M9.00023 9.00007V15.0001M9.00023 15.0001H15.0002M9.00023 15.0001L19 5.00001M21.6606 9.41051C22.5515 12.7467 21.6884 16.4538 19.0711 19.0711C15.1658 22.9764 8.83418 22.9764 4.92893 19.0711C1.02369 15.1659 1.02369 8.83424 4.92893 4.92899C7.54623 2.3117 11.2534 1.44852 14.5896 2.33944"
        {...pathProps}
      />
    </SVG>
  );
};

export const ArrowCircleBrokenDownRight: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M9.41045 2.33944C12.7466 1.44852 16.4538 2.3117 19.0711 4.92899C22.9763 8.83424 22.9763 15.1659 19.0711 19.0711C15.1658 22.9764 8.83418 22.9764 4.92893 19.0711C2.31164 16.4538 1.44846 12.7467 2.33938 9.41051M15.0001 9.00007V15.0001M15.0001 15.0001H9.00014M15.0001 15.0001L4.99995 5.00001"
        {...pathProps}
      />
    </SVG>
  );
};

export const ArrowCircleBrokenDown: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M17 3.33782C19.989 5.06687 22 8.29859 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 8.29859 4.01099 5.06687 7 3.33782M8 12L12 16M12 16L16 12M12 16V2"
        {...pathProps}
      />
    </SVG>
  );
};

export const ArrowCircleBrokenLeft: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M20.6621 17C18.933 19.989 15.7013 22 11.9999 22C6.47703 22 1.99988 17.5228 1.99988 12C1.99988 6.47715 6.47703 2 11.9999 2C15.7013 2 18.933 4.01099 20.6621 7M11.9999 8L7.99995 12M7.99995 12L11.9999 16M7.99995 12H21.9999"
        {...pathProps}
      />
    </SVG>
  );
};

export const ArrowCircleBrokenRight: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M3.33789 7C5.06694 4.01099 8.29866 2 12.0001 2C17.5229 2 22.0001 6.47715 22.0001 12C22.0001 17.5228 17.5229 22 12.0001 22C8.29866 22 5.06694 19.989 3.33789 17M12 16L16 12M16 12L12 8M16 12H2"
        {...pathProps}
      />
    </SVG>
  );
};

export const ArrowCircleBrokenUpLeft: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M14.5896 21.6606C11.2534 22.5515 7.54623 21.6884 4.92893 19.0711C1.02369 15.1658 1.02369 8.83418 4.92893 4.92893C8.83418 1.02369 15.1658 1.02369 19.0711 4.92893C21.6884 7.54623 22.5515 11.2534 21.6606 14.5896M9.00023 15.0001V9.0001M9.00023 9.0001H15.0002M9.00023 9.0001L19 19"
        {...pathProps}
      />
    </SVG>
  );
};

export const ArrowCircleBrokenUpRight: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M2.33938 14.5896C1.44846 11.2534 2.31164 7.54623 4.92893 4.92893C8.83418 1.02369 15.1658 1.02369 19.0711 4.92893C22.9763 8.83418 22.9763 15.1658 19.0711 19.0711C16.4538 21.6884 12.7466 22.5515 9.41045 21.6606M15.0001 15.0001V9.0001M15.0001 9.0001H9.00014M15.0001 9.0001L4.99995 19"
        {...pathProps}
      />
    </SVG>
  );
};

export const ArrowCircleBrokenUp: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M7 20.6621C4.01099 18.933 2 15.7013 2 11.9999C2 6.47703 6.47715 1.99988 12 1.99988C17.5228 1.99988 22 6.47703 22 11.9999C22 15.7013 19.989 18.933 17 20.6621M16 11.9999L12 7.99995M12 7.99995L8 11.9999M12 7.99995V21.9999"
        {...pathProps}
      />
    </SVG>
  );
};

export const ArrowCircleDownLeft: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M9.00019 9.00005V15.0001M9.00019 15.0001H15.0002M9.00019 15.0001L15.0002 8.99994M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const ArrowCircleDownRight: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M15.0002 9.00005V15.0001M15.0002 15.0001H9.00019M15.0002 15.0001L9.00019 8.99994M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const ArrowCircleDown: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M8 12L12 16M12 16L16 12M12 16V8M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const ArrowCircleLeft: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M12 8L8 12M8 12L12 16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const ArrowCircleRight: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M12 16L16 12M16 12L12 8M16 12H8M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const ArrowCircleUpLeft: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M9.00019 15.0001V9.00005M9.00019 9.00005H15.0002M9.00019 9.00005L15.0002 14.9999M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const ArrowCircleUpRight: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M15.0002 15.0001V9.00005M15.0002 9.00005H9.00019M15.0002 9.00005L9.00019 14.9999M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const ArrowCircleUp: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M16 12L12 8M12 8L8 12M12 8V16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const ArrowDownLeft: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path d="M17 7L7 17M7 17H17M7 17V7" {...pathProps} />
    </SVG>
  );
};

export const ArrowDownRight: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path d="M7 7L17 17M17 17V7M17 17H7" {...pathProps} />
    </SVG>
  );
};

export const ArrowDown: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path d="M12 5V19M12 19L19 12M12 19L5 12" {...pathProps} />
    </SVG>
  );
};

export const ArrowLeft: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path d="M19 12H5M5 12L12 19M5 12L12 5" {...pathProps} />
    </SVG>
  );
};

export const ArrowNarrowDownLeft: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path d="M18 6L6 18M6 18H14M6 18V10" {...pathProps} />
    </SVG>
  );
};

export const ArrowNarrowDownRight: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path d="M6 6L18 18M18 18V10M18 18H10" {...pathProps} />
    </SVG>
  );
};

export const ArrowNarrowDown: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path d="M12 4V20M12 20L18 14M12 20L6 14" {...pathProps} />
    </SVG>
  );
};

export const ArrowNarrowLeft: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path d="M20 12H4M4 12L10 18M4 12L10 6" {...pathProps} />
    </SVG>
  );
};

export const ArrowNarrowRight: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path d="M4 12H20M20 12L14 6M20 12L14 18" {...pathProps} />
    </SVG>
  );
};

export const ArrowNarrowUpLeft: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path d="M18 18L6 6M6 6V14M6 6H14" {...pathProps} />
    </SVG>
  );
};

export const ArrowNarrowUpRight: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path d="M6 18L18 6M18 6H10M18 6V14" {...pathProps} />
    </SVG>
  );
};

export const ArrowNarrowUp: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path d="M12 20V4M12 4L6 10M12 4L18 10" {...pathProps} />
    </SVG>
  );
};

export const ArrowRight: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path d="M5 12H19M19 12L12 5M19 12L12 19" {...pathProps} />
    </SVG>
  );
};

export const ArrowSquareDownLeft: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M9.00019 9.00005V15.0001M9.00019 15.0001H15.0002M9.00019 15.0001L15.0002 8.99994M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const ArrowSquareDownRight: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M15.0002 9.00005V15.0001M15.0002 15.0001H9.00019M15.0002 15.0001L9.00019 8.99994M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const ArrowSquareDown: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M8 12L12 16M12 16L16 12M12 16V8M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const ArrowSquareLeft: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M12 8L8 12M8 12L12 16M8 12H16M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const ArrowSquareRight: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M12 16L16 12M16 12L12 8M16 12H8M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const ArrowSquareUpLeft: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M9.00019 15.0001V9.00005M9.00019 9.00005H15.0002M9.00019 9.00005L15.0002 14.9999M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const ArrowSquareUpRight: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M15.0002 15.0001V9.00005M15.0002 9.00005H9.00019M15.0002 9.00005L9.00019 14.9999M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const ArrowSquareUp: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M16 12L12 8M12 8L8 12M12 8V16M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const ArrowUpLeft: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path d="M17 17L7 7M7 7V17M7 7H17" {...pathProps} />
    </SVG>
  );
};

export const ArrowUpRight: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path d="M7 17L17 7M17 7H7M17 7V17" {...pathProps} />
    </SVG>
  );
};

export const ArrowUp: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path d="M12 19V5M12 5L5 12M12 5L19 12" {...pathProps} />
    </SVG>
  );
};

export const ArrowsDown: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M17 4V15M17 15L13 11M17 15L21 11M7 4V20M7 20L3 16M7 20L11 16"
        {...pathProps}
      />
    </SVG>
  );
};

export const ArrowsLeft: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M20 17H4M4 17L8 21M4 17L8 13M20 7H9M9 7L13 11M9 7L13 3"
        {...pathProps}
      />
    </SVG>
  );
};

export const ArrowsRight: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M4 7H15M15 7L11 11M15 7L11 3M4 17H20M20 17L16 21M20 17L16 13"
        {...pathProps}
      />
    </SVG>
  );
};

export const ArrowsTriangle: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M13 19H17.2942C19.1594 19 20.092 19 20.6215 18.6092C21.0832 18.2685 21.3763 17.7459 21.4263 17.1743C21.4836 16.5187 20.9973 15.7229 20.0247 14.1313L19.0278 12.5M6.13014 10.6052L3.97528 14.1314C3.00267 15.7229 2.51637 16.5187 2.57372 17.1743C2.62372 17.7459 2.91681 18.2685 3.37846 18.6092C3.90799 19 4.84059 19 6.70578 19H8.5M16.8889 8.99999L14.7305 5.46808C13.8277 3.99079 13.3763 3.25214 12.7952 3.00033C12.2879 2.78049 11.7121 2.78049 11.2048 3.00033C10.6237 3.25214 10.1723 3.99079 9.2695 5.46809L8.24967 7.13689M18 5.00006L16.9019 9.09813L12.8038 8.00006M2 11.5981L6.09808 10.5L7.19615 14.5981M15.5 22L12.5 19L15.5 16"
        {...pathProps}
      />
    </SVG>
  );
};

export const ArrowsUp: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M7 20V4M7 4L3 8M7 4L11 8M17 20V9M17 9L13 13M17 9L21 13"
        {...pathProps}
      />
    </SVG>
  );
};

export const ChevronDownDouble: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path d="M7 13L12 18L17 13M7 6L12 11L17 6" {...pathProps} />
    </SVG>
  );
};

export const ChevronDown: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path d="M6 9L12 15L18 9" {...pathProps} />
    </SVG>
  );
};

export const ChevronLeftDouble: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path d="M18 17L13 12L18 7M11 17L6 12L11 7" {...pathProps} />
    </SVG>
  );
};

export const ChevronLeft: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path d="M15 18L9 12L15 6" {...pathProps} />
    </SVG>
  );
};

export const ChevronRightDouble: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path d="M6 17L11 12L6 7M13 17L18 12L13 7" {...pathProps} />
    </SVG>
  );
};

export const ChevronRight: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path d="M9 18L15 12L9 6" {...pathProps} />
    </SVG>
  );
};

export const ChevronSelectorHorizontal: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path d="M9 7L4 12L9 17M15 7L20 12L15 17" {...pathProps} />
    </SVG>
  );
};

export const ChevronSelectorVertical: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path d="M7 15L12 20L17 15M7 9L12 4L17 9" {...pathProps} />
    </SVG>
  );
};

export const ChevronUpDouble: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path d="M17 18L12 13L7 18M17 11L12 6L7 11" {...pathProps} />
    </SVG>
  );
};

export const ChevronUp: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path d="M18 15L12 9L6 15" {...pathProps} />
    </SVG>
  );
};

export const CornerDownLeft: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M20 4V5.4C20 8.76031 20 10.4405 19.346 11.7239C18.7708 12.8529 17.8529 13.7708 16.7239 14.346C15.4405 15 13.7603 15 10.4 15H4M4 15L9 10M4 15L9 20"
        {...pathProps}
      />
    </SVG>
  );
};

export const CornerDownRight: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M4 4V5.4C4 8.76031 4 10.4405 4.65396 11.7239C5.2292 12.8529 6.14708 13.7708 7.27606 14.346C8.55953 15 10.2397 15 13.6 15H20M20 15L15 10M20 15L15 20"
        {...pathProps}
      />
    </SVG>
  );
};

export const CornerLeftDown: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M21 4H17.6C14.2397 4 12.5595 4 11.2761 4.65396C10.1471 5.2292 9.2292 6.14708 8.65396 7.27606C8 8.55953 8 10.2397 8 13.6V20M8 20L13 15M8 20L3 15"
        {...pathProps}
      />
    </SVG>
  );
};

export const CornerLeftUp: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M21 20H17.6C14.2397 20 12.5595 20 11.2761 19.346C10.1471 18.7708 9.2292 17.8529 8.65396 16.7239C8 15.4405 8 13.7603 8 10.4V4M8 4L13 9M8 4L3 9"
        {...pathProps}
      />
    </SVG>
  );
};

export const CornerRightDown: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M3 4H6.4C9.76031 4 11.4405 4 12.7239 4.65396C13.8529 5.2292 14.7708 6.14708 15.346 7.27606C16 8.55953 16 10.2397 16 13.6L16 20M16 20L11 15M16 20L21 15"
        {...pathProps}
      />
    </SVG>
  );
};

export const CornerRightUp: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M3 20H6.4C9.76031 20 11.4405 20 12.7239 19.346C13.8529 18.7708 14.7708 17.8529 15.346 16.7239C16 15.4405 16 13.7603 16 10.4L16 4M16 4L11 9M16 4L21 9"
        {...pathProps}
      />
    </SVG>
  );
};

export const CornerUpLeft: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M9 14L4 9M4 9L9 4M4 9H10.4C13.7603 9 15.4405 9 16.7239 9.65396C17.8529 10.2292 18.7708 11.1471 19.346 12.2761C20 13.5595 20 15.2397 20 18.6V20"
        {...pathProps}
      />
    </SVG>
  );
};

export const CornerUpRight: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M4 20V18.6C4 15.2397 4 13.5595 4.65396 12.2761C5.2292 11.1471 6.14708 10.2292 7.27606 9.65396C8.55953 9 10.2397 9 13.6 9H20M20 9L15 14M20 9L15 4"
        {...pathProps}
      />
    </SVG>
  );
};

export const Expand01: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M14 10L21 3M21 3H15M21 3V9M10 14L3 21M3 21H9M3 21L3 15"
        {...pathProps}
      />
    </SVG>
  );
};

export const Expand02: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path d="M3 21L21 3M3 21H9M3 21L3 15M21 3H15M21 3V9" {...pathProps} />
    </SVG>
  );
};

export const Expand03: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M21 14V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H14M10 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V10M15 9L21 3M21 3H15M21 3V9M9 15L3 21M3 21H9M3 21L3 15"
        {...pathProps}
      />
    </SVG>
  );
};

export const Expand04: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M20 14V16.8C20 17.9201 20 18.4802 19.782 18.908C19.5903 19.2843 19.2843 19.5903 18.908 19.782C18.4802 20 17.9201 20 16.8 20H14M10 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V10M15 9L21 3M21 3H15M21 3V9M9 15L3 21M3 21H9M3 21L3 15"
        {...pathProps}
      />
    </SVG>
  );
};

export const Expand05: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M15 9L21 3M21 3H15M21 3V9M9 9L3 3M3 3L3 9M3 3L9 3M9 15L3 21M3 21H9M3 21L3 15M15 15L21 21M21 21V15M21 21H15"
        {...pathProps}
      />
    </SVG>
  );
};

export const Expand06: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M16 8L21 3M21 3H16M21 3V8M8 8L3 3M3 3L3 8M3 3L8 3M8 16L3 21M3 21H8M3 21L3 16M16 16L21 21M21 21V16M21 21H16"
        {...pathProps}
      />
    </SVG>
  );
};

export const FlipBackward: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M3 9H16.5C18.9853 9 21 11.0147 21 13.5C21 15.9853 18.9853 18 16.5 18H12M3 9L7 5M3 9L7 13"
        {...pathProps}
      />
    </SVG>
  );
};

export const FlipForward: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M21 9H7.5C5.01472 9 3 11.0147 3 13.5C3 15.9853 5.01472 18 7.5 18H12M21 9L17 5M21 9L17 13"
        {...pathProps}
      />
    </SVG>
  );
};

export const Infinity: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M18.1777 8C23.2737 8 23.2737 16 18.1777 16C13.0827 16 11.0447 8 5.43875 8C0.85375 8 0.85375 16 5.43875 16C11.0447 16 13.0828 8 18.1788 8H18.1777Z"
        {...pathProps}
      />
    </SVG>
  );
};

export const RefreshCCW01: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M2 10C2 10 4.00498 7.26822 5.63384 5.63824C7.26269 4.00827 9.5136 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.89691 21 4.43511 18.2543 3.35177 14.5M2 10V4M2 10H8"
        {...pathProps}
      />
    </SVG>
  );
};

export const RefreshCCW02: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M2 10C2 10 2.12132 9.15076 5.63604 5.63604C9.15076 2.12132 14.8492 2.12132 18.364 5.63604C19.6092 6.88131 20.4133 8.40072 20.7762 10M2 10V4M2 10H8M22 14C22 14 21.8787 14.8492 18.364 18.364C14.8492 21.8787 9.15076 21.8787 5.63604 18.364C4.39076 17.1187 3.58669 15.5993 3.22383 14M22 14V20M22 14H16"
        {...pathProps}
      />
    </SVG>
  );
};

export const RefreshCCW03: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M14 2C14 2 14.8492 2.12132 18.364 5.63604C21.8787 9.15076 21.8787 14.8492 18.364 18.364C17.1187 19.6092 15.5993 20.4133 14 20.7762M14 2L20 2M14 2L14 8M10 21.9998C10 21.9998 9.15076 21.8785 5.63604 18.3638C2.12132 14.849 2.12132 9.15056 5.63604 5.63584C6.88131 4.39057 8.40072 3.5865 10 3.22363M10 21.9998L4 22M10 21.9998L10 16"
        {...pathProps}
      />
    </SVG>
  );
};

export const RefreshCCW04: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M17 18.8746C19.1213 17.329 20.5 14.8255 20.5 12C20.5 7.30555 16.6944 3.49998 12 3.49998H11.5M12 20.5C7.30558 20.5 3.5 16.6944 3.5 12C3.5 9.17444 4.87867 6.67091 7 5.12537M11 22.4L13 20.4L11 18.4M13 5.59998L11 3.59998L13 1.59998"
        {...pathProps}
      />
    </SVG>
  );
};

export const RefreshCW01: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M21 10C21 10 18.995 7.26822 17.3662 5.63824C15.7373 4.00827 13.4864 3 11 3C6.02944 3 2 7.02944 2 12C2 16.9706 6.02944 21 11 21C15.1031 21 18.5649 18.2543 19.6482 14.5M21 10V4M21 10H15"
        {...pathProps}
      />
    </SVG>
  );
};

export const RefreshCW02: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M2 14C2 14 2.12132 14.8492 5.63604 18.364C9.15076 21.8787 14.8492 21.8787 18.364 18.364C19.6092 17.1187 20.4133 15.5993 20.7762 14M2 14V20M2 14H8M22 10C22 10 21.8787 9.15076 18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604C4.39076 6.88131 3.58669 8.40072 3.22383 10M22 10V4M22 10H16"
        {...pathProps}
      />
    </SVG>
  );
};

export const RefreshCW03: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M14 22C14 22 14.8492 21.8787 18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604C17.1187 4.39077 15.5993 3.58669 14 3.22383M14 22H20M14 22L14 16M10 2.00019C10 2.00019 9.15076 2.12152 5.63604 5.63624C2.12132 9.15095 2.12132 14.8494 5.63604 18.3642C6.88131 19.6094 8.40072 20.4135 10 20.7764M10 2.00019L4 2M10 2.00019L10 8"
        {...pathProps}
      />
    </SVG>
  );
};

export const RefreshCW04: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M17 5.12537C19.1213 6.67091 20.5 9.17444 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5H11.5M7 18.8746C4.87867 17.329 3.5 14.8255 3.5 12C3.5 7.30555 7.30558 3.49998 12 3.49998H12.5M13 22.4L11 20.4L13 18.4M11 5.59998L13 3.59998L11 1.59998"
        {...pathProps}
      />
    </SVG>
  );
};

export const RefreshCW05: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M20.453 12.893C20.1752 15.5029 18.6964 17.9487 16.2494 19.3614C12.1839 21.7086 6.98539 20.3157 4.63818 16.2502L4.38818 15.8172M3.54613 11.107C3.82393 8.49711 5.30272 6.05138 7.74971 4.63862C11.8152 2.29141 17.0137 3.68434 19.3609 7.74983L19.6109 8.18285M3.49316 18.0661L4.22521 15.334L6.95727 16.0661M17.0424 7.93401L19.7744 8.66606L20.5065 5.93401"
        {...pathProps}
      />
    </SVG>
  );
};

export const RefreshLeft: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M4 7H14C17.3137 7 20 9.68629 20 13C20 16.3137 17.3137 19 14 19H4M4 7L8 3M4 7L8 11"
        {...pathProps}
      />
    </SVG>
  );
};

export const RefreshRight: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M20 7H10C6.68629 7 4 9.68629 4 13C4 16.3137 6.68629 19 10 19H20M20 7L16 3M20 7L16 11"
        {...pathProps}
      />
    </SVG>
  );
};

export const SwitchHorizontal01: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M20 17H4M4 17L8 13M4 17L8 21M4 7H20M20 7L16 3M20 7L16 11"
        {...pathProps}
      />
    </SVG>
  );
};

export const SwitchHorizontal02: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M4 17H20M20 17L16 13M20 17L16 21M20 7H4M4 7L8 3M4 7L8 11"
        {...pathProps}
      />
    </SVG>
  );
};

export const SwitchVertical01: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M17 4V20M17 20L13 16M17 20L21 16M7 20V4M7 4L3 8M7 4L11 8"
        {...pathProps}
      />
    </SVG>
  );
};

export const SwitchVertical02: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M7 4V20M7 20L3 16M7 20L11 16M17 20V4M17 4L13 8M17 4L21 8"
        {...pathProps}
      />
    </SVG>
  );
};
