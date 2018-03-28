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

export const loginSetError = (error)=> (
{
    type: Types.LOGIN_SET_ERROR,
    error
}
);

export const loginSetLoading = (loading)=> (
{
    type: Types.LOGIN_SET_LOADING,
    loading
}
);

export const loginDestroy = ()=>({
    type: Types.LOGIN_DESTROY
});


export const loginDoLogout = (payload)=> {
    localStorage.removeItem('username');
    return (dispatch)=> {
        dispatch(push({pathname: '/'}));
    }
}

export const loginDoLogin = ({username, password})=> {

    return (dispatch)=> {

        if (!username || !password) {
            dispatch(loginSetError("Username and password are mandatory for login"));

        } else {
            dispatch(loginSetError(""));
            dispatch(loginSetLoading(true));
            api(`${LOGIN_URL}=${username}`).then(response=> {
                dispatch(loginSetLoading(false));
                if (response && response.count === 0) {
                    dispatch(loginSetError('Invalid username or password'));
                } else {
                    const { results } = response;
                    let user;
                    for (let i = 0; i < results.length; i++) {
                        const userInfo = results[i];

                        if (userInfo.name === username && userInfo.birth_year === password) {
                            user = userInfo;
                            break;
                        }
                    }
                    if (user) {
                        localStorage.setItem('username', username);
                        dispatch(push({pathname: '/home'}));
                        dispatch(loginPasswordChange(''));
                        dispatch(loginUserNameChange(''));
                        dispatch(loginSetError(''));

                    } else {
                        dispatch(loginSetError('Invalid username or password'));
                    }
                }
            }).catch(e=> {
                    dispatch(loginSetLoading(false));
                    dispatch(loginSetError("Something went wrong"));
                }
            )
        }
    }

};



