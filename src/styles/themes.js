
import {getTheme, setTheme} from '../contexts/ManageThemeContexts'

 function colorSchemes () {
  const darkTheme = getTheme()
  const colors = {
    primaryColor: darkTheme ? '#000000' :'#0f053d',
    backgroundColor: darkTheme ? '#0f053d' : '#FFFFFF',
    textColor: darkTheme ? '#FFFFFF' : '#0f053d',
    secondaryColor: darkTheme ? '#1a0b5e': '#f3f2f7'
  }  
  return colors
};
 

export default colorSchemes
// const ThemeSwitcher = () => {
//   const colorScheme = global.darkTheme;
//   const theme = colorSchemes[colorScheme] || colorSchemes.true;

//   return theme;
// }

// export default ThemeSwitcher












 

// import { registerThemes } from "react-native-themed-styles"

// const light = { backgroundColor: "white", textColor: "black" }
// const dark = { backgroundColor: "black", textColor: "white" }

// const styleSheetFactory = registerThemes(
//   { light, dark },
//   () => "dark"
// )

// export { styleSheetFactory }



