const mocha = require('mocha')
const assert = require('assert')

const User = require('../../models/user')

describe('Updating users in DB', function() {
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

  it('Updates the name of one user in the DB', function(done) {
    user.findOneAndUpdate({email: 'hello@gmail.com'}, {username: 'Sponge Bob'}).then(function() {
      user.findOne({email: 'hello@gmail.com'}).then(function(result) {
        assert(result.username === 'Sponge Bob')
        done()
      })
    })
  })
})
