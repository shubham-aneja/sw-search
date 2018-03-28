import React, {  PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {loginUserNameChange, loginPasswordChange, loginDoLogin} from '../../redux/actions/index.js'

class Login extends PureComponent {

    static propTypes = {
        error: PropTypes.string,
        onLogin: PropTypes.func,
        onPasswordChange: PropTypes.func,
        onUsernameChange: PropTypes.func,
        password: PropTypes.string,
        username: PropTypes.string,
        isLoading: PropTypes.bool
    };

    static defaultProps = {
        error: '',
        username: '',
        password: '',
        isLoading: false
    };

    constructor(p) {
        super(p);

        this.state = {};
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onLogin = this.onLogin.bind(this);
    }

    onUsernameChange(e) {
        this.props.onUsernameChange(e.target.value)
    }

    onPasswordChange(e) {
        this.props.onPasswordChange(e.target.value)
    }

    onLogin() {
        const {onLogin, username, password} = this.props;
        onLogin({username, password})
    }

    render() {
        const {password, username} = this.props;
        return (
            <div className="Home-app">
                <h2>Welcome to login component</h2>

                <div className="fields-section">
                    <div className="field-container">
                        <div className="field-label">
                            Username
                        </div>
                        <div className="field-editor">
                            <input type="text" onChange={this.onUsernameChange}
                                   value={username}
                                />
                        </div>
                    </div>
                    <div className="field-container">
                        <div className="field-label">
                            Password
                        </div>
                        <div className="field-editor">
                            <input type="password"
                                   onChange={this.onPasswordChange}
                                   value={password}
                                />
                        </div>
                    </div>
                    <span>Username and password are case sensitive</span>
                    <div>
                        <span>For testing: use Luke Skywalker and 19BBY</span>
                    </div>
                <div>
                        <span>For limited calls testing: use C-3PO and 112BBY</span>
                    </div>
                </div>
                <div className="actions-section">
                    <div className="action-button" onClick={this.onLogin}>Login</div>
                </div>
            </div>
        );
    }

;

}


const mapStateToProps = (appState) => {
    const loginState = appState.login || {};

    return {
        username: loginState.username,
        password: loginState.password,
        error: loginState.error,
        isLoading: loginState.isLoading
    }
};

const mapDispatchToProps = {
    onUsernameChange: loginUserNameChange,
    onPasswordChange: loginPasswordChange,
    onLogin: loginDoLogin

};
Login = connect(mapStateToProps, mapDispatchToProps)(Login)

export default Login