import {View} from 'react-native';
import React from 'react';
import {style} from './style';
import Feather from 'react-native-vector-icons/Feather';

const Header = () => {
  return (
    <View style={style.headerContainer}>
      <Feather name="menu" style={{color: 'black',marginLeft:15}} size={25} />
    </View>
  );
};

export default Header;
