export const containerSize = (screen: string | undefined ): string => {
  switch (screen) {
    case "full":
      return "w-full";
    default:
      return "container";
  }
}
