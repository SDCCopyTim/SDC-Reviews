const { Pool } = require('pg');
const pool = require('./index.js');

module.exports = {
  //Get all reviews for particular campground by campId, sorted by helpfulness and then date
  getCampgroundReviews: (campId, callback) => {
    pool.query(`SELECT * FROM reviews WHERE campgroundId = ${campId} ORDER BY helpful desc, reviewDate desc;`, (err, res) => {
      if (err) {
        callback(err)
      } else {
        callback(null, res.rows)
      }
    })
  },
  // Get all reviews for particular campground by campId, but sort only by date
  getCampgroundReviewsByDate: (campId, callback) => {
    pool.query(`SELECT * FROM reviews WHERE campgroundId = ${campId} ORDER BY reviewDate desc;`, (err, res) => {
      if (err) {
        callback(err);
      } else {
        callback(null, res.rows);
      }
    })
  },
  // Increment or decrement the helpful counter for a specific review
  editReviewHelpful: (data, callback) => {
    console.log(data);
    pool.query(`UPDATE reviews set helpful = helpful + ${data.increment} WHERE id = ${data.reviewId};`, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  }
}