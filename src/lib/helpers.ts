export function classNames(
  className1: string,
  className2: string | undefined
): string {
  if (!className2) {
    return className1;
  }

  return className1 + " " + className2;
}
