import React, {useState, useEffect, useLayoutEffect} from 'react';
import {
  Button,
  View,
  Text,
  FlatList,
  Modal,
  TextInput,
  ToastAndroid,
} from 'react-native';
import ProductEntry from '../../components/Product.Entry';
import colorSchemes from '../../styles/themes';
import Container from '../../components/Container';
import {useFocusEffect, StackActions} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import ProductField from '../../components/Product.Field';
import moment from 'moment';
function AddItem({navigation, route}) {
  const [items, addItems] = useState();
  const [count, changeCount] = useState('0');
  const [addItemModal, addItemModalVisible] = useState(false);
  const [itemName, setItemName] = useState('');
  const [itemExpiry, setItemExpiry] = useState('');
  const [itemStock, setItemStock] = useState(0);
  const [itemNotes, setItemNotes] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  //TODO
  useEffect(() => {
    storeData().then(console.log('RUNNING'));
    navigation.setOptions({
      title: '',
      // headerRight: () => (
      //   <Button
      //     onPress={() => alert('This is NOT  button!')}
      //     title="Info"
      //     color="#fff"
      //   />
      // ),
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
          notes: itemNotes
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
      <View style={{width: '100%'}}>
        <View style={{marginVertical: 20}}>
          <Text
            style={{
              textTransform: 'uppercase',
              color: colorSchemes().primaryColor,
              fontWeight: 'bold',
              marginBottom: 10,
            }}>
            Add a product{' '}
          </Text>
          <TextInput
            style={{padding: 0, margin: 0, fontSize: 25}}
            onChangeText={(text) => setItemName(text)}
            placeholder="Name of Product"
            //   defaultValue={productName}
          />
        </View>
        <ProductField
          title={'Stocks'}
          inputType={'numeric'}
          onChangeText={(text) => setItemStock(text)}
          placeholderText={'No of Stocks'}
          textValue={itemStock}
          numberField
          onPressLButton={ () => setItemStock(prevItemStocks => prevItemStocks - 1)}
            onPressRButton={ () => setItemStock(prevItemStocks => prevItemStocks + 1)}
          
          
        />
        <ProductField
          title={'Expiry Date'}
          buttonTitle={'Set date'}

          value={moment(itemExpiry).format('MMMM DD, YYYY') !== 'Invalid date' ? moment(itemExpiry).format('MMMM DD, YYYY') : 'No selected date' }
          onChangeText={(text) => setItemExpiry(text)}
          onPress={showDatePicker}
           buttonShow
        />
     <ProductField
          title={'Notes'}
          onChangeText={(text) => setItemNotes(text)}
          placeholderText={'Add notes here'}
          editMode
          multiline
        />
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
              ToastAndroid.show('Item Added!', ToastAndroid.SHORT);
              navigation.dispatch(StackActions.popToTop());
            }}></Button>
        </View>
      </View>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        minimumDate={moment().toDate()}
      />
    </Container>
  );
}

export default AddItem;
