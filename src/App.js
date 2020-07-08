import React from 'react';

import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';

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
        <Cards data={this.state.data}/>
        <CountryPicker countryChangeHandler = {this.countryChangeHandler}/>
        <Chart data={this.state.data} country={this.state.country} />
      </div>
    )
  }
}

export default App;