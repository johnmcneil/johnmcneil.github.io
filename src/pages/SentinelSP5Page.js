import { useState } from 'react';
import SentinelSP5Chart from '../components/SentinelSP5Chart';
import SentinelSP5SearchForm from '../components/SentinelSP5SearchForm';

export default function SentinelSP5Page() {
	const [country, setCountry] = useState("us");
	const [stateUsa, setStateUsa] = useState("mn");
	const [gas, setGas] =  useState("methane");
	const [begin, setBegin] = useState("2020-02-01");
	const [end, setEnd] = useState("2021-01-31");

	function handleSearch(country, stateUsa, gas, begin, end) {
		console.log("search function", country, stateUsa, gas, begin, end);
		setCountry(country);
		setStateUsa(stateUsa);
		setGas(gas);
		setBegin(begin);
		setEnd(end);
	}

	return ( 
		<div className="sentinelsp5-page">
			<h3>Charting Greenhouse Gas Emissions</h3>

			<p><strong>Query <a href="https://emissions-api.org/">Sentinel-5P satellite data</a>:</strong></p>
			<SentinelSP5SearchForm onSearch={handleSearch}/>
			<SentinelSP5Chart country={country} gas={gas} begin={begin} end={end} />

		</div>
	);
}