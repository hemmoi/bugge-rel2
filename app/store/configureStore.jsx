import * as redux from 'redux';
import thunk from 'redux-thunk';

import {errorsReducer} from 'reducers';
import {filtersReducer} from 'reducers';
import {messageReducer} from 'reducers';
import {userReducer} from 'reducers';
import {openErrorReducer} from 'reducers';

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    errors: errorsReducer,
    filters: filtersReducer,
    message: messageReducer,
    currentUser: userReducer,
    openError: openErrorReducer
  });

  var store = redux.createStore(reducer, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f=>f
  ));

  return store;
};
