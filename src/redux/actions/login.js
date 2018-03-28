import Types from './types.js'
import {api} from '../../utils/api'
import { push} from 'react-router-redux'
const LOGIN_URL = `https://swapi.co/api/people/?search`;
export const loginUserNameChange = (username)=> (
{
    type: Types.LOGIN_USERNAME_CHANGE,
    username
}
);

export const loginPasswordChange = (password)=> (
{
    type: Types.LOGIN_PASSWORD_CHANGE,
    password
}
);

export const loginSetLoading = (payload)=> (
{
    type: Types.LOGIN_SET_LOADING,
    payload
}
);

export const loginSuccess = (payload)=> (
{
    type: Types.LOGIN_SUCCESS,
    payload
}
);

export const loginFailure = (payload)=> (
{
    type: Types.LOGIN_FAILURE,
    payload
}
);

export const loginDoLogout = (payload)=> {
    localStorage.removeItem('username');
    return (dispatch)=> {
        dispatch(push({pathname: '/'}));
    }
}

export const loginDoLogin = ({username, password})=> {
    return (dispatch)=> {
        api(`${LOGIN_URL}=${username}`).then(response=> {
            if (!username && !password) {
                //todo throw error "Username and password are mangatory"
            }
            if (response && response.count === 0) {
                //    todo throw error invalid username password
            } else {
                const { results } = response;
                let user;
                for (let i = 0; i < results.length; i++) {
                    const userInfo = results[i]

                    if (userInfo.name === username && userInfo.birth_year === password) {
                        user = userInfo;
                        break;
                    }
                }
                if (user) {
                    localStorage.setItem('username', username);
                    dispatch(push({pathname: '/home'}));
                    dispatch(loginPasswordChange(''));
                    dispatch(loginUserNameChange(''))
                }
            }
        }).catch(e=> {
                //   todo  throw error" Something went wrong:
            }
        )
    }

};



