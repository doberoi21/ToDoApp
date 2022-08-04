import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {style} from './style';
import Checkbox from '../CheckBox';
import {useDispatch, useSelector} from 'react-redux';
import {deleteList, editList, selectList} from '../../Redux/actions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ListView = ({closeModal, openModal, onPress}) => {
  const {ListData} = useSelector(state => state.todoReducer);
  const dispatch = useDispatch();

  const renderListItem = (item, index) => {
    return (
      <TouchableOpacity
        style={style.listView}
        onPress={() => {
          onPress(index);
          openModal();
        }}>
        <View style={{flexDirection: 'row'}}>
          <Checkbox
            color={index % 2 === 0 ? 'blue' : 'orange'}
            checked={item.isSelected}
            onPress={() => {
              dispatch(selectList(index));
            }}
          />
          <Text
            style={[
              style.ListText,
              {textDecorationLine: item.isSelected ? 'line-through' : ''},
            ]}>
            {item.title}
          </Text>
        </View>
        <View>
          <MaterialCommunityIcons
            name="delete"
            size={25}
            color={'black'}
            onPress={() => dispatch(deleteList(index))}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Text style={style.ListHead}>Today's Task</Text>
      <FlatList
        keyExtractor={item => item.title}
        data={ListData}
        renderItem={({item, index}) => renderListItem(item, index)}
        style={style.listContainer}
      />
    </View>
  );
};

export default ListView;
