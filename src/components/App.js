import { Component } from 'react'
import { Home } from './Home'
import { Bio } from './Bio'
import { Skills } from './Skills'
import { Projects } from './Projects'
import { Header } from './Header'

export class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="app">
        <Header />
        {(this.props.location.pathname === '/') ? <Home /> : (this.props.location.pathname === "/about") ?
        <div id="skills-container">
          <Bio />
          <Skills />
        </div>
         : (this.props.location.pathname === "/projects") ? <Projects /> : <Home />}
      </div>
    )
  }
}
