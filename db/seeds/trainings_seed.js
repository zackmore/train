exports.seed = function(knex, Promise) {
  return knex('trainings').del()
    .then(function () {
      return knex('trainings').insert([
        { name: 'running' },
        { name: 'swimming' }
      ])
    })
}
