import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Display from './components/display_element.js';

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
      return (
        <Display
        country_name = {country.name}
        capital = {country.capital}
        region = {country.region}
        subregion = {country.subregion}
        callingCodes = {country.callingCodes}
        currencies = {country.currencies}
        languages = {country.languages}
        />
      );
    })}
    </div>
  );
}
}

export default App;
