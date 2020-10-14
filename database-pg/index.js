const { Pool } = require('pg')

const pool = new Pool({
  user: 'justin',
  host: 'localhost',
  database: 'copytim',
  password: 'password',
  port: 5432,
})

module.exports = pool;