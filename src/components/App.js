import { Component } from 'react'
import { Home } from './Home'
import { Bio } from './Bio'
import { Skills } from './Skills'
import { Projects } from './Projects'
import { Header } from './Header'
import { Contact } from './Contact'

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
         : (this.props.location.pathname === "/projects") ? <Projects /> : (this.props.location.pathname === "/contact") ? <Contact /> : <Home />}
      </div>
    )
  }
}
