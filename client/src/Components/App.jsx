import React from 'react';
import axios from 'axios';
import ReviewsList from './ReviewsList.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      campReviews: [],
      campId: 53
    };
    this.getReviewsForCamp = this.getReviewsForCamp.bind(this);
  }

  componentDidMount() {
    this.getReviewsForCamp();
  }

  getReviewsForCamp() {
    axios.get(`/api/${this.state.campId}`)
      .then((reviews) => {
        this.setState({
          campReviews: reviews.data
        }, () => console.log(this.state));
      })
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <div className="reviews-main-wrapper">
        <div className="reviews-main-column-2-3">
          <div className="reviews-container">
            <div className="reviews-count-sort">
              <div className="reviews-count"><span>{this.state.campReviews.length} Written Reviews</span></div>
              <div className="reviews-sort"><span>Recent / Best</span></div>
            </div>
            <ReviewsList campReviews={this.state.campReviews} />
          </div>
        </div>
        <div className="reviews-right-column-1-3"></div>
      </div>
    );
  }
}