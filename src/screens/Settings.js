import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';
import Container from '../components/Container';
import {globalStyles} from '../styles/global';
import AsyncStorage from '@react-native-async-storage/async-storage';

function SettingsScreen({navigation, route}) {
  const clearData = async () => {
    let keys = ['itemList', 'itemCount'];
    try {
      await AsyncStorage.multiRemove(keys);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Container>
      <Text style={globalStyles.text}>Settings feature is coming soon</Text>
      <Button
          onPress={() => {
            clearData();
          }}
          title="Clear"
        />
    </Container>
  );
}

export default SettingsScreen;
