import React from 'react';
import Review from './Review.jsx';

// Available props: campReviews (array of reviews), getCampReviews (function)
const ReviewsList = (props) => {
  return (
    <div className="reviews-list">
      {props.campReviews.map((review, index) => <Review key={index} review={review} getCampReviews={props.getCampReviews} />)}
    </div>
  );
};

export default ReviewsList;