import React, {useState, useEffect} from 'react';

import {Card, Typography, Grid, ButtonBase } from '@material-ui/core';
import { Doughnut} from 'react-chartjs-2';
import CountUp from 'react-countup';
import './India.css';
import {fetchIndiaData} from '../../api';

const HeroSection = () => {

  const [indiaData, setIndiaData] = useState({});

  useEffect(() => {
    const fetchedIndiaData = async() => {
      const data = await fetchIndiaData();
      setIndiaData(data);
      console.log(data);
    }
    
    fetchedIndiaData();
  },[setIndiaData]);

  const doughnutChart = ( indiaData.confirmed ? (<Doughnut data= {{
    labels:[ 'Infected', 'Recovered', 'Deaths'],
    datasets:[{
      data: [indiaData.confirmed.value, indiaData.recovered.value, indiaData.deaths.value],
      backgroundColor: ['rgba(20, 20, 255, 0.8)', 'rgba(20, 255, 20, 0.8)','rgba(255, 20, 20, 0.8)'],
      hoverBackgroundColor:['rgba(0, 0, 255, 1)', 'rgba(0, 255, 0, 1)', 'rgba(255, 0, 0, 1)']
    }]
  }}
  ></Doughnut>) : null)
  

    return(
        <div className="india">
          <h1 className="ind-heading">India STATS</h1>
          {indiaData.confirmed ? (
          <Grid container className="ind-content" spacing={2}>

          <Grid item lg={6} sm={6}>
          <Grid className="stats" container spacing={3}>
            <Grid className="g-card infected" component={Card} item lg={6} spacing={3}>  
            <Typography color="textSecondary" gutterBottom className="box-heading">Infected</Typography>
                            <Typography variant="h4">
                              <CountUp
                                start={0}
                                end={indiaData.confirmed.value}
                                duration={2}
                                separator=","
                              >
                              </CountUp>
                                </Typography>
                            <Typography color="textSecondary" gutterBottom  >{new Date(indiaData.lastUpdate).toDateString()}</Typography>
                            <Typography color="textPrimary">Number of active cases of COVID-19 in India</Typography>
            </Grid>
            <Grid className="g-card recovered" component={Card} item lg={6} spacing={3}>
            <Typography color="textSecondary" gutterBottom className="box-heading">Recovered</Typography>
                            <Typography variant="h4">
                            <CountUp
                                start={0}
                                end={indiaData.recovered.value}
                                duration={2}
                                separator=","
                              >
                              </CountUp>
                                </Typography>
                            <Typography color="textSecondary" gutterBottom>{new Date(indiaData.lastUpdate).toDateString()}</Typography>
                            <Typography color="textPrimary">Number of recoveries from COVID-19 in India</Typography>
            </Grid>
            <Grid className="g-card deaths" component={Card} item lg={6} spacing={3}>
            <Typography color="textSecondary" gutterBottom className="box-heading">Deaths</Typography>
                            <Typography variant="h4">
                            <CountUp
                                start={0}
                                end={indiaData.deaths.value}
                                duration={2}
                                separator=","
                              >
                              </CountUp>
                                </Typography>
                            <Typography color="textSecondary" gutterBottom>{new Date(indiaData.lastUpdate).toDateString()}</Typography>
                            <Typography color="textPrimary">Number of deaths due to COVID-19 in India</Typography>
            </Grid>
          </Grid>
          </Grid>

          <Grid item lg={6} sm={6} className="doughnut">
              {doughnutChart}
          </Grid>
        </Grid>) : <h6>Loading...</h6>}
        </div>
    );
}

export default HeroSection;