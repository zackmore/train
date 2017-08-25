exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', table => {
      table.increments()
      table.string('username').notNullable().unique()
      table.string('password').notNullable()
    }),

    knex.schema.createTable('trainings', table => {
      table.increments()
      table.string('name').notNullable().unique()
    }),

    knex.schema.createTable('records', table => {
      table.increments()
      table.integer('meter')
      table.integer('user_id').unsigned()
      table.integer('training_id').unsigned()
      table.foreign('user_id').references('users.id')
      table.foreign('training_id').references('trainings.id')
      table.timestamps(true, true)
    })
  ])
}

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users'),
    knex.schema.dropTable('trainings'),
    knex.schema.dropTable('records')
  ])
}
