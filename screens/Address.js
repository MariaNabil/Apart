import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import {lightGrayColor} from '../constants/Colors';
import CustomHeader from '../partial-components/CustomHeader';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MapView, {Marker} from 'react-native-maps';

export default Address = props => {
  const [text, setText] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  renderMap = () => {
    if (latitude && longitude) {
      return (
        <MapView
          key={0}
          onPress={f => {
            setLatitude(f.nativeEvent.coordinate.latitude);
            setLongitude(f.nativeEvent.coordinate.longitude);
          }}
          style={{
            width: '100%',
            height: 200,
            marginTop: 20,
          }}
          showsUserLocation={false}
          followsUserLocation={false}
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: 0.4,
            longitudeDelta: 0.4,
          }}
          region={{
            latitude,
            longitude,
            latitudeDelta: 0.4,
            longitudeDelta: 0.4,
          }}>
          <Marker
            key={1}
            draggable
            coordinate={{
              latitude,
              longitude,
              latitudeDelta: 0.4,
              longitudeDelta: 0.4,
            }}
            onDragEnd={f => {
              {
                setLatitude(f.nativeEvent.coordinate.latitude);
                setLongitude(f.nativeEvent.coordinate.longitude);
              }
            }}
          />
        </MapView>
      );
    }
  };

  return (
    <View style={{paddingHorizontal: 20, backgroundColor: 'white', flex: 1}}>
      <CustomHeader
        navigation={props.navigation}
        title={'Address'}></CustomHeader>

      <View
        style={{
          marginVertical: 10,
          backgroundColor: '#f2f2f2',
          borderRadius: 20,
          alignItems: 'center',
          paddingHorizontal: 20,
          flexDirection: 'row',
        }}>
        <Ionicons name="search" size={20} color={lightGrayColor}></Ionicons>
        <TextInput
          style={{}}
          onChangeText={t => {
            setText(t);
          }}
          value={text}
          placeholder={'Search Address'}></TextInput>
      </View>
    </View>
  );
};
