import useFetch from '../hooks/useFetch';
import SentinelSP5LineChart from './SentinelSP5LineChart';
import countryCodes from '../country-codes.json';
import { useState } from 'react';

function Emissions({ country, gas, begin, end }) {
    console.log("country", country, "gas", gas, "begin", begin, "end", end);

    const { loading, data, error } = useFetch(
        `https://api.v2.emissions-api.org/api/v2/${gas}/average.json?country=${country}&begin=${begin}&end=${end}`
    );

    if (loading) return <h4>loading...</h4>; 
    if (error)
        return <pre>{JSON.stringify(error, null, 2)}</pre>;

    console.log("raw data", data);

    const sortAscending = input => input.sort( (a, b) => { return new Date(a.start) - new Date(b.start) } );

    const dataAscending = sortAscending(data);

    const moleToMicroMole = inputData => {
        console.log("inputData", inputData);
        let outputData = inputData.map( item => {
            item['chartThis'] = item.average * 1000000;
            return item;
        });
        return outputData;
    }

    const moleToMole = (inputData) => {
        let outputData = [];
        outputData = inputData.map( item => {
            item['chartThis'] = item['average'];
            return item;
        });
        return outputData;
    }

    const isNO2 = molecule => molecule === "nitrogendioxide" ? true : false;
    const NO2 = isNO2(gas);
    console.log("NO2", NO2);

    const getCorrectUnit = inputData => {
        isNO2 ? moleToMicroMole(inputData) : moleToMole(inputData);
    }


    function prepareChartData(rawData, NO2) {
        console.log("NO2 inside prepareChartData", NO2);
        if ( NO2 ) { 
            const output = moleToMicroMole(rawData); 
            console.log("NO2 true. Output is", output);
            return output;
        } else { 
            const output = moleToMole(rawData);
            console.log("NO2 false. Output is", output);
            return output;
        }

    } 

    const chartData = prepareChartData(dataAscending, NO2);



    console.log("chartData", chartData);

    const capitalizeGas = gas => {
        if ( NO2 ) {
            return "Nitrogen Dioxide";
        } 
        return gas.charAt(0).toUpperCase() + gas.slice(1);
    }
    
    const countryCapitalized = country.toUpperCase();
    
    function getCountryName(item) {
        let countryName = "Country";
        if ( item.code === countryCapitalized ) { 
            let countryName = item.name;
            return countryName; 
        }
    }

    let countryName = countryCodes.map( getCountryName );
    const gasCapitalized = capitalizeGas(gas); 

    if ( NO2 ) {
        return (
            <>
                <p className="chart-title">{countryName} {gasCapitalized} Emissions [&micro;mol/m<sup>2</sup>], {begin} to {end}</p>
                <SentinelSP5LineChart chartData={chartData} />
            </>
        ); 
    }

    return (
        <>
            <p className="chart-title">{countryName} {gasCapitalized} Emissions [mol/m<sup>2</sup>], {begin} to {end}</p>
            <SentinelSP5LineChart chartData={chartData} gasCapitalized={gasCapitalized} />
        </>
    );
}

export default function SentinelSP5Chart({ country, gas, begin, end }) {
    return <Emissions country={country} gas={gas} begin={begin} end={end} />
}