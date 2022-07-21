import {View, Text} from 'react-native';
import React from 'react';
import {style} from './style';

const Heading = () => {
  return (
    <View style={style.headerContainer}>
      <Text style={style.headerText}>What's up , Olivia! </Text>
    </View>
  );
};

export default Heading;
