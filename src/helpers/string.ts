export const toKebabCase = (string: string): string =>
  string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

export const mergeClasses = (...classes: string[]): string =>
  classes
    .filter(
      (className, index, array) =>
        Boolean(className) &&
        className.trim() !== "" &&
        array.indexOf(className) === index
    )
    .join(" ")
    .trim();
