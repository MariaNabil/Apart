import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {buttonColor} from '../constants/Colors';

export default CustomButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Text
        style={{
          color: 'white',
          textAlign: 'center',
          paddingVertical: 10,
          borderRadius: 20,
          backgroundColor: buttonColor,
        }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};
