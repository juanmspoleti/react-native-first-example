import React from 'react';
import Home from './containers/Home';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

const store = createStore(reducers);

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>

    );
  }
}