import React from 'react';
import { render } from 'react-dom';
import { Header } from './components/Header'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Bio } from './components/Bio'

window.React = React;

render(
  <div id="main">
    <Header />
    <Bio />
    <Skills />
    <div id="projects">
      <Projects />
    </div>
  </div>,
  document.getElementById('react-container')
);
