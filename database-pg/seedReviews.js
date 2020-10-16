const { Pool } = require('pg');
const pool = require('./index.js');
const faker = require('faker');
const moment = require('moment');
faker.locale = 'en_US';

const reviewsGenerator = function() {
  const reviewsArr = [];
  for (let i = 1; i <= 100; i++) {
    let howManyReviews = 5;
    for (let j = 0; j <= howManyReviews; j++) {
      let reviewerName = faker.name.firstName() + ' ' + faker.random.alpha().toUpperCase() + '.';
      let reviewLength = faker.random.number({min: 1, max: 3});
      let reviewText = faker.lorem.paragraphs(reviewLength, '\n');
      let reviewerAvatar = faker.image.avatar();
      let helpfulReview = faker.random.number({min: 0, max: 14});
      let date = faker.date.between('2017-01-01', '2020-09-25')
      let reviewDate = moment(date).format();
      let review = {
        campgroundid: i,
        username: reviewerName,
        bodytext: reviewText,
        profilephoto: reviewerAvatar,
        helpful: helpfulReview,
        reviewdate: reviewDate
      };
      reviewsArr.push(review);
    }
  }
  return reviewsArr;
};

// const reviews = reviewsGenerator();

// const review = reviews[0];

// console.log(review);

const insertReviews = () => {
  const reviews = reviewsGenerator();
  reviews.forEach((review) => {
    const {
      campgroundId,
      username,
      bodyText,
      profilePhoto,
      helpful,
      reviewDate
    } = review;
    const queryString = `INSERT INTO reviews (campgroundId, username, bodyText, profilePhoto, helpful, reviewDate) VALUES (${campgroundId}, '${username}', '${bodyText}', '${profilePhoto}', ${helpful}, '${reviewDate}');`;
    pool.query(queryString, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log('seeded');
      }
    });
  });
}

insertReviews();