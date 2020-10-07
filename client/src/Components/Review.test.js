import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Review from './Review';

describe('Review', () => {

  let sampleReview = {
    username: 'Nick R.',
    bodyText: 'Hello, this is a review',
    profilePhoto: 'https://s3.amazonaws.com/uifaces/faces/twitter/gcmorley/128.jpg',
    helpful: 19,
    date: 'March 7th, 2017'
  };

  const wrapper = shallow(<Review review={sampleReview} />);

  it('should show the user\'s avatar photo', () => {
    const avatar = wrapper.find('div.reviews-avatar img');
    expect(avatar.prop('src')).toEqual('https://s3.amazonaws.com/uifaces/faces/twitter/gcmorley/128.jpg');
  });

  it('should display [reviewer\s first name + last initial] recommends this listing.', () => {
    const usernameText = wrapper.find('div.reviews-username').text();
    expect(usernameText).toBe('Nick R. recommends this listing.');
  });

  xit('should display the date that the review was written', () => {
    const date = wrapper.find('div.reviews-date t').text();
    // console.log(wrapper.debug());
    // expect(date).toBe('March 7th, 2017');
  });

  it('should display the review text', () => {
    const reviewText = wrapper.find('div.reviews-review-text').text();
    expect(reviewText).toBe('Hello, this is a review');
  });

  it('should display a button to mark the review as helpful that contains a counter of how many have clicked on it', () => {
    const helpfulBtn = wrapper.find('div.reviews-helpful-btn');
    const helpfulBtnText = helpfulBtn.text();
    expect(helpfulBtnText).toContain('Helpful19');
  });

  xit('should increment the count on the helpful button when it is clicked and decrement it when clicked a second time', () => {
    const helpfulBtn = wrapper.find('div.reviews-helpful-btn');
    const helpfulBtnText = helpfulBtn.text();
    expect(helpfulBtnText).toContain('19');
    helpfulBtn.simulate('click');
    expect(helpfulBtnText).toContain('20');
    helpfulBtn.simulate('click');
    expect(helpfulBtnText).toContain('19');
  });

  it('should display a button to report the review', () => {
    const reportBtnText = wrapper.find('div.reviews-report-btn').text();
    expect(reportBtnText).toContain('Report');
  });

});