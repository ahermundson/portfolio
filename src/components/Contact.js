import { PropTypes, Component } from 'react'

export class Contact extends Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
  }

  submit(e) {
    e.preventDefault()
    console.log('name', this.refs.name.value);
    console.log('email', this.refs.email.value);
    console.log('message', this.refs.message.value);
  }

  render() {
    // const { name, email, message } = this.props

    return (
      <form onSubmit={this.submit} className="contact-form">
        <label htmlFor="name">Name</label>
        <input id="name"
               type="text"
               required
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
    )
  }
}
