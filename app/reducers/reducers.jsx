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
      case 'UPDATE_ERROR':
        return state.map((error) => {
          if (error.id === action.id) {
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