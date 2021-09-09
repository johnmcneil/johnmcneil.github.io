import react, { useState } from 'react';
import LineChart from '../components/LineChart.js';
import EmissionsData from '../components/EmissionsData.js';
import SearchForm from '../components/SearchForm';

export default function GhgPage() {
	const [country, setCountry] = useState("us");


	return ( 
		<>
			<h1>GhgPage</h1>
			<SearchForm value={country} onSearch={setCountry} />
			<EmissionsData country="us" gas="ozone" begin="2020-01-01" end="2021-01-01" />
			<LineChart />
		</>
	);
}