import {applyMiddleware} from 'redux';
import Thunk from 'redux-thunk';
import {routerMiddleware} from 'react-router-redux';
import { browserHistory } from 'react-router'


const routerMiddleWare = routerMiddleware(browserHistory);

export default  applyMiddleware(routerMiddleWare, Thunk)