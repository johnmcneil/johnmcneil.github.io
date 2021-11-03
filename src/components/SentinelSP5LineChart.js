import React from 'react';
import { Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Label } from 'recharts';
import moment from 'moment';


const SentinelSP5LineChart = ({ data, gas, unit }) => {
	const gasCapitalized = gas.charAt(0).toUpperCase() + gas.slice(1);


	const formatLabel = (label) => {
		return (
			label
		);
	}

	if ( gas === "nitrogendioxide" ) { 
		data.map( (item) => { 
			const micromole = item.average * 1000;
			item.average = micromole;
		})
	}

	return (
	<>	
		<LineChart width={600} height={400} data={data} margin={{ top:0, right: 30, left: 30, bottom: 30}}>
			<Line
				dataKey="average"
				type="monotone"
				stroke="#8884d8"
			/>
			<CartesianGrid stroke="#ccc" />
			<XAxis dataKey="start" tickFormatter={timeStr => moment(timeStr).format('YY-MM')} >
				<Label value="Year and Month (yy-mm)" position="bottom" />
			</XAxis>
			<YAxis type="number" domain={['auto', 'auto']} />
			<Tooltip />
		</LineChart>
	</>
	);
};

export default SentinelSP5LineChart;