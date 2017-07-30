import * as redux from 'redux';
import thunk from 'redux-thunk';

import {errorsReducer} from 'reducers';
import {statusFiltersReducer} from 'reducers';
import {messageReducer} from 'reducers';
import {userReducer} from 'reducers';
import {openErrorReducer} from 'reducers';
import {searchTitleReducer} from 'reducers';
import {allUsersReducer} from 'reducers';
import {createdByReducer} from 'reducers';
import {assignedToReducer} from 'reducers';
import {targetDateReducer} from 'reducers';

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    errors: errorsReducer,
    statusFilters: statusFiltersReducer,
    message: messageReducer,
    currentUser: userReducer,
    openError: openErrorReducer,
    searchTitle: searchTitleReducer,
    createdBy: createdByReducer,
    assignedTo: assignedToReducer,
    allUsers: allUsersReducer,
    searchTargetDate: targetDateReducer
  });

  var store = redux.createStore(reducer, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f=>f
  ));

  return store;
};
