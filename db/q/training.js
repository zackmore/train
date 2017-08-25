import knex from '../connection'


function findAllTrainings () {
  return knex('trainings')
          .select('*')
}


export default {
  findAllTrainings
}
