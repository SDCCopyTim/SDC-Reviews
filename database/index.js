const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/timcamp', {useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', function() {
  console.log('Connected to database');
});

const reviewsSchema = new mongoose.Schema({
  campgroundId: Number,
  username: String,
  bodyText: String,
  profilePhoto: String,
  helpful: Number,
  date: { type: Date, default: Date.now },
  userPhotos: String
});

const Review = mongoose.model('Review', reviewsSchema);

module.exports = {
  Review,
  connection
};