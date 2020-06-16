import React from 'react';

import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import Country from './components/Country/Country';
import './App.css';

import { fetchData } from './api';

class App extends React.Component {

  async componentDidMount(){
    const data = await fetchData();
    console.log(data);
  }

  render() {
    return (
      <div className="container">
        <Cards />
        <Country />
        <Chart />
      </div>
    )
  }
}

export default App;