import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from './App';

describe('App', () => {

  test('should display text telling how many reviews have been written for a camp', () => {
    const wrapper = shallow(<App />);
    const reviewsTotal = wrapper.find('div.reviews-count span').text();
    expect(reviewsTotal).toContain('Written Reviews');
  });

});