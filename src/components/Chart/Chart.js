import React, {useState, useEffect} from 'react';
import {fetchDailyData} from '../../api';
import { Line, Bar } from 'react-chartjs-2';

import './Chart.css';

const Chart= ({data, country}) => {

    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchedDailyData = async() => {
            const data = await fetchDailyData();
            setDailyData(data);
        }
        fetchedDailyData();
        
    },[]);

    const barChart = (
        data.confirmed ?
        (
            <Bar
            data={{
                labels:['Infected','Recovered','Deaths'],
                datasets: [{
                    label:'People',
                    backgroundColor: [
                        'rgba(0,0,255,0.5)',
                        'rgba(0,255,0,0.5)',
                        'rgba(255,0,0,0.5)',
                    ],
                    data:[data.confirmed.value, data.recovered.value, data.deaths.value]
                }]
            }}
            options={{
                legend:{display:false},
                title:{display:true, text:`Current state in ${country}`},
            }}
            >

            </Bar>
        ) : null
    )

    const lineChart = (
        dailyData.length ?
        (<Line 
        data={{
            labels: dailyData.map(({ date }) => date),
            datasets:[{
                data:dailyData.map(({ confirmed }) => confirmed),
                label: 'Infected',
                borderColor: '#3333ff',
                fill: true
            },{
                data: dailyData.map(({ deaths }) => deaths),
                label: 'Deaths',
                borderColor: '#ff3333',
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                fill: true
            }]
        }}
        />) : null

    );

    return (
        <div className="chart">
            {country ? barChart : lineChart}
        </div>
    )
}

export default Chart;