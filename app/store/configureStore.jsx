import * as redux from 'redux';
import thunk from 'redux-thunk';

import {exampleOneReducer, exampleTwoReducer} from 'reducers';

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    exampleOne: exampleOneReducer,
    exampleTwo: exampleTwoReducer,
  });

  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f=>f
  ));

  return store;
};
