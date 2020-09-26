const express = require('express');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const path = require('path');

const dbHelpers = require('../database/dbHelpers.js');

// Static files
app.use(express.static(path.join(__dirname, '../client/dist')));

// Middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());

// Get all reviews for particular campground by campId.
// Returns an array of reviews
app.get('/api/:campId', (req, res) => {
  dbHelpers.getCampgroundReviews(req.params.campId, (err, reviews) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).json(reviews);
    }
  });
});

// Set port and get confirmation
let port = 3004;
app.listen(port, () => console.log(`Reviews server listening at port ${port}`));