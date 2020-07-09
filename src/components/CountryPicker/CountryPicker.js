import React, {useState, useEffect} from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api';

import world from '../../images/world.png';
import './CountryPicker.css';

const CountryPicker = ({ countryChangeHandler }) => {

    const [country, setCountry] = useState([]);

    useEffect(() => {
        const fetchedCountry = async() => {
            const countries = await fetchCountries();
            setCountry(countries);
            
        }
        fetchedCountry();
    }, [setCountry])

    return (
    <div className="countryPicker">
        
        <FormControl className="formControl" >
        <img src={world} alt="symptom" className="world" style={{display:'flex',width:'30%',alignItems:'center'}} />
            <NativeSelect style={{display:'flex',width:'70%',alignItems:'center',height:'max-content'}} defaultValue="" onChange={(e) => countryChangeHandler(e.target.value)}>
                <option value="">Global</option>
                {
                    country.map((countryName, i)=> <option key={i} value = {countryName}>{countryName}</option>)
                }
            </NativeSelect>
        </FormControl>
        </div>
    )
}

export default CountryPicker;