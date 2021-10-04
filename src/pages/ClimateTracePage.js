import react, { useState } from 'react';
import LineChart from '../components/LineChart';
import SentinelSP5Chart from '../components/SentinelSP5Chart';
import SentinelSP5SearchForm from '../components/SentinelSP5SearchForm';
import ClimateTraceChart from '../components/ClimateTraceChart';
import ClimateTraceSearchForm from '../components/ClimateTraceSearchForm';

export default function ClimateTracePage() {
	const [country, setCountry] = useState("us");

	const search = (country) => {
		console.log("search function", country);
		setCountry(country);
	}

	return ( 
		<div className="ghg-page">
			<h3>Charting Greenhouse Gas Emissions</h3>

			<p><strong>Query <a href="https://www.climatetrace.org">Climate Trace</a>:</strong></p>
			<ClimateTraceSearchForm onSearch={search}/>
			<ClimateTraceChart country={country} />

		</div>
	);
}