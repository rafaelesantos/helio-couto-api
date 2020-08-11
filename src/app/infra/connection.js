const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'helio-couto',
  password: 'admin',
  port: 3306,
})

module.exports = pool