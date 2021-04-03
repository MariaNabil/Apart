import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {lightGray} from '../constants/Colors';
import {defaultFontSize} from '../constants/Styles';

export default CustomInput = props => {
  const [text, onChangeText] = useState(null);

  return (
    <View style={{marginVertical: 10}}>
      <View>
        <Text
          style={{
            marginLeft: 5,
            color: lightGray,
            fontSize: defaultFontSize,
          }}>
          {props.title}
        </Text>
      </View>

      <TextInput
        style={{}}
        onChangeText={onChangeText}
        value={text}
        placeholder={props.placeholder}></TextInput>
    </View>
  );
};
