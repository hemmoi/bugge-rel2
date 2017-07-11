import * as redux from 'redux';
import thunk from 'redux-thunk';

import {errorsReducer} from 'reducers';

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    errors: errorsReducer
  });

  var store = redux.createStore(reducer, redux.compose(
    // redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f=>f
  ));

  return store;
};
