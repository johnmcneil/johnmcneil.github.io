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

    return(
        <>
            <LineChart width={600} height={400} data={data} />
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
    )
}

export default function EmissionsData({ country, gas, begin, end }) {
    return <Emissions country={country} gas={gas} begin={begin} end={end} />
}