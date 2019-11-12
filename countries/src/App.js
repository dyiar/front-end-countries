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
        countries: []
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

render() {
  return (
    <div className="App">
    {this.state.countries.map(country => {
      return(
        <Route key={country.alpha2Code} exact path="/" render={props => (
          <Display
          {...props}
          country_name = {country.name}
          capital = {country.capital}
          region = {country.region}
          subregion = {country.subregion}
          />
        )}
        />
      )
    })}

    {this.state.countries.map(country => {
    return(
    <Route path='/country/:id' render={props => (
      <Zoomed
       {...props}
       callingCodes = {country.callingCodes}
       currencies = {country.currencies}
       languages = {country.languages}
       />
    )} />
    )})}
    </div>
  );
}
}

export default App;
