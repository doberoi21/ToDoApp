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
    this.state = {modalVisble: false, modalContent: '', selectedIndex: null};
  }

  openModal() {
    this.setState({
      modalVisble: true,
    });
  }

  closeModal() {
    this.setState({
      modalVisble: false,
    });
  }

  editSelectedIndex(index) {
    // console.log(index);
    this.setState({
      selectedIndex: index,
    });
    // console.log(this.setState);
  }

  render() {
    return (
      <SafeAreaView style={style.container}>
        <Header />
        <Heading />
        <ListView
          closeModal={this.closeModal.bind(this)}
          openModal={this.openModal.bind(this)}
          onPress={this.editSelectedIndex.bind(this)}
        />
        <FloatButton onPress={this.openModal.bind(this)} />
        <Modal
          modalVisble={this.state.modalVisble}
          onBackPress={this.closeModal.bind(this)}
          value={this.state.selectedIndex}
          onModalHide={() => {
            this.setState({
              selectedIndex: null,
            });
          }}
        />
      </SafeAreaView>
    );
  }
}

export default Mainscreen;
