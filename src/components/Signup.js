import React, { Component } from 'react'
import axios from 'axios'

class Signup extends Component {
  constructor(props) {
    super(props)

    this.state = { email: '', username: '', password: '', description: '', url: '', data: null }
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleUrlChange = this.handleUrlChange.bind(this)
    this.handleSignupSubmit = this.handleSignupSubmit.bind(this)
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value })
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value })
  }

  handleUsernameChange(e) {
    this.setState({ username: e.target.value })
  }

  handleDescriptionChange(e) {
    this.setState({ description: e.target.value })
  }

  handleUrlChange(e) {
    this.setState({ url: e.target.value })
  }

  // submits user data in input to db
  handleSignupSubmit(e) {
    e.preventDefault()
    const user = { email: this.state.email, username: this.state.username, password: this.state.password, description: this.state.description, imageUrl: this.state.url }
    console.log('this is the state', this.state.url)
    axios.post('http://localhost:3001/api/signup', user).then(this.props.handleSignupLogin(user))
  }

  render() {
    return (
      <div>
        <form className="signin-form" onSubmit={ this.handleSignupSubmit }>
          <input type='text' placeholder='Email' value={ this.state.email } onChange={ this.handleEmailChange } />
          <input type='text' placeholder='Username' value={ this.state.username } onChange={ this.handleUsernameChange } />
          <input type='password' placeholder='Password' value={ this.state.password } onChange={ this.handlePasswordChange } />
          <input type='text' placeholder='Description' value={ this.state.description } onChange={ this.handleDescriptionChange } />
          <input type='text' placeholder='Image Url' value={ this.state.url } onChange={ this.handleUrlChange } />
          <input type='submit' value='Signup' onSubmit={ this.handleSignupSubmit }/>
        </form>
        <button onClick={ this.props.toggleLoginForm }>Click to Log In</button>
      </div>
    )
  }
}

export default Signup
