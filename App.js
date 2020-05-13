import React, { Component } from 'react';

import './App.css';
import Cards from './components/Cards/Cards';
import Negara from './components/Negara/Negara';
import CountryPicker from './components/CountryPicker/CountryPicker';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  };

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <h1>GLOBAL</h1>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Cards data={data} />
          <h1>NEGARA</h1>
          <Negara data={data} />
      </div>
      
    );
  }

}

export default App;
