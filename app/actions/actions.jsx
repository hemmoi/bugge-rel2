import moment from 'moment';

export var addError = (title, description, steps, comments, status) => {
  return {
    type: 'ADD_ERROR',
    title,
    description,
    steps,
    comments,
    status
  };
};

  export var updateError = (id, title, description, steps, comments, status) => {
  return {
    type: 'UPDATE_ERROR',
    id,
    title,
    description,
    steps,
    comments,
    status
  };
};

