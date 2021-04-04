import React from 'react';
import {View} from 'react-native';
import {lightGray} from '../constants/Colors';

export default props => {
  return (
    <View
      style={{
        backgroundColor: lightGray,
        height: 0.5,
      }}
    />
  );
};
