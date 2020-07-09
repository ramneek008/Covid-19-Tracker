import React from 'react';

import {Card, CardContent, Typography, Grid, ButtonBase, Avatar } from '@material-ui/core';
import './India.css';
import india from '../../images/india.png'

const HeroSection = () => {

    return(
        <div className="india">
          <Grid container spacing={2}>
          
          <Grid item xs={12} sm container>
            <Grid component={Card} container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar>W</Avatar>
            </Grid>
            <Grid item xs zeroMinWidth>
              <Typography noWrap>tgtrtrtrgr</Typography>
            </Grid>
          </Grid>

          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar>W</Avatar>
            </Grid>
            <Grid item xs>
              <Typography noWrap>tgtrgtrgtr</Typography>
            </Grid>
          </Grid>
          
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar>W</Avatar>
            </Grid>
            <Grid item xs>
              <Typography>gtrgrtgrtgtegtgtg</Typography>
            </Grid>
          </Grid>
          </Grid>

          <Grid item>
            <ButtonBase >
              <img alt="complex" class="symp" src={india} />
            </ButtonBase>
          </Grid>
        </Grid>
        </div>
    );
}

export default HeroSection;