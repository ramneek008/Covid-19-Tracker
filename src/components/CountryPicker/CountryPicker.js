import React, {useState, useEffect} from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api';

import './CountryPicker.css';

const CountryPicker = () => {

    const [country, setCountry] = useState([]);

    useEffect(() => {
        const fetchedCountry = async() => {
            const countries = await fetchCountries();
            setCountry(countries);
            
        }
        fetchedCountry();
    }, [setCountry])

    return (<div>
        <FormControl className="formControl" >
            <NativeSelect>
                <option value="global">Global</option>
                {
                    country.map((countryName, i)=> <option key={i} value = {countryName}>{countryName}</option>)
                }
            </NativeSelect>
        </FormControl>
        </div>
    )
}

export default CountryPicker;