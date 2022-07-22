import {View, Text, FlatList} from 'react-native';
import React, {useState} from 'react';
import {style} from './style';
import Checkbox from '../CheckBox';
import {notesData} from '../../utils';

const ListView = () => {
  const [listData, setListData] = useState(notesData);

  const renderListItem = (item, index) => {
    return (
      <View style={style.listView}>
        <Checkbox
          color={index % 2 === 0 ? 'blue' : 'orange'}
          checked={item.isSelect}
          onPress={() => {
            const newList = listData.map(list => {
              // console.log(list);
              if (item.id == list.id) {
                return {...list, isSelect: !list.isSelect};
              } else {
                return {...list};
              }
            });
            console.log(newList);
            setListData(newList);
          }}
        />
        <Text
          style={[
            style.ListText,
            {textDecorationLine: item.isSelect ? 'line-through' : ''},
          ]}>
          {item.noteTitle}
        </Text>
      </View>
    );
  };

  return (
    <View>
      <Text style={style.ListHead}>Today's Task</Text>
      <View>
        <FlatList
          keyExtractor={note => note.id}
          data={listData}
          renderItem={({item, index}) => renderListItem(item, index)}
          style={style.listContainer}
        />
      </View>
    </View>
  );
};

export default ListView;
