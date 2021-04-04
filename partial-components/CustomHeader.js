import { Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export default CustomHeader = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
      }}>
      <TouchableOpacity
        onPress={() => {
          if (props.isDrawer) {
            props.navigation.toggleDrawer();
          } else {
            props.navigation.goBack();
          }
        }}>
        {props.isDrawer ? (
          <SimpleLineIcons name="menu" color={'black'} size={22} />
        ) : (
          <MaterialIcons name={`arrow-back-ios`} size={22} color={'black'} />
        )}
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
