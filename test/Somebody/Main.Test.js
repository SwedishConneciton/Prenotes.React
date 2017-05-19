import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import nomut from 'immutable';

import Component from './../../src/Somebody/Main.jsx';


describe('External state with Page.js', () => {
  it('Wihout properties', () => {
    const wrapper = mount(<Component />);

    expect(wrapper.props().notifications.toArray()).has.length(0);
    expect(wrapper.props().user).to.be.undefined;
  });

  it('With notifications', () => {
    const notifications = nomut.Map({'Potato': 1});

    const wrapper = mount(<Component notifications={notifications}/>);

    expect(wrapper.props().notifications.toArray()).has.length(1);
    expect(wrapper.props().user).to.be.undefined;
  });

  it('Find notifications', () => {
    const notifications = nomut.Map({'Potato': 1});

    const wrapper = mount(<Component notifications={notifications}/>);

    expect(wrapper.find('.notification').exists()).to.be.true;
  });

  it('With a user, no id', () => {
    const user = {
      name: '',
      children: [],
      schools: []
    };

    const wrapper = mount(<Component user={user}/>);

    expect(wrapper.props().user.id).to.be.undefined;
  });

  it('With a user that is valid', () => {
    const user = {id: '1', name: 'Gary'};

    const wrapper = mount(<Component user={user}/>);

  });
});