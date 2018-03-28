import {connect} from 'react-redux'
import {homeOnValueChange, loginDoLogout, homeDestroy} from '../redux/actions/index.js'
import Home from '../components/home'

const mapStateToProps = (appState) => {
    const homeState = appState.home || {};

    return {
        options: homeState.options,
        error: homeState.error,
        isLoading: homeState.isLoading,
        searchedText: homeState.searchedText,
        isNoResult: homeState.isNoResult
    }
};

const mapDispatchToProps = {
    onValueChange: homeOnValueChange,
    doLogout: loginDoLogout,
    homeDestroy
};

let connectedHome = connect(mapStateToProps, mapDispatchToProps)(Home);

export default connectedHome