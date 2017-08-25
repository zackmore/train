import knex from '../connection'


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


export default {
  findUserByName,
  addUser
}
