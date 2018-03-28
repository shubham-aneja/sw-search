import React, {  PureComponent} from 'react'
import PropTypes from 'prop-types'
import './login.css'
class Login extends PureComponent {

    static propTypes = {
        error: PropTypes.string,
        onLogin: PropTypes.func,
        onPasswordChange: PropTypes.func,
        onUsernameChange: PropTypes.func,
        loginDestroy: PropTypes.func,
        password: PropTypes.string,
        username: PropTypes.string,
        isLoading: PropTypes.bool
    };

    static defaultProps = {
        error: '',
        username: '',
        password: '',
        isLoading: false,
        loginDestroy: ()=> {
        },
        onLogin: ()=> {
        },
        onPasswordChange: ()=> {
        },
        onUsernameChange: ()=> {
        }
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

    componentWillUnmount() {
        this.props.loginDestroy();
    }

    render() {
        const {password, username, isLoading, error} = this.props;
        return (
            <div className="home-app">
                <h2 className='welcome-element'>Welcome to login component</h2>

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

                </div>
                <div className="info-section">
                    <div className='info-item'><span>Username and password are case sensitive</span></div>

                    <div  className='info-item'>
                        <span>For testing: use Luke Skywalker and 19BBY</span>
                    </div>
                    <div className='info-item'>
                        <span>For limited calls testing: use C-3PO and 112BBY</span>
                    </div>
                </div>
                {isLoading ? (
                    <div>
                        <h2>Loading...</h2>
                    </div>) : (
                    <div className="actions-section">
                        <div className="action-button" onClick={this.onLogin}>Login</div>
                    </div>)
                }
                {error && <div><h3 className='error-message'>{error}</h3></div>}

            </div>
        );
    }
}

export default Login