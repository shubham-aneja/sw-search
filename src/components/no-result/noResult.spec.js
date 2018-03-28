import React from 'react';
import { mount } from 'enzyme';
import NoResult from './index.js'

describe('NoResult', () => {
    it('rendering', () => {
        const app = mount(<NoResult />)
        expect(app.html()).toMatchSnapshot();

    });

});

