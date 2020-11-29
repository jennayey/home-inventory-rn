import React, {Component, useState, useEffect} from 'react';

import {useNavigation} from '@react-navigation/native';
import {Button, View, Text, Alert, Pressable, Modal} from 'react-native';
import colorSchemes from '../../styles/themes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

export default function ProductPage({route, navigation}) {

  const {itemID, name, stock, expiryDate} = route.params;
  const [productID, setProductID] = useState();
  const [count, setCount] = useState(0)
  const [editMode, setEditMode] = useState();
  const [productList, setList] = useState();
  const [productName, setProductName] = useState(name);
  const [productStocks, setProductStocks] = useState(stock);
  const [productExpiryDate, setProductExpiry] = useState(expiryDate);

  useEffect(() => {mode()
     getDataStored()
    console.log(productList)
  },[count]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable
          onPress={() => {
            setEditMode(true);
            updateData()
          }}>
          <Text style={{color: 'blue', fontWeight: 'bold', paddingRight: '2%'}}>
            Edit item
          </Text>
        </Pressable>
      ),
    });
  }, [navigation]);
  
  //TODO add the state for the edited items
  //TODO find the item in array to edit
  //TODO only save when save button is pressed
const setID = () => {
  for (let i in productList) {
    if (productList[i].key === itemID) {
      setProductID(i);
      // console.log(productList[i].itemName);
      //   productList[i].expiryDate = productExpiryDate
      //   productList[i].stock = productStocks;

      console.log('SET ID: found it! ' + productID  );
      // console.log (productList)
      break;
    }
    else {
      console.log ('SET ID: Did not find')
    }
  }
}

const mode =() =>{
  setEditMode(false)
}
  const updateData = () => {
    // getDataStored().then(setID())
    setProductName( productList[productID].itemName + ' EditedLOL');
    setCount(count+1)
    console.log('UPDATE DATA: check list')
    console.log(productList);
    setID()
    productList[productID].itemName = productName;
    console.log(productList[productID].itemName);
    //   productList[i].expiryDate = productExpiryDate
    //   productList[i].stock = productStocks;
    // console.log(productList);
    setList(productList);
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
      console.log('DATA FETCHED: loaded list');
     
    } catch (error) {
      // Error retrieving data
      console.log('ProdPage Get ' + error.message);
    }
  };

  return (
    <View>
      {editMode ? (
        //TODO convert to text fields in edit mode
        <View>
          {/* TODO save function  */}
          <Button
            title="Save"
            onPress={() => {
              updateData();
             }}
          />
        </View>
      ) : (
        <View style={{padding: '5%', borderRadius: 5}}>
          <Text
            style={{
              color: colorSchemes().textColor,
              marginBottom: 10,
              fontWeight: 'bold',
            }}>
            {name}{' '}
          </Text>
          <Text style={{color: colorSchemes().textColor, marginBottom: 10}}>
            {stock} pcs left{' '}
          </Text>

          <Text style={{color: colorSchemes().textColor, marginBottom: 10}}>
            {expiryDate}{' '}
          </Text>
        </View>
      )}
    </View>
  );
}
