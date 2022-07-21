import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {style} from './style';

const Checkbox = () => {
  const [checked, setChecked] = useState(false);

  return (
    <View style={style.checkContainer}>
      <View style={style.checkInner}></View>
    </View>
  );
};

export default Checkbox;
