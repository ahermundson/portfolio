import { PropTypes, Component } from 'react'
import Phone from 'react-icons/lib/fa/phone-square'
import Email from 'react-icons/lib/md/email'
import Github from 'react-icons/lib/go/mark-github'

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
      <div>
        <h2 id="contact-header">Contact</h2>
        <div id="contact-container">
          <div id="form-div">
            <form onSubmit={this.submit} className="contact-form">
              <label htmlFor="name">Name</label>
              <Autocomplete options={nameList}
                            ref="name" />
             <label htmlFor="email">Email</label>
             <input id="email"
                    type="text"
                    required
                    ref="email" />
             <label htmlFor="message">Message</label>
             <input id="message"
                    type="text"
                    required
                    ref="message" />
             <button>Submit</button>
            </form>
          </div>
          <div id="contact-info-container">
            <span>651.216.9414    <Phone /></span>
            <span>alex.hermundson@gmail.com    <Email /></span>
            <span>github.com/ahermundson    <Github /></span>
          </div>
        </div>
      </div>
    )
  }
}
