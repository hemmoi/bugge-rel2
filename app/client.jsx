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

// Populate DB for testing
// var testData1 =
// {
//   title: "Vikaraportti 1",
//   description: "Kuvaus 1",
//   steps: "Steps 1",
//   comments: "Kommentti 1",
//   status: "new"
// };
// var testData2 = 
// {
//   title: "Vikaraportti 2",
//   description: "Kuvaus 2",
//   steps: "Steps 2",
//   comments: "Kommentti 2",
//   status: "ongoing"
// };
// var testData3 =
// {
//   title: "Vikaraportti 3",
//   description: "Kuvaus 3",
//   steps: "Steps 3",
//   comments: "Kommentti 3",
//   status: "resolved"
// };
// var testData4 =
// {
//   title: "Vikaraportti 4",
//   description: "Kuvaus 4",
//   steps: "Steps 4",
//   comments: "Kommentti 4",
//   status: "closed"
// };
// var testData5 =
// {
//   title: "Vikaraportti 5",
//   description: "Kuvaus 5",
//   steps: "Steps 5",
//   comments: "Kommentti 5",
//   status: "rejected"
// };

// store.dispatch(actions.addError(testData1));
// store.dispatch(actions.addError(testData2));
// store.dispatch(actions.addError(testData3));
// store.dispatch(actions.addError(testData4));
// store.dispatch(actions.addError(testData5));

// Get errors from DB
// store.dispatch(actions.getErrorsFromDb());


// App css
require('style!css!sass!applicationStyles')


ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
