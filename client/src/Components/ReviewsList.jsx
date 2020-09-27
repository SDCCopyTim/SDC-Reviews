import React from 'react';
import Review from './Review.jsx';

// Available props: campReviews (array of reviews)
const ReviewsList = (props) => {
  return (
    <div className="reviews-list">
      {props.campReviews.map((review, index) => <Review key={index} review={review} />)}
    </div>
  );
};

export default ReviewsList;