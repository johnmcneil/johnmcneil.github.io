import useFetch from '../hooks/useFetch';
import countryCodes from '../json/country-codes.json';
import states from '../json/us_states_latlon.json';
import counties from '../json/us_counties_500k.json';
import React from 'react';
import { Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Label } from 'recharts';
import moment from 'moment';


export default function SentinelSP5Chart({ country, gas, begin, end }) {
    console.log("country", country, "gas", gas, "begin", begin, "end", end);

    let uri = `https://api.v2.emissions-api.org/api/v2/${gas}/average.json?country=${country}&begin=${begin}&end=${end}`; 
    console.log("uri", uri); 

    const { loading, data, error } = useFetch(uri);


    if (error)
        return <pre>{JSON.stringify(error, null, 2)}</pre>;
    if (loading) return <h4>loading...</h4>; 

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
                <LineChart width={600} height={400} data={chartData} margin={{ top:0, right: 30, left: 30, bottom: 30}}>
                    <Line
                        dataKey="chartThis"
                        type="monotone"
                        stroke="#8884d8"
                    />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="start" tickFormatter={timeStr => moment(timeStr).format('YY-MM')} >
                        <Label value="Year and Month (yy-mm)" position="bottom" />
                    </XAxis>
                    <YAxis type="number" domain={['auto', 'auto']} />
                    <Tooltip />
                </LineChart>
            </>
        ); 
    }

    return (
        <>
            <p className="chart-title">{countryName} {"\u00B5"} {gasCapitalized} Emissions [mol/m<sup>2</sup>], {begin} to {end}</p>
            <LineChart width={600} height={400} data={chartData} margin={{ top:0, right: 30, left: 30, bottom: 30}}>
                <Line
                    dataKey="chartThis"
                    type="monotone"
                    stroke="#8884d8"
                />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="start" tickFormatter={timeStr => moment(timeStr).format('YY-MM')} >
                    <Label value="Year and Month (yy-mm)" position="bottom" />
                </XAxis>
                <YAxis type="number" domain={['auto', 'auto']} />
                <Tooltip />
            </LineChart>
        </>
    );
}