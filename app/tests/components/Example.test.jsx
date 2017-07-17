var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var configureStore = require('configureStore');
import {MainPage} from 'MainPage'
import ExampleComponent from 'ExampleComponent';


describe('MainPage', () => {
  it('should exist', () => {
    expect(MainPage).toExist();
  });



});
