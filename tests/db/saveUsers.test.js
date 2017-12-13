const mocha = require('mocha')
const assert = require('assert')
const User = require('../../models/user')

describe('Saving users in DB', function() {

  it('Saves a user to the database', function(done) {
    const user = new User({
      email: 'hello@gmail.com',
      username: 'George of The Jungle',
      password: 'bananas',
      description: 'i love bananas',
      imageUrl: 'http://placecorgi.com/260/180'
    })

    user.save().then((user) => {
      assert(user.isNew === false)
      done()
    })
  })
})
