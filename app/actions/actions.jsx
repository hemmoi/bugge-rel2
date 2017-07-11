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

