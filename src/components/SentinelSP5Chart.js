import useFetch from '../hooks/useFetch';
import LineChart from './LineChart';
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
    if ( gas === "methane" ) { unit = "mol/m2"; }
    if ( gas === "ozone" ) { unit = "mol/m2"; }
    if ( gas === "nitrogendioxide" ) { unit = "micromol/m2"; }
    if ( gas === "carbonmonoxide" ) { unit = "mol/m2"; }

    const gasCapitalized = gas.charAt(0).toUpperCase() + gas.slice(1);
    
    let countryName = "countryName";
    const countryCapitalized = country.toUpperCase();
    
    function getCountryName(item) {
        if ( item.code === countryCapitalized ) { 
            countryName = item.name; 
        }
    }
    countryCodes.map( getCountryName );

    return(
        <>
            <p className="chart-title">{countryName} {gasCapitalized} Emissions ({begin} to {end})</p>
            <LineChart data={data} gas={gas} unit={unit} />
        </>
    )
}

export default function SentinelSP5Chart({ country, gas, begin, end }) {
    return <Emissions country={country} gas={gas} begin={begin} end={end} />
}