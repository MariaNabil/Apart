import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {lightGray, redColor} from '../constants/Colors';
import {defaultFontSize} from '../constants/Styles';
import CustomButton from '../partial-components/CustomButton';
import CustomHeader from '../partial-components/CustomHeader';
import CustomInput from '../partial-components/CustomInput';

export default Login = props => {
  return (
    <View style={{flex: 1, paddingHorizontal: 20, marginBottom: 20}}>
      <CustomHeader
        navigation={props.navigation}
        title={'Login'}></CustomHeader>
      <Image
        resizeMode={'contain'}
        style={{
          height: '40%',
          alignSelf: 'center',
          marginBottom: 20,
        }}
        source={require('../assets/login.png')}></Image>

      <CustomInput
        title={'Store Name'}
        placeholder={'Enter store name'}></CustomInput>

      <CustomButton
        title={'Login'}
        onPress={() => {
          // props.navigation.navigate('Login');
        }}></CustomButton>

      <Text
        style={{
          textAlign: 'center',
          color: lightGray,
          marginTop: 20,
          fontSize: defaultFontSize,
        }}>
        {'By clicking Log in, you agree to our'}
      </Text>

      <Text
        style={{
          textAlign: 'center',
          color: redColor,
          fontSize: defaultFontSize,
        }}>
        {'Terms of Use'}
      </Text>
    </View>
  );
};
