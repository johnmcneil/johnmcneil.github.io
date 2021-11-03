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

    data.sort( (a, b) => { return new Date(a.start) - new Date(b.start) } );

    let unit = "unit";
    if ( gas === "methane" ) { unit = "mol"; }
    if ( gas === "ozone" ) { unit = "mol"; }
    if ( gas === "nitrogendioxide" ) { unit = "mol"; }
    if ( gas === "carbonmonoxide" ) { unit = "mol"; }

    const gasCapitalized = gas.charAt(0).toUpperCase() + gas.slice(1);
    
    let countryName = "countryName";
    const countryCapitalized = country.toUpperCase();
    
    function getCountryName(item) {
        if ( item.code === countryCapitalized ) { 
            countryName = item.name; 
        }
    }
    countryCodes.map( getCountryName );

    if ( gas === "nitrogendioxide" ) {
        return (
            <>
                <p className="chart-title">{countryName} {gasCapitalized} Emissions [&micro;{unit}/m<sup>2</sup>], {begin} to {end}</p>
                <SentinelSP5LineChart data={data} gas={gas} unit={unit} />
            </>
        ) 
    } else {
        return (
            <>
                <p className="chart-title">{countryName} {gasCapitalized} Emissions [{unit}/m<sup>2</sup>], {begin} to {end}</p>
                <SentinelSP5LineChart data={data} gas={gas} />
            </>
        )
    }
}

export default function SentinelSP5Chart({ country, gas, begin, end }) {
    return <Emissions country={country} gas={gas} begin={begin} end={end} />
}