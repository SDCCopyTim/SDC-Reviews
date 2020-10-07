import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from './App';
import '@testing-library/jest-dom';


describe('App', () => {

  const wrapper = shallow(<App />);

  it('should display text telling how many reviews have been written for a camp', () => {
    const reviewsTotal = wrapper.find('div.reviews-count span').text();
    expect(reviewsTotal).toContain('Written Reviews');
  });

  it('should have a button to sort reviews by date', () => {
    const recentBtnText = wrapper.find('div.reviews-sort-recent').text();
    expect(recentBtnText).toBe('Recent');
  });

  it('should have a button to sort reviews by ost helpful', () => {
    const bestBtnText = wrapper.find('div.reviews-sort-best-active').text();
    expect(bestBtnText).toBe('Best');
  });

  it('should display a button to render all of the reviews if there are more than five', () => {
    const seeAllBtnText = wrapper.find('div.reviews-see-all-container').text();
    expect(seeAllBtnText).toContain('See all');
  });

  xit('should remove the see all reviews button once it is clicked', () => {
    const seeAllBtn = wrapper.find('div.reviews-see-all-container');
    seeAllBtn.simulate('click');
    const seeAllBtnAfter = wrapper.find('span.reviews-see-all');
    expect(seeAllBtn).not.toBeVisible();
  });

});