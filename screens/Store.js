import React from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {lightGray, lightGrayColor} from '../constants/Colors';
import {userImages} from '../constants/Images';
import {shadowStyle2} from '../constants/Styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default Store = props => {
  let stores = [
    {
      Id: 0,
      UserName: 'Bernard Alvarado',
      UserImage: 0,
      Address: 'Los Angeles',
    },
    {
      Id: 1,
      UserName: 'Jessi Dingdong',
      UserImage: 1,
      Address: 'Los Angeles',
    },
  ];

  const renderItem = ({item}) => {
    const {UserName, UserImage, Address} = item;
    return (
      <View
        style={{
          marginVertical: 5,
          paddingVertical: 10,
          marginHorizontal: 1,
          paddingHorizontal: 10,
          ...shadowStyle2,
          borderRadius: 15,
          backgroundColor: 'white',
        }}>
        <View
          style={{
            flexDirection: 'row',
            paddingBottom: 10,
            alignItems: 'center',
          }}>
          <Image
            style={{width: 50, height: 50, borderRadius: 25, marginRight: 10}}
            source={userImages[UserImage].path}
          />
          <View>
            <Text>{UserName}</Text>
            <Text style={{color: lightGray}}>{Address}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{paddingHorizontal: 20, backgroundColor: 'white'}}>
      <TouchableOpacity
        style={{
          marginVertical: 10,
          backgroundColor: '#f2f2f2',
          borderRadius: 20,
          height: 50,
          alignItems: 'center',
          paddingHorizontal: 20,
          flexDirection: 'row',
        }}
        onPress={() => {
          props.navigation.navigate('Products');
        }}>
        <Ionicons name="search" size={20} color={lightGrayColor}></Ionicons>
        <Text style={{color: lightGrayColor, paddingLeft: 20}}>
          {'Search products'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          marginBottom: 20,
          backgroundColor: '#f2f2f2',
          borderRadius: 20,
          height: 50,
          alignItems: 'center',
          paddingHorizontal: 20,
          flexDirection: 'row',
        }}
        onPress={() => {
          props.navigation.navigate('Address');
        }}>
        <Ionicons
          name="arrow-forward"
          size={20}
          color={lightGrayColor}></Ionicons>
        <Text style={{color: lightGrayColor, paddingLeft: 20}}>
          {'Address'}
        </Text>
      </TouchableOpacity>
      <FlatList
        data={stores}
        renderItem={renderItem}
        keyExtractor={item => item.Id}
      />
    </View>
  );
};
