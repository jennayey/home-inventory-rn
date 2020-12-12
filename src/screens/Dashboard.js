import React, {Component} from 'react';
import {Button, View, Text, Alert, TextInput} from 'react-native';
import 'react-native-gesture-handler';
import Announcement from '../components/Announcements';
import Header from '../components/Header.Title';
import Container from '../components/Container';
import {useNavigation} from '@react-navigation/native';
import {globalStyles} from '../styles/global';
import {getTheme, updateTheme} from '../utils/ManageThemeContexts';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colorSchemes from '../styles/themes';
import ProductField from '../components/Product.Field';
export default function DashboardScreen() {
  const toggleDarkMode = updateTheme();
  const themeWhat = getTheme();

  return (
    <Container>
      <Text style={globalStyles.text}>Dashboard is coming soon</Text>
      <Icon name="code" size={30} color="#900" />
      {/* <Button title="Dark mode test" onPress={toggleDarkMode}>Dark mode</Button> */}
      <ProductField
        title="Expiration Date"
        value="5"
      />
      <ProductField
        title="Expiration"
        value="3"
        buttonShow
        buttonTitle='Set Date'
      inputOptions={{
        inputType: 'numeric'
      }}
        editMode
      />
    </Container>
  );
}
