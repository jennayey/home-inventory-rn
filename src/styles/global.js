import {StyleSheet} from 'react-native';

import { useTheme } from "react-native-themed-styles"
// import { styleSheetFactory } from "./themes"

//  const themedStyles = styleSheetFactory(theme => ({
//   container: {
//     backgroundColor: theme.backgroundColor,
//     flex: 1
//   },
//   text: {
//     color: theme.textColor
//   }
// }))

// export {themedStyles}

export const globalStyles = StyleSheet.create({
    header: {
        
        color: '#fff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },

      text: {
        fontSize: 40,
        textAlign: 'center',
      },
  });