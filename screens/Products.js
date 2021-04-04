import React, {useState} from 'react';
import {FlatList, Text, TextInput, View} from 'react-native';
import {lightGrayColor, searchInputColor} from '../constants/Colors';
import CustomHeader from '../partial-components/CustomHeader';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default Products = props => {
  const [text, setText] = useState(null);

  let all_products = [
    {Id: 0, Name: 'Food'},
    {Id: 1, Name: 'Drinks'},
    {Id: 2, Name: 'Voucher'},
    {Id: 3, Name: "Men's fashion"},
    {Id: 4, Name: "Women's fashion"},
    {Id: 5, Name: 'Child fashion'},
    {Id: 6, Name: 'Sports Wear'},
  ];

  const renderItem = ({item}) => {
    return (
      <View>
        <Text
          style={{
            paddingHorizontal: 15,
            paddingVertical: 5,
            backgroundColor: searchInputColor,
            marginRight: 10,
            marginVertical: 10,
            borderRadius: 10,
          }}>
          {item.Name}
        </Text>
      </View>
    );
  };

  return (
    <View style={{paddingHorizontal: 20, backgroundColor: 'white', flex: 1}}>
      <CustomHeader
        title={'Search product'}
        navigation={props.navigation}></CustomHeader>

      <View
        style={{
          marginVertical: 10,
          backgroundColor: '#f2f2f2',
          borderRadius: 20,
          alignItems: 'center',
          paddingHorizontal: 20,
          flexDirection: 'row',
        }}>
        <Ionicons name="search" size={20} color={lightGrayColor}></Ionicons>
        <TextInput
          style={{}}
          onChangeText={t => {
            setText(t);
          }}
          value={text}
          placeholder={'Search product'}></TextInput>
      </View>

      <FlatList
        data={
          text
            ? all_products.filter(item => {
                return item.Name.includes(text);
              })
            : all_products
        }
        renderItem={renderItem}
        keyExtractor={item => item.Id}
        numColumns={2}></FlatList>
    </View>
  );
};
