import React from 'react';
import { Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Label } from 'recharts';
import moment from 'moment';


const Chart = ({ data, gas, unit }) => {
	const gasCapitalized = gas.charAt(0).toUpperCase() + gas.slice(1);
	const yAxisLabel = gasCapitalized + " [" + unit + "]";
	return (
		<LineChart width={700} height={500} data={data} margin={{ top:40, right: 30, left: 30, bottom: 30}}>
			<Line
				dataKey="average"
				type="monotone"
				stroke="#8884d8"
			/>
			<CartesianGrid stroke="#ccc" />
			<XAxis dataKey="start" tickFormatter={timeStr => moment(timeStr).format('YY-MM')} >
				<Label value="Year and Month (yy-mm)" position="bottom" />
			</XAxis>
			<YAxis type="number" domain={['auto', 'auto']} label={{ value: yAxisLabel, angle: -90, position: "insideLeft" }} />
			<Tooltip />
		</LineChart>
	);
};

export default Chart;