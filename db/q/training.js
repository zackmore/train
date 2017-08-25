const knex = require('../connection')


function findAllTrainings () {
  return knex('trainings')
          .select('*')
}


module.exports = {
  findAllTrainings
}
