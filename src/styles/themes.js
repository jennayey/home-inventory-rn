
import {getTheme, setTheme} from '../utils/ManageThemeContexts'

 function colorSchemes () {
  const darkTheme = getTheme()
  const colors = {
    primaryColor: darkTheme ? '#000000' :'#172CE8',
    primaryBackgroundColor: darkTheme ? '#0f053d' : '#FFFFFF',
    secondaryBackgroundColor: darkTheme ? '#000' : '#F3F8FF',
    textColor: darkTheme ? '#FFFFFF' : '#0B2F5D',
    secondaryTextColor: darkTheme ? '#' : '#AD0000',
    accentColor: darkTheme ? '#1a0b5e': '#172CE8',
    navTextColor: darkTheme ? '#FFFFFF' : '#172CE8',
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



