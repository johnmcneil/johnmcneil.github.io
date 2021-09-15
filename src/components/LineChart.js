import React from 'react';
import { Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import moment from 'moment';


const Chart = ({ data }) => {
	return (
		<LineChart width={600} height={400} data={data}>
			<Line
				dataKey="average"
				type="monotone"
				stroke="#8884d8"
			/>
			<CartesianGrid stroke="#ccc" />
			<XAxis dataKey="start" tickFormatter={timeStr => moment(timeStr).format('YY-MM')} />
			<YAxis type="number" domain={['auto', 'auto']}/>
			<Tooltip />
		</LineChart>
	);
};

export default Chart;