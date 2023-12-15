const SIZE_BREAKPOINT_DESKTOP = "1464px";
const SIZE_BREAKPOINT_TABLET = "1024px";
const SIZE_BREAKPOINT_MOBILE = "375px";

export const media = {
  desktop: `(min-width: ${SIZE_BREAKPOINT_DESKTOP})`,
  tablet: `(min-width: ${SIZE_BREAKPOINT_TABLET})`,
  mobile: `(min-width: ${SIZE_BREAKPOINT_MOBILE})`,
};

export const breakPoints = {
  sizeBreakpointDesktop: SIZE_BREAKPOINT_DESKTOP,
  sizeBreakpointTablet: SIZE_BREAKPOINT_TABLET,
};
