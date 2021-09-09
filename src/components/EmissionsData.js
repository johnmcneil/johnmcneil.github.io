import react, { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';

function Emissions({ country }) {
    const { loading, data, error } = useFetch(
        `https://api.v2.emissions-api.org/api/v2/methane/average.json?country=${country}&begin=2019-01-01&end=2020-12-31`
    );

    if (loading) return <h1>loading...</h1>;
    if (error)
        return <pre>{JSON.stringify(error, null, 2)}</pre>;

    return(
        <>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
    )
}

export default function EmissionsData({ country }) {
    return <Emissions country={country} />
}