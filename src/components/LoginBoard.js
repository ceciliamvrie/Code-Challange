import React, { Component } from 'react'
import Login from './Login'
import Signup from './Signup'

class LoginBoard extends Component {
  constructor(props) {
    super(props)

    this.state = { renderSignup: false }
    this.toggleLoginSignup = this.toggleLoginSignup.bind(this)
  }
  
  toggleLoginSignup() {
    this.setState({ renderSignup: !this.state.renderSignup })
  }

  render() {
    return (
      <div>
        {
          this.state.renderSignup ? <Login toggleLoginForm={this.toggleLoginSignup} handleSignupLogin={this.props.handleSignupLogin}/> : <Signup toggleLoginForm={this.toggleLoginSignup} handleSignupLogin={this.props.handleSignupLogin}/>
        }
      </div>
    )
  }
}

export default LoginBoard
