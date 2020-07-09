import React, {useState, useEffect} from 'react';

import {Card, CardContent, Typography, Grid, ButtonBase,Avatar, Paper } from '@material-ui/core';
import CountUp from 'react-countup';
import './India.css';
import {fetchIndiaData} from '../../api';
import india from '../../images/india.png';

const HeroSection = () => {

  const [indiaData, setIndiaData] = useState({});

  useEffect(() => {
    const fetchedIndiaData = async() => {
      const data = await fetchIndiaData();
      setIndiaData({confirmed:data.confirmed,
      recovered:data.recovered,
    deaths:data.deaths});
    }
    
    fetchedIndiaData();
  },[setIndiaData]);
  

    return(
        <div className="india">
          <h1 className="ind-heading">India STATS</h1>
          {indiaData.confirmed ? (
          <Grid container spacing={2}>

          <Grid item lg={6} sm={6}>
          <Grid className="stats" container spacing={3}>
            <Grid className="g-card" component={Card} item lg={6} spacing={3}>  
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
                            <Typography color="textSecondary">time</Typography>
                            <Typography color="textSecondary">Number of active cases of COVID-19 in India</Typography>
            </Grid>
            <Grid className="g-card" component={Card} item lg={6} spacing={3}>
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
                            <Typography color="textSecondary">time</Typography>
                            <Typography color="textSecondary">Number of recoveries from COVID-19 in India</Typography>
            </Grid>
            <Grid className="g-card" component={Card} item lg={6} spacing={3}>
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
                            <Typography color="textSecondary">time</Typography>
                            <Typography color="textSecondary">Number of deaths due to COVID-19 in India</Typography>
            </Grid>
          </Grid>
          </Grid>

          <Grid item lg={6} sm={6}>
            <ButtonBase >
              <img alt="complex" class="symp" src={india} />
            </ButtonBase>
          </Grid>
        </Grid>) : null}
        </div>
    );
}

export default HeroSection;