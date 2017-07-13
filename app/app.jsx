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
    status: "new"
}
var formData2 = {
    title: "Title2",
    description: "Desciption2",
    steps: "Steps2",
    comments: "Comments2",
    status: "ongoing"
}
var formData3 = {
    title: "Title3",
    description: "Desciption3",
    steps: "Steps3",
    comments: "Comments3",
    status: "resolved"
}
var formData4 = {
    title: "Title4",
    description: "Desciption4",
    steps: "Steps4",
    comments: "Comments4",
    status: "closed"
}
var formData5 = {
    title: "Title5",
    description: "Desciption5",
    steps: "Steps5",
    comments: "Comments5",
    status: "rejected"
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
store.dispatch(actions.addError(formData2));
store.dispatch(actions.addError(formData3));
store.dispatch(actions.addError(formData4));
store.dispatch(actions.addError(formData5));
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
