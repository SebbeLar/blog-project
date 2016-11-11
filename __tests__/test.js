/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import Home from '../components/home';

test('adds', () => {
    const add = (x, y) => x + y;
    expect(add(1, 2)).toBe(3);
});

it('Checks if value increse', () => {
    const home = shallow(
        <Home value={0} />
    );

    const val = home.find('h2');

    expect(val.text()).toEqual('0');
});
