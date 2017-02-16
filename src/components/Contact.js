import { PropTypes, Component } from 'react'
import Phone from 'react-icons/lib/fa/phone-square'

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
        <div id="contact-info-container">
          <Phone /> 651.216.9414
          
        </div>
      </div>
    )
  }
}
