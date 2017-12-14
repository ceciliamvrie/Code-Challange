'use-strict'

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const User = require('./models/user')
const path = require('path')

const app = express()
const router = express.Router()
const db = require('./db/config.js');

const PORT = process.env.PORT || 3001

app.use(express.static(path.join(__dirname, 'build/static')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(function(req, res, next) {
  res.setHeader('Cache-Control', 'no-cache')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers')

  next()
})

app.use(router)
app.use('/api', router)
app.use('/login', router)
app.use('/signup', router)
app.use('/users', router)


// routes
router.get('/', function(req, res) {
  res.json({ message: 'API Initialized!'})
})

router.post('/login', (req, res) => {
  User.findOne({email: req.body.email}).then(doc => doc.toObject()).then(u => res.json(u)).catch(console.error)
})

router.post('/signup', (req, res) => {
  const user = new User({ email: req.body.email, description: req.body.description, username: req.body.username, password: req.body.password, imageUrl: req.body.imageUrl })
  user.save()
})

router.post('/users', (req, res) => (
   User.findOneAndUpdate({ email: req.body.email }, { username: req.body.username, description: req.body.description }).then(User.findOne({email: req.body.email}).then(doc => doc.toObject()).then(u => res.json(u)))
))

router.get('/users', (req, res) => (
  User.findOne({ email: req.body.email }).then(doc => doc.toObject()).then(u => res.json(u)).catch(console.error)
))

router.get('/all', (req, res) => (
  User.find({}).then(u => res.json(u)).catch(console.error)
))

// initialize server
app.listen(PORT, function() {
  console.log(`api running on port ${PORT}`)
})

module.exports = {
  db,
}
