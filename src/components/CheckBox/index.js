import {TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {style} from './style';
import Feather from 'react-native-vector-icons/Feather';

const Checkbox = ({color, checked, onPress}) => {
  return (
    <TouchableOpacity
      style={[style.checkContainer, {backgroundColor: color}]}
      onPress={onPress}>
      {checked ? (
        <Feather name="check" size={15} color={'#ffffff'} />
      ) : (
        <View style={style.checkInner}></View>
      )}
    </TouchableOpacity>
  );
};

export default Checkbox;
