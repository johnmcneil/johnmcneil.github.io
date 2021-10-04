import react, { useState } from 'react';
import LineChart from '../components/LineChart';
import SentinelSP5Chart from '../components/SentinelSP5Chart';
import SentinelSP5SearchForm from '../components/SentinelSP5SearchForm';
import ClimateTraceChart from '../components/ClimateTraceChart';
import ClimateTraceSearchForm from '../components/ClimateTraceSearchForm';

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
			<h3>Charting Greenhouse Gas Emissions</h3>

			<p><strong>Query <a href="https://emissions-api.org/">Sentinel-5P satellite data</a>:</strong></p>
			<SentinelSP5SearchForm onSearch={search}/>
			<SentinelSP5Chart country={country} gas={gas} begin={begin} end={end} />

		</div>
	);
}