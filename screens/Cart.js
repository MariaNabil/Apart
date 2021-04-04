import React from 'react';
import {Image, Text, View} from 'react-native';
import CustomButton from '../partial-components/CustomButton';
import CustomHeader from '../partial-components/CustomHeader';

export default Cart = props => {
  return (
    <View style={{marginHorizontal: 20, alignItems: 'center', flex: 1}}>
      <CustomHeader navigation={props.navigation} title={'Cart'}></CustomHeader>
      <Image
        resizeMode={'contain'}
        style={{
          height: '40%',
          alignSelf: 'center',
          marginBottom: 20,
        }}
        source={require('../assets/cart.png')}></Image>

      <Text style={{fontSize: 20, marginBottom: 20}}>
        {'No products for your cart'}
      </Text>

      <View
        style={{
          width: '100%',
        }}>
        <CustomButton
          title={'Continue Shopping'}
          onPress={() => {
            props.navigation.navigation('Home');
          }}></CustomButton>
      </View>
    </View>
  );
};
