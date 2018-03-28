import {combineReducers} from 'redux';
import login from './login.js'
import home from './home.js'
import { routerReducer } from 'react-router-redux'

const rootReducer =  combineReducers({
    login,
    home,
    routing: routerReducer
});

export default rootReducer
