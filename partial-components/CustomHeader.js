import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default CustomHeader = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        height: 90,
      }}>
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <MaterialIcons name={`arrow-back-ios`} size={22} color={'black'} />
      </TouchableOpacity>
      <Text
        style={{
          color: 'black',
          textAlign: 'center',
          flex: 1,
          fontSize: 17,
        }}>
        {props.title}
      </Text>
    </View>
  );
};
