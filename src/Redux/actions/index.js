import {ADD, DELETE, EDIT, SELECT} from './type';
import store from '../store';

export const addList = (title, description) => {
  const {ListData} = store.getState().todoReducer;
  // console.log(state);
  const listData = [...ListData];
  listData.push({
    title,
    description,
    createdOn: new Date().getTime(),
    isSelected: false,
  });
  return {
    type: ADD,
    payload: listData,
  };
};

export const deleteList = indexId => {
  const {ListData} = store.getState().todoReducer;
  const newList = [...ListData];
  const updatedList = newList.filter((item, index) => {
    return indexId !== index;
  });

  // console.log(updatedList);
  return {
    type: DELETE,
    payload: updatedList,
  };
};

export const editList = (indexId, title, description) => {
  const {ListData} = store.getState().todoReducer;
  // console.log(title);
  const newList = [...ListData];
  newList[indexId] = {
    ...newList[indexId],
    title: title,
    description: description,
  };
  // console.log(newList);
  return {
    type: EDIT,
    payload: newList,
  };
};

export const selectList = indexId => {
  const {ListData} = store.getState().todoReducer;
  const newList = [...ListData];
  const updatedList = newList.map((item, index) => {
    // console.log(item);
    if (indexId === index) {
      return {...item, isSelected: !item.isSelected};
    } else {
      return {...item};
    }
  });

  return {
    type: SELECT,
    payload: updatedList,
  };
};
