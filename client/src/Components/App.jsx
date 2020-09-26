import React from 'react';
import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      campReviews: [],
      campId: 52
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
      <div><h1>Hello from React</h1></div>
    );
  }
}