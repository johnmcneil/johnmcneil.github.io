import react from 'react';
import useFetch from '../hooks/useFetch';
import { Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Label } from 'recharts';
import moment from 'moment';
import countryCodes from '../country-codes.json';

export default function ClimateTraceChart({ country }) {
	console.log("country", country);

	const { loading, data, error } = useFetch(
		`https://api.climatetrace.org/emissions_by_country`
	);

	if (loading) return <h4>loading...</h4>;
	if (error)
		return <pre>{JSON.stringify(error, null, 2)}</pre>;

	console.log("data", data);
	console.log("country", country);

	let countryData = [];
	function getCountryMatch( item ) {
		if ( item.country == country ) {
			countryData = [ item.emissions[5], 
							item.emissions[4], 
							item.emissions[3], 
							item.emissions[2], 
							item.emissions[1], 
							item.emissions[0] ];
		}
	}

	data.map( getCountryMatch );

	console.log("countryData", countryData);



	return(
		<>
			<p className="chart-title">{country} Emissions</p>
			<LineChart width={600} height={400} data={countryData} margin={{ top:0, right: 30, left: 30, bottom: 30}}>
				<Line
					dataKey="value"
					type="monotone"
					stroke="#8884d8"
				/>
				<CartesianGrid stroke="#ccc" />
				<XAxis dataKey="start" domain={['auto', 'auto']} tickFormatter={timeStr => moment(timeStr).format('YYYY')} >
					<Label value="Year" position="bottom" />
				</XAxis>
				<YAxis type="number" domain={['auto', 'auto']} label={{ value: "y axis", angle: -90, position: "insideLeft" }} />
				<Tooltip />
			</LineChart>
		</>
	)
}

