import React, {Component} from 'react';
import {Button, View, Text, Alert} from 'react-native';
import 'react-native-gesture-handler';
import Announcement from '../components/Announcements'
import Header from '../components/Header.Title'

import { useNavigation } from '@react-navigation/native';


import {getTheme, updateTheme} from '../utils/ManageThemeContexts'


export default function DashboardScreen(){
const toggleDarkMode = updateTheme()
const themeWhat = getTheme()


return (

<View style={{flex: 1, flexGrow:1, alignItems: 'center'}}>
    <Header title='Latest' />
    <Announcement screenName='Expiring'/>
    <Announcement screenName='Low Stock'/>
    <Button title="Dark mode test" onPress={toggleDarkMode}>Dark mode</Button>
</View>);

}

