import React from 'react';
import ReactWordcloud from 'react-wordcloud';

const words = [
	{
		text: 'HTML',
		value: '50',
	},
	{
		text: 'CSS',
		value: '50',
	},
	{
		text: 'JavaScript',
		value: '50',
	},
	{
		text: 'ES6',
		value: '50',
	},
	{
		text: 'WordPress',
		value: '50',
	},
	{
		text: 'jQuery',
		value: '50',
	},
	{
		text: 'd3.js',
		value: '50',
	},
	{
		text: 'Bootstrap',
		value: '50',
	},
	{
		text: 'PHP',
		value: '50',
	},
	{
		text: 'Python',
		value: '50',
	},
	{
		text: 'R',
		value: '50',
	},
	{
		text: 'MySQL',
		value: '50',
	},
	{
		text: 'Node.js',
		value: '50',
	},
	{
		text: 'git',
		value: '50',
	},
	{
		text: 'GitHub',
		value: '50',
	},
	{
		text: 'Open Source',
		value: '50',
	},
	{
		text: 'Linux',
		value: '50',
	},
	{
		text: 'React',
		value: '50',
	},
];


const size = [400, 20];

const options = {
	rotations: 1,
	rotationAngles: [0],
	enableTooltip: false,
	fontFamily: 'Verdana, sans-serif',
	fontSizes: [15, 25],
	minSize: [10, 10]
}


const CodeCloud = (props) => (
	<ReactWordcloud words={words} options={options} />
);

export default CodeCloud;