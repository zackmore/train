import knex from '../connection'


function findAllRecords (userid) {
  return knex.select('*')
          .from('records')
          .leftJoin('trainings', function () {
            this.on('records.training_id', '=', 'trainings.id')
                  .andOn('records.user_id', '=', userid)
          })
}


export default {
  findAllRecords
}
