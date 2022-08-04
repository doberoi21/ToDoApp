import {View, TouchableOpacity, TextInput, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import Modal from 'react-native-modal';
import {style} from './style';
import ModalButton from '../Button';
import {useDispatch} from 'react-redux';
import {addList, editList} from '../../Redux/actions';
import {useSelector} from 'react-redux';

const ModalView = ({modalVisble, onBackPress, value, onModalHide}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const {ListData} = useSelector(state => state.todoReducer);
  // console.log(value);

  useEffect(() => {
    if (value || value === 0) {
      const listElement = ListData[value];
      // console.log(listElement);
      setTitle(listElement.title);
      setDescription(listElement.description);
    }
  }, [value]);

  const dispatch = useDispatch();

  const checkTitle = () => {
    if (!title) {
      setErrorMessage(' ** Title is mandotary !!');
      return;
    }

    if (value || value === 0) {
      dispatch(editList(value, title, description));
    } else {
      dispatch(addList(title, description));
    }
    onBackPress();
    setTitle('');
    setDescription('');
  };
  return (
    <View>
      <Modal
        isVisible={modalVisble}
        style={style.modalContainer}
        onModalHide={() => {
          setTitle('');
          setDescription('');
          onModalHide();
        }}>
        <TouchableOpacity
          style={style.modalBackdrop}
          activeOpacity={1}
          onPress={onBackPress}>
          <View style={style.modalView}>
            <View style={style.innerModalView}>
              <View>
                <TextInput
                  style={[style.input]}
                  onChangeText={setTitle}
                  value={title}
                  placeholder="Title"
                  placeholderTextColor={'#575757'}
                />
                <View
                  style={{backgroundColor: 'grey', height: 1, width: '100%'}}
                />
                {errorMessage && (
                  <Text style={{color: 'red', marginTop: 5}}>
                    {errorMessage}
                  </Text>
                )}

                <TextInput
                  style={style.input}
                  onChangeText={setDescription}
                  value={description}
                  placeholder="Add Note"
                  placeholderTextColor={'#575757'}
                />
              </View>
            </View>
            <View style={style.ButtonContainer}>
              <ModalButton
                text={'Cancel'}
                color={'grey'}
                onPress={onBackPress}
              />
              <ModalButton
                text={'Submit'}
                color={'green'}
                onPress={checkTitle}
              />
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default ModalView;
