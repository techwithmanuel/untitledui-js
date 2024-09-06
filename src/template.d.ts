import { FC } from "react";
import { SVGMotionProps } from "framer-motion";
interface SVGParentProps extends SVGMotionProps<SVGSVGElement> {
    size?: string;
}
interface PathProps extends SVGMotionProps<SVGPathElement> {
}
export interface SVGComponentProps extends SVGMotionProps<SVGSVGElement> {
    size?: string;
    pathProps?: SVGMotionProps<SVGPathElement>;
}
export interface SVGComponent extends FC<SVGComponentProps> {
}
declare const SVG: FC<SVGParentProps>;
declare const Path: FC<PathProps>;
declare const DefaultLazyImportFallback: () => import("react/jsx-runtime").JSX.Element;
export { SVG, Path, DefaultLazyImportFallback };
//# sourceMappingURL=template.d.ts.map