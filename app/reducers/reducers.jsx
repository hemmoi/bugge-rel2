var uuid = require('node-uuid');
var moment = require('moment');


export var errorsReducer = (state = [], action) => {
  switch (action.type) {
      case 'ADD_ERROR':
        return [
          ...state,
          {
            id: uuid(),
            title: action.title,
            description: action.description,
            steps: action.steps,
            comments: action.comments,
            status: action.status
          }
        ];
      default:
        return state;
  };
};
