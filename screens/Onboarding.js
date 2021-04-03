import React from 'react';
import {Image, StatusBar, TouchableOpacity, View, Text} from 'react-native';
import {lightGrayColor, statusBarColor} from '../constants/Colors';
import CustomButton from '../partial-components/CustomButton';

export default Onboarding = props => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        alignSelf: 'stretch',
      }}>
      <StatusBar backgroundColor={statusBarColor} translucent={true} />
      <View style={{flex: 1 / 2}}>
        <Image
          resizeMode={'stretch'}
          style={{flex: 1}}
          source={require('../assets/onboarding1.png')}></Image>

        <Image
          resizeMode={'contain'}
          style={{
            position: 'absolute',
            bottom: 1,
            zIndex: 2,
            width: '80%',
            height: '80%',
            alignSelf: 'center',
          }}
          source={require('../assets/onboarding2.png')}></Image>
      </View>
      <View
        style={{
          flex: 1 / 2,
          justifyContent: 'space-evenly',
        }}>
        <View
          style={{
            width: '80%',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              color: '#2d3934',
              fontSize: 17,
              marginBottom: 20,
            }}>
            {'Quick Update'}
          </Text>
          <Text style={{color: lightGrayColor}}>
            {
              'Stay informed with the fastest and most effective way, wherever you are'
            }
          </Text>
        </View>
        {/* <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Login');
          }}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              paddingVertical: 10,
              borderRadius: 20,
              backgroundColor: '#18573a',
            }}>
            {'Get Started'}
          </Text>
        </TouchableOpacity> */}
        <CustomButton
          title={'Get Started'}
          onPress={() => {
            props.navigation.navigate('Login');
          }}></CustomButton>
      </View>
    </View>
  );
};
