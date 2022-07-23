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
    backgroundColor: '#f8f8f8',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  innerModalView: {
    borderColor: 'grey',
    borderWidth: 0.5,
    borderRadius: 10,
    padding: 15,
    height: '60%',
    backgroundColor: 'white',
    marginVertical: 20,
    marginHorizontal: 20,
  },
  input: {
    height: 40,
    margin: 1,
    borderWidth: 0.1,
    padding: 10,
  },
  ButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal:15,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderColor: 2,
    borderWidth: 1,
  }
});
