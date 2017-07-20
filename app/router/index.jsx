import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Main from 'Main';
import SignIn from 'SignIn';
import SignUp from 'SignUp';
import ErrorListing from 'ErrorListing';
import ErrorDetails from 'ErrorDetails';

var requireLogin = (nextState, replace, next) => {
  if(!localStorage.getItem('token')) {
    replace('/signin');
  }
  next();
};

var redirectIfLoggedIn = (nextState, replace, next) => {
  if(localStorage.getItem('token')) {
    replace('/buglist');
  }
  next();
};

export default (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="signup" component={SignUp} onEnter={redirectIfLoggedIn}/>
      <Route path="signin" component={SignIn} onEnter={redirectIfLoggedIn}/>
      <Route path="buglist" component={ErrorListing} onEnter={requireLogin}/>
      <Route path="details(/:_id)" component={ErrorDetails} onEnter={requireLogin}/>
        <IndexRoute component={SignIn} onEnter={redirectIfLoggedIn} />  
    </Route>
  </Router>
);
