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
function LowStockProductScreen({navigation}) {
  const [items, addItems] = useState();
  const [count, changeCount] = useState('0');

  useFocusEffect(
    React.useCallback(() => {
      getDataStored()
      console.log('FOCUS')
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [])
  );
  useLayoutEffect(() => {
    getDataStored().then(getDataStored());
    // navigation.setOptions({
    //   title: count === '' ? 'Low stock' : 'Low Stock (' + count + ')',
    // });
    // navigation.setOptions({
    //   title: count === null ? 'Low Stock' : 'Low Stock (' + count + ')'
    // })
  }, [count]);

  //TODO: add function to check if same key exists

   function filterLowStock (item) {
      return item.stock <= 2;
  }

  const getDataStored = async () => {
    let keys, list ;
    try {
      keys = await AsyncStorage.multiGet(['itemCount', 'itemList']);
      list = JSON.parse(keys[1][1]) || [];
      list = list.filter(filterLowStock)
      if (list !== []) {
        addItems(list);
      } else {
        addItems([]);
      }
      changeCount(list.length);
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

export default LowStockProductScreen;
