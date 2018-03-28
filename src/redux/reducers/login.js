import types from '../actions/types'

export default (state = {username: '', password: ''}, action = {})=> {
    switch (action.type) {

        case types.LOGIN_USERNAME_CHANGE :
        {
            return {...state, username: action.username}
        }
        case types.LOGIN_PASSWORD_CHANGE:
        {
            return {...state, password: action.password}
        }
        case types.LOGIN_SET_LOADING:
        {
            return {...state, loading: action.loading}
        }
        case types.LOGIN_SET_ERROR:
        {
            return {...state, error: action.error}
        }
        case types.LOGIN_DESTROY:
        {
            return {}
        }
        default :
        {
            return state;
        }
    }
}