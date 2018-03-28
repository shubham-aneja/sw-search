import React from 'react';
import { mount } from 'enzyme';
import NotFound from './index.js'

describe('NotFound', () => {
    it('rendering', () => {
        const app = mount(<NotFound />)
        expect(app.html()).toMatchSnapshot();

    });

});

