import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, applyRouterMiddleware } from 'react-router'
import {useTransitions, withTransition} from 'react-router-transitions';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Header } from './components/Header'
import { App } from './components/App'

window.React = React;

render(
  <div id="main">
    <Router history={hashHistory}>
      <Route path="/" component={App} />
      <Route path="about" component={App} />
      <Route path="projects" component={App} />
      <Route path="contact" component={App} />
      <Route path="*" component={App} />
    </Router>
  </div>,
  document.getElementById('react-container')
);
