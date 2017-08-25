const path = require('path')

const BASE_PATH = path.join(__dirname, 'db')

module.exports = {
  test: {
    client: 'sqlite3',
    connection: {
      filename: path.join(BASE_PATH, 'test.sqlite3')
    },
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    },
    useNullAsDefault: true
  },

  development: {
    client: 'sqlite3',
    connection: {
      filename: path.join(BASE_PATH, 'dev.sqlite3')
    },
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    },
    useNullAsDefault: true
  },
}
