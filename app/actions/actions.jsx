import moment from 'moment';
import axios from 'axios';

export var addUser = (user) => {
  return function(dispatch) {
    return new Promise((resolve) => {
      axios.post("/user", user)
        .then(function(response) {
          dispatch({type:"UPDATE_CURRENT_USER", user:response.data});
          dispatch(updateMessage("Sign-up was successful"));
          resolve("success");
        })
        .catch(function(err) {
          dispatch(updateMessage("Sign-up failed"));
          console.log("Sign-up failed", err);
          resolve("failed");
        })
    })
  }
};

export var getUser = (email) => {
  return function(dispatch) {
    return new Promise((resolve) => {
      axios.post("/user/signin", email)
        .then(function(response) {
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('firstName', response.data.userDetails.firstName);
          resolve();
        })
        .catch(function(err) {
          dispatch(updateMessage("Wrong credentials. Please try again."));
          resolve("failed");
          console.log("Get from database failed", err);      
        })
    })
  }
};

export var getToken = () => {
  return localStorage.getItem('token');
}

export var addError = (error) => {
  const token = localStorage.getItem('token')
                ? '?token='+localStorage.getItem('token')
                : '';
  return function(dispatch) {
    return new Promise((resolve) => {
      axios({
        method: 'POST',
        url: '/errors'+token,
        data: error,
        headers: {"Content-Type":"application/json"}

      })
        .then(function(response) {
          dispatch({type:"ADD_ERROR", error:response.data});
          dispatch(updateMessage("New error report was created."));
          resolve("success");
        })
        .catch(function(err) {
          dispatch(updateMessage("Adding data to database failed. Please try again later"));
          resolve("failed")
          console.log("Database addition failed", err);
        })
    })
  }
};

export var getErrorsFromDb = () => {
  const token = localStorage.getItem('token')
                ? '?token='+localStorage.getItem('token')
                : '';  
  return function(dispatch) {
    axios({
        method: 'GET',
        url: '/errors'+token,
        headers: {"Content-Type":"application/json"}
      })
      .then(function(response) {
        dispatch({type:"ADD_ALL_ERRORS", errors:response.data})
      })
      .catch(function(err) {
        console.log("Get from database failed", err);      
      })
  }
};

export var getOneError = (id) => {
  const token = localStorage.getItem('token')
              ? '?token='+localStorage.getItem('token')
              : '';
  return function(dispatch) {
    return new Promise((resolve) => {
      axios({
        method: 'GET',
        url: '/errors/one/' + id + token,
        headers: {"Content-Type":"application/json"}
        })
        .then(function(response) {
            dispatch({type:"ADD_OPEN_ERROR", error:response.data}); 
            resolve(response.data);
        })
        .catch(function(err) {
          console.log("Get from DB failed", err);      
        })
    })
  }
};

export var updateError = (id, updates) => {
  const token = localStorage.getItem('token')
              ? '?token='+localStorage.getItem('token')
              : '';
  return function(dispatch) {
    return new Promise((resolve) => {
      axios({
        method: 'PUT',
        url: '/errors/' + id + token,
        data: updates,
        headers: {"Content-Type":"application/json"}

        })
        .then(function(response) {
            dispatch({type:"UPDATE_ERROR", id, updates:response.data}); 
            dispatch(updateMessage("Document was saved."));
            resolve("success");
        })
        .catch(function(err) {
          dispatch(updateMessage("Document could not be saved. Please try again later."));
          resolve("failed");
          console.log("Error update failed", err);      
        })
    })
  }
};

export var updateStatusFilter = (statusFilters) => {
  return {
    type: 'UPDATE_STATUS_FILTERS',
    statusFilters
  };
};

export var searchTitleFilter = (searchTitle) => {
  return {
    type: 'UPDATE_TITLE_SEARCH',
    searchTitle
  };
};

export var updateMessage = (message) => {
  return {
    type: 'UPDATE_MESSAGE',
    message
  };
};



