import React, {Component} from 'react';
import {Button, View, Text, ToastAndroid} from 'react-native';
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
          marginTop: 50,
        }}>
        <View
          style={{display: 'flex', alignItems: 'flex-start', flexBasis: '60%'}}>
          <Text style={globalStyles.text}>Clear List</Text>
          <Text style={{color: 'gray'}}>
            This will delete all data stored in the app. Use with caution.
          </Text>
        </View>
        <Button
          onPress={() => {
            clearData();
            ToastAndroid.show('Inventory Deleted', ToastAndroid.SHORT);
          }}
          title="Clear"
        />
      </View>
    </Container>
  );
}

export default SettingsScreen;
