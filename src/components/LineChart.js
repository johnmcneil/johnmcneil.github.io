import React from 'react';
import { Line, LineChart, CartesianGrid, XAxis, YAxis } from 'recharts';


const Chart = ({ data }) => {
	return (
		<LineChart width={600} height={400} data={data}>
			<Line
				dataKey="average"
				type="monotone"
				stroke="#8884d8"
			/>
			<CartesianGrid stroke="#ccc" />
			<XAxis dataKey="name" />
			<YAxis />
		</LineChart>
	);
};

export default Chart;