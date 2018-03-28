import types from '../actions/types'

export default (state = {}, action = {})=> {
    switch (action.type) {
        case types.HOME_UPDATE_INPUT_VALUE:
        {
            const updatedS = {...state, searchedText: action.value}
            return updatedS
        }

        case types.HOME_UPDATE_OPTIONS:
        {
            const updatedS = {...state, options: action.options};
            return updatedS
        }
        case types.HOME_SET_ERROR:
        {
            const updatedS = {...state, error: action.error};
            return updatedS
        }
        case types.HOME_SET_NO_RESULT:
        {
            const updatedS = {...state, isNoResult: action.isNoResult};
            return updatedS
        }
        case types.HOME_DESTROY:
        {
            return {}
        }
        case types.LOGIN_DO_LOGOUT:
        {
            return {}
        }
        default :
        {
            return state;
        }
    }
}