import {createStore} from 'redux';
import RootReducer from './reducers'
import chainedMiddlewares from './middlewares/index'
import { composeWithDevTools } from 'redux-devtools-extension';




const DefaultState = {
};


export default createStore(RootReducer, DefaultState, composeWithDevTools(chainedMiddlewares));


