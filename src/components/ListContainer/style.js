import {StyleSheet} from 'react-native';
export const style = StyleSheet.create({
  ListHead: {
    fontSize: 20,
    marginVertical: 3,
    marginLeft: 20,
    fontFamily: 'Poppins-SemiBold',
  },
  listContainer: {
    marginTop: 10,
    paddingHorizontal: 20,
    // backgroundColor: 'red',
  },
  listView: {
    marginVertical: 15,
    flexDirection: 'row',
    borderWidth: 0.1,
    height: 60,
    paddingHorizontal: 10,
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 13,
    backgroundColor: 'white',
    shadowOffset: {width: -1, height: 3},
    shadowColor: '#171717',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    justifyContent:'space-between'
  },
  ListText: {
    marginLeft: 10,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    // textDecorationLine:'line-through'
  },
});
