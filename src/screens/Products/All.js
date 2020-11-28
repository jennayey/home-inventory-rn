import React, {Component, useState, useEffect} from 'react';
import {Button, View, Text, FlatList, Modal, TextInput} from 'react-native';
import ProductEntry from '../../components/Product.Entry';
import colorSchemes from '../../styles/themes';
// import {set} from 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
function AllProductsScreen() {


  const [items, addItems] = useState();
  const [count, changeCount] = useState(0);

  const [addItemModal, addItemModalVisible] = useState(false);

  const [itemName, setItemName] = useState('');
  const [itemExpiry, setItemExpiry] = useState('');
  const [itemStock, setItemStock] = useState('');
  
  useEffect(() => { storeData().then(getDataStored())}, [count]);

  const storeData = async () => {
    try {
      const jsonValue = JSON.stringify(items)
      await AsyncStorage.setItem('itemList', jsonValue)
      console.log('Data saved hhaha')
    } catch (error) {
      console.log("//" + error.message )
    }
  }
  
  const getDataStored= async () => {
    let list 
    try {
      list = await AsyncStorage.getItem('itemList') || 'none';
      addItems(JSON.parse(list)) ;
    } catch (error) {
      // Error retrieving data
      console.log(error.message + ' HAHAHAH');
    }  console.log (list)

  }

  const addProducts = () => {
    addItems((prevItems) => {
      return [
        {
          itemName: itemName,
          expiryDate: itemExpiry,
          stock: itemStock,
          key: Math.random().toString(),
        },
        ...items,
      ];
    })
    changeCount(count+1)
  }
 

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '5%',
      }}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={addItemModal}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View
          style={{
            // alignItems: 'center',
            margin: '5%',
            paddingVertical: '10%',
            paddingHorizontal: '5%',
            backgroundColor: 'white',
            borderRadius: 10,
            shadowColor: '#000',
            shadowOffset: {
              width: 50,
              height: -20,
            },
            shadowOpacity: 0.5,
            shadowRadius: 3.84,
            elevation: 10,
          }}>
          <Text
            style={{
              color: colorSchemes().textColor,
              fontSize: 18,
              fontWeight: 'bold',
              marginBottom: 30,
            }}>
            Add a new item
          </Text>

          <TextInput
            onChangeText={(text) => setItemName(text)}
            style={{marginBottom: '1%'}}
            placeholder="Name of Product"
          />
          <TextInput
            onChangeText={(text) => setItemStock(text)}
            style={{marginBottom: '1%'}}
            placeholder="No of Stocks"
          />
          <TextInput
            onChangeText={(text) => setItemExpiry(text)}
            style={{marginBottom: 20}}
            placeholder="Expiry Date"
          />

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{width: '50%'}}>
              <Button
                title="Add item"
                onPress={() => {
                  addProducts()
                  addItemModalVisible(!addItemModal)
                }}></Button>
            </View>
            <View
              style={{
                width: '50%',
                justifyContent: 'center',
                flexDirection: 'row',
              }}>
              <Text
                onPress={() => {
                  addItemModalVisible(!addItemModal);
                }}>
                Cancel
              </Text>
            </View>
          </View>
        </View>
      </Modal>

      <Button
        onPress={() => {
          addItemModalVisible(!addItemModal);
        }}
        title="Add Item"
        style={{color: colorSchemes().textColor, paddingVertical: 10}}>
        //TO DO: Sort Function here
      </Button>
      <Button onPress={getDataStored} title='get data'/>
      <Button onPress={storeData} title='store Data'/>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{width: '90%'}}
        data={items}
        renderItem={({item}) => <ProductEntry item={item} />}
      />
    </View>
  );
}

export default AllProductsScreen;
