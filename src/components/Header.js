import '../stylesheets/main.scss'
import { Link } from 'react-router'

export const Header = () => (
  <header>
    <h2>Alex Hermundson - Full Stack Developer</h2>
    <nav>
      <ul id="header-nav">
        <Link to="/about" activeClassName="selected">
          <li>About</li>
        </Link>
        <Link to="/projects" activeClassName="selected">
          <li>Projects</li>
        </Link>
        <Link to ="/contacts" activeClassName="selected">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  </header>
)
