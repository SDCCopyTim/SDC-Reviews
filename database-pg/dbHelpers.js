const { Pool, Client } = require('pg');
const pool = require('./index.js');

module.exports = {
  getCampgroundReviews: (campId, callback) => {
    pool.query(`SELECT * FROM reviews WHERE campgroundid = ${campId}`, (err, res) => {
      if (err) {
        callback(err)
      } else {
        callback(null, res)
      }
    })
  }
}