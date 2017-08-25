exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        { username: 'asdf', password: 'ee254686131414d7da3f7b862691c6224eed5b0cebd371b73ea353a584b6bbd1' }  // sha256 for 'okayn'
      ])
    })
}
