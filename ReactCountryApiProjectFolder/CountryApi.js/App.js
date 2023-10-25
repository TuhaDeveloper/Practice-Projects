// import logo from './logo.svg';
import React, { useState, useEffect } from 'react'

import Countries from './components/CountryApi.js/Countries';
import './App.css';
import Search from './components/CountryApi.js/Search';

const url = "https://restcountries.com/v3.1/all";

export const App = () => {



    const [isLoading, setisLoading] = useState(true);
    const [Error, setError] = useState(null);
    const [countries, setCountries] = useState([]);
    const [filerCoun, setfilerCoun] = useState(countries)

    const FetchData = async (url) => {
        setisLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
            setCountries(data)
            setfilerCoun(data);
            setisLoading(false);
            setError(null);
        } catch (error) {
            setError(error);
            setisLoading(false);
        }

    }

    useEffect(() => {
        FetchData(url);

    }, [])

    //for removeMethod
    const RemoveMethod = (value) => {
        const filter = filerCoun.filter((country) => country.name.common !== value);
        setfilerCoun(filter)
    }

    //for search items
    const handleSearch = (CountryValue) => {
        let value = CountryValue.toLowerCase();
        const newCountries = countries.filter((country) => {
            const countryName = country.name.common.toLowerCase();
            return countryName.startsWith(value);
        });
        setfilerCoun(newCountries);
    }

    return (
        <>
            <div ><h1 >Country Search</h1></div>
            <Search onSearch={handleSearch} />
            {isLoading && <h2>data is Loading...</h2>}
            {Error && <h2>{Error.message}</h2>}
            {countries && <Countries countries={filerCoun} onRemoveMethod={RemoveMethod} />}
        </>
    )
}



