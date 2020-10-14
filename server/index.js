const express = require('express');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const path = require('path');

const dbHelpers = require('../database/dbHelpers.js');

// Serve Static files
app.use(express.static(path.join(__dirname, '../client/dist')));

// Middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());

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
// Get all reviews for particular campground by campId sorted by date only.
// Returns an array of reviews
app.get('/api/date/:campId', (req, res) => {
  dbHelpers.getCampgroundReviewsByDate(req.params.campId, (err, reviews) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).json(reviews);
    }
  });
});
// Increment or decrement the helpful count of a review
app.put('/api/helpful', (req, res) => {
  dbHelpers.editReviewHelpful(req.body, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send('Helpfulness updated!');
    }
  });
});
// Post a review to the database for particular campground by campId.
app.post('/api/:campId', (req, res) => {
  dbHelpers.postReviewByCampId(req.params.campId, req.body, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send('Thanks for your review!');
    }
  });
});

// Delete a review in the database for a particular campground by reviewId.
app.delete('/api/delete/:reviewId', (req, res) => {
  dbHelpers.deleteReviewByReviewId(req.params.reviewId, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send('Review deleted!')
    }
  })
})

// Set port and get confirmation
let port = 3004;
app.listen(port, () => console.log(`Reviews server listening at port ${port}`));