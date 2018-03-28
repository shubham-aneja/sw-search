import React, { Component} from 'react';
import './home.css';
import PropTypes from 'prop-types'
import Planet from '../planet'
import NoResult from '../no-result'

class Home extends Component {

    static propTypes = {
        options: PropTypes.array,
        error: PropTypes.string,
        onValueChange: PropTypes.func,
        doLogout: PropTypes.func,
        homeDestroy: PropTypes.func,
        isLoading: PropTypes.bool,
        searchedText: PropTypes.string,
        isNoResult: PropTypes.bool
    };

    static defaultProps = {
        options: [],
        error: '',
        onValueChange: ()=> {
        },
        isLoading: false,
        searchedText: '',
        doLogout: ()=> {
        },
        isNoResult: false,
        homeDestroy: ()=>{}
    };

    constructor(props) {
        super(props);
        this.onValueChange = this.onValueChange.bind(this);
    }

    onValueChange(e) {
        this.props.onValueChange(e.target.value);
    }

    componentWillUnmount() {
        this.props.homeDestroy();
    }


    render() {
        const {isNoResult, options, searchedText, doLogout, error} = this.props;
        return (
            <div className="Home-app">
                <h2>Home</h2>
                <input type="text" placeholder='start search by typing...' value={searchedText}
                       onChange={this.onValueChange}
                    />

                <div className="options-container">
                    {options.length > 0 && options.map(option=> {
                        return (<Planet key={option.name} name={option.name} population={option.population}/>)
                    })  }
                    {isNoResult && <NoResult />}
                </div>
                <div className="error">
                    {error}
                </div>
                <div onClick={doLogout}>Logout</div>
            </div>
        );
    }
}

export default Home