const { Pool } = require('pg');
const pool = require('./testindex.js');

module.exports = {
  //Get all reviews for particular campground by campId, sorted by helpfulness and then date
  getCampgroundReviews: (campId, callback) => {
    pool.query(`SELECT * FROM testreviews WHERE campgroundId = ${campId} ORDER BY reviewDate desc;`, (err, res) => {
      if (err) {
        callback(err)
      } else {
        callback(null, res.rows)
      }
    })
  }
}