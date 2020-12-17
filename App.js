/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import  React, {useEffect}from 'react';
import {Button, View, Text} from 'react-native';
import {getTheme, updateTheme} from './src/utils/ManageThemeContexts'
import  SplashScreen from "react-native-splash-screen";
import HomeScreen from './src/screens/Home'
// import { ThemeProvider } from '@react-navigation/native';
import {Themer} from './src/utils/ManageThemeContexts'
export default function App() {

   useEffect(()=>{
     SplashScreen.hide()
   })

  
  return (
<Themer>
<HomeScreen/>

</Themer>
    );
}


