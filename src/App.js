import React from 'react';

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
    if (country!=='global'){
    const fetchedData = await fetchData(country);
    this.setState({data: fetchedData, country:country})
    }
    else{
      const fetchedData = await fetchData();
    this.setState({ data: fetchedData, country: '' })
    }console.log(this.state.data);
  }

  render() {
    return (
      <div className="container">
        <img src={logo} alt="logo" />
        <CountryPicker countryChangeHandler = {this.countryChangeHandler}/>
        <Cards data={this.state.data}/>
        <Chart data={this.state.data} country={this.state.country} />
      </div>
    )
  }
}

export default App;