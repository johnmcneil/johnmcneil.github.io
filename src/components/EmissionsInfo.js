import react, { useState, useEffect } from 'react';

function Emissions({ country }) {
    const [data, setData] = useState();

    useEffect(() => {
        if (!country) return;
        fetch(`https://api.v2.emissions-api.org/api/v2/methane/average.json?country=${country}&begin=2018-12-31&end=2021-09-06`)
            .then(response => response.json())
            .then(setData)
            .catch(console.error);
    }, [country]);

    if (data)
        return<pre>{JSON.stringify(data, null, 2)}</pre>;

    return null;
}

export default function EmissionsInfo() {
    return <Emissions country="us" />
}