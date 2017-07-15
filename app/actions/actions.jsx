import moment from 'moment';
import axios from 'axios';

export var addError = (error) => {
  return function(dispatch) {
    axios.post("/errors", error)
      .then(function(response) {
        dispatch({type:"ADD_ERROR", error:response.data})
      })
      .catch(function(err) {
        console.log("Database addition failed", err);
      })
  }
};

export var getErrorsFromDb = () => {
  return function(dispatch) {
    axios.get("/errors")
      .then(function(response) {
        dispatch({type:"ADD_ALL_ERRORS", errors:response.data})
      })
      .catch(function(err) {
        console.log("Get from database failed", err);      
      })
  }
};

export var updateError = (id, updates) => {
  console.log("updateError: " + JSON.stringify(updates));
  return function(dispatch) {
    axios.put("/errors/" + id, updates)
      .then(function(response) {
        console.log("Response.data " + JSON.stringify(response.data));
        console.log("ID " + id);
        dispatch({type:"UPDATE_ERROR", id, updates:response.data})
      })
      .catch(function(err) {
        console.log("Error update to DB failed", err);      
      })
  }
  
  // return {
  //   type: 'UPDATE_ERROR',
  //   id,
  //   updates
  // };
};


export var updateFilters = (filters) => {
  return {
    type: 'UPDATE_FILTERS',
    filters
  };
};



