import {View, TouchableOpacity, TextInput, Text} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {style} from './style';
import ModalButton from '../Button';

const ModalView = ({modalVisble, onBackPress}) => {
  const [text, onChangeText] = useState('');
  const [number, onChangeNumber] = useState(null);
  return (
    <View>
      <Modal isVisible={modalVisble} style={style.modalContainer}>
        <TouchableOpacity
          style={style.modalBackdrop}
          activeOpacity={1}
          onPress={onBackPress}>
          <View style={style.modalView}>
            <View style={style.innerModalView}>
              <View>
                <TextInput
                  style={[style.input]}
                  onChangeText={onChangeText}
                  value={text}
                  placeholder="Title"
                  placeholderTextColor={'#575757'}
                />
                <View
                  style={{backgroundColor: 'grey', height: 1, width: '100%'}}
                />
                <TextInput
                  style={style.input}
                  onChangeText={onChangeNumber}
                  value={number}
                  placeholder="Add Note"
                  placeholderTextColor={'#575757'}
                />
              </View>
            </View>
            <View style={style.ButtonContainer}>
              <ModalButton text={'Cancel'} color={'grey'} onPress={onBackPress} />
              <ModalButton text={'Submit'} color={'green'} onPress={onBackPress} />
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default ModalView;
