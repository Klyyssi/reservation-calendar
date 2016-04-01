var ReactDOM = require('react-dom');
var React = require('react');
var MainView = require("./main.js");
var Router = require("react-router").Router;
var Route = require("react-router").Route;
var hashHistory = require("react-router").hashHistory;

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={MainView} />
  </Router>,
  document.getElementById('app')
);
