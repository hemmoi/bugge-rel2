import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Main from 'Main';
import ErrorListing from 'ErrorListing';
import ErrorDetails from 'ErrorDetails';


export default (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="error" component={ErrorListing}/>
      <Route path="details(/:_id)" component={ErrorDetails}/>
      <IndexRoute component={ErrorListing} />
    </Route>
  </Router>
);
