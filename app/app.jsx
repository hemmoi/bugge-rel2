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

store.dispatch(actions.addError('Title1', 'Description1', 'Steps1', 'Comment1', 'Status1'));
store.dispatch(actions.addError('Title2', 'Description2', 'Steps2', 'Comment2', 'Status2'));
store.dispatch(actions.addError('Title3', 'Description3', 'Steps3', 'Comment3', 'Status3'));

// App css
require('style!css!sass!applicationStyles')


ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
