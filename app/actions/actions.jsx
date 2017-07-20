import moment from 'moment';
import axios from 'axios';

export var addUser = (user) => {
  return function(dispatch) {
    return new Promise((resolve) => {
      axios.post("/user", user)
        .then(function(response) {
          dispatch({type:"UPDATE_CURRENT_USER", user:response.data});
          dispatch(updateMessage("Sign-up was successful"));
          resolve();
        })
        .catch(function(err) {
          console.log("Sign-up failed", err);
        })
    })
  }
};

export var getUser = (email) => {
  return function(dispatch) {
    console.log("action: " + email);
    axios.post("/user/signin", email)
      .then(function(response) {
        localStorage.setItem('token', response.data.token);
        dispatch({type:"UPDATE_CURRENT_USER", user:response.data});
      })
      .catch(function(err) {
        console.log("Get from database failed", err);      
      })
  }
};

export var getToken = () => {
  return localStorage.getItem('token');
}

export var addError = (error) => {
  return function(dispatch) {
    return new Promise((resolve) => {
      axios.post("/errors", error)
        .then(function(response) {
          dispatch({type:"ADD_ERROR", error:response.data});
          dispatch(updateMessage("New error report was created."));
          resolve();
        })
        .catch(function(err) {
          console.log("Database addition failed", err);
        })
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
  return function(dispatch) {
    return new Promise((resolve) => {
      axios.put("/errors/" + id, updates)
        .then(function(response) {
            dispatch({type:"UPDATE_ERROR", id, updates:response.data}); 
            dispatch(updateMessage("Document was saved."));
            resolve();
        })
        .catch(function(err) {
          console.log("Error update to DB failed", err);      
        })
    })
  }
};

export var updateFilters = (filters) => {
  return {
    type: 'UPDATE_FILTERS',
    filters
  };
};

export var updateMessage = (message) => {
  return {
    type: 'UPDATE_MESSAGE',
    message
  };
};



