import React, { Component } from 'react'
import axios from 'axios'
// import react components
import LoginBoard from './LoginBoard'
import ProfileBoard from './ProfileBoard'

import './styles.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state= { authenticated: false, profiles: [], currentProfile: [] }
    this.handleSignupLogin = this.handleSignupLogin.bind(this)
  }

  // fetches all profiles in db
  componentDidMount() {
    const { email, description, username, imageUrl } = this.props
    axios.get('http://localhost:3001/api/all').then(res => this.setState({ profiles: res.data }))
  }

  // updates the state of the app to be authenticated as well as updates the current user's profile
  handleSignupLogin({ email, username, description, imageUrl }) {
    this.setState({ authenticated: true,  currentProfile: [{mail: email, username: username, description: description, imageUrl: imageUrl}]})
  }

  render() {
    return (
      <div className="app">{ this.state.authenticated ? <ProfileBoard currentProfile={this.state.currentProfile} profiles={this.state.profiles} handleSignupLogin={this.handleSignupLogin} /> : <LoginBoard handleSignupLogin={this.handleSignupLogin}/> }</div>
    )
  }
}

export default App
