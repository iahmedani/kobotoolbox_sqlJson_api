// Update with your config settings.
require('dotenv').config({
  path: __dirname + '/.env'
});
module.exports = {

  development: {
    client: 'mssql',
    connection: {
      host: process.env.DBHOST,
      database: process.env.DEV_DB,
      user: process.env.DEV_USER,
      password: process.env.DEV_DB_PASS
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    requestTimeout: 5000,
    connectionTimeout: 5000,
    options: {

      enableArithAbort: false
    }

  },

  staging: {
    client: 'mssql',
    connection: {
      host: process.env.DBHOST,
      database: process.env.STAGE_DB,
      user: process.env.STAGE_USER,
      password: process.env.STAGE_DB_PASS
    },
    pool: {
      min: 2,
      max: 10
    },
    requestTimeout: 5000,
    connectionTimeout: 5000,
    migrations: {
      tableName: 'knex_migrations'
    },
    options: {

      enableArithAbort: true
    }

  },

  production: {
    client: 'mssql',
    connection: {
      host: process.env.DBHOST,
      database: process.env.DB,
      user: process.env.USER,
      password: process.env.PASS
    },
    pool: {
      min: 2,
      max: 10
    },
    requestTimeout: 5000,
    connectionTimeout: 5000,
    migrations: {
      tableName: 'knex_migrations'
    },
    options: {

      enableArithAbort: true
    }

  }

};