import React, {Component} from 'react';
import {Button, View, Text, Alert} from 'react-native';
import 'react-native-gesture-handler';
import Announcement from '../components/Announcements';
import Header from '../components/Header.Title';
import Container from '../components/Container';
import {useNavigation} from '@react-navigation/native';
import {globalStyles} from '../styles/global';
import {getTheme, updateTheme} from '../utils/ManageThemeContexts';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colorSchemes from '../styles/themes';
import {TextInput} from 'react-native-gesture-handler';
export default function DashboardScreen() {
  const toggleDarkMode = updateTheme();
  const themeWhat = getTheme();

  return (
    <Container>
      <Text style={globalStyles.text}>Dashboard is coming soon</Text>
      <Icon name="code" size={30} color="#900" />
      {/* <Button title="Dark mode test" onPress={toggleDarkMode}>Dark mode</Button> */}

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          borderBottomWidth:2,
          borderColor: '#EEE',
          paddingVertical: 10
          
        }}>
        <Text
          style={{
            textTransform: 'uppercase',
            color: colorSchemes().subtitleTextColor,
            marginRight: 10,
            fontWeight: 'bold',
         flexBasis: '25%'
          }}>
          Stocks
        </Text>
        <TextInput
          style={{
            borderColor: '#EEE',
        flexGrow: 1
          }}
       
          placeholder="No of Stocks"
          keyboardType="numeric"
        />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          borderBottomWidth:2,
          borderColor: '#EEE',
          paddingVertical: 10
          
        }}>
        <Text
          style={{
            textTransform: 'uppercase',
            color: colorSchemes().subtitleTextColor,
            marginRight: 10,
            fontWeight: 'bold',
            flexBasis: '25%'
          }}>
          Expiration
        </Text>
        <TextInput
          style={{
            borderColor: '#EEE',
         
          flexGrow: 2
          }}
       
          placeholder="No of Stocks"
          keyboardType="numeric"
        />
        <Button title='Set Dates' style={{flexGrow: 1}}/>
      </View>
    </Container>
  );
}
