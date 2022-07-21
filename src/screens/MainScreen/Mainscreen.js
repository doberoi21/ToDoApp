import {Text, SafeAreaView} from 'react-native';
import React, {Component} from 'react';
import {style} from './style';
import Header from '../../components/Header';
import Heading from '../../components/Heading';
import ListView from '../../components/ListContainer';
import Modal from '../../components/Modal';
import FloatButton from '../../components/FloatButton';

export class Mainscreen extends Component {
  constructor(props) {
    super(props);
    this.state = {modalVisble: false};
  }

  onButtonPress() {
    this.setState({
      modalVisble: true,
    });
  }
  onBackDropPress() {
    this.setState({
      modalVisble: false,
    });
  }

  render() {
    return (
      <SafeAreaView style={style.container}>
        <Header />
        <Heading />
        <ListView />
        <FloatButton onPress={this.onButtonPress.bind(this)} />
        <Modal
          modalVisble={this.state.modalVisble}
          onBackPress={this.onBackDropPress.bind(this)}
        />
      </SafeAreaView>
    );
  }
}

export default Mainscreen;
