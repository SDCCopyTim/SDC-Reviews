const mongoose = require('mongoose');
const db = require('./index.js');
const faker = require('faker');

module.exports = {

  // Get all reviews for particular campground by campId
  getCampgroundReviews: (campId, callback) => {
    db.Review.find({campgroundId: campId}, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },

  // Post a review to the database by campId
  postReviewByCampId: (campId, review, callback) => {
    let reviewToSave = new db.Review ({
      campgroundId: campId,
      username: review.username,
      bodyText: review.bodyText,
      profilePhoto: faker.image.avatar(),
      helpful: 0
    });
    reviewToSave.save(function (err, result) {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
  }

};