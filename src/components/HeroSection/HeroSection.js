import React from 'react';
import symptoms from '../../images/sym.png';

import {CardContent, Typography, Grid } from '@material-ui/core';
import './HeroSection.css';

const HeroSection = () => {

    return(
        <div className="heroSection">
          <h1>STAY UPDATED</h1>
            <Grid container spacing={3}>
                <Grid item xs={12} md={3} className="row">
                    <CardContent>
                            <img src={symptoms} alt="symptom" className="symp" />
                    </CardContent>
                </Grid>

                <Grid item xs={12} md={8} className="row">
                    <CardContent>
                    <Typography color="textPrimary">Corona viruses are a large family of viruses which may cause illness
in animals or humans. In humans, several coronaviruses are known
to cause respiratory infections ranging from the common cold to more
severe diseases such as Middle East Respiratory Syndrome (MERS)
and Severe Acute Respiratory Syndrome (SARS). The most recently
discovered coronavirus causes coronavirus disease COVID-19.
COVID-19 is the infectious disease caused by the most recently
discovered corona virus. This new virus and disease were unknown
before the outbreak began in Wuhan, China, in December 2019. </Typography>
<Typography variant="h5">Symptoms:</Typography>
                    <Typography color="textPrimary">The most common symptoms of COVID-19 are fever, tiredness, and
dry cough. Some patients may have aches and pains, nasal
congestion, runny nose, sore throat or diarrhea. These symptoms are
usually mild and begin gradually. Some people become infected but
don’t develop any symptoms and don't feel unwell. </Typography>
                    </CardContent>
                </Grid>
              </Grid>
        </div>
    );
}

export default HeroSection;