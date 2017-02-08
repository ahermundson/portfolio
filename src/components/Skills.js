import '../stylesheets/main.scss'
import Arrow from 'react-icons/lib/fa/caret-right'

export const Skills = () => (

  <div id="skills-container">
    <h2 id="skills-header">Technical Skills</h2>
    <div id="skills-list">
      <div id="skills-column-one">
        <h4>Front End</h4>
        <ul>
          <li><Arrow /> AngularJS</li>
          <li><Arrow /> ReactJS</li>
          <li><Arrow /> jQuery</li>
          <li><Arrow /> CSS3</li>
          <li><Arrow /> Sass</li>
          <li><Arrow /> Bootstrap</li>
          <li><Arrow /> Javascript</li>
          <li><Arrow /> HTML5</li>
        </ul>
      </div>
      <div id="skills-column-two">
        <h4>Back End</h4>
        <ul>
          <li><Arrow /> AJAX</li>
          <li><Arrow /> Node.js</li>
          <li><Arrow /> MongoDB</li>
          <li><Arrow /> Mongoose</li>
          <li><Arrow /> PostgresQL</li>
        </ul>
      </div>
      <div id="skills-column-three">
        <h4>Misc.</h4>
        <ul>
          <li><Arrow /> APIs</li>
          <li><Arrow /> Heroku</li>
          <li><Arrow /> Firebase Authentication</li>
          <li><Arrow /> Git</li>
          <li><Arrow /> Grunt / Webpack</li>
        </ul>
      </div>
    </div>
  </div>
);
