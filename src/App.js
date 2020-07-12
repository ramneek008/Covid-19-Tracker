import React from 'react';

import India from './components/India/India';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import Footer from './components/Footer/Footer';
 
import covid from './images/covid19_logo.png';
import tracker from './images/tracker.png';

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
        <h1 className="app-heading"><img className="logo covid" src={covid} alt="Covid-19" /> <img className="logo" src={tracker} alt="Tracker" /></h1>
        <India />
        <CountryPicker countryChangeHandler = {this.countryChangeHandler}/>
        <Cards data={this.state.data}/>
        <Chart data={this.state.data} country={this.state.country} />
        <Footer />
      </div>
    )
  }
}

export default App;