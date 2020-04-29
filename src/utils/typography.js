import Typography from "typography"

const typography = new Typography({
  // Base Config
  baseFontSize: "17px",
  baseLineHeight: 1.6,
  scaleRatio: 3.6,

  // Heading Settings
  headerFontFamily: ["Arnold", "sans-serif"],
  headerWeight: "700",
  headerColor: "#1e2023",

  // Body Settings
  bodyFontFamily: ["Rubik", "sans-serif"],
  bodyColor: "#1e2023",
  bodyWeight: "400",
  boldWeight: "500",
})

// Insert styles directly into the <head>
typography.injectStyles()

export default typography
