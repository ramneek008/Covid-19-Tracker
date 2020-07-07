import React from 'react';

import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import Country from './components/Country/Country';

import './App.css';

import fetchData from './api/index';

class App extends React.Component {

  constructor(props)
  {
    super(props);

    this.state = {
      data: {}
    }
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData })
  }

  render() {
    return (
      <div className="container">
        <Cards data={this.state.data}/>
        <Country />
        <Chart />
      </div>
    )
  }
}

export default App;