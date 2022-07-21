import {TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {style} from './style';
import Feather from 'react-native-vector-icons/Feather';

const Checkbox = () => {
  const [checked, setChecked] = useState(false);

  return (
    <TouchableOpacity
      style={style.checkContainer}
      onPress={() => setChecked(prev => !prev)}>
      {checked ? (
        <Feather name="check" size={15} color={'#ffffff'} />
      ) : (
        <View style={style.checkInner}></View>
      )}
    </TouchableOpacity>
  );
};

export default Checkbox;
