import React, {Component, useState, useEffect, useLayoutEffect} from 'react';
import {Button, View, Text, FlatList, Modal, TextInput} from 'react-native';
import ProductEntry from '../../components/Product.Entry';
import colorSchemes from '../../styles/themes';
import Container from '../../components/Container';
import {globalStyles} from '../../styles/global';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
function AllProductsScreen({navigation, route}) {
  const [items, addItems] = useState();
  const [lowStock, addLowStock] = useState();
  const [count, changeCount] = useState('0');
  const [addItemModal, addItemModalVisible] = useState(false);
  const [itemName, setItemName] = useState('');
  const [itemExpiry, setItemExpiry] = useState('');
  const [itemStock, setItemStock] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  //TODO
  useEffect(() => {
    storeData().then(console.log('RUNNING'));
    navigation.setOptions({
      title: count === null ? 'All' : 'All (' + count + ')',
      headerRight: () => (
        <Button
          onPress={() => alert('This is NOT  button!')}
          title="Info"
          color="#fff"
        />
      ),
    });
  }, [count, itemExpiry]);

  useFocusEffect(
    React.useCallback(() => {
      getDataStored();
      console.log('FOCUS');

      return () => {
        console.log('UNFOCUS');
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, []),
  );
  useLayoutEffect(() => {
    getDataStored().then(getDataStored());
  }, []);

  const storeData = async () => {
    let products = ['itemList', JSON.stringify(items)];
    let productCount = ['itemCount', JSON.stringify(count)];
    try {
      await AsyncStorage.multiSet([productCount, products]);
    } catch (error) {
      console.log('//' + error.message);
    }
  };
  //TODO: add function to check if same key exists
  const getDataStored = async () => {
    let keys, list;
    try {
      keys = await AsyncStorage.multiGet(['itemCount', 'itemList']);
      list = JSON.parse(keys[1][1]) || [];
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
  const clearData = async () => {
    let keys = ['itemList', 'itemCount'];
    try {
      await AsyncStorage.multiRemove(keys);
    } catch (error) {
      console.log(error.message);
    }
    getDataStored();
  };

  const addProducts = () => {
    addItems((prevItems) => {
      return [
        ...items,
        {
          itemName: itemName,
          expiryDate: itemExpiry,
          stock: itemStock,
          key: '@' + itemName,
          // status:
          //TODO Add price
          //TODO Notes
          //TODO Add key for expiring status
        },
      ];
    });
    changeCount(count + 1);
    console.log('ADD PRODUCTS:' + moment().diff(itemExpiry, 'days'));
  };
  const getAllKeys = async () => {
    let keys = [];
    try {
      keys = await AsyncStorage.getAllKeys();
    } catch (e) {
      // read key error
    }
    // console.log('Test' + keys)
    // example console.log result:
    // ['@MyApp_user', '@MyApp_key']
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
    setItemExpiry(date);
    hideDatePicker();
  };
  return (
    <Container>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginBottom: 30
        }}>
        <View
          style={{
            backgroundColor: '#EEEFFF',
            height: 35,
            borderRadius: 5,
            flexGrow: 1,
            marginRight: 10,
            justifyContent: 'center',
            paddingLeft: 10
          }}>
          <Text>Search</Text>
        </View>
        <View style={{marginRight: 10}}>
          <Button
            onPress={() => {
              addItemModalVisible(!addItemModal);
            }}
            title="Add Item"
            style={{color: colorSchemes().textColor, paddingVertical: 10}}
          />
        </View>
        <Button
        onPress={() => {
          clearData();
        }}
        title="Clear"
      />
      </View>
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
            keyboardType="numeric"
          />

          <View
            style={{
              marginVertical: 15,
              justifyContent: 'space-between',
              alignContent: 'center',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TextInput
              onChangeText={(text) => setItemExpiry(text)}
              style={{color: 'black'}}
              placeholder="TEst"
              editable={false}
              value={moment(itemExpiry).format('MMMM DD, YYYY')}
            />

            <Button title="Set Date" onPress={showDatePicker} />
          </View>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
            minimumDate={moment().toDate()}
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
                  addProducts();
                  addItemModalVisible(!addItemModal);
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

      {/* //TO DO: Sort Function here */}
      {/* <Button onPress={getDataStored} title="get data" />
      <Button onPress={storeData} title="store Data" />
     */}
      
      {count === null ? (
       
        <Text style={globalStyles.text}>You have no products</Text>
       
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          style={{width: '100%'}}
          data={items}
          renderItem={({item}) => <ProductEntry item={item} />}
        />
      )}
    </Container>
  );
}

export default AllProductsScreen;
