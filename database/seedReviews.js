const mongoose = require('mongoose');
const db = require('./index.js');
const faker = require('faker');
faker.locale = 'en_US';

let reviewsGenerator = function() {
  reviewsArr = [];
  for (let i = 1; i <= 100; i++) {
    let howManyReviews = faker.random.number({min: 1, max: 15});
    for (let j = 0; j <= howManyReviews; j++) {
      let reviewerName = faker.name.firstName() + ' ' + faker.random.alpha().toUpperCase() + '.';
      let reviewText = faker.lorem.paragraphs(2, '\n');
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

// let reviewerName = faker.name.firstName() + ' ' + faker.random.alpha().toUpperCase() + '.';
// let reviewText = faker.lorem.paragraphs(2, '\n');
// let reviewerAvatar = faker.image.avatar();
// let helpfulReview = faker.random.number({min: 0, max: 14});
// let reviewDate = faker.date.between('2017-01-01', '2020-09-25');

// let review = new db.Review({
//   campgroundId: 100,
//   bodyText: 'We went out to Ardor Wood Farm mid-afternoon and got ourselves acquainted with the glamping tent and property. I will tell you, it was pretty nice to not have to set up and break down camp for a change. The tent has a queen size bed, full bug protection, a dresser, and chair. There is no running water, so make sure to bring plenty of your own. There is a small, clean, outhouse available down the trail near the tent spots.',
//   profilePhoto: 'https://s3.amazonaws.com/uifaces/faces/twitter/mtolokonnikov/128.jpg',
//   helpful: 3,
//   userPhotos: null
// });

// review.save(function (err, result) {
//   if (err) {
//     return console.error(err);
//   } else {
//     console.log('Review for ' + result.campgroundId + ' saved to bookstore collection.');
//     db.connection.close();
//   }
// });
