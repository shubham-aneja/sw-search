import React from 'react';
import { mount } from 'enzyme';

import Home from './index.js';
import Planet from '../planet'
import NoResult from '../no-result'

describe('Home', () => {
    it('rendering', () => {
        const onValueChangeMock = jest.fn()
        const doLogoutMock = jest.fn()
        const homeDestroyMock = jest.fn()
        const props = {
            onValueChange: onValueChangeMock,
            doLogout: doLogoutMock,
            homeDestroy: homeDestroyMock,
            isLoading: false,
            options: [],
            searchedText: '',
            isNoResult: false,
            error: ''
        };
        const app = mount(<Home {...props} />)
        expect(app.html()).toMatchSnapshot();

        const inputs = app.find('input')
        const userNameInput = inputs.at(0)
        userNameInput.simulate('change', {target: {value: 'Pla'}})

        app.setProps({
            options: [
                {name: 'Planet 1', population: 10000},
                {name: 'Planet 2', population: 1000000},
                {name: 'Planet 3', population: 'unknown'},
            ]
        });

        app.setProps({
            error: 'Something went wrong.'
        })
    });

    it('Option renderer', () => {
        expect(Planet({
            name: 'Keplin',
            population: 1000
        })).toMatchSnapshot()
        expect(Planet({
            name: 'Pluto',
            population: 'unknown'
        })).toMatchSnapshot()
    })
});

