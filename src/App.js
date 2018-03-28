import React, {  PureComponent } from 'react';
import './App.css';
import {Provider} from 'react-redux';
import { Router,  browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import store from './redux'
import Routes from './routes.js'

const history = syncHistoryWithStore(browserHistory, store);

class ProviderApp extends PureComponent {
    render() {
        return (

            <Provider store={store}>
                <Router history={history} routes={Routes}>
                </Router>
            </Provider>
        )
    }
}
export default ProviderApp;

