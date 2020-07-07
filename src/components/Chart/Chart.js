import React, {useState, useEffect} from 'react';
import {fetchDailyData} from '../../api';
import { Line, Bar } from 'react-chartjs-2';

import './Chart.css';

const Chart= () => {

    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchedDailyData = async() => {
            const data = await fetchDailyData();
            setDailyData(data);
        }
        console.log(dailyData);
        fetchedDailyData();
        
    })

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
                borderColor: '#3333ff',
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                fill: true
            }]
        }}
        />) : null

    );

    return (
        <div className="chart">
            {lineChart}
        </div>
    )
}

export default Chart;