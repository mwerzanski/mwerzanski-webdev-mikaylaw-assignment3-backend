import React from 'react'
import Axios from 'axios';

export default class URLShortenerComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            givenURL: '',
            setOwnURL: false,
            ownURL: ''
        }
        this.onInputchange = this.onInputchange.bind(this);
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

    onSubmit() { //UPDATE WHEN YOU RETURN
        Axios.post(
          'http://localhost:3000/api/shortener', 
          {
            givenURL: this.state.givenURL
          }
        ).then(function() {
          return Axios.get('http://localhost:3000/api/shortener')
    
        })
        .then(response => {
          this.setState({shortenedURL: response.data})
        })
        .catch(error => console.log(error))
        .finally(() => this.setState(
            {
              pokemonName: '',
              pokemonLevel: 0,
              pokemonHealth: 0,
            }    
          )
        )   
      }

    render() {
        return(
            <div>
                <h3>URL Shortener:</h3>
                <h5>Input URL:</h5>
                <input url="url" className='url-input' type="text" value={this.state.url} onChange={this.URLInputchange}/>
                <div>
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" onClick={() => this.checkbox()} />
                </div>
                <span>Set your own shortened URL</span>
                {
                    this.state.setOwnURL &&
                    <div>
                        <h5>Input desired new URL:</h5>
                        <input ownURL="ownURL" className='url-input' type="text" value={this.state.ownURL} onChange={this.newURLInputchange}></input>
                    </div>
                }
                <button onClick={() => this.onSubmit()}>Submit</button>
            </div>
        )
    }
}