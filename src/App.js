import React from 'react';

import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import Country from './components/Country/Country';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Cards />
        <Chart />
        <Country />
      </div>
    )
  }
}

export default App;