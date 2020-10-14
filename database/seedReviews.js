const mongoose = require('mongoose');
const db = require('./index.js');
const faker = require('faker');
faker.locale = 'en_US';

// This is just a seed file for the reviews database. Only run once to populate reviews.

let reviewsGenerator = function() {
  reviewsArr = [];
  for (let i = 1; i <= 100; i++) {
    let howManyReviews = 5;
    for (let j = 0; j <= howManyReviews; j++) {
      let reviewerName = faker.name.firstName() + ' ' + faker.random.alpha().toUpperCase() + '.';
      let reviewLength = faker.random.number({min: 1, max: 3});
      let reviewText = faker.lorem.paragraphs(reviewLength, '\n');
      let reviewerAvatar = faker.image.avatar();
      let helpfulReview = faker.random.number({min: 0, max: 14});
      let reviewDate = faker.date.between('2017-01-01', '2020-09-25');
      let review = {
        campgroundId: i,
        username: reviewerName,
        bodyText: reviewText,
        profilePhoto: reviewerAvatar,
        helpful: helpfulReview,
        date: reviewDate
      };
      reviewsArr.push(review);
    }
  }
  db.Review.insertMany(reviewsArr, function (err, results) {
    if (err) {
      console.error(err);
    } else {
      db.connection.close();
      console.log('Seed successful!');
    }
  });
};

reviewsGenerator();
