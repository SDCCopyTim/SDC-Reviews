const express = require('express');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const dbHelpers = require('../database/dbHelpers.js');

// Static files
app.use(express.static(path.join(__dirname, '../client/dist')));

// Middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());

// Get all reviews for particular campground
app.get('/api/:campId', (req, res) => {
  dbHelpers.getCampgroundReviews(req.params.campId, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).json(results);
    }
  });
});

// Set port and get confirmation
let port = 3004;
app.listen(port, () => console.log(`listening at port ${port}`));