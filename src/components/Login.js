import React, { Component } from 'react'
import axios from 'axios'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = { email: '', password: '' }
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value })
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value })
  }

  // submits login data to db, db will be checking email and password
  handleLoginSubmit(e) {
    e.preventDefault()
    const user = { email: this.state.email, password: this.state.password }
    axios.post('/api/login', user).then(user => this.props.handleSignupLogin(user.data))
  }

  render() {
    return (
      <div>
        <form className="signin-form" onSubmit={ this.handleLoginSubmit }>
          <input type='text' placeholder='Email' value={ this.state.email } onChange={ this.handleEmailChange } />
          <input type='password' placeholder='Password' value={ this.state.password } onChange={ this.handlePasswordChange } />
          <input type='submit' value='Login' />
        </form>
        <button onClick={ this.props.toggleLoginForm }>Click to Sign Up</button>
      </div>
    )
  }
}

export default Login
