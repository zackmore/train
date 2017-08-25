import knex from '../connection'


function findAllRecords (userid) {
  return knex.select('*')
          .from('records')
          .innerJoin('trainings', function () {
            this.on('records.training_id', '=', 'trainings.id')
                  .andOn('records.user_id', '=', userid)
          })
}


function addRecord (record) {
  return knex('records')
          .insert(record)
          .returning('*')
}


export default {
  findAllRecords,
  addRecord
}
