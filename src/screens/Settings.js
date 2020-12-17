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
      <Text style={globalStyles.small}>Home Inventory Beta - v1.0</Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottomWidth: 2,
          borderColor: '#EEE',
          paddingVertical: 10,
          width: '100%',
          marginTop: 50
        }}>
        <Text style={globalStyles.text}>Clear List</Text>
        <Button
          onPress={() => {
            clearData();
          }}
          title="Clear"
        />
      </View>
    </Container>
  );
}

export default SettingsScreen;
