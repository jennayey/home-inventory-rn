import React, {Component, useState, useEffect, useLayoutEffect} from 'react';

import {useNavigation} from '@react-navigation/native';
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
import {get} from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import {set} from 'react-native-reanimated';
import { TextInput } from 'react-native-gesture-handler';

export default function ProductPage({route, navigation}) {
  const {itemID, name, stock, expiryDate} = route.params;
  const [productID, setProductID] = useState();
  const [count, setCount] = useState(0);
  const [editMode, setEditMode] = useState();
  const [productList, setList] = useState();
  const [productName, setProductName] = useState(name);
  const [productStocks, setProductStocks] = useState(stock);
  const [productExpiryDate, setProductExpiry] = useState(expiryDate);
  const [ready, setReady] = useState(false);

  // useEffect(() => {
  //   // getDataStored()
  //   //   .then(getDataStored())
  //   //   .then(console.log('USEFFECT'))
  //   //   .then(console.log(productList))
  //   //   .then(setID()).then(setReady(true));
  //   if (productList === undefined) {
  //     getDataStored().then(count + 1).then(setReady(r));
  //     console.log("USE EFFECT: product List is undefined")
  //   } else {

  //     // if (productID === undefined || null) {
  //     //   setID();
  //     // }
  //     // console.log(productID);
  //     console.log("USE EFFECT: product List is defined")
  //     console.log(productList);
  //     setID()
  //   }

  // }, [count]);

  // useEffect(() => {
  //   console.log('Name: ' + productID);
  // }, [productID]);

  useLayoutEffect(() => {
    getDataStored().then(setID())
    
    ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);
    
    // navigation.setOptions({
    //   headerRight: () => (
    //     <Pressable
    //       onPress={() => {
    //         setEditMode(true);
    //       }}>
    //       <Text style={{color: 'blue', fontWeight: 'bold', paddingRight: '2%'}}>
    //         Edit item
    //       </Text>
    //     </Pressable>
    //   ),
    // });
  },[ready]);

  //TODO add the state for the edited items
  //TODO find the item in array to edit
  //TODO only save when save button is pressed
  const setID = () => {
    console.log('SET ID')
    for (let i in productList) {
      if (productList[i].itemName === name) {
        console.log('FOUND ID')
        setProductID(i);
        setProductName(productList[i].itemName)
        setProductStocks(productList[i].stock)
        setProductExpiry(productList[i].expiryDate)
        // console.log(productList[i].itemName);
        //   productList[i].expiryDate = productExpiryDate
        //   productList[i].stock = productStocks;
        // console.log (productList)
       
        break;
      } else {
        console.log('SET ID: Did not find');
      }
    }
  };

  // const mode = async () => {
  //   setEditMode(false);
  // };

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

  // const getDataStored = async () => {
  //   let list;
  //   try {
  //     list = await AsyncStorage.getItem('itemList');
  //     setList(JSON.parse(list));
  //   } catch (error) {
  //     // Error retrieving data
  //     console.log('ProdPage Get ' + error.message);
  //   }
  // };

  const getDataStored = async () => {
    let list;
    try {
      list = await AsyncStorage.getItem('itemList');
      setList(JSON.parse(list));
      console.log('GET DATA STORED: Got the List');
      
    setReady(true)
     
    } catch (error) {
      console.log('GET DATA STORED: ' + error.message);
    }
    
    
  };

  return (
 
      
        <View>
          {editMode ? (
            //TODO convert to text fields in edit mode
            <View>
              {/* TODO save function  */}
              <TextInput
            onChangeText={(text) => setProductName(text)}
            style={{marginBottom: '1%'}}
            placeholder="Name of Product"
            defaultValue={productName}
            
          />
          <TextInput
            onChangeText={(text) => setProductStocks(text)}
            style={{marginBottom: '1%'}}
            placeholder="No of Stocks"
            keyboardType='numeric'
          />
          <TextInput
            onChangeText={(text) => setProductExpiry(text)}
            style={{marginBottom: 20}}
            placeholder="Expiry Date"
          />
              <Button
                title="Save"
                onPress={() => {
                  updateData();
                  setEditMode(false);
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
               {productName}
              </Text>
              <Text style={{color: colorSchemes().textColor, marginBottom: 10}}>
                {productStocks} pcs left{' '}
              </Text>

              <Text style={{color: colorSchemes().textColor, marginBottom: 10}}>
                {productExpiryDate}{' '}
              </Text>
              <Button
                title="Edit"
                onPress={() => {
                  // updateData();
                  setEditMode(true);
                  console.log(productList);
        
                }}
              />
            </View>
          )}
        </View>
     
 
  );
}
