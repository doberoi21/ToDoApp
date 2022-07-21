import {View, TouchableOpacity, Dimensions} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {style} from './style';

const ModalView = ({modalVisble, onBackPress}) => {
  return (
    <View>
      <Modal isVisible={modalVisble} style={style.modalContainer}>
        <TouchableOpacity
          style={style.modalBackdrop}
          activeOpacity={1}
          onPress={onBackPress}>
          <View style={style.modalView}></View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default ModalView;
