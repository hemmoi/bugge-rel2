var uuid = require('node-uuid');
var moment = require('moment');


export var userReducer = (state = {}, action) => {
  switch (action.type) {

      case 'UPDATE_CURRENT_USER':
        return {
          user: action.user
        }
      break;
      default:
        return state;
  };
};

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

export var messageReducer = (state = "", action) => {
 switch (action.type) {
      case 'UPDATE_MESSAGE':
        return {
          message: action.message
        }          
      default:
        return state;
  };
};