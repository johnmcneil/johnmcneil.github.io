import react, { useState } from 'react';
import LineChart from '../components/LineChart';
import SentinelSP5Chart from '../components/SentinelSP5Chart';
import SearchForm from '../components/SearchForm';
import ClimateTraceChart from '../components/ClimateTraceChart';

export default function GhgPage() {
	const [country, setCountry] = useState("us");
	const [gas, setGas] =  useState("methane");
	const [begin, setBegin] = useState("2020-01-01");
	const [end, setEnd] = useState("2021-01-01");

	const search = (country, gas, begin, end) => {
		console.log("search function", country, gas, begin, end);
		setCountry(country);
		setGas(gas);
		setBegin(begin);
		setEnd(end);
	}

	return ( 
		<div className="ghg-page">
			<h3>Visualizing Greenhouse Gas Emissions</h3>
			<p><strong>Query <a href="https://emissions-api.org/">Sentinel-5P satellite data</a>:</strong></p>
			<SearchForm onSearch={search}/>
			<SentinelSP5Chart country={country} gas={gas} begin={begin} end={end} />

			<p><strong>Query <a href="https://www.climatetrace.org">Climate Trace</a>:</strong></p>
			<SearchForm onSearch={search}/>
			<ClimateTraceChart />
		</div>
	);
}