import moment from 'moment';
import axios from 'axios';

export var addError = (error) => {
  return function(dispatch) {
    axios.post("/errors", error)
      .then(function(response) {
        dispatch({type:"ADD_ERROR", error:response.data})
      })
      .catch(function(err) {
        // dispatch({type:"ADD_ERROR_FAILED", payload:"Database addition failed"})
      })
  }
  // return {
  //   type: 'ADD_ERROR',
  //   error
  // };
};

export var updateError = (id, updates) => {
  return {
    type: 'UPDATE_ERROR',
    id,
    updates
  };
};


export var updateFilters = (filters) => {
  return {
    type: 'UPDATE_FILTERS',
    filters
  };
};



