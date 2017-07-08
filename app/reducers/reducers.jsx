var uuid = require('node-uuid');
var moment = require('moment');


export var exampleOneReducer = (state = '', action) => {
  switch (action.type) {
      case 'SET_SEARCH_TEXT':
        return action.searchText;
      default:
        return state;
  };
};

export var exampleTwo = (state = false, action) => {
  switch (action.type) {
      case 'TOGGLE_SHOW_COMPLETED':
        return !state;
      default:
        return state;
  };
};

