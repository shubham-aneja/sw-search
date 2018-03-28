import React from 'react';
import { mount } from 'enzyme';

import Login from './index.js';

describe('Login Component', () => {
    it('rendering and handler testing', () => {
        const onLoginMock = jest.fn();
        const onUserNameChangeMock = jest.fn();
        const onPasswordChangeMock = jest.fn();
        const loginDestroyMock = jest.fn();


        const props = {
            error: '',
            onLogin: onLoginMock,
            onPasswordChange: onPasswordChangeMock,
            onUsernameChange: onUserNameChangeMock,
            password: 'abcd',
            username: 'Luke',
            isLoading: false,
            loginDestroy: loginDestroyMock
        };
        const login = mount(<Login {...props} />)
        expect(login.html()).toMatchSnapshot();

        expect(onUserNameChangeMock).not.toBeCalled()
        expect(onPasswordChangeMock).not.toBeCalled()

        const inputs = login.find('input')
        const userNameInput = inputs.at(0)
        userNameInput.simulate('change', { target: { value: 'Luke S' }})

        const passwordInput = inputs.at(1)
        passwordInput.simulate('change', { target: { value: 'abcd' }})

        expect(onUserNameChangeMock).toBeCalled();
        expect(onPasswordChangeMock).toBeCalled();

        const button = login.find('.action-button');
        button.simulate('click');
        login.setProps({ isLoading: true });
        button.simulate('click');
        login.setProps({ error: 'unit test case error' });
    });
});

