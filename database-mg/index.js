const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/timcamp', {useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', function() {
  console.log('Connected to database');
});

const reviewsSchema = new mongoose.Schema({
  id: Number,
  campgroundid: Number,
  username: String,
  bodytext: String,
  profilephoto: String,
  helpful: Number,
  reviewdate: { type: Date, default: Date.now }
});

const Review = mongoose.model('Review', reviewsSchema);

module.exports = {
  Review,
  connection
};