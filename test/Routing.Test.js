import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import Routing from './../src/Routing.jsx';


describe('External state with Page.js', () => {
  it('allows us to set props', () => {
    const wrapper = mount(<Routing />);

    expect(wrapper.props().signedIn).to.equal(false);
  });
});