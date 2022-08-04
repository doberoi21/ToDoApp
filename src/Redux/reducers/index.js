import todoReducer from './ListReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  todoReducer,
});

export default rootReducer;
