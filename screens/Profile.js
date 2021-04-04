import React from 'react';
import {View} from 'react-native';
import CustomHeader from '../partial-components/CustomHeader';

export default Profile = props => {
  return (
    <View style={{marginHorizontal: 20}}>
      <CustomHeader
        navigation={props.navigation}
        title={'Profile'}></CustomHeader>
    </View>
  );
};
