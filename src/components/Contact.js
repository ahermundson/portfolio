import { PropTypes, Component } from 'react'
import Phone from 'react-icons/lib/fa/phone-square'
import Email from 'react-icons/lib/md/email'
import Github from 'react-icons/lib/go/mark-github'
import Twitter from 'react-icons/lib/fa/twitter'
import Linkedin from 'react-icons/lib/fa/linkedin'

const nameList = [
  "Alex Hermundson",
  "Katie Hermundson"
]

class Autocomplete extends Component {
  get value() {
    return this.refs.inputResort.value
  }

  set value(inputValue) {
    this.refs.inputResort.value = inputValue
  }

  render() {
		return (
			<div >
				<input ref="inputName" type="text" list="name-list" id="autocomplete"/>
				<datalist id="name-list">
					{this.props.options.map(
						(opt, i) =>
						<option key={i}>{opt}</option>
					)}
				</datalist>
			</div>
		)
	}
}

export class Contact extends Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
  }

  submit(e) {
    e.preventDefault()
  }

  render() {
    // const { name, email, message } = this.props

    return (
      <div id="contact-container">
        <h2 id="contact-header">Contact</h2>
        <div id="contact-info-container">
          <span className="contact-details"><Phone />  651.216.9414</span>
          <span className="contact-details"><Email />  hello@alexhermundson.com</span>
          <span className="contact-details"><Github />  github.com/ahermundson</span>
          <span className="contact-details"><Twitter /> @alex_hermundson</span>
          <span className="contact-details"><Linkedin />  <a href="http://www.linkedin.com/in/alex-hermundson">linkedin.com/in/alex-hermundson</a></span>
        </div>
      </div>
    )
  }
}
