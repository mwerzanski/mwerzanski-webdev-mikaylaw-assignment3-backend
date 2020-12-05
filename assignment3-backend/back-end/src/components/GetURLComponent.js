import React from 'react'
import Axios from '../../../src/components/node_modules/axios';

export default class GetURLComponent extends React.Component {
    
      constructor(props) {
        super(props);
    
        this.state = {
          givenURL: '',
          shortenedURL: ''
        }
      }
    
      componentDidMount() {
        Axios.get('http://localhost:3000/api/shortener')
          .then(response => {
            this.setState({shortener: response.data})
          });
      }
      
      onChange(key, event) {
        this.setState(
    
          {[key]: event.target.value}
        )
      }
    
      onSubmit() {
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
        return (
          <>
            <h1>Pokemon List</h1>
            <h2> These are my pokemon!</h2>
            <div>
              {this.state.pokemon.map(monster => 
                <div>
                  <span>{monster.name}</span>
                  <span>{monster.level}</span>
                  <span>{monster.health}</span>
                  </div>
              )
              }
              <label for="name">Name:</label>
              <input id="name" value={this.state.pokemonName} 
              onChange={(e) => this.onChange('pokemonName', e)}></input>
              
              <label for="name">Health:</label>
              <input id="name" type="number" value={this.state.pokemonHealth}
              onChange={(e) => this.onChange('pokemonHealth', e)}>
              </input>
              
              <label for="name">Level:</label>
              <input id="name" type="number" value={this.state.pokemonLevel} 
              onChange={(e) => this.onChange('pokemonLevel', e)}></input>
              <button onClick={() => this.onSubmit()}>Submit</button>
            </div>
          </>
        )
      }
}