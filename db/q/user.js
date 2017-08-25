const knex = require('../connection')


function findUserByName (username) {
  return knex('users')
          .first('*')
          .where({ username })
}


function addUser (user) {
  return knex('users')
          .insert(user)
          .returning('*')
}


module.exports = {
  findUserByName,
  addUser
}
