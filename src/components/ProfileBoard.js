import React, { Component } from 'react'
import Profile from './Profile'
import axios from 'axios'

class ProfileBoard extends Component {
  constructor(props) {
    super(props)
    this.showOtherProfiles = this.showOtherProfiles.bind(this)
    this.state = { profiles: [], showOtherProfiles: false, email: '', description: '', username: '', imageUrl: ''}
  }

  // updates state with current users profile data
  componentDidMount() {
    const { currentProfile } = this.props
    this.setState({ profiles: currentProfile[0].profiles, email: currentProfile[0].email, username: currentProfile[0].username, description: currentProfile[0].description, imageUrl: currentProfile[0].imageUrl })
  }
  // updates state tp show all the profiles
  showOtherProfiles() {
    this.setState({showOtherProfiles: !this.state.showOtherProfiles})
  }

  render() {
    if (this.state.showOtherProfiles) {
      return <div>{ this.props.profiles.map(p => <Profile handleSignupLogin={this.handleSignupLogin} showProfile={this.showOtherProfiles} email={p.email} username={p.username} description={p.description} imageUrl={p.imageUrl}/>) }</div>
    }
    return (
      <Profile handleSignupLogin={this.handleSignupLogin} showProfile={this.showOtherProfiles} email={this.state.email} username={this.state.username} description={this.state.description} imageUrl={this.state.imageUrl}/>
    )
  }
}

export default ProfileBoard
