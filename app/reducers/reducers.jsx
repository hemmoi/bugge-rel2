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

export var allUsersReducer = (state =[], action) => {
  switch (action.type) {
    case 'ADD_ALL_USERS':
      return [
        ...state,
        ...action.users
      ];
    break;
    default:
      return state;
  };
};

export var openErrorReducer = (state = [], action) => {
  switch (action.type) {

      case 'ADD_OPEN_ERROR':
        return {
          ...action.error
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
      break;
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

export var statusFiltersReducer = (state = [], action) => {
 switch (action.type) {
      case 'UPDATE_STATUS_FILTERS':
        return {
          ...state.filters,
          ...action.statusFilters
        }          
      default:
        return state;
  };
};

export var searchTitleReducer = (state = "", action) => {
 switch (action.type) {
      case 'UPDATE_TITLE_SEARCH':
        return action.searchTitle;    
      default:
        return state;
  };
};

export var createdByReducer = (state = "", action) => {
 switch (action.type) {
      case 'UPDATE_CREATED_BY_SEARCH':
        return action.createdBy;    
      default:
        return state;
  };
};

export var assignedToReducer = (state = "", action) => {
 switch (action.type) {
      case 'UPDATE_ASSIGNED_TO_SEARCH':
        return action.assignedTo;    
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