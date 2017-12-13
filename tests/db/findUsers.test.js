const mocha = require('mocha')
const assert = require('assert')

const User = require('../../models/user')

describe('Finding users in DB', function() {
  var user
  beforeEach(function(done) {
    user = new User({
      email: 'hello@gmail.com',
      username: 'George of The Jungle',
      password: 'bananas',
      description: 'i love bananas',
      imageUrl: 'http://placecorgi.com/260/180'
    })

    user.save().then(() => {
      done()
    })
  })

  it('Finds user by their email in the database', function(done) {
    user.findOne({email: 'hello@gmail.com'}).then(function(result) {
      assert(result.username === 'George of the Jungle')
    })
  })
})
