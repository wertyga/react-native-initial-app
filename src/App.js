import React from 'react';
import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Reactotron from 'reactotron-react-native';

import rootReducer from './reducers/rootReducer';

import Routes from './common/Routes';

import '../ReactotronConfig';

let store;

if(__DEV__) {
    store = Reactotron.createStore(rootReducer, applyMiddleware(thunk))
} else {
    store = createStore(
        rootReducer,
        applyMiddleware(thunk)
    );
};

class App extends React.Component {
  render() {
      return(
          <Provider store={store}>
              <Routes />
          </Provider>
      );
  }
};

export default App;
