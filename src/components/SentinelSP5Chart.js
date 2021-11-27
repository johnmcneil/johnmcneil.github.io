import useFetch from '../hooks/useFetch';
import SentinelSP5LineChart from './SentinelSP5LineChart';
import countryCodes from '../country-codes.json';

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

    const moleToMicroMole = (inputData) => {
        console.log("inputData", inputData);
        let outputData = [];
        outputData = inputData.map( item => {
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
            const output = moleToMicroMole(sortAscending(rawData)); 
            console.log("NO2 true. Output is", output);
            return output;
        } else { 
            const output = moleToMole(sortAscending(rawData));
            console.log("NO2 false. Output is", output);
            return output;
        }

    } 

    const chartData = prepareChartData(data, NO2);


    console.log("chartData", chartData);

    const gasCapitalized = (gas) => {
        if ( gas === "nitrogendioxide" ) {
            return "Nitrogen Dioxide";
        } else {
            return gas.charAt(0).toUpperCase() + gas.slice(1);
        }
    }
    
    console.log("gasCapitalized", gasCapitalized);

    let countryName = "countryName";
    const countryCapitalized = country.toUpperCase();
    
    function getCountryName(item) {
        if ( item.code === countryCapitalized ) { 
            countryName = item.name; 
        }
    }
    countryCodes.map( getCountryName );

    if ( NO2 ) {
        return (
            <>
                <p className="chart-title">{countryName} {gasCapitalized(gas)} Emissions [&micro;mol/m<sup>2</sup>], {begin} to {end}</p>
                <SentinelSP5LineChart chartData={chartData} />
            </>
        ) 
    }

    return (
        <>
            <p className="chart-title">{countryName} {gasCapitalized(gas)} Emissions [mol/m<sup>2</sup>], {begin} to {end}</p>
            <SentinelSP5LineChart chartData={chartData} />
        </>
    )
}

export default function SentinelSP5Chart({ country, gas, begin, end }) {
    return <Emissions country={country} gas={gas} begin={begin} end={end} />
}