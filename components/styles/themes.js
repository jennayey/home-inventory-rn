import { registerThemes } from "react-native-themed-styles"

const light = { backgroundColor: "white", textColor: "black" }
const dark = { backgroundColor: "black", textColor: "white" }

const styleSheetFactory = registerThemes(
  { light, dark },
  () => "dark"
)

export { styleSheetFactory }