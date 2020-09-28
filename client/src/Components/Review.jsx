import React from 'react';
import { FaThumbsUp, FaRegThumbsUp, FaRegFlag } from 'react-icons/fa';

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
              <div className="reviews-thumbs-up">
                <div className="reviews-thumbs-up-icon"><FaThumbsUp /></div>
              </div>
              <div className="reviews-username"><a href="#">{props.review.username}</a> recommends this listing.</div>
            </div>
            <div className="reviews-date">{props.review.date}</div>
          </div>
          <div className="reviews-review-text"><p>{props.review.bodyText}</p></div>
          <div className="reviews-lower-btns">
            <div className="reviews-helpful-btn">
              <div className="reviews-helpful-inner-text">
                <div className="reviews-helpful-thumb-icon"><FaRegThumbsUp /></div>
                <div>Helpful</div>
              </div>
              <div>{props.review.helpful}</div>
            </div>
            <div className="reviews-report-btn">
              <FaRegFlag />
              <div className="reviews-report-btn-text">Report</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;