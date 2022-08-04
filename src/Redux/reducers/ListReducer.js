import {ADD, DELETE, EDIT, SELECT} from '../actions/type';

const initialState = {
  ListData: [],
};
// [{title: '', desc: '', date: ''}];
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {...state, ListData: action.payload};

    case DELETE:
      return {...state, ListData: action.payload};

    case EDIT:
      return {...state, ListData: action.payload};

    case SELECT:
      return {...state, ListData: action.payload};

    default:
      return state;
  }
};

export default todoReducer;
