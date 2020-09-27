import React from 'react';

// Available props: review (review object)
const Review = (props) => {
  return (
    <div>
      <div className="reviews-review">
        <div className="reviews-avatar">
          <img src={props.review.profilePhoto} alt="User photo" />
        </div>
        <div className="reviews-review-body">
          <div className="reviews-header">
            <div className="reviews-thumb-username">
              <div className="reviews-thumbs-up"></div>
              <div className="reviews-username">{props.review.username} recommends this listing.</div>
            </div>
            <div className="reviews-date">{props.review.date}</div>
          </div>
          <div className="reviews-review-text">{props.review.bodyText}</div>
        </div>
      </div>
    </div>
  );
};

export default Review;