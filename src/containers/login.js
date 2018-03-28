import {connect} from 'react-redux'
import {loginUserNameChange, loginPasswordChange, loginDoLogin, loginDestroy} from '../redux/actions/index.js'
import Login from '../components/login'


const mapStateToProps = (appState) => {
    const loginState = appState.login || {};

    return {
        username: loginState.username,
        password: loginState.password,
        error: loginState.error,
        isLoading: loginState.loading
    }
};

const mapDispatchToProps = {
    onUsernameChange: loginUserNameChange,
    onPasswordChange: loginPasswordChange,
    onLogin: loginDoLogin,
    loginDestroy

};

let connectedLogin = connect(mapStateToProps, mapDispatchToProps)(Login);

export default connectedLogin