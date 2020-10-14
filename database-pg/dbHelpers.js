const { Pool } = require('pg');
const connection = require('./index.js');

module.exports = {
  getCampgroundReviews: (campId, callback) => {
    connection.query(`SELECT * FROM reviews WHERE campgroundid = ${campId}`, (err, res) => {
      if (err) {
        callback(err)
      } else {
        callback(null, res)
      }
    })
  }
}