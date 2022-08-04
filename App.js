import React from 'react';
import Mainscreen from './src/screens/MainScreen/Mainscreen';
import {Provider} from 'react-redux';
import store from './src/Redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Mainscreen />
    </Provider>
  );
};

export default App;
