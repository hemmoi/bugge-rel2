import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Main from 'Main';
import ComponentOne from 'ComponentOne';
import PageOne from 'PageOne';
import PageTwo from 'PageTwo';


export default (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="pageone" component={PageOne}/>
      <Route path="pagetwo" component={PageTwo}/>
      <IndexRoute component={ComponentOne} />
    </Route>
  </Router>
);
