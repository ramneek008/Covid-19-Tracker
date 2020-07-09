import React from 'react';

import {Card, CardContent, Typography, Grid, ButtonBase,Avatar, Paper } from '@material-ui/core';
import './India.css';
import india from '../../images/india.png'

const HeroSection = () => {

    return(
        <div className="india">
          <h1 className="ind-heading">India STATS</h1>
          <Grid container spacing={2}>
          
          <Grid item lg={6} sm={6}>
          <Grid className="stats" container spacing={3}>
            <Grid className="g-card" component={Card} item lg={6} spacing={3}>  
            <Typography color="textSecondary" gutterBottom className="box-heading">Infected</Typography>
                            <Typography variant="h4">
                                count
                                </Typography>
                            <Typography color="textSecondary">time</Typography>
                            <Typography color="textSecondary">Number of active cases of COVID-19 in India</Typography>
            </Grid>
            <Grid className="g-card" component={Card} item lg={6} spacing={3}>
            <Typography color="textSecondary" gutterBottom className="box-heading">Recovered</Typography>
                            <Typography variant="h4">
                              count
                                </Typography>
                            <Typography color="textSecondary">time</Typography>
                            <Typography color="textSecondary">Number of recoveries from COVID-19 in India</Typography>
            </Grid>
            <Grid className="g-card" component={Card} item lg={6} spacing={3}>
            <Typography color="textSecondary" gutterBottom className="box-heading">Deaths</Typography>
                            <Typography variant="h4">
                              count
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
        </Grid>
        </div>
    );
}

export default HeroSection;