import react from 'react';
import LineChart from '../components/LineChart.js';
import EmissionsData from '../components/EmissionsData.js';

export default function GhgPage() {
	return ( 
		<>
			<h1>GhgPage</h1>
			<EmissionsData country="us" />
			<LineChart />
		</>
	);
}