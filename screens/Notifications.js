import React from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {lightGray} from '../constants/Colors';
import {userImages} from '../constants/Images';
import {shadowStyle2} from '../constants/Styles';
import CustomHeader from '../partial-components/CustomHeader';

export default Notifications = props => {
  let notifications = [
    {
      Id: 0,
      UserName: 'Bernard Alvarado',
      UserImage: 0,
      Message: 'Has added a new member',
    },
    {
      Id: 1,
      UserName: 'Jessi Dingdong',
      UserImage: 1,
      Message: 'Has added a new member',
    },
  ];

  const renderItem = ({item}) => {
    const {UserName, UserImage, Message} = item;
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
            <Text style={{color: lightGray}}>{Message}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{marginHorizontal: 20}}>
      <CustomHeader
        navigation={props.navigation}
        title={'Notifications'}></CustomHeader>
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={item => item.Id}
      />
    </View>
  );
};
