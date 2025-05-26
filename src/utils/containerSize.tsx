export const containerSize = (screen: string | undefined ): string => {
  switch (screen) {
    case "full":
      return "max-w-[1440px] w-full";
    default:
      return "container";
  }
}
