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
        let outputData = {};
        outputData = inputData.map( item => {
            let microMole = moleToMicroMole(item.average);
            item['chartThis'] = item['average'];
            return item;
        });
    }

    const moleToMole = (inputData) => {
        let outputData = {};
        outputData = inputData.map( item => {
            item['chartThis'] = item['average'];
            return item;
        });
    }

    const isNO2 = molecule => molecule === "nitrogendioxide" ? true : false;

    const getCorrectUnit = inputData => {
        isNO2(gas) ? moleToMicroMole(inputData) : moleToMole(inputData);
    }

    const correctUnit = (inputData) => {
        let outputData = {};

        if ( gas === "nitrogendioxide" ) {
            outputData = inputData.map( item => {
                let microMole = moleToMicroMole(item.average);
                item['chartThis'] = microMole;
                return item;
            });
        } else {
            outputData = inputData.map( item => {
                item['chartThis'] = item['average'];
                return item;
            });
        }       

        return ( outputData );
    }
   
    const compose = (...fns) => arg => 
        fns.reduce((composed, f) => f(composed), arg);

    const prepareChartData = compose(
        sortAscending,
        getCorrectUnit
    );

    const chartData = prepareChartData(data);

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

    if ( isNO2 ) {
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