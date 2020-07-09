import React from 'react';

import {Card, CardContent, Typography, Grid, ButtonBase } from '@material-ui/core';
import './HeroSection.css';

const HeroSection = () => {

    return(
        <div className="heroSection">
          
            <Grid container spacing={3}>
                <Grid item xs={12} md={3} className="row">
                    <CardContent>
                            
                    </CardContent>
                </Grid>

                <Grid item xs={12} md={8} className="row">
                    <CardContent>
                    <Grid container spacing={3}>
                        <Grid component={Card} item xs direction="column" spacing={3}>
                        <Typography variant="h5" >COVID-19 is a disease caused by a new strain of coronavirus. 'CO' stands for corona, 'VI' for virus, and 'D' for disease. Formerly, this disease was referred to as '2019 novel coronavirus' or '2019-nCoV.'</Typography>
                        </Grid>
                        <Grid component={Card} item xs direction="column" spacing={3}>
                            <Typography color="textSecondary" gutterBottom className="box-heading">Infected</Typography>
                            <Typography variant="h4">
                                
                                </Typography>
                            <Typography color="textSecondary"></Typography>
                        </Grid>
                    </Grid>
                    </CardContent>
                </Grid>
              </Grid>
        </div>
    );
}

export default HeroSection;