import React, {Component, useState, useEffect, useLayoutEffect} from 'react';

import {useNavigation, StackActions} from '@react-navigation/native';
import {
  Button,
  View,
  Text,
  Alert,
  Pressable,
  Modal,
  ToastAndroid,
} from 'react-native';
import colorSchemes from '../../styles/themes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Container from '../../components/Container';
import {TextInput} from 'react-native-gesture-handler';
import moment from 'moment';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import ProductField from '../../components/Product.Field'
export default function ProductPage({route, navigation}) {
  const {itemID, name, stock} = route.params;
  const [productID, setProductID] = useState();
  const [editMode, setEditMode] = useState();
  const [productList, setList] = useState();
  const [productName, setProductName] = useState(name);
  const [productStocks, setProductStocks] = useState(stock);
  const [productExpiryDate, setProductExpiry] = useState();
  const [ready, setReady] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  useLayoutEffect(() => {
    getDataStored().then(setID());

    navigation.setOptions({
      headerTitle: '',
      headerRight: () =>
        editMode ? (
          <></>
        ) : (
          <Pressable
            onPress={() => {
              setEditMode(true);
            }}>
            <Text
              style={{
                color: 'blue',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                fontSize: 16,
              }}>
              Edit item
            </Text>
          </Pressable>
        ),
    });
  }, [ready, editMode]);

  const setID = () => {
    console.log('SET ID');
    for (let i in productList) {
      if (productList[i].itemName === name) {
        console.log('FOUND ID');
        setProductID(i);
        setProductName(productList[i].itemName);
        setProductStocks(productList[i].stock);
        setProductExpiry(productList[i].expiryDate);

        break;
      } else {
        console.log('SET ID: Did not find');
      }
    }
  };
  const updateData = () => {
    productList[productID].itemName = productName;
    productList[productID].stock = productStocks;
    productList[productID].expiryDate = productExpiryDate;
    console.log('UPDATE DATA: Updating data');
    storeData();
    console.log('UPDATE DATA 2: Data Saved');
  };
  const storeData = async () => {
    // let newProduct = [currentItem.key, JSON.stringify(currentItem)]
    let list = JSON.stringify(productList);
    try {
      await AsyncStorage.setItem('itemList', list);
      console.log('STORE DATA: Data saved');
    } catch (error) {
      console.log('//' + error.message);
    }
  };

  const getDataStored = async () => {
    let list;
    try {
      list = await AsyncStorage.getItem('itemList');
      setList(JSON.parse(list));
      console.log('GET DATA STORED: Got the List');

      setReady(true);
    } catch (error) {
      console.log('GET DATA STORED: ' + error.message);
    }
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
    console.log('View Date');
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.log('A date has been picked: ', date);
    console.log(moment().toDate());
    setProductExpiry(date);
    hideDatePicker();
  };

  return (
    <Container>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        minimumDate={moment().toDate()}
      />
      {editMode ? (
        //TODO convert to text fields in edit mode
        <View style={{width: '100%'}}>
          <View style={{marginVertical: 20}}>
          <Text
              style={{
                textTransform: 'uppercase',
                color: colorSchemes().primaryColor,
                fontWeight: 'bold',
                marginBottom: 10
              }}>
           Edit Mode
            </Text>
            <TextInput
              style={{padding: 0, margin: 0, fontSize: 25}}
              onChangeText={(text) => setProductName(text)}
              placeholder="Name of Product"
              defaultValue={productName}
            />
          </View>
          <ProductField title={'Stocks'} value={productStocks} onChangeText={(text) => setProductStocks(text)} editMode/>
          <ProductField title={'Sample'} value={moment(productExpiryDate).format('MMMM DD, YYYY')} onChangeText={(text) => setProductExpiry(text)}onPress={showDatePicker} buttonShow editMode/>
          <Button
            title="Save"
            onPress={() => {
              updateData();
              setEditMode(false);
              ToastAndroid.show('Item saved!', ToastAndroid.SHORT);
            }}
          />
          <Button
            title="Go back"
            onPress={() => {
              navigation.dispatch(StackActions.popToTop());
            }}
          />
        </View>
      ) : (     
        <View style={{width: '100%'}}>
          <View style={{marginVertical: 20}}>
            <Text
              style={{
                color: colorSchemes().textColor,
                fontSize: 25,
              }}>
              {productName}
            </Text>
          </View>  
          <ProductField title={'Stocks'} value={productStocks} />
          <ProductField title={'Expiry date'} value={moment(productExpiryDate).format('MMMM DD, YYYY')} />
        </View>
      )}
    </Container>
  );
}
