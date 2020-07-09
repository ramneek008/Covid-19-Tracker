import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    try{

        let changeableUrl = url;
        if(country){
            changeableUrl = `${url}/countries/${country}`;
        }
        
        const { data } = await axios.get(changeableUrl);
        
        const modifiedData = {
            confirmed:data.confirmed,
            recovered:data.recovered,
            deaths:data.deaths,
            lastUpdate:data.lastUpdate,
        }

        return modifiedData;
    } catch(error) {
        console.log(error);
    }
}

export const fetchDailyData = async() => {
    try{
        const {data} = await axios.get(`${url}/daily`);
        const modifiedDailyData = data.map((dailyData) => ({
            confirmed:dailyData.confirmed.total,
            deaths:dailyData.deaths.total,
            date: dailyData.reportDate,
        }))
        return modifiedDailyData;

    } catch(error){
        console.log(error);
    }
}

export const fetchCountries = async() => {
    try{
        const {data} = await axios.get(`${url}/countries`);
        const listCountry = data.countries.map((country) => (
            country.name
        ))
        return listCountry;
    }
    catch(error){
        console.log(error);
    }
}

export const fetchIndiaData = async() => {
    try{
        const {data} = await axios.get(`${url}/countries/India`);
        const modifiedIndiaData = {
            confirmed: data.confirmed,
            recovered: data.recovered,
            deaths: data.deaths,
            lastUpdate:data.lastUpdate
        }
        return modifiedIndiaData;

    }catch(error){
        console.log(error);
    }
}