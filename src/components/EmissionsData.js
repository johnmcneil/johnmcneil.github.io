import react from 'react';
import useFetch from '../hooks/useFetch';
import LineChart from './LineChart.js';

function Emissions({ country, gas, begin, end }) {
    console.log("country", country, "gas", gas, "begin", begin, "end", end);
    const { loading, data, error } = useFetch(
        `https://api.v2.emissions-api.org/api/v2/${gas}/average.json?country=${country}&begin=${begin}&end=${end}`
    );

    if (loading) return <h1>loading...</h1>;
    if (error)
        return <pre>{JSON.stringify(error, null, 2)}</pre>;

    data.sort( (a, b) => { return new Date(a.start) - new Date(b.start) } );

    let unit = "unit";
    if ( gas == "methane" ) { console.log("gass == 'methane' true"); unit = "methane unit"; }
    if ( gas == "ozone" ) { unit = "ozone unit"; }
    if ( gas == "nitrogendioxide" ) { unit = "nitrogendioxide unit"; }
    if ( gas == "carbonmonoxide" ) { unit = "mol/m2"; }

    return(
        <>
            <h3>{country} {gas} emissions, {begin} to {end}</h3>
            <LineChart data={data} gas={gas} unit={unit} />
        </>
    )
}

export default function EmissionsData({ country, gas, begin, end }) {
    return <Emissions country={country} gas={gas} begin={begin} end={end} />
}