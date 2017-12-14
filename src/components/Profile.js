import React, { Component } from 'react'
import axios from 'axios'

import './styles.css'

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = { formOpen: false, username: '', description: ''}
    this.renderProfileForm = this.renderProfileForm.bind(this)
    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleProfileSubmit = this.handleProfileSubmit.bind(this)
  }

  renderProfileForm() {
    this.setState({ formOpen: !this.state.formOpen })
  }

  handleUsernameChange(e) {
    this.setState({ username: e.target.value })
  }

  handleDescriptionChange(e) {
    this.setState({ description: e.target.value })
  }
  // updates user in backend to reflect changes in inputs on submit
  handleProfileSubmit(e) {
    e.preventDefault()
    const newUser = {username: this.state.username, description: this.state.description, email: this.props.email}
    axios.post('https://blooming-cove-53651.herokuapp.com/api/users', newUser)
  }

  render() {
    const { username, description, imageUrl } = this.props
    return (
      <div className="profile">

        <img className="profilePicture" src={imageUrl || 'http://placecorgi.com/250'} />
        <h1>{(this.state.username.length < 1 ? username : this.state.username)}</h1>
        <p>{(this.state.description.length < 1 ? description : this.state.description)}</p>

        <form className={this.state.formOpen ? 'shown' : 'notShown'} onSubmit={this.handleProfileSubmit.bind(this)} >
          <input type="text" placeholder="Username" value={this.state.username} onChange={this.handleUsernameChange} />
          <input type="text" placeholder="Description" value={this.state.description} onChange={this.handleDescriptionChange} />
          <input type="submit" value="Submit"/>
        </form>
        <button className={this.state.formOpen ? 'notShown' : 'shown'} onClick={this.renderProfileForm}>Change Profile</button>

        { this.props.showOtherProfiles ? <button onClick={this.props.showProfile}>Click to View My Profile</button> : <button onClick={this.props.showProfile}>Click to View Profiles</button> }

      </div>
    )
  }
}

export default Profile
