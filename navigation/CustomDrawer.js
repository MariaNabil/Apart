import React from 'react';
import {ScrollView, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default CustomDrawer = props => {
  return (
    <ScrollView style={{flex: 1, marginTop: 20}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          paddingVertical: 20,
          marginHorizontal: 20,
        }}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.toggleDrawer();
            props.navigation.navigate('Home');
          }}
          style={{
            alignItems: 'center',
          }}>
          <Ionicons name="md-home" size={30} />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          paddingVertical: 20,
          marginHorizontal: 20,
        }}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.toggleDrawer();
            props.navigation.navigate('Notifications');
          }}
          style={{
            alignItems: 'center',
          }}>
          <Ionicons name="notifications" size={30} />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          paddingVertical: 20,
          marginHorizontal: 20,
        }}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.toggleDrawer();
            props.navigation.navigate('Cart');
          }}
          style={{
            alignItems: 'center',
          }}>
          <FontAwesome5 name="file-invoice-dollar" size={30} />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          paddingVertical: 20,
          marginHorizontal: 20,
        }}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.toggleDrawer();
            props.navigation.navigate('Store');
          }}
          style={{
            alignItems: 'center',
          }}>
          <FontAwesome5 name="store-alt" size={30} />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          paddingVertical: 20,
          marginHorizontal: 20,
        }}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.toggleDrawer();
            props.navigation.navigate('Profile');
          }}
          style={{
            alignItems: 'center',
          }}>
          <Ionicons name="person" size={30} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
