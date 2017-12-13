const mongoose = require('mongoose')

mongoose.Promise = Promise

before(function(done) {
  mongoose.connect()
  mongoose.connection.once('open', function() {
    console.log('Connection has been made')
    done()
  }).on('error', function(error) {
    console.error('Connection error:', error)
  })
})

beforeEach(function(done) {
  mongoose.connection.collections.users.drop(function() {
    done()
  })
})
