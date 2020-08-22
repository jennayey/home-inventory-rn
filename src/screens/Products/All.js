import React, {Component, useState} from 'react';
import {Button, View, Text, FlatList, Modal, TextInput} from 'react-native';
import ProductEntry from '../../components/Product.Entry';
import colorSchemes from '../../styles/themes';

function AllProductsScreen() {
  const [items, addItems] = useState([
    {itemName: 'Oreo Cookies', expiryDate: 'December', stock: 3, key: '1'},
    {itemName: 'Cooking Oil', expiryDate: 'November', stock: 1, key: '2'},
    {itemName: 'Oreo Cookies', expiryDate: 'December', stock: 3, key: '3'},
    {itemName: 'Oreo Cookies', expiryDate: 'December', stock: 3, key: '4'},
    {itemName: 'Oreo Cookies', expiryDate: 'December', stock: 3, key: '5'},
  ]);

  const [addItemModal, addItemModalVisible] = useState(true);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '5%'
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
            shadowColor: "#000",
            shadowOffset: {
              width: 50,
              height: -20
            },
            shadowOpacity: 0.5,
            shadowRadius: 3.84,
            elevation: 10
          }}>
          <Text style={{color: colorSchemes().textColor, fontSize: 18, fontWeight: 'bold', marginBottom: 30}} >Add a new item</Text>

      <TextInput style={{marginBottom: '1%'}} placeholder='Name of Product' />
      <TextInput style={{marginBottom: '1%'}} placeholder='No of Stocks' />
      <TextInput style={{marginBottom: 20}} placeholder='Expiry Date' />


          <Button
          
            title="Add item"
            onPress={() => {
              addItemModalVisible(!addItemModal);
            }}>
            {' '}
          </Button>
        </View>
      </Modal>

      <Button
      onPress={()=> {addItemModalVisible(!addItemModal)}}
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
