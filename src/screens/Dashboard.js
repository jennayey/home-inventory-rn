import React, {Component} from 'react';
import {Button, View, Text, Alert} from 'react-native';
import 'react-native-gesture-handler';
import Announcement from '../components/Announcements';
import Header from '../components/Header.Title';
import Container from '../components/Container';
import {useNavigation} from '@react-navigation/native';
import {globalStyles} from '../styles/global'
import {getTheme, updateTheme} from '../utils/ManageThemeContexts';

export default function DashboardScreen() {
  const toggleDarkMode = updateTheme();
  const themeWhat = getTheme();

  return (
    <Container>
                <Text style={globalStyles.text}>Dashboard is coming soon</Text>

      {/* <Button title="Dark mode test" onPress={toggleDarkMode}>Dark mode</Button> */}
    </Container>
  );
}
