import React from 'react';
import axios from 'axios';
import ReviewsList from './ReviewsList.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      campReviews: [],
      campId: 53,
      sortByDate: false
    };
    this.getReviewsForCamp = this.getReviewsForCampSortByHelpfulness.bind(this);
    this.getReviewsForCampSortByDate = this.getReviewsForCampSortByDate.bind(this);
    this.changeToSortByDate = this.changeToSortByDate.bind(this);
    this.changeToSortByHelpfulness = this.changeToSortByHelpfulness.bind(this);
  }

  componentDidMount() {
    this.getReviewsForCampSortByHelpfulness();
  }

  getReviewsForCampSortByHelpfulness() {
    axios.get(`/api/helpful/${this.state.campId}`)
      .then((reviews) => {
        this.setState({
          campReviews: reviews.data
        }, () => console.log(this.state));
      })
      .catch((err) => console.error(err));
  }

  getReviewsForCampSortByDate() {
    axios.get(`/api/date/${this.state.campId}`)
      .then((reviews) => {
        this.setState({
          campReviews: reviews.data
        }, () => console.log(this.state));
      })
      .catch((err) => console.error(err));
  }

  changeToSortByDate() {
    this.setState({
      sortByDate: true
    }, () => this.getReviewsForCampSortByDate());
  }

  changeToSortByHelpfulness() {
    this.setState({
      sortByDate: false
    }, () => this.getReviewsForCampSortByHelpfulness());
  }

  render() {

    let reviewsRecentClassName = 'reviews-sort-recent';
    let reviewsBestClassName = 'reviews-sort-best';
    if (this.props.sortByDate) {
      reviewsRecentClassName += '-active';
      reviewsBestClassName += '-not-active';
    }

    return (
      <div className="reviews-main-wrapper">
        <div className="reviews-main-column-2-3">
          <div className="reviews-container">
            <div className="reviews-count-sort">
              <div className="reviews-count"><span>{this.state.campReviews.length} Written Reviews</span></div>
              <div className="reviews-sort">
                <div className={this.state.sortByDate ? 'reviews-sort-recent-active' : 'reviews-sort-recent'} onClick={this.changeToSortByDate}>Recent</div>
                <div className="reviews-sort-slash">/</div>
                <div className={this.state.sortByDate ? 'reviews-sort-best' : 'reviews-sort-best-active'} onClick={this.changeToSortByHelpfulness}>Best</div>
              </div>
            </div>
            <ReviewsList campReviews={this.state.campReviews} />
          </div>
        </div>
        <div className="reviews-right-column-1-3"></div>
      </div>
    );
  }
}