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

var formData1 = {
    title: "Title1",
    description: "Desciption1",
    steps: "Steps1",
    comments: "Comments1",
    status: "Status1"
}

// var filters = {
//   new: false,
//   ongoing: false,
//   resolved: false,
//   closed: false,
//   rejected: false
// }

var update = {
  new: true
}

store.dispatch(actions.addError(formData1));
// store.dispatch(actions.addFilters(filters));
// store.dispatch(actions.addFilters(update));
store.dispatch(actions.updateFilters(update));


// App css
require('style!css!sass!applicationStyles')


ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
