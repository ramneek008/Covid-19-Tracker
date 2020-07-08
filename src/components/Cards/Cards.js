import React from 'react';
import { Card, CardContent, Typography, Grid, ButtonBase } from '@material-ui/core';
import CountUp from 'react-countup';
import recovered from '../../images/recovered.svg';
import death from '../../images/death.svg';
import infected from '../../images/infected.svg';

import './Cards.css';

const Cards = (props) => {
    if(!props.data.confirmed)
    {
        return 'Loading...';
    }
    return (
        <div className="cards">
            <Grid container spacing={2}>
                <Grid item component={Card} xs={12} md={3} className="card infected">
                    
                    <Grid container spacing={3}>
                        <Grid item xs direction="column" spacing={2}>
                            <ButtonBase >
                            <img alt="complex" src={infected} style={{width: '70%',height: '90%'}} />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs direction="column" spacing={2}>
                            <Typography color="textSecondary" gutterBottom className="box-heading">Infected</Typography>
                            <Typography variant="h4">
                                <CountUp
                                    start={0}
                                    end={props.data.confirmed.value}
                                    duration={2}
                                    separator=","
                                />
                                </Typography>
                            <Typography color="textSecondary">{new Date(props.data.lastUpdate).toDateString()}</Typography>
                        </Grid>
                    </Grid>

                </Grid>


                <Grid item component={Card} xs={12} md={3} className="card recovered">
                    
                    <Grid container spacing={3}>
                        <Grid item xs direction="column" spacing={2}>
                            <ButtonBase >
                            <img alt="complex" src={recovered} style={{width: '70%',height: '90%'}} />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs direction="column" spacing={2}>
                            <Typography color="textSecondary" gutterBottom className="box-heading">Recovered</Typography>
                            <Typography variant="h4">
                                <CountUp
                                    start={0}
                                    end={props.data.recovered.value}
                                    duration={2}
                                    separator=","
                                />
                                </Typography>
                            <Typography color="textSecondary">{new Date(props.data.lastUpdate).toDateString()}</Typography>
                        </Grid>
                    </Grid>
                    
                </Grid>


                <Grid item component={Card} xs={12} md={3} className="card deaths">
                    
                    <Grid container spacing={3}>
                        <Grid item xs direction="column" spacing={2}>
                            <ButtonBase >
                            <img alt="complex" src={death} style={{width: '70%',height: '90%'}} />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs direction="column" spacing={2}>
                            <Typography color="textSecondary" gutterBottom className="box-heading">Deaths</Typography>
                            <Typography variant="h4">
                                <CountUp
                                    start={0}
                                    end={props.data.deaths.value}
                                    duration={2}
                                    separator=","
                                />
                                </Typography>
                            <Typography color="textSecondary">{new Date(props.data.lastUpdate).toDateString()}</Typography>
                        </Grid>
                    </Grid>
                    
                </Grid>


            </Grid>
        </div>
    )
}

export default Cards;