const mongoose = require('mongoose')
mongoose.Promise = Promise

mongoose.connect('mongodb://localhost:27017/users')

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('Mongodb connection open')
})
