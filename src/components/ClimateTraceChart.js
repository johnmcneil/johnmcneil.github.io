import react from 'react';
import useFetch from '../hooks/useFetch';
import LineChart from './LineChart';
import countryCodes from '../country-codes.json';

function ClimateTrace({ country, interval, sector, begin, end }) {
	const { loading, data, error } = useFetch(
		`https://api.climatetrace.org/emissions_by_country?interval=year&sectors=${sector}&since=${begin}&to=${end}`
	);

	if (loading) return <h4>loading...</h4>;
	if (error)
		return <pre>{JSON.stringify(error, null, 2)}</pre>;

	return(
		<>
			<p className="chart-title">{country} {interval} {sector} {begin} {end} </p>
			<LineChart data={data} />
		</>
	)
}

export default function ClimateTraceChart({ country, interval, sector, begin, end }) {
	return <ClimateTrace country={country} interval={interval} sector={sector} begin={begin} end={end} />
}