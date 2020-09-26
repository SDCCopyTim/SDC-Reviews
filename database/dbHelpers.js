const db = require('./index.js');

module.exports = {

  // Get all reviews for particular campground by campgroundId.
  getCampgroundReviews: (campId, callback) => {
    db.Review.find({campgroundId: campId}, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  }

};