const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "768px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",

  
};

export default {
  colors: {
    heading: "#52665A",
    shape: "#FAFAFA",
    background: "#e1e1e6",
    white: "#FFFFFF",
    gray: "#CFCFCF",
    black: "#333",
    backgroundItems: "rgba(255,255,255,0.2)",
    alert: "#E83F5B",
  },
  fonts: {
    primary: "jost",
    secondary: "Inter",
  },
  fontSize: {
    small: "1.6rem",
    medium: "2.5rem",
    large: "4rem",
  },
  device: {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
    desktopL: `(max-width: ${size.desktop})`,
  },
};
