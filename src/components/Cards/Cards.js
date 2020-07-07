import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import './Cards.css';

const Cards = (props) => {
    if(!props.data.confirmed)
    {
        return 'Loading...';
    }
    return (
        <div className="container">
            <Grid container spacing={3}>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={props.data.confirmed.value}
                                duration={2}
                                seperator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">REAL DATA</Typography>
                        <Typography variant="body2">Nmber of active cases</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">REAL DATA</Typography>
                        <Typography color="textSecondary">REAL DATA</Typography>
                        <Typography variant="body2">Nmber of active cases</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">REAL DATA</Typography>
                        <Typography color="textSecondary">REAL DATA</Typography>
                        <Typography variant="body2">Nmber of active cases</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;