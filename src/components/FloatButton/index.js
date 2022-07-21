import {TouchableOpacity} from 'react-native';
import React from 'react';
import {style} from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';

const FloatButton = ({onPress}) => {
  return (
    <TouchableOpacity style={style.iconView} onPress={onPress}  >
      <AntDesign
        name="plus"
        size={28}
        color={'white'}
        style={style.iconStyle}
      />
    </TouchableOpacity>
  );
};

export default FloatButton;
