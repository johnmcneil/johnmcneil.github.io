import react, { useState } from 'react';
import LineChart from '../components/LineChart.js';
import EmissionsData from '../components/EmissionsData.js';
import SearchForm from '../components/SearchForm';

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

			<EmissionsData country={country} gas={gas} begin={begin} end={end} />
		</div>
	);
}