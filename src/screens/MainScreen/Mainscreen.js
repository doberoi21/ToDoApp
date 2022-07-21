import {Text, SafeAreaView} from 'react-native';
import React, {Component} from 'react';
import {style} from './style';
import Header from '../../components/Header';
import Heading from '../../components/Heading';
import ListView from '../../components/ListContainer';

export class Mainscreen extends Component {
  render() {
    return (
      <SafeAreaView>
        {/* <Text style={style.headSize}> Hello Mainscreen </Text>
         */}
        <Header />
        <Heading />
        <ListView />
      </SafeAreaView>
    );
  }
}

export default Mainscreen;
