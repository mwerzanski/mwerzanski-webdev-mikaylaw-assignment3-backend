import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRandomURL } from '../actions/URLAction';
import store from '../store';

class GetURLComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            givenURL: '',
            setOwnURL: false,
            ownURL: '',
            newURL: this.props.shortendURL,
            viewURL: false,
        }
        this.URLInputchange = this.URLInputchange.bind(this);
        this.newURLInputchange = this.newURLInputchange.bind(this);
    }

    URLInputchange(event) {
        const value = event.target.value;
        this.setState((state) => {
          return {givenURL: value}
        });
    }

    newURLInputchange(event) {
        const value = event.target.value;
        this.setState((state) => {
          return {ownURL: value}
        });
    }
    
    checkbox() {
        if(this.state.setOwnURL) {
            this.setState({
                setOwnURL: false
            })
        } else {
            this.setState({
                setOwnURL: true
            })
        }
    }

    async callDispatch() { //UPDATE WHEN YOU RETURN
        await store.dispatch(createRandomURL('SET_RANDOM_URL', this.state.givenURL))
        console.log('shortend url',this.props.shortendURL)
        this.setState({
            newURL: store.getState().URLReducer.shortendURL,
            viewURL: true
        })
      }

    render() {
        return(
            <div className='text-center'>
                <h3>URL Shortener</h3>
                <br/>
                <h5>Input URL:</h5>
                <input className="form-control p-3" name="givenURL" type="text" value={this.state.givenURL} onChange={this.URLInputchange}/>
                {
                    this.state.setOwnURL &&
                    <div>
                        <h5>Input desired new URL:</h5>
                        <input name="ownURL" className="form-control p-3" type="text" value={this.state.givenURL} onChange={this.newURLInputchange}></input>
                    </div>
                }
                <br/><br/>
                <input type="checkbox" className="form-check-input" id="exampleCheck1" onClick={() => this.checkbox()} />
                <span>Set your own shortened URL</span>
                <br/>
                <Link to='/' className='enabledCompareButton btn btn-outline-success' onClick={() => {this.callDispatch()}}>Submit</Link>
                <br/>
                { 
                    this.state.viewURL &&
                    <div>
                        <h5>Your new link:</h5>
                        <Link to={this.state.newURL}>{this.state.newURL}</Link>
                    </div>
                }
            </div>
        )
    }
}

URLShortenerComponent.propTypes = {
    dispatch: PropTypes.func.isRequired,
    state: PropTypes.func.isRequired,
    shortendURL: PropTypes.func.isRequired,
};

let mapDispatchToProps = dispatch => {
    return {
        dispatch: store.dispatch,
    };
};

function mapStateToProps(state, props) {
    return {
        shortendURL: state.URLReducer,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(URLShortenerComponent);