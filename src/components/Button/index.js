import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

const ModalButton = ({text, onPress, color}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: color,
        width: '48%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        
      }}
      onPress={onPress}>
      <Text style={{color:'white'}}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ModalButton;
