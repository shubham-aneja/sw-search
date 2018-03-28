import React from 'react';
import { mount } from 'enzyme';
import Planet from './index.js'

describe('Planet', () => {
    it('rendering', () => {
        const mockedProps = {
            name: 'jimmy jonny',
            population: 1500000
        }
        const app = mount(<Planet {...mockedProps}/>)
        expect(app.html()).toMatchSnapshot();

    });

});

