var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {hashHistory} = require('react-router');

var actions = require('actions');
var store = require('configureStore').configure();
import router from 'app/router';

store.subscribe(() => {
  // console.log('New state', store.getState());
});

store.dispatch(actions.addError('Title1', 'Description1', 'Steps1', 'Comment1', 'New'));
store.dispatch(actions.addError('Title2', 'Description2', 'Steps2', 'Comment2', 'Ongoing'));
store.dispatch(actions.addError('Title3', 'Description3', 'Steps3', 'Comment3', 'Resolved'));
store.dispatch(actions.addError('Title4', 'Description4', 'Steps4', 'Comment4', 'Closed'));
store.dispatch(actions.addError('Title5', 'Description5', 'Steps5', 'Comment5', 'Rejected'));

// App css
require('style!css!sass!applicationStyles')


ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
