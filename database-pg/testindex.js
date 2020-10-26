const { Pool } = require('pg')

const pool = new Pool({
  user: 'justinmurakami',
  host: 'localhost',
  database: 'testtim',
  port: 5432,
})

module.exports = pool;