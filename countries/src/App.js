import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Route } from 'react-router-dom';
import Display from './components/display_element.js';
import Zoomed from './components/zoomed_element.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
        countries: [],
        singleCountry: {}
    }
}

componentDidMount() {
  axios
  .get('https://restcountries.eu/rest/v2/all')
  .then(response => {
      console.log(response)
      this.setState({ countries: response.data })
  })
  .catch(err => {
      console.log(err);
  })
}

changeName = newName => {
  console.log(newName, 'state name')
  let choice = ''
  for (let i=0; i<this.state.countries.length; i++) {
    if (this.state.countries[i].name === newName) {
      choice = newName
      this.setState({ singleCountry: this.state.countries[i]})
      console.log(choice)
    }
  }
  console.log(choice)
}

render() {
  return (
    <div className="App">
    {this.state.countries.map(country => {
      return(
          <Display
          key={country.name}
          history = {this.props.history}
          country_name = {country.name}
          capital = {country.capital}
          region = {country.region}
          subregion = {country.subregion}
          changeName = {this.changeName}
          // callingCodes = {country.callingCodes}
          // currencies = {country.currencies}
          // languages = {country.languages}
          />
        )}
      )
    })}

    <Route path='/details/:name' render={props => {
      return (
      <Zoomed
       {...props}
       callingCodes = {this.state.singleCountry.callingCodes}
       currencies = {this.state.singleCountry.currencies}
       languages = {this.state.singleCountry.languages}
       />
      )}
    } />

    </div>
  );
}
}

export default App;
