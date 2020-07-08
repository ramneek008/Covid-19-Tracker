import React from 'react';

import HeroSection from './components/HeroSection/HeroSection';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
 
import logo from './images/covid19_logo.png';

import './App.css';

import {fetchData} from './api';

class App extends React.Component {

  constructor(props)
  {
    super(props);

    this.state = {
      data: {},
      country: ''
    }
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData })
  }

  countryChangeHandler = async(country) =>{
    const fetchedData = await fetchData(country);
    this.setState({data: fetchedData, country:country})
    
  }

  render() {
    return (
      <div className="container">
        <img className="logo" src={logo} alt="logo" />
        <HeroSection />
        <CountryPicker countryChangeHandler = {this.countryChangeHandler}/>
        <Cards data={this.state.data}/>
        <Chart data={this.state.data} country={this.state.country} />
      </div>
    )
  }
}

export default App;