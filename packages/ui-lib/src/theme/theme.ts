import { primaryFont, fontSizes } from "./typography";
import { media, breakPoints } from "./breakPoints";

export const defaultTheme = {
  colors: {
    neutrals: {
      c900: "#252F3D",
      c600: "#7C899C",
      c500: "#8FA3BF",
      c300: "#DAE4F2",
      c200: "#E6EDF7",
      c100: "#F5F9FF",
      c0: "#FFFF",
    },
    brand: {
      default: "linear-gradient(102.47deg, #176FEB -5.34%, #FF80FF 106.58%)",
      hover: "linear-gradient(102.47deg, #1667D9 -5.34%, #F279F2 106.58%)",
      wait: "linear-gradient(102.47deg, rgba(23, 111, 235, 0.7) -5.34%, rgba(255, 128, 255, 0.7) 106.58%);",
      light: "#E5F0FF",
      light2: "#CCE1FF",
    },
    green: {
      default: "#29CC74",
      light: "#CCFFE3",
    },
    red: {
      default: "#E07F4F",
      light: "#FFDFD9",
    },
    specials: {
      illustration:
        "linear-gradient(102.47deg, #7296EB -5.34%, #EAC0E9 106.58%, #EAC0E9 106.58%)",
      section:
        "linear-gradient(102.47deg, rgba(23, 111, 235, 0.5) -5.34%, rgba(255, 128, 255, 0.5) 106.58%)",
      aerolab: "linear-gradient(180deg, #FF8800 0%, #FF6600 100%)",
    },
  },
  primaryFont: primaryFont,
  fontSizes: { ...fontSizes },
  media,
  breakPoints,
  shadows: {
    elevation2: "0px 2px 40px rgba(0, 0, 0, 0.05)",
    elevation1: {
      default: "0px 2px 8px rgba(0, 0, 0, 0.05)",
      hover: "0px 2px 12px rgba(0, 0, 0, 0.08)",
    },
  },
  layout: {
    navbarHeight: "128px",
  },
};
