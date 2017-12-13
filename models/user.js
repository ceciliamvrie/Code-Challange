const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  imageUrl: {
    type: String
  }
})

const User = mongoose.model('user', userSchema)
module.exports = User
