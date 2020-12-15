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
          marginBottom: 30,
        }}>
        <View
          style={{
            backgroundColor: '#EEEFFF',
            height: 35,
            borderRadius: 5,
            flexGrow: 1,
            marginRight: 10,
            justifyContent: 'center',
            paddingLeft: 10,
          }}>
          <Text>Search</Text>
        </View>
        <View>
          <Button
            onPress={() => {
              navigation.navigate('AddItem');
            }}
            title="Add Item"
            style={{color: colorSchemes().textColor, paddingVertical: 10}}
          />
        </View>
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
            margin: '5%',
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
          <View style={{marginVertical: 20}}>
            <Text
              style={{
                color: colorSchemes().primaryColor,
                fontWeight: 'bold',
                fontSize: 15,
                marginBottom: 10,
                borderBottomWidth: 2,
                borderColor: '#EEE',
              }}>
              Add Item
            </Text>
            <TextInput
              style={{
                padding: 0,
                marginBottom: 20,
                fontSize: 25,
                fontWeight: 'bold',
              }}
              onChangeText={(text) => setItemName(text)}
              placeholder="Name of Product"
            />
          </View>

          <View
            style={{
              paddingBottom: 20,
            }}>
            <Text
              style={{
                textTransform: 'uppercase',
                color: 'black',
                fontSize: 10,
                fontWeight: 'bold',
              }}>
              Stocks
            </Text>
            <TextInput
              style={{
                paddingHorizontal: 0,
                borderColor: '#EEE',
                borderBottomWidth: 2,
              }}
              onChangeText={(text) => setItemStock(text)}
              placeholder="No of Stocks"
              keyboardType="numeric"
            />
          </View>

          <View
            style={{
              marginBottom: 20,
            }}>
            <Text
              style={{
                textTransform: 'uppercase',
                color: 'black',
                fontSize: 10,
                fontWeight: 'bold',
              }}>
              Expiry date
            </Text>
            <View
              style={{
                marginVertical: 15,
                justifyContent: 'space-between',
                alignContent: 'flex-start',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TextInput
                onChangeText={(text) => setItemExpiry(text)}
                style={{
                  paddingHorizontal: 0,
                  color: 'black',
                  borderColor: '#EEE',
                  borderBottomWidth: 2,
                  width: '70%',
                }}
                placeholder="Set Date"
                editable={false}
                value={moment(itemExpiry).format('MMMM DD, YYYY')}
              />

              <Button
                style={{marginLeft: 10}}
                title="Edit Date"
                onPress={showDatePicker}
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: '5%',
            }}>
            <View
              style={{
                width: '45%',
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
            <View style={{width: '50%'}}>
              <Button
                title="Add item"
                onPress={() => {
                  addProducts();
                  addItemModalVisible(!addItemModal);
                }}></Button>
            </View>
          </View>
        </View>

        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          minimumDate={moment().toDate()}
        />
      </Modal>
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
