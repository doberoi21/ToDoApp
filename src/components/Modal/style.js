import {StyleSheet, Dimensions} from 'react-native';

const {height: screenHeight, width: screenWidth} = Dimensions.get('window');

export const style = StyleSheet.create({
  modalContainer: {
    margin: 0,
    backgroundColor: 'transparent',
  },
  modalBackdrop: {
    height: screenHeight,
    width: screenWidth,
    backgroundColor: 'rgba(0,0,0,0.1)',
    justifyContent: 'flex-end',
  },
  modalView: {
    height: screenHeight / 2,
    width: screenWidth,
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});
