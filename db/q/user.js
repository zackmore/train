import knex from '../connection'


function findUserByName (username) {
  return knex('users')
          .first('*')
          .where({ username })
}


export default {
  findUserByName
}
