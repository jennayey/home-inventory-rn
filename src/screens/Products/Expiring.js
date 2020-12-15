import React, {Component, useState, useEffect, useLayoutEffect} from 'react';
import {Button, View, Text, FlatList, Modal, TextInput} from 'react-native';
import ProductEntry from '../../components/Product.Entry';
import colorSchemes from '../../styles/themes';
import Container from '../../components/Container';
import {
  useNavigation,
  useFocusEffect,
} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
function ExpiringProductScreen({navigation, route}) {
  const [items, addItems] = useState();
  const [count, changeCount] = useState('0');
  useFocusEffect(
    React.useCallback(() => {
      getDataStored()
      console.log('FOCUS')
      return () => {
          console.log('UNFOCUS')
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [])
  );
  useLayoutEffect(() => {
    getDataStored().then(getDataStored());
navigation.setOptions({
  title: count === null ? 'Expiring' : 'Expiring (' + count + ')'
})
  
  }, [count]);

  //TODO: add function to check if same key exists

   function filterExpiring(item) {
      return -moment().diff(item.expiryDate, 'days') <= 15;
  }

  const getDataStored = async () => {
    let keys, list ;
    try {
      keys = await AsyncStorage.multiGet(['itemCount', 'itemList']);
      list = JSON.parse(keys[1][1]) || [];
      list = list.filter(filterExpiring)
      if (list !== []) {
        addItems(list);
      } else {
        addItems([]);
      }
      changeCount(JSON.parse(keys[0][1]));
    } catch (error) {
      // Error retrieving data
      console.log('HT ' + error.message);
    }
  };

  return (
    <Container>
       <FlatList
        showsVerticalScrollIndicator={false}
        style={{width: '100%'}}
        data={items}
        renderItem={({item}) => <ProductEntry item={item} />}
      />
    </Container>
  );
}

export default ExpiringProductScreen;
