const { Pool } = require('pg')

const pool = new Pool({
  user: 'justinmurakami',
  host: 'localhost',
  database: 'copytim',
  port: 5432,
})

module.exports = pool;