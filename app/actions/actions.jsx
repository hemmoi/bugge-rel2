import moment from 'moment';
import axios from 'axios';

// -----------USER ACTIONS --------------
//
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
          // console.log('token' + response.data.token);
          // console.log('firstName' + response.data.userDetails.firstName);
          // console.log('lastName' + response.data.userDetails.lastName);
          // console.log('email' + response.data.userDetails.email);
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('firstName', response.data.userDetails.firstName);
          localStorage.setItem('lastName', response.data.userDetails.lastName);
          localStorage.setItem('email', response.data.userDetails.email);
          resolve("success");
        })
        .catch(function(err) {
          dispatch(updateMessage("Wrong credentials. Please try again."));
          resolve("failed");
          console.log("Get from database failed", err);      
        })
    })
  }
};

export var getAllUsers = () => {
  return function(dispatch) {
    axios({
        method: 'GET',
        url: '/user/users',
        headers: {"Content-Type":"application/json"}
      })
      .then(function(response) {
        dispatch({type:"ADD_ALL_USERS", users:response.data})
      })
      .catch(function(err) {
        console.log("Get users from database failed", err);      
      })
  }
};

// ------------- ERROR REPORT ACTIONS -------------------

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
          dispatch({type:"ADD_OPEN_ERROR", error:response.data});
          console.log("action reportid " + response.data._id);
          dispatch(updateMessage("New error report was created."));
          resolve({status: "success", reportId:response.data._id});
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
            dispatch({type:"ADD_OPEN_ERROR", error:response.data});
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

export var clearOpenError = () => {
  return {
    type: 'CLEAR_OPEN_ERROR'
  };
};


// ------------ FILTER ACTIONS --------------

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

export var createdByFilter = (createdBy) => {
  return {
    type: 'UPDATE_CREATED_BY_SEARCH',
    createdBy
  };
};

export var assignedToFilter = (assignedTo) => {
  return {
    type: 'UPDATE_ASSIGNED_TO_SEARCH',
    assignedTo
  };
};

export var targetDateFilter = (startDate, endDate) => {
  return {
    type: 'UPDATE_TARGET_DATE_SEARCH',
    startDate,
    endDate
  };
};


// ------ COMMENTS ACTIONS ----------------- 

export var addComment = (comment) => {
  const token = localStorage.getItem('token')
                ? '?token='+localStorage.getItem('token')
                : '';
  return function(dispatch) {
      axios({
        method: 'POST',
        url: '/comments'+token,
        data: comment,
        headers: {"Content-Type":"application/json"}

      })
      .then(function(response) {             
        dispatch({ type: 'ADD_COMMENT', comment: response.data });
      })
      .catch(function(err) {
          console.log("Database addition failed", err);
      })
  };
};

export var getComments = (reportId) => {
    const token = localStorage.getItem('token')
                ? '?token='+localStorage.getItem('token')
                : '';
    return function(dispatch) {
      return new Promise((resolve) => {                
        axios({
          method: 'GET',
          url: '/comments/'+ reportId + token,
          headers: {"Content-Type":"application/json"}
        })
        .then(function(response) {             
            dispatch({ type: 'ADD_ALL_COMMENTS', comments: response.data });
            resolve();
          })
        .catch(function(err) {
            console.log("Getting comments from database failed.", err);
            resolve();
        })
      })
    };
};

export var updateReportId = (reportId) => {
    const token = localStorage.getItem('token')
                ? '?token='+localStorage.getItem('token')
                : '';
    return function(dispatch) {            
        axios({
          method: 'PUT',
          url: '/comments/'+ reportId + token,
          headers: {"Content-Type":"application/json"}
        })
        .then(function(response) {             
          console.log("Comment ReportId successfully updated", response);
          })
        .catch(function(err) {
            console.log("Comment ReportId update failed.", err);
        })
    };    
}

export var clearComments = () => {
  return {
    type: 'CLEAR_COMMENTS'
  };
};

// ----------OTHER ACTIONS-----------------------------

export var updateMessage = (message) => {
  return {
    type: 'UPDATE_MESSAGE',
    message
  };
};

export var sendEmail = (email) => {
  return function(dispatch) {
    axios({
        method: 'POST',
        url: '/email',
        data: email,
        headers: {"Content-Type":"application/json"}
      })
      .catch(function(err) {
        console.log("Email sending failed", err);      
      })
  }  
}

export var getToken = () => {
  return localStorage.getItem('token');
}


