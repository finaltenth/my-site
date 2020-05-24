import Typography from "typography"

const typography = new Typography({
  // Base Config
  baseFontSize: "17px",
  baseLineHeight: 8,
  scaleRatio: 3.6,

  // Heading Settings
  headerFontFamily: ["Monument Extended", "sans-serif"],
  headerWeight: "900",
  headerColor: "#fff",

  // Body Settings
  bodyFontFamily: ["Rubik", "sans-serif"],
  bodyColor: "#1e2023",
  bodyWeight: "400",
  boldWeight: "500",
  baseLineHeight: 3,

  overrideThemeStyles: ({ rhythm }) => ({
    h1: {
      color: "#fff",
    },
    h3: {
      color: "#FF6A3C",
    },
    h4: {
      fontWeight: 400,
      color: "#fff",
    },
    "footer h4": {
      color:"#fff",
    },
    "#intro-text p": {
      color:"#fff",
    },
    "#intro-text h1": {
      color: "#fff",
    }
  })
})

// Insert styles directly into the <head>
typography.injectStyles()

export default typography
