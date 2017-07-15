var uuid = require('node-uuid');
var moment = require('moment');


export var errorsReducer = (state = [], action) => {
  switch (action.type) {
      case 'ADD_ERROR':
        return [
          ...state,
          {
            ...action.error
          }
        ];
    break;
      case 'ADD_ALL_ERRORS':
        return [
          ...state,
          ...action.errors
        ];
      case 'UPDATE_ERROR':
        return state.map((error) => {
          if (error._id == action.id) {
            console.log("error " + JSON.stringify(error));
            console.log("updates " + JSON.stringify(action.updates));
            return {
              ...error,
              ...action.updates
            };
          } else {
            return error;
          };
        });
      default:
        return state;
  };
};

export var filtersReducer = (state = [], action) => {
 switch (action.type) {
      case 'UPDATE_FILTERS':
        return {
          ...state.filters,
          ...action.filters
        }          
      default:
        return state;
  };
};