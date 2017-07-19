import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Main from 'Main';
import SignUp from 'SignUp';
import SignIn from 'SignIn';
import ErrorListing from 'ErrorListing';
import ErrorDetails from 'ErrorDetails';


export default (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="error" component={ErrorListing}/>
      <Route path="details(/:_id)" component={ErrorDetails}/>
       {/* <IndexRoute component={SignUp} />  */}
       <IndexRoute component={SignIn} /> 
    </Route>
  </Router>
);
