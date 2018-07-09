import React from 'react';
import { shallow, mount, render } from 'enzyme';
import IndexBody from '../components/index/IndexBody';
import IndexPage from '../components/index/IndexPage';
import Navdash from '../components/Navdash';



describe('Index page Component', () => {

    it('should render without throwing an error', () => {
      expect(shallow(<IndexBody />).find('section#home').exists()).toBe(true);
    });
    it('should render without throwing an error', () => {
      expect(shallow(<IndexPage />).find('div').exists()).toBe(true);
    });
    it('should render without throwing an error', () => {
      expect(shallow(<Navdash />).find('div').exists()).toBe(true);
    });
})