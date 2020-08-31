import React, {Component, useState} from 'react';
import {Button, View, Text, FlatList, Modal, TextInput} from 'react-native';
import ProductEntry from '../../components/Product.Entry';
import colorSchemes from '../../styles/themes';
import { set } from 'react-native-reanimated';

function AllProductsScreen() {
  const [items, addItems] = useState([
    {itemName: 'Oreo Cookies', expiryDate: 'December', stock: 3, key: '1'},
    {itemName: 'Cooking Oil', expiryDate: 'November', stock: 1, key: '2'},

  ]);

  const [addItemModal, addItemModalVisible] = useState(false);

  const [itemName, setItemName] = useState('')
  const [itemExpiry, setItemExpiry] = useState('')
  const [itemStock, setItemStock] = useState('')

 
  const addProducts = () =>{
    addItems((prevItems) => {
     return [
      {itemName: itemName, expiryDate: itemExpiry, stock: itemStock, key: Math.random().toString()}, 
      ...items
    ] 
    }
    )
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

          <TextInput onChangeText={(text)=> setItemName(text)} style={{marginBottom: '1%'}}  placeholder="Name of Product" />
          <TextInput onChangeText={(text)=> setItemStock(text)} style={{marginBottom: '1%'}} placeholder="No of Stocks" />
          <TextInput onChangeText={(text)=> setItemExpiry(text)} style={{marginBottom: 20}} placeholder="Expiry Date" />

          <Button title="Add item" onPress={()=>{addProducts();  addItemModalVisible(!addItemModal)}}></Button>

          <Text
          style={{margin: 20}}
            onPress={() => {
              addItemModalVisible(!addItemModal);
            }}>
            Cancel
          </Text>
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
