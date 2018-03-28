import types from '../actions/types'

export default (state = {username: '', password: ''}, action = {})=> {
    switch (action.type) {

        case types.LOGIN_USERNAME_CHANGE :
        {
            const updatedS = {...state, username: action.username}
            return updatedS
        }
        case types.LOGIN_PASSWORD_CHANGE:
        {
            return {...state, password: action.password}
        }
        default :
        {
            return state;
        }
    }
}