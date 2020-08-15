import React, {Component} from 'react';
import {Button, View, Text, Alert} from 'react-native';
import 'react-native-gesture-handler';
import Announcement from '../components/Announcements'
import Header from '../components/Header.Title'
import {getTheme, updateTheme} from '../utils/ManageThemeContexts'
import { useNavigation } from '@react-navigation/native';


export default function DashboardScreen(){
const toggleDarkMode = updateTheme()
const themeWhat = getTheme()
const toggleConsole = () => {
console.log (themeWhat)
}

return (    <View style={{flex: 1, flexGrow:1, alignItems: 'center'}}>

<Header title='Latest' />
<Announcement screenName='Expiring'/>

<Announcement screenName='Low Stock'/>
 {/* <Button title="Dark mode test" onPress={toggleDarkMode}>Dark mode</Button> */}
{/*<Button title="Press for Console" onPress={toggleConsole}>Console</Button> */}
</View>);

}

