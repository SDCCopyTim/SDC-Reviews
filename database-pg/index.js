const Pool = require('pg').Pool;

const connection = new Pool({
  user: 'justin',
  host: 'localhost',
  database: 'copytim',
  password: 'password',
  port: 5432,
})

module.exports = {
  connection
}