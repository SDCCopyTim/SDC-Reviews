const newrelic = require('newrelic');
const compression = require('compression')
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();
const path = require('path');


const dbHelpers = require('../database-pg/testdbHelpers.js');

// Serve Static files
app.use(express.static(path.join(__dirname, '../client/dist')));

// Middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());
app.use(compression());

// Get all reviews for particular campground by campId sorted by helpfulness and then date.
// Returns an array of reviews
app.get('/api/helpful/:campId', (req, res) => {
  dbHelpers.getCampgroundReviews(req.params.campId, (err, reviews) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).json(reviews);
    }
  });
});
// // Post a review to the database for particular campground by campId.
// app.post('/api/:campId', (req, res) => {
//   dbHelpers.postReviewByCampId(req.params.campId, req.body, (err, results) => {
//     if (err) {
//       res.status(400).send(err);
//     } else {
//       res.status(200).send('Thanks for your review!');
//     }
//   });
// });

// // Delete a review in the database for a particular campground by reviewId.
// app.delete('/api/delete/:reviewId', (req, res) => {
//   dbHelpers.deleteReviewByReviewId(req.params.reviewId, (err, results) => {
//     if (err) {
//       res.status(400).send(err);
//     } else {
//       res.status(200).send('Review deleted!')
//     }
//   })
// })

// Set port and get confirmation
let port = 8000;
app.listen(port, () => console.log(`Reviews server listening at port ${port}`));