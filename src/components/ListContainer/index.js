import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {style} from './style';
import Checkbox from '../CheckBox';
const ListView = () => {
  const friends = [
    {
      name: 'Naman',
      age: 22,
    },
    {
      name: 'Divyanshi',
      age: 21,
    },
    {
      name: 'Namisha',
      age: 20,
    },
    {
      name: 'Divya',
      age: 18,
    },
  ];

  return (
    <View>
      <Text style={style.ListText}>Today's Task</Text>
      <View>
        <FlatList
          keyExtractor={friend => friend.name}
          data={friends}
          renderItem={({item}) => (
            <View style={style.listView}>
              <Checkbox />
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 16,
                  fontFamily:'Poppins-Regular'
                }}>
                {item.name}
              </Text>
            </View>
          )}
          style={style.listContainer}
        />
      </View>
    </View>
  );
};

export default ListView;
