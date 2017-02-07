import React from 'react';
import { render } from 'react-dom';
import { Header } from './components/Header'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'

window.React = React;

render(
  <div>
    <Header />
    <Skills />
    <Projects />
  </div>,
  document.getElementById('react-container')
);
